import React from "react";
import UserHistory from "./UserHistory";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";

function Lobby(props) {

  //fixtures
  const user = {
    "id":5,
    "username":"jerome.schuppe",
    "email":"jim_lebsack@lesch.org",
    "password_digest":"KrDi86CxJ",
    "created_at":"2020-10-27T23:47:48.765Z",
    "updated_at":"2020-10-27T23:47:48.765Z"
  }

  return(
    <div>
      <Navbar user={user}/>
      <UserHistory user={user}/>
      <Leaderboard />
    </div>
  )
}

export default Lobby;