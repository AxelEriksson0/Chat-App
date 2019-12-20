import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'
import socket from 'socket.io'
import uuid from 'uuid'
import joinChat from './routes/joinChat.mjs'

const app = express()
const server = http.Server(app)
const io = socket(server)
const port = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.json())
app.set('io', io)

const getUsers = () => {
  const sockets = io.sockets.clients()
  console.log(sockets)
}

const messages = [
]

io.on('connection', socket => {
  console.log(`Socket ID ${socket.id} connected`)

  socket.on('new user', user => {
    socket.user = user
  })

  socket.on('message', message => {
    messages.push({ ...message, timestamp: Date.now(), id: uuid.v1() })
    io.emit('send message to all clients', messages)
  })

  socket.on('disconnect', () => {
    console.log(`Socket ID ${socket.id} left`)
  })
})

app.use('/join-chat', joinChat)

server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
