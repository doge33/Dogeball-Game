import React, {useState} from "react";
import Button from "../../Button";
import Timer from "./Timer";
import Countdown from "./Countdown";

import "./Ingame.scss";

function Ingame(props) {

  const [score, setScore] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  function handleRestart(){
    //initialize all necessary states for restart.
    setScore(0);
    setTimerActive(false);
  }
  

  return (
    <div className="in-game" style={{position:"absolute", zindex: 9}}>
      <div className="score"><h1>This may be the score component</h1><h1>current score is {score}</h1></div>
      <div className="timer"><Timer timerActive={timerActive}/></div>
      <div className="game-area">
        <h1>This may be the game area component</h1>
        <Button onClick={props.onQuit}>Quit? Go back to game lobby mode</Button>
        <div className="countdowns">
          <h2>Another component that renders conditionally on different modes:
            countdown to start; game-over(result+countdown to quit); </h2>
            <Countdown onRestart={()=>handleRestart} onQuit={props.onQuit} />
          
        </div>
        
      </div>
    </div>

  )

}

export default Ingame;