import React from 'react';
import useApplicationData from './hooks/useApplicationData';
<<<<<<< Updated upstream
import './App.scss';
=======
import './App.css';
import { SET_USERS, SET_MATCHES } from './reducers/dataReducer';


>>>>>>> Stashed changes

import Introduction from "./components/Introduction";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  const { state, dispatch } = useApplicationData();

<<<<<<< Updated upstream
  //const userList = state.users.map((user) => (<li key={user.id}> {user.first_name} {user.last_name} {user.email}</li>));
	
	return (
    <main className="App">
      
      <Introduction />
      <Signup />
      <Login />
    </main>
	)
}
=======
  // useEffect(() => {

  //   axios({
  //     method: 'GET',
  //     url: '/api/users'
  //   })
  //     .then(result => dispatch({ type: SET_USERS, users: result.data }))
  //     .catch(err => console.log(err.message))

  // }, [])
  const userList = state.users.map((user) => (<li key={user.id}> {user.first_name} {user.last_name} {user.email}</li>));
  const matchList = state.matches.map((match) => (<li key={match.id}> {match.score} {match.start_date} {match.end_date} {match.user_id}</li>));

>>>>>>> Stashed changes


<<<<<<< Updated upstream
=======
    <ul> {userList} </ul>

    <h1> Matches </h1>
    
    <ul> {matchList} </ul>
  </div >
  );
}
>>>>>>> Stashed changes

export default App;