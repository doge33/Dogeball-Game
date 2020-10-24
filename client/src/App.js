import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import './App.css';
import { SET_USERS, SET_MATCHES } from './reducers/dataReducer';



import Introduction from "./components/Introduction";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  const { state, dispatch } = useApplicationData();

  //const userList = state.users.map((user) => (<li key={user.id}> {user.first_name} {user.last_name} {user.email}</li>));
	
	return (
    <main className="App">
      
      <Introduction />
      <Signup />
      <Login />
    </main>
	)
}



export default App;