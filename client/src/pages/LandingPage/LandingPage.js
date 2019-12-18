import React, { useState } from 'react'
import { Button, Container, Snackbar, TextField } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import useStyles from './Style'

const LandingPage = () => {
  const classes = useStyles()
  const [name, setName] = useState('')

  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const enterChat = event => {
    event.preventDefault()
    if (name === '') {
      handleClick()
    }
    console.log(`Joining chat as ${name}`)
  }
  return (
    <>
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

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">You need to input a name!</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Container>
    </>
  )
}

export default LandingPage
