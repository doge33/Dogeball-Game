import React, {useEffect, useState, useContext} from "react";
import gameContext from "../../../../../Context/gameContext";
import classNames from "classnames";

function StartCountdown(props){

  const [counter, setCounter] = useState(3);
  const {gameActive, setGameActive} = useContext(gameContext)//=>activate game at the end of this

  //handles countdown logic
  useEffect(()=>{
    let intervalId;
    intervalId = setInterval(() =>{

      if(counter > 0){
        setCounter(counter - 1)
      } 
      if(counter === 0){
       setGameActive(true);
       props.startGame(); //transition to DURING game mode
      }

    }, 1000)

    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [gameActive, counter])

  return(
    <div>
      <h1>this is StartCountdown mode</h1>
      <h1>{counter}</h1>
      
    </div>
  )
}

export default StartCountdown;