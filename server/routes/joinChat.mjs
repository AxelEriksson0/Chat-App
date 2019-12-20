import express from 'express'
const router = express.Router()

router.post('/', (req, res) => {
  const io = req.app.get('io')
  console.log(io)
  const sockets = io.sockets.clients()
  console.log(sockets)
  res.json('hello')
})

export default router
