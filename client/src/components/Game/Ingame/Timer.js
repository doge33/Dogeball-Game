import React, {useState, useEffect, useContext} from "react";
import gameContext from "../../../Context/gameContext";
import "./Timer.scss";
import classNames from "classnames";

//this is a stateful component
function Timer (props) {

  //props will be used to obtain "isActive" state

  const [second, setSecond] = useState("10");
  const [counter, setCounter] = useState(10);


  const {gameActive, setGameActive} = useContext(gameContext)
  console.log("inside Timer; gameActive is ", gameActive)
  


  useEffect(()=>{
    let startTimer = setTimeout(()=> setGameActive(!gameActive), [3000])
    return()=>clearTimeout(startTimer);
  }, [gameActive])

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
    setCounter(10);
    setSecond('10');

  }
  //console.log("gameActive is", gameActive)
  return(
    <div className="container">

      <div className="time">
        <span className="second">{second}</span>
      </div>

      <div className="buttons">
        {/* <button onClick={()=> setIsActive(!isActive)} className="start">{isActive? "Pause":"Start"}</button> */}
        <button onClick={()=> setGameActive(!gameActive)} className="start">{gameActive? "Pause":"Start"}</button>
        <button onClick={stopTimer} className="reset">Reset</button>
      </div>

    </div>
  )
}

export default Timer;

// This component is adapted from: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
// Date of access: Oct.29, 2020
