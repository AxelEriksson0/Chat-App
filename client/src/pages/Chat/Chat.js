import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { SOCKET_DISCONNECT } from '../../state/variables'
import { useStateValue } from '../../state/state'

import { Button, Container, TextField, ThemeProvider } from '@material-ui/core'
import ChatMessage from '../../components/ChatMessage/ChatMessage'
import { darkTheme, lightTheme } from '../../ui/theme/index'
import useStyles from './Style'

const Chat = () => {
  const classes = useStyles()
  const history = useHistory()
  const [{ name, socket }, dispatch] = useStateValue()
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  if (name === null || socket === null) {
    history.push('/')
  }

  const sendMessage = event => {
    event.preventDefault()
    socket.emit('message', { message: message, user: name })
  }

  useEffect(() => {
    if (socket !== null) {
      const newUser = { user: name, timestamp: Date.now() }
      socket.user = newUser
      socket.emit('new user', newUser)

      socket.on('messages', newMessages => {
        const messagesToShow = newMessages.filter(message => message.timestamp > socket.user.timestamp)
        setMessages(messagesToShow)
      })
      socket.on('server shutting down', () => {
        history.push('/')
      })
    }
  }, [history, name, socket])

  const disconnectFromChat = () => {
    dispatch({
      type: SOCKET_DISCONNECT
    })
    history.push('/')
  }

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <div className={classes.container}>
          <div className={classes.messages}>
            {
              messages.map(message => (
                <ChatMessage key={message.id} user={message.user} message={message.message} fromYou={name === message.user}/>
              ))
            }
          </div>

          <Container className={classes.buttons}>
            <form onSubmit={sendMessage}>
              <ThemeProvider theme={darkTheme}>
                <TextField className={classes.message}
                  id="Message"
                  label="Message"
                  variant="outlined"
                  onChange={(event) => setMessage(event.target.value)}
                />
              </ThemeProvider>

              <Button className={classes.button}
                color="primary"
                disabled={message === ''}
                variant="contained"
                type="submit">
                Send Message
              </Button>
            </form>

            <Button className={classes.button}
              color="secondary"
              variant="contained"
              onClick={disconnectFromChat}>
                Disconnect From Chat
            </Button>
          </Container>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Chat
