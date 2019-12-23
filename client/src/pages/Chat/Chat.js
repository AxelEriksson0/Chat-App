import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { SOCKET_DISCONNECT, SET_TOAST } from '../../state/variables'
import { useStateValue } from '../../state/state'

import { darkTheme, lightTheme } from '../../ui/theme/index'
import { Button, TextField, ThemeProvider } from '@material-ui/core'
import ChatMessage from '../../components/ChatMessage/ChatMessage'
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
    socket.emit('message from client', { message: message, user: name })
    setMessage('')
  }

  useEffect(() => {
    if (socket !== null) {
      const newUser = { user: name, timestamp: Date.now() }
      socket.user = newUser
      socket.emit('new user', newUser)

      socket.on('message from server', newMessage => {
        setMessages(messages => [...messages, newMessage])
      })

      socket.on('server shutting down', () => {
        history.push('/')
      })

      socket.on('inactive', () => {
        dispatch({
          type: SOCKET_DISCONNECT
        })
        dispatch({
          type: SET_TOAST,
          message: 'Disconnected from server due to inactivity',
          variant: 'info'
        })
        history.push('/')
      })
    }
  }, [dispatch, history, name, socket])

  const disconnectFromChat = () => {
    dispatch({
      type: SOCKET_DISCONNECT
    })
    dispatch({
      type: SET_TOAST,
      message: 'Disconnected from server',
      variant: 'info'
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

          <div className={classes.writeSendDisconnect}>
            <form onSubmit={sendMessage}>
              <ThemeProvider theme={darkTheme}>
                <TextField className={classes.message}
                  id="Message"
                  label="Message"
                  variant="outlined"
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                />

                <div className={classes.buttons}>
                  <Button className={classes.button}
                    color="secondary"
                    variant="contained"
                    onClick={disconnectFromChat}>
                   Disconnect
                  </Button>
                  <Button className={classes.button}
                    color="primary"
                    disabled={message === ''}
                    variant="contained"
                    type="submit">
                  Send Message
                  </Button>
                </div>
              </ThemeProvider>
            </form>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Chat
