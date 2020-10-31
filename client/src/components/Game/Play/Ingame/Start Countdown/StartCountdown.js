import React, {useEffect, useState, useContext} from "react";
import gameContext from "../../../../../Context/gameContext";
import classNames from "classnames";

function StartCountdown(props){

  const [counter, setCounter] = useState(3);
  //at game-start, this countdown will be activated immediately


  const {gameActive, setGameActive} = useContext(gameContext)
 
  //this effect handles game start countown of 3 seconds
  useEffect(()=>{
    let intervalId;
    setGameActive(true);

    intervalId = setInterval(() =>{

      if(gameActive && counter > 0){
        setCounter(counter - 1)
      } 
      if(counter === 0){
       setGameActive(false);
       props.startGame(); //transition to DURING game mode
      }

    }, 1000)

    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [gameActive, counter])

  return(
    <div>
      <h1>this is StartCountdown mode</h1>
      <h1>{gameActive ? counter : ""}</h1>
      
    </div>
  )
}

export default StartCountdown;