import React, { useEffect, useContext, useState } from "react";
import UserContext from '../Context/userContext'
import className from "classnames";
//import "../components/Game.scss";
import NewCamera from "../components/Game/NewCamera"
import Lobby from "../components/Game/Lobby/index";
import Play from "../components/Game/Play/index";
import Pregame from "../components/Game/Play/Pregame/index";
import Ingame from "../components/Game/Play/Ingame/index";
import useVisualMode from "../hooks/useVisualMode";


function Game() {

  //const [quit, setQuit] = useState(false);

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
  const PLAY = "PLAY";

  // const { user } = useContext(UserContext)
  // Navigating Modes
  const { mode, transition, back } = useVisualMode(LOBBY);
  const [gameActive, setGameActive] = useState(false);
  //console.log(user, "check")

  //re-initialize all states for the game
  function initializeGame(){
    setGameActive(true)
    transition(PLAY, true)
  }

  
  //if mode === PREGAME
  return (
    //fixtures

    <div>

      {mode === LOBBY && <Lobby user={testUser} onPlay={() => transition(PLAY, true)} />}
      {mode === PLAY && <Play user={testUser} onQuit={()=>transition(LOBBY, true)}/>}
      {/* {mode === PREGAME && <Pregame user={testUser} onClick={() => transition(INGAME, true)} />}
      {mode === INGAME && <Ingame onQuit={back} onRestart={()=>initializeGame()}/>} */}
    </div>
  )
}

export default Game;