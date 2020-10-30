import React from "react";
import Button from "../../Button";
import Timer from "./Timer";

import "./Ingame.scss";

function Ingame(props) {

  return (
    <div className="in-game">
      <div className="score"><h1>This may be the score component</h1></div>
      <div className="timer"><Timer /></div>
      <div className="game-area">
        <h1>This may be the game area component</h1>
        <Button onClick={props.onClick}>Quit button: Go back to game lobby mode</Button>
        <div className="countdowns">
          <h2>Another component that renders conditionally on different modes:
            countdown to start; game-over(result+countdown to quit); </h2>
          <Button>Restart button(click before countdown finishes)</Button>
        </div>
        
      </div>
    </div>

  )

}

export default Ingame;