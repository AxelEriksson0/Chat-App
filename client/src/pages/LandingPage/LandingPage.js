import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Container, TextField } from '@material-ui/core'
import Toast from '../../components/Toast/Toast'
import { ThemeProvider } from '@material-ui/core/styles'
import { darkTheme } from '../../ui/theme/index'

import useStyles from './Style'

const LandingPage = () => {
  const classes = useStyles()
  const history = useHistory()
  const [name, setName] = useState('')

  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const enterChat = event => {
    event.preventDefault()
    if (name === '') {
      setToastMessage('You need to input a name!')
      setShowToast(true)
      return
    }
    console.log(`Joining chat as ${name}`)
    history.push('/chat')
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
              type="submit"
              color="primary"
              variant="contained">
          Join Chat
            </Button>
          </form>
        </Container>

        <Toast open={showToast} setOpen={setShowToast} message={toastMessage} />
      </ThemeProvider>
    </>
  )
}

export default LandingPage
