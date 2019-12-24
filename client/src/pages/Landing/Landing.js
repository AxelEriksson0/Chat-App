import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { SET_NAME, SOCKET_CONNECT, REMOVE_TOAST } from '../../state/variables'
import { useStateValue } from '../../state/state'

import { Button, Container, TextField } from '@material-ui/core'
import Toast from '../../components/Toast/Toast'
import { ThemeProvider } from '@material-ui/core/styles'
import { darkTheme } from '../../ui/theme/index'
import useStyles from './Style'

const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER_PRODUCTION_URL : process.env.REACT_APP_SERVER_DEVELOPMENT_URL

const LandingPage = () => {
  const classes = useStyles()
  const history = useHistory()
  const [name, setName] = useState('')
  const [{ toast }, dispatch] = useStateValue()

  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVariant, setToastVariant] = useState('info')

  useEffect(() => {
    if (toast.toast) {
      setToastVariant(toast.variant)
      setToastMessage(toast.message)
      setShowToast(true)
      dispatch({
        type: REMOVE_TOAST
      })
    }
  }, [dispatch, toast])

  const enterChat = async event => {
    event.preventDefault()
    if (name === '') {
      setToastVariant('error')
      setToastMessage('You need to input a name!')
      setShowToast(true)
      return
    }

    if (name.toLowerCase() === 'admin') {
      setToastVariant('error')
      setToastMessage('Admin/admin is a reserved name!')
      setShowToast(true)
      return
    }

    try {
      const res = await fetch(`${url}/get-chat-users`)
      const users = await res.json()

      if (users.find(user => user.user === name) !== undefined) {
        setToastVariant('error')
        setToastMessage('Name already taken!')
        setShowToast(true)
        return
      }

      dispatch({
        type: SET_NAME,
        name: name
      })
      dispatch({
        type: SOCKET_CONNECT
      })
      history.push({
        pathname: '/chat'
      })
    } catch (error) {
      setToastMessage('Cannot connect to the server!')
      setShowToast(true)
    }
  }
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off" onSubmit={enterChat}>
            <TextField
              className={classes.textField}
              id="Name"
              label="Name"
              margin="normal"
              onChange={event => setName(event.target.value)}
              variant="outlined"/>

            <Button
              className={classes.button}
              color="primary"
              id="joinChatButton"
              type="submit"
              variant="contained">
          Join Chat
            </Button>
          </form>
        </Container>

        <Toast open={showToast} setOpen={setShowToast} message={toastMessage} variant={toastVariant} />
      </ThemeProvider>
    </>
  )
}

export default LandingPage
