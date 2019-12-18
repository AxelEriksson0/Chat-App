import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chat from './pages/Chat/Chat'
import LandingPage from './pages/LandingPage/LandingPage'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ui/theme/index'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>

          <Route path="/chat">
            <Chat/>
          </Route>

          <Route path="/">
            <LandingPage/>
          </Route>

        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
