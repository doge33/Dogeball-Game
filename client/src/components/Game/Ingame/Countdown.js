import React, {useState, useEffect} from "react";
import classNames from "classnames";
import Button from "../../Button";
import useVisualMode from "../../../hooks/useVisualMode";
import Gamestart from "./Gamestart";
import Gameover from "./Gameover";

import "./Countdown.scss"

function Countdown(props){

  //const [gameStart, setGameStart] = useState(true); // ==> start counting immediately when ingame component renders
  const [gameOver, setGameOver] = useState(false);
  console.log("inside Countdown. gameOver is", gameOver)
  //const [quit, setQuit] = useState(false);


  //modes
  const START = "START";
  const OVER = "OVER";

  const { mode, transition, back } = useVisualMode(START);
  //need to pass game active status(starting? game-over?) from parent component in order to decide which mode to render

  return(
    <div>

      <h1>{mode === START && <Gamestart />}</h1>

      <h1>{mode === OVER && <Gameover />}</h1>

    <div className="countdown2">
      {/* <div className="continue">
        <p data-text="Continue?">Continue? </p>
        <p>(data-text="9") 9 </p>
        <p className='pull-right' data-text="Quit">Quit</p> 
      </div>
  
      <div className="wrapper">
        <div className="countdown"></div>
      </div> */}
      <div><Button onClick={props.onRestart}>Restart button(click before game-over countdown finishes)</Button></div>
    </div>
     
    </div>

  )

}

export default Countdown;