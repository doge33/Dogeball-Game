import React, { useEffect, useContext } from "react";
import UserContext from '../Context/userContext'
import className from "classnames";
//import "../components/Game.scss";
import NewCamera from "../components/Game/NewCamera"
import Lobby from "../components/Game/Lobby/index";
import Pregame from "../components/Game/Pregame/index";
import Ingame from "../components/Game/Ingame/index";
import useVisualMode from "../hooks/useVisualMode";


function Game() {
  // Modes
  const LOBBY = "LOBBY";
  const PREGAME = "PREGAME";
  const INGAME = "INGAME";


  const { user } = useContext(UserContext)
  // Navigating Modes
  const { mode, transition, back } = useVisualMode(LOBBY);
  console.log(user, "check")

  //if mode === PREGAME
  return (
    //fixtures

    <div>

      {mode === LOBBY && <Lobby user={user.user} onPlay={() => transition(PREGAME)} />}
      {mode === PREGAME && <Pregame user={user.user} onClick={() => transition(INGAME)} />}
      {mode === INGAME && <Ingame onClick={() => transition(LOBBY)} />}



    </div>
  )
}

export default Game;