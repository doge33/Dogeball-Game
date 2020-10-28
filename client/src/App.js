import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Home from "./routes/Home";
import Game from "./routes/Game";

function App() {

  const [state, setState] = useState({
    isLoggedIn: false,
    user: {}
  })

  const handleLogin = data => {
    setState({
      isLoggedIn: true,
      user: data.user
    });
  }

  const handleLogout = () => {
    setState({
      isLoggedIn: false,
      user: {}
    });
  }

  const loginStatus = () => {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(res => {
        if (res.data.loged_in) {
          handleLogin(res)
        } else {
          handleLogout()
        }
      })
      .catch(err => console.log('api error:', err))
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Router>
    </div>
  )
}



export default App;