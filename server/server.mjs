import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'
import socket from 'socket.io'
import uuid from 'uuid'
import getChatUsers from './routes/getChatUsers.mjs'

const app = express()
const server = http.Server(app)
const io = socket(server)
const port = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.json())
app.set('io', io)

const messages = [
]

io.on('connection', socket => {
  console.log(`Socket ID ${socket.id} connected`)

  socket.on('new user', user => {
    socket.user = user
  })

  socket.on('message', message => {
    messages.push({ ...message, timestamp: Date.now(), id: uuid.v1() })
    io.emit('messages', messages)
  })

  socket.on('disconnect', () => {
    if (socket.user) {
      messages.push({ message: `${socket.user.user} has left the chat!`, user: 'Admin', timestamp: Date.now(), id: uuid.v1() })
      io.emit('messages', messages)
    }
    console.log(`Socket ID ${socket.id} left`)
  })
})

app.use('/get-chat-users', getChatUsers)

server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})

process.on('SIGINT', () => {
  io.emit('server shutting down')
  server.close(() => {
    process.exit(0)
  })
})

process.on('SIGTERM', () => {
  console.log('Server shutting down...')
  server.close(() => {
    process.exit(0)
  })
})
