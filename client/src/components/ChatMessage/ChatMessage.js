import React from 'react'
import { Card, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import useStyles from './Style'

const ChatMessage = props => {
  const classes = useStyles()
  return (
    <div className={`${classes.messageContainer} ${props.fromYou && classes.fromYouMessageContainer}`}>
      <Typography className={classes.sender}>
        {props.user}
      </Typography>
      <Card className={`${classes.card} ${props.fromYou && classes.fromYouCard}`}>
        <Typography className={classes.message}>
          {props.message}
        </Typography>
      </Card>
    </div>
  )
}

ChatMessage.propTypes = {
  fromYou: PropTypes.bool,
  message: PropTypes.string,
  user: PropTypes.string
}

export default ChatMessage
