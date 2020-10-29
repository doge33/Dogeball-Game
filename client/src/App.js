import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Home from "./routes/Home";
import Game from "./routes/Game";

function App() {

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