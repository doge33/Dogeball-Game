import React, {useState} from "react";
import StartCountdown from "./Start Countdown/StartCountdown";
import OverCountdown from "./Over Countdown/OverCountdown";
import DuringGame from "./During Game/DuringGame"
import gameContext from "../../../../Context/gameContext";
import scoreContext from "../../../../Context/scoreContext";
import useVisualMode from "../../../../hooks/useVisualMode";


import "./Ingame.scss";


const initialState = {
    score: 0,
    gameActive: true
  }
function Ingame(props) {

  const [score, setScore] = useState(initialState.score);
  const [gameActive, setGameActive] = useState(initialState.gameActive); 
  // gameActive state will be passed down to all the children to manipulate the timer and countdown activations.

  const START = "START";
  const OVER = "OVER";
  const DURING = "DURING";
  const { mode, transition, back } = useVisualMode(DURING);
  
    function handleRestart(){
    //initialize all necessary states for restart.
      setScore(initialState.score);
      setGameActive(initialState.gameActive)
      transition(DURING, true)
    }

    console.log("inside Ingame, curent score is", score);
    

  return (
   
    <div> 

      <gameContext.Provider value={{ gameActive, setGameActive }}>

        <scoreContext.Provider value={{score, setScore}}>

          <div className="in-game" >
            {/* {mode === START && <StartCountdown startGame={() => transition(DURING, true)}/>} */}
            {mode === DURING && <DuringGame gameOver={()=>transition(OVER, true)} />}
            {mode === OVER && <OverCountdown onRestart={handleRestart} onQuit={props.onQuit}/>}
          </div>
          
        </scoreContext.Provider>  

    </gameContext.Provider>
  </div>
    
  )

}

export default Ingame;