import express from 'express'
const router = express.Router()

router.get('/', async (req, res) => {
  const io = req.app.get('io')
  const sockets = Object.keys(io.sockets.sockets).map(clientId => io.sockets.connected[clientId])
  const users = sockets.filter(socket => socket.user).map(socket => socket.user)
  if (users === undefined) {
    return res.json([])
  }
  res.json(users)
})

export default router
