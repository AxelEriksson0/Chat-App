import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import io from 'socket.io-client'

import { Button, Container, TextField, ThemeProvider } from '@material-ui/core'
import { darkTheme, lightTheme } from '../../ui/theme/index'
import ChatMessage from '../../components/ChatMessage/ChatMessage'
import useStyles from './Style'

const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : 'http://localhost:8000'
const socket = io(url)

const Chat = () => {
  const location = useLocation()
  const classes = useStyles()
  const history = useHistory()
  const [messageToSend, setMessageToSend] = useState('')
  const [messages, setMessages] = useState([])
  const user = location?.state?.user
  if (user === undefined) {
    history.push('/')
  }

  const sendMessage = () => {
    socket.emit('message', { message: messageToSend, user: user })
  }

  useEffect(() => {
    const newUser = { user: user, timestamp: Date.now() }
    socket.user = newUser
    socket.emit('new user', newUser)

    socket.on('send message to all clients', newMessages => {
      const messagesToShow = newMessages.filter(message => message.timestamp > socket.user.timestamp)
      setMessages(messagesToShow)
    })
  }, [user])

  const disconnectFromChat = () => {
    history.push('/')
  }

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Container className={classes.container}>

          <div className={classes.messages}>
            {
              messages.map(message => (
                <ChatMessage key={message.id} user={message.user} message={message.message} fromYou={user === message.user}/>
              ))
            }
          </div>

          <div className={classes.buttons}>
            <ThemeProvider theme={darkTheme}>
              <TextField className={classes.message}
                id="Message"
                label="Message"
                variant="outlined"
                onChange={(event) => setMessageToSend(event.target.value)}
              />
            </ThemeProvider>

            <Button className={classes.button}
              color="primary"
              disabled={messageToSend === ''}
              variant="contained"
              onClick={sendMessage}>
                Send Message
            </Button>

            <Button className={classes.button}
              color="secondary"
              variant="contained"
              onClick={disconnectFromChat}>
                Disconnect From Chat
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Chat
