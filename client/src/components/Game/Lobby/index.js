import React from "react";
import UserHistory from "./UserHistory";
import Leaderboard from "./Leaderboard";
import Navbar from "../Navbar";
import Button from "../../Button";

function Lobby(props) {


  return(
    <div>
      <Navbar user={props.user}/>
      <UserHistory user={props.user}/>
      <Leaderboard />
      <Button onClick={props.onPlay}>Play: Go to Pre-game mode</Button>
    </div>
  )
}

export default Lobby;