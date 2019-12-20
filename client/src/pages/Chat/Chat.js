import React from 'react'
import { Button, Container, ThemeProvider } from '@material-ui/core'
import { lightTheme } from '../../ui/theme/index'
import ChatMessage from '../../components/ChatMessage/ChatMessage'

import useStyles from './Style'

const Chat = () => {
  const classes = useStyles()
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Container className={classes.container}>

          <ChatMessage fromYou={true}/>
          <ChatMessage />
          <ChatMessage/>

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
