import React, {useEffect, useState, useContext} from "react";
import classNames from "classnames";

function Gamestart(props){

  const [counter, setCounter] = useState(3);
  const [isActive, setIsActive] = useState(props.gameStart);
  //at game-start, this countdown will be activated immediately

  // const gameContext = React.createContext();
  // const [gameActive, setGameActive] = useContext(gameContext)
 
  //this effect handles game start countown of 3 seconds
  useEffect(()=>{
    let intervalId;

    intervalId = setInterval(() =>{

      if(isActive && counter > 0){
        setCounter(counter - 1)
      } 
      if(counter === 0){
       setIsActive(false);
      }

    }, 1000)

    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [isActive, counter])

  return(
    <div>
      {isActive ? counter : ""}
    </div>
  )
}

export default Gamestart;