import React, {useEffect, useState, useContext} from "react";
import classNames from "classnames";
import Button from "../../Button";
import gameContext from "../../../Context/gameContext";

function Gameover(props){

  const [counter, setCounter] = useState(10);
  const [quit, setQuit] = useState(false);
  console.log("inside Gameover countdown; props.gameOver is", props.gameOver)

  const {gameActive, setGameActive} = useContext(gameContext)
 
  console.log(gameActive)

  //when isActive is updated to true, useEffect will run ==> countdown start
  useEffect(()=>{
    let intervalId;

    intervalId = setInterval(() =>{

      if(!gameActive && counter > 0){
        setCounter(counter - 1)
      } 
      if(counter === 0){
        setGameActive(false);
        // handleQuit();
        props.onQuit(); //triggered by countdown to 0 and not restart input
        
      }

    }, 1000)

    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [gameActive, counter])

  return(
    <div>
      <h1>this is OverCountdown mode</h1>
      {gameActive ? counter : ""}
      {/* <div><Button onClick={() =>setGameActive(!gameActive)}>Restart Game(should restart In-Game)?</Button></div> */}
      <div><Button onClick={props.onRestart}>Restart Game(should restart In-Game)?</Button></div>
      {/* manually quit */}
      <div><Button onClick={props.onQuit}>Quit(back to Lobby or Pre-game)?</Button></div>
    </div>
  )
}

export default Gameover;