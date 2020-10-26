import React from "react";
import className from "classnames";
//import "../components/Game.scss";
import Camera from "../components/Game/Camera"

function Game() {
  //if mode === PREGAME
  return (
    <div>
      <Camera width={"500"} height={"500"} />
    </div>
  )
}

export default Game;