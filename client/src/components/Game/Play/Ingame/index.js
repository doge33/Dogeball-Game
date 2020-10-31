import React, {useEffect, useState, useRef} from "react";
import Button from "../../../Button";
import StartCountdown from "./Start Countdown/StartCountdown";
import OverCountdown from "./Over Countdown/OverCountdown";
import DuringGame from "./During Game/DuringGame"
import gameContext from "../../../../Context/gameContext";
import useVisualMode from "../../../../hooks/useVisualMode";

import "./Ingame.scss";


const initialState = {
    score: 0,
    timerActive: false,
    gameActive: false
  }
function Ingame(props) {

  const [score, setScore] = useState(initialState.score);
  const [gameActive, setGameActive] = useState(initialState.gameActive); 
  // gameActive state will be passed down to all the children to manipulate the timer and countdown activations.

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
      {mode === OVER && <OverCountdown onRestart={handleRestart} onQuit={props.onQuit}/>}
 
        </gameContext .Provider>
      </div>
    
  )

}

export default Ingame;