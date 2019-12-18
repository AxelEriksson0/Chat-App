import React from 'react'
import { Button, Card, Container, Typography, ThemeProvider } from '@material-ui/core'
import { lightTheme } from '../../ui/theme/index'

import useStyles from './Style'

const Chat = () => {
  const classes = useStyles()
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Container className={classes.container}>

          <div className={classes.messageContainer}>
            <Typography className={classes.sender}>
          Axel
            </Typography>
            <Card className={classes.card}>
              <Typography className={classes.message}>
              well meaning and kindly. well meaning and kindly. well meaning and kindly.well meaning and kindly.
              </Typography>
            </Card>
          </div>

          <div className={classes.messageContainer}>
            <Typography className={classes.sender}>
          Axel
            </Typography>
            <Card className={classes.card}>
              <Typography className={classes.message}>
              well meaning and kindly. well meaning and kindly. well meaning and kindly.well meaning and kindly.
              </Typography>
            </Card>
          </div>

          <div className={classes.yourMessageContainer}>
            <Typography className={classes.sender}>
          Axel
            </Typography>
            <Card className={classes.card}>
              <Typography className={classes.message}>
              well meaning and kindly. well meaning and kindly. well meaning and kindly.well meaning and kindly.
              </Typography>
            </Card>
          </div>

          <div>
            <Button color="primary" variant="contained">Send Message</Button>
            <br></br>
            <br></br>
            <Button color="primary" variant="contained">Disconnect From Chat</Button>
          </div>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Chat
