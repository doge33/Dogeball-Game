import React, {useEffect, useState} from "react";
import classNames from "classnames";
import Button from "../../Button";

function Gameover(props){

  const [counter, setCounter] = useState(10);
  const [isActive, setIsActive] = useState(true);
  const [quit, setQuit] = useState(false);

  //when isActive is updated to true, useEffect will run ==> countdown start
  useEffect(()=>{
    let intervalId;

    intervalId = setInterval(() =>{

      if(isActive && counter > 0){
        setCounter(counter - 1)
      } 
      if(counter === 0){
        setIsActive(false);
        // handleQuit();
        props.onQuit(); //triggered by countdown to 0 and not restart input
        
      }

    }, 1000)

    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [isActive, counter])

  return(
    <div>
      {isActive ? counter : ""}
      <div><Button onClick={props.onRestart}>Restart Game?</Button></div>
      {/* manually quit */}
      <div><Button onClick={props.onQuit}>Quit?</Button></div>
    </div>
  )
}

export default Gameover;