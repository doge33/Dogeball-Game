import React, {useEffect, useState, useContext} from "react";
import classNames from "classnames";
import Button from "../../../../Button";
import gameContext from "../../../../../Context/gameContext";

function OverCountdown(props){

  const [counter, setCounter] = useState(10);
  const {gameActive, setGameActive} = useContext(gameContext)

  //when isActive is updated to true, useEffect will run ==> countdown start
  useEffect(()=>{
    let intervalId;

    intervalId = setInterval(() =>{


      if(gameActive && counter > 0){
        setCounter(counter - 1)
      } 
      if(counter === 0){
        setGameActive(false);
        props.onQuit(); //triggered by countdown to 0 and not restart input 
      }

    }, 1000)

    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [gameActive, counter])

  return(
    <div>
      <h1>this is OverCountdown mode</h1>
      <h1>{gameActive ? counter : ""}</h1>
      <div><Button onClick={props.onRestart}>Restart Game?</Button></div>
      {/* manually quit */}
      <div><Button onClick={props.onQuit}>Quit(back to Lobby)?</Button></div>
    </div>
  )
}

export default OverCountdown;