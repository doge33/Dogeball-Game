import React, {useEffect, useState, useContext} from "react";
import classNames from "classnames";
import Button from "../../../../Button";
import gameContext from "../../../../../Context/gameContext";
import scoreContext from "../../../../../Context/scoreContext";

function OverCountdown(props){

  const [counter, setCounter] = useState(15);
  const {score, setScore} = useContext(scoreContext);

  useEffect(()=>{
    let intervalId;
    intervalId = setInterval(() =>{

      if(counter > 0){
        setCounter(counter - 1)
      } 
      if(counter === 0){
        props.onQuit(); //triggered by countdown to 0
      }
    }, 1000)

    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [ counter])

  return(
    <div>
      <h1>this is OverCountdown mode</h1>
      <h1>{counter }</h1>
      <h1>FinalScore: {score}</h1>
      <h1>{score > 10? "The Evil Nyan Cats Have Taken Over" : "The Doge " }</h1>
      <div><Button onClick={props.onRestart}>Restart Game?</Button></div>
      {/* manually quit */}
      <div><Button onClick={props.onQuit}>Quit(back to Lobby)?</Button></div>
    </div>
  )
}

export default OverCountdown;