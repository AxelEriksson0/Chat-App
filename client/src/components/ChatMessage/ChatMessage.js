import React from 'react'
import { Card, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import useStyles from './Style'

const ChatMessage = props => {
  console.log(props.fromYou)
  const classes = useStyles()
  return (
    <div className={`${classes.messageContainer} ${props.fromYou && classes.fromYouMessageContainer}`}>
      <Typography className={classes.sender}>
          Axel
      </Typography>
      <Card className={`${classes.card} ${props.fromYou && classes.fromYouCard}`}>
        <Typography className={classes.message}>
              well meaning and kindly. well meaning and kindly. well meaning and kindly.well meaning and kindly.
        </Typography>
      </Card>
    </div>
  )
}

ChatMessage.propTypes = {
  fromYou: PropTypes.bool
}

export default ChatMessage
