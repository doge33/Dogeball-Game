import React, {useEffect, useState, useContext} from "react";
import gameContext from "../../../../../Context/gameContext";
import classNames from "classnames";
// import "./StartCountdown.scss"

//this part will be delted. Please ignore
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
    <div className="start-countdown">
      <div className="ready"><p id="ready" data-text="READY?"></p></div>
      <div className="wrapper-start"><div className="countdown"><h1>this sh*t will be replaced by a small animation, hopefully...{counter}</h1></div></div>
      
    </div>
  )
}

export default StartCountdown;