import React from "react";
import UserHistory from "./UserHistory";
import Leaderboard from "./Leaderboard";
import Navbar from "../../Navbar";
import Button from "../../Button";
import classNames from "classnames";
import "../Game.scss";

function Lobby(props) {


  return (
    <div className="lobby animate-in">
      {/* <Navbar className="navbar" user={props.user} /> */}
      <main>
        <div className="button-div"><Button className="button" onClick={props.onPlay}>Play: Go to Pre-game mode</Button></div>

        <div className="leaderboard-div transition-swipe"><Leaderboard className="leaderboard" /></div>
        <div className="history-div"><UserHistory className="history" user={props.user} /></div>
      </main>
    </div>
  )
}

export default Lobby;