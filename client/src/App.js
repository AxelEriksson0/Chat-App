import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chat from './pages/Chat/Chat'
import LandingPage from './pages/LandingPage/LandingPage'

const App = () => {
  return (
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

  )
}

export default App
