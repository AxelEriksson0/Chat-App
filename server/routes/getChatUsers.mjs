import express from 'express'
const router = express.Router()

router.get('/', async (req, res) => {
  const io = req.app.get('io')
  let clientIDs = []

  await io.clients((error, clients) => {
    if (error) { res.json({ error: error }) }
    clientIDs = clients
  })
  const sockets = clientIDs.map(client => io.sockets.connected[client])
  const users = sockets.filter(socket => socket.user).map(socket => socket.user)
  res.json(users)
})

export default router
