import React from "react";
import className from "classnames";
//import "../components/Game.scss";
import NewCamera from "../components/Game/Newcamera"
import useVisualMode from "../hooks/useVisualMode"


function Game() {
  // Modes
  const PREGAME = "PREGAME";

  // Navigating Modes
  const { mode, transition, back } = useVisualMode(
  );

  //if mode === PREGAME
  return (<div>
    <NewCamera />
  </div>
  )
}

export default Game;