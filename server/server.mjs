import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'
import socket from 'socket.io'
import uuid from 'uuid'
import morgan from 'morgan'

import getChatUsers from './routes/getChatUsers.mjs'
import { logger } from './middleware/logger.mjs'
import JoiSchemas from './middleware/schemas.mjs'

const InactivityBeforeDisconnect = 10000

const app = express()
const server = http.Server(app)
const io = socket(server)
const port = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined', { stream: logger.stream }))
app.set('io', io)

app.use('/get-chat-users', getChatUsers)

io.on('connection', socket => {
  logger.info(`Socket ID ${socket.id} connected`)
  socket.on('new user', user => {
    logger.info(`socket ID ${socket.id} joined as ${user}`)
    socket.user = user
    socket.user.latestActivity = Date.now()
  })

  socket.on('message from client', message => {
    const { error } = JoiSchemas.message.validate(message)
    const valid = error == null
    if (valid) {
      logger.info(`Socket ID ${socket.id} sent message ${message}`)
      io.emit('message from server', { ...message, timestamp: Date.now(), id: uuid.v1() })
      socket.user.latestActivity = Date.now()
    } else {
      logger.error('Invalid message sent') // TODO: Send back response
    }
  })

  const timeoutInterval = setInterval(() => {
    if (Date.now() - socket.user.latestActivity >= InactivityBeforeDisconnect) {
      socket.emit('inactive')
      clearInterval(timeoutInterval)
    }
  }, 5000)

  socket.on('disconnect', () => {
    if (socket.user) {
      logger.info(`Socket ID ${socket.id} has left`)
      io.emit('message from server', { message: `${socket.user.user} has left the chat!`, user: 'Admin', timestamp: Date.now(), id: uuid.v1() })
    }
  })
})

server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})

const terminationSignals = ['SIGINT', 'SIGTERM']
terminationSignals.forEach(terminationSignal => {
  process.on(terminationSignal, () => {
    logger.info(`Server shutting down due to ${terminationSignal}`)
    io.emit('server shutting down')
    server.close(() => {
      process.exit(0)
    })
  })
})
