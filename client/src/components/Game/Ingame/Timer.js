import React, {useState, useEffect, useContext} from "react";
import gameContext from "../../../Context/gameContext";
import "./Timer.scss";
import classNames from "classnames";

//this is a stateful component
function Timer (props) {

  //props will be used to obtain "isActive" state

  const [second, setSecond] = useState("60");
  const [isActive, setIsActive] = useState(props.timerActive); //default to "false"; changes when game starts counting
  //const [prevStatus, setPrevStatus] = useState(null);
  const [counter, setCounter] = useState(60);
  //console.log(props.timerActive);

  const {gameActive, setGameActive} = useContext(gameContext)
  console.log("inside Timer; gameActive is ", gameActive)
 

  // if(props.timerActive !== prevStatus){
  //   setIsActive(prevStatus!== null);
  //   setPrevStatus(props.timerActive)
  // }

  // console.log(props.timerActive)//false
  // console.log(isActive); //true
  // console.log(prevStatus); //false


  useEffect(()=>{
    let startTimer = setTimeout(()=> setGameActive(true), [3000])
    return()=>clearTimeout(startTimer);
  }, [])

  useEffect(()=>{
    let intervalId;
    if(gameActive && counter > 0) {
      //make function expression so that clean up function can be used later.
      intervalId = setInterval(()=> {
        setSecond(second => second -1);
        setCounter(counter => counter - 1)//updates the counter every second
      }, 1000)
    }

    if(counter === 0){
      setGameActive(false);
     }

    return() => clearInterval(intervalId); //clear interval when the effect stops running(1 sec after setInterval)
            //why counter ?
  }, [gameActive, counter]) //the dependency array ensures that the effect ONLY runs when either of them changes

  function stopTimer(){
    setGameActive(false);
    setCounter(60);
    setSecond('60');

  }
  return(
    <div className="container">

      <div className="time">
        <span className="second">{second}</span>
      </div>

      <div className="buttons">
        <button onClick={()=> setIsActive(!isActive)} className="start">{isActive? "Pause":"Start"}</button>
        <button onClick={stopTimer} className="reset">Reset</button>
      </div>

    </div>
  )
}

export default Timer;

// This component is adapted from: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
// Date of access: Oct.29, 2020
