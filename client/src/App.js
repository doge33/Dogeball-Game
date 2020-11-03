import React, { useEffect, useState } from 'react';
import UserContext from './Context/userContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';
import Home from "./routes/Home";
import Game from "./routes/Game";

/**
 * Cutom Hook
 * @param localStorage key to get and set the data in the localStorage
 */
const useStateWithLocalStorage = localStorageKey => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInLocalStorge"))
  )

  // Set data in storage
  useEffect(() => {
    localStorage.setItem("userInLocalStorge", JSON.stringify(user))
  }, [user]);

  return [user, setUser]
}

function App() {

  const [user, setUser] = useStateWithLocalStorage("userInLocalStorge")

  return (
    <UserContext.Provider value={{ user, setUser }} >
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