import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import { SET_USERS, SET_MATCHES } from './reducers/dataReducer';



import Home from "./routes/Home";
import Game from "./routes/Game";

function App() {

  const { state, dispatch } = useApplicationData();

  //const userList = state.users.map((user) => (<li key={user.id}> {user.first_name} {user.last_name} {user.email}</li>));
	
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