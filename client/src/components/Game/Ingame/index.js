import React, {useState} from "react";
import Button from "../../Button";
import Timer from "./Timer";
import Countdown from "./Countdown";

import "./Ingame.scss";

function Ingame(props) {

  

  return (
    <div className="in-game">
      <div className="score"><h1>This may be the score component</h1></div>
      <div className="timer"><Timer /></div>
      <div className="game-area">
        <h1>This may be the game area component</h1>
        <Button onClick={props.onQuit}>Quit? Go back to game lobby mode</Button>
        <div className="countdowns">
          <h2>Another component that renders conditionally on different modes:
            countdown to start; game-over(result+countdown to quit); </h2>
            <Countdown onRestart={props.onRestart} onQuit={props.onQuit}/>
          
        </div>
        
      </div>
    </div>

  )

}

export default Ingame;