import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'

import useStyles from './Style'

const Toast = (props) => {
  const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    props.setOpen(false)
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={props.open}
        autoHideDuration={5000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': props.message
        }}
        message={<span id="message-id">{props.message}</span>}
        action={[
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
    </div>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default Toast
