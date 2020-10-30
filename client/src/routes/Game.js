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

  //fixture
  const testUser = {
    "id":5,
    "username":"jerome.schuppe",
    "email":"jim_lebsack@lesch.org",
    "password_digest":"KrDi86CxJ",
    "created_at":"2020-10-27T23:47:48.765Z",
    "updated_at":"2020-10-27T23:47:48.765Z"
  }
  // Modes
  const LOBBY = "LOBBY";
  const PREGAME = "PREGAME";
  const INGAME = "INGAME";


  // const { user } = useContext(UserContext)
  // Navigating Modes
  const { mode, transition, back } = useVisualMode(LOBBY);
  //console.log(user, "check")

  //if mode === PREGAME
  return (
    //fixtures

    <div>
      {/* <NewCamera /> */}

      {/* {mode === LOBBY && <Lobby user={user.user} onPlay={() => transition(PREGAME)} />}
      {mode === PREGAME && <Pregame user={user.user} onClick={() => transition(INGAME)} />}
      {mode === INGAME && <Ingame onClick={() => transition(LOBBY)} />} */}

      {mode === LOBBY && <Lobby user={testUser} onPlay={() => transition(PREGAME)} />}
      {mode === PREGAME && <Pregame user={testUser} onClick={() => transition(INGAME)} />}
      {mode === INGAME && <Ingame onQuit={() => transition(LOBBY)} />}
    </div>
  )
}

export default Game;