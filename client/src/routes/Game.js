import React from "react";
import className from "classnames";
//import "../components/Game.scss";
import NewCamera from "../components/Game/NewCamera"
import Lobby from "../components/Game/Lobby/index";
import useVisualMode from "../hooks/useVisualMode"


function Game() {
  // Modes
  const PREGAME = "PREGAME";

  // Navigating Modes
  const { mode, transition, back } = useVisualMode(
  );

  //if mode === PREGAME
  return (<div>
    <Lobby />
  
  </div>
  )
}

export default Game;