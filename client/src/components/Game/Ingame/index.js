import React, {useEffect, useState, useRef} from "react";
import Button from "../../Button";
import StartCountdown from "./StartCountdown";
import OverCountdown from "./OverCountdown";
import DuringGame from "./DuringGame"
import gameContext from "../../../Context/gameContext";
import useVisualMode from "../../../hooks/useVisualMode";

import "./Ingame.scss";

const initialState = {
    score: 0,
    timerActive: false,
    gameActive: false
  }
function Ingame() {

  const [score, setScore] = useState(initialState.score);
  const [timerActive, setTimerActive] = useState(initialState.timerActive);
  const [gameActive, setGameActive] = useState(initialState.gameActive);

  const START = "START"
  const OVER = "OVER"
  const DURING = "DURING"
  
  
    function handleRestart(){
    //initialize all necessary states for restart.
      setScore(initialState.score);
      setGameActive(initialState.gameActive);
      transition(START, true)
 
    }

    const { mode, transition, back } = useVisualMode(START);

    console.log("inside Ingame, gameActive is", gameActive)

  return (
   
      <div className="in-game" style={{position:"absolute", zindex: 9}}> 

      <gameContext.Provider value={{ gameActive, setGameActive }}>

      {mode === START && <StartCountdown startGame={() => transition(DURING, true)}/>} 
      {mode === DURING && <DuringGame gameOver={()=>transition(OVER, true)}/>}
      {mode === OVER && <OverCountdown onRestart={handleRestart}/>}
        

        {/* <div className="score"><h1>This may be the score component</h1><h1>current score is {score}</h1></div>
        <div className="timer"><Timer gameActive={gameActive} /></div>
        <div className="game-area">
          <h1>This may be the game area component</h1>
          <Button onClick={props.onQuit}>Quit? Go back to game lobby mode</Button>
          
          <div className="countdowns">
            <h2>Another component that renders conditionally on different modes:
              countdown to start; game-over(result+countdown to quit); </h2>
              <Countdown onRestart={handleRestart} onQuit={props.onQuit} />
            
            </div>
        </div> */}


        </gameContext .Provider>
      </div>
    
  )

}

export default Ingame;