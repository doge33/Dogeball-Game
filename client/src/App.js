import React, { useState } from 'react';
import UserContext from './Context/userContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';
import Home from "./routes/Home";
import Game from "./routes/Game";

function App() {

  const [user, setUser] = useState({
    isLoggedIn: false,
    user: {}
  })

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  )
}

export default App;