import React, {useState, useEffect} from "react";
import classNames from "classnames";
import Button from "../../Button";
import useVisualMode from "../../../hooks/useVisualMode";
import Gamestart from "./StartCountdown";
import Gameover from "./OverCountdown";

import "./Countdown.scss"

function Countdown(props){

  const [gameStart, setGameStart] = useState(true); // ==> start counting immediately when ingame component renders
  const [gameOver, setGameOver] = useState(false); // ==> gameover countdown only when game's over.
  // const [isActive, setIsActive] = useState(true);
  

  //modes
  const START = "START";
  const OVER = "OVER";

  const { mode, transition, back } = useVisualMode(START);
  //need to pass game active status(starting? game-over?) from parent component in order to decide which mode to render

  return(
    <div>

      <h1>{mode === START && <Gamestart gameStart={gameStart}/>}</h1>

      {/* <h1>{mode === OVER && <Gameover />}</h1> */}
      {/* for now just display Gameover without mode */}
      <h1>{<Gameover onQuit={props.onQuit} onRestart={props.onRestart} gameOver={gameOver}/>}</h1> 

    <div className="countdown2">
     
      
    </div>
     
    </div>

  )

}

export default Countdown;