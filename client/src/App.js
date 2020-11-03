import React, { useEffect, useState } from 'react';
import UserContext from './Context/userContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';
import Home from "./routes/Home";
import Game from "./routes/Game";
import axios from 'axios';

function App() {

  const [user, setUser] = useState({
    isLoggedIn: false,
    user: {}
  })

  // useEffect(() => {
  //   axios.get(process.env.REACT_APP_IPSTACK_API_URL)
  //     .then(res => console.log(res, "check"))
  // }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App;