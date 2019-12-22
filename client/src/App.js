import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { StateProvider } from './state/state'
import { initialState, reducer } from './state/reducer'

import Chat from './pages/Chat/Chat'
import Landing from './pages/Landing/Landing'

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>

          <Route path="/chat">
            <Chat/>
          </Route>

          <Route path="/">
            <Landing/>
          </Route>

        </Switch>
      </Router>
    </StateProvider>
  )
}

export default App
