import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'
import socket from 'socket.io'

const app = express()
const server = http.Server(app)
const io = socket(server)
const port = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.json())

io.on('connection', socket => {
  console.log(`Socket ID ${socket.id} connected`)
  socket.on('message', message => {
    socket.broadcast.emit('send message to all clients', message)
    console.log(`Socket ID ${socket.id} sent message`)
  })

  socket.on('disconnect', () => {
    console.log(`Socket ID ${socket.id} left`)
  })
})

server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
