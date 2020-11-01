import React, {useEffect, useState, useRef} from "react";
import Button from "../../../Button";
import StartCountdown from "./Start Countdown/StartCountdown";
import OverCountdown from "./Over Countdown/OverCountdown";
import DuringGame from "./During Game/DuringGame"
import gameContext from "../../../../Context/gameContext";
import scoreContext from "../../../../Context/scoreContext";
// import setScoreContext from "../../../../Context/setScoreContext";
import NewCamera from "../../NewCamera";
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
  const [countScore, setCountScore] = useState(false);
  // gameActive state will be passed down to all the children to manipulate the timer and countdown activations.

  //test if newCamera can be rendered from here
  const [canvas, setCanvas] = useState(null);

  const START = "START";
  const OVER = "OVER";
  const DURING = "DURING";
  
    function handleRestart(){
    //initialize all necessary states for restart.
      setScore(initialState.score);
      setGameActive(initialState.gameActive);
      transition(START, true)
      // console.log("in handleRestart, current score after re-initialization is", score)
 
    }

    const { mode, transition, back } = useVisualMode(START);

    // console.log("inside In-game, gameActive is", gameActive)
    useEffect(()=>{
      console.log("inside In-game, score is", score)
      console.log("inside In-game, countScore is", score)
    }, [score])
    

  return (
   
      <div> 

      <gameContext.Provider value={{ gameActive, setGameActive, countScore, setCountScore }}>

      <scoreContext.Provider value={{score, setScore}}>
        <NewCamera className="Newcamera" canvas={canvas} /> 
            {mode === DURING && <DuringGame gameOver={()=>transition(OVER, true)} />}
      </scoreContext.Provider>        
        <div  style={{position:"absolute", zindex: 9}}>
          {mode === START && <StartCountdown startGame={() => transition(DURING, true)}/>}

          
          

          {mode === OVER && <OverCountdown onRestart={handleRestart} onQuit={props.onQuit}/>}
        </div>
        </gameContext .Provider>
      </div>
    
  )

}

export default Ingame;