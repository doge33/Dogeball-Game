import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import './App.css';

import Introduction from "./components/Introduction";
import Login from "./components/Login";

function App() {

  const { state, dispatch } = useApplicationData();

  //const userList = state.users.map((user) => (<li key={user.id}> {user.first_name} {user.last_name} {user.email}</li>));


  return (
  
  <main className="App" >
    <section classname="introduction">
      <Introduction />
    </section>

    <section className="">
      <div className="signup">

      </div>
      <div className="login">
        <Login />
      </div>


    </section>
    
    

    
  </main >
  );
}

export default App;