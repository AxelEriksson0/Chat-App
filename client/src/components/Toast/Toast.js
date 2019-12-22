import React from 'react'
import PropTypes from 'prop-types'

import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'

import useStyles from './Style'

const iconVariant = {
  error: ErrorIcon,
  info: InfoIcon
}

const Toast = (props) => {
  const classes = useStyles()
  const { message, open, setOpen, variant } = props
  const Icon = iconVariant[variant]

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') { return }
    setOpen(false)
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        ContentProps={{ 'aria-describedby': message }}>

        <SnackbarContent
          className={`${classes[variant]}`}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              <Icon className={`${classes.iconVariant} ${classes.icon}`} />
              {message}
            </span>
          }
          action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon className={classes.icon} />
            </IconButton>
          ]}
        />

      </Snackbar>
    </>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired
}

export default Toast
