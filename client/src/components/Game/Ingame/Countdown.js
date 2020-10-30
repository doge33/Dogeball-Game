import React, {useState, useEffect} from "react";
import classNames from "classnames";
import Button from "../../Button";

import "./Countdown.scss"

function Countdown(props){

  const [isActive1, setIsActive1] = useState(true); // ==> start counting immediately when ingame component renders
  const [isActive2, setIsActive2] = useState(false); // ==> should activate countdown at game-over
  const [counter1, setCounter1] = useState(3);
  const [counter2, setCounter2] = useState(9);

  //this effect handles game start countown of 3 seconds
  useEffect(()=>{
    let intervalId;

    intervalId = setInterval(() =>{

      if(isActive1 && counter1 > 0){
        setCounter1(counter1 - 1)
      } 
      if(counter1 === 0){
        setIsActive1(false);
        setIsActive2(true); // this line stays for now, just to see both counters
      }

    }, 1000)

    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [isActive1, counter1])

  //this effect handles game-over countown of 10 seconds
  useEffect(()=>{
    let intervalId;

    intervalId = setInterval(() =>{

      if(isActive2 && counter2 > 0){
        setCounter2(counter2 - 1)
      } 
      if(counter2 === 0){
        setIsActive2(false);
      }

    }, 1000)

    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [isActive2, counter2])

  return(
    <div>
      <h1>{counter1}</h1>
      {/* <h1>{counter2 }</h1> */}
    <div className="countdown2">
      <div className="continue">
        <p data-text="Continue?">Continue? </p>
        {/* <p>(data-text="9") 9 </p> */}
        <p className='pull-right' data-text="Quit">Quit</p> 
      </div>
  
      <div className="wrapper">
        <div className="countdown"></div>
      </div>
    </div>
      <div><Button onClick={props.onRestart}>Restart button(click before game-over countdown finishes)</Button></div>
    </div>

  )

}

export default Countdown;