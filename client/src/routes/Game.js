import React, { useEffect } from "react";
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
  //fixture
  const user = {
    "id": 5,
    "username": "jerome.schuppe",
    "email": "jim_lebsack@lesch.org",
    "password_digest": "KrDi86CxJ",
    "created_at": "2020-10-27T23:47:48.765Z",
    "updated_at": "2020-10-27T23:47:48.765Z"
  }
  // Navigating Modes
  const { mode, transition, back } = useVisualMode(LOBBY);

  //if mode === PREGAME
  return (
    //fixtures

    <div>

      {mode === LOBBY && <Lobby user={user} onPlay={() => transition(PREGAME)} />}
      {mode === PREGAME && <Pregame user={user} onClick={() => transition(INGAME)} />}
      {mode === INGAME && <Ingame onClick={() => transition(LOBBY)} />}



    </div>
  )
}

export default Game;