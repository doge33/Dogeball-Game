import React from "react";
import className from "classnames";
//import "../components/Game.scss";
import Newcamera from "../components/Game/Newcamera"
import useVisualMode from "../hooks/useVisualMode"


function Game() {
  // Modes
  const PREGAME = "PREGAME";
  
  // Navigating Modes
  const { mode, transition, back } = useVisualMode(
  );
  
  //if mode === PREGAME
  return (<div>
    <Newcamera />
  </div>
  )
}

export default Game;