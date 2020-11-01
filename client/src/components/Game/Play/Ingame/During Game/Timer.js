import React, {useState, useEffect, useContext} from "react";
import gameContext from "../../../../../Context/gameContext";
import "./Timer.scss";
import classNames from "classnames";

//this is a stateful component
function Timer (props) {

  const [second, setSecond] = useState(25);
  const {gameActive, setGameActive} = useContext(gameContext);
  const {countScore, setCountScore} = useContext(gameContext);
  // console.log("inside Timer; gameActive is ", gameActive);
  console.log("in Timer, countScore is:", countScore);

  

  useEffect(()=>{
    setTimeout(()=> setGameActive(true), [5000])
  }, [gameActive])

  useEffect(()=>{
    let intervalId;
    if(gameActive && second > 0) {
      //make function expression so that clean up function can be used later.
      intervalId = setInterval(()=> {
        setSecond(second => second -1);
      }, 1000)
    }
    if(second === 0){
      //why doens't this work?
     setCountScore(false);//set countScore to false => stop counting score!
     console.log("in Timer at second = 0, countScore is:", countScore);
      props.gameOver();
     }

    return() => clearInterval(intervalId); //clear interval when the effect stops running(1 sec after setInterval)
  }, [gameActive, second]) //the dependency array ensures that the effect ONLY runs when either of them changes

  function stopTimer(){
   
    setSecond(25);

  }
  //console.log("gameActive is", gameActive)
  return(
    <div className="container">

      <div className="time">
        <span className="second">{second}</span>
      </div>

      <div className="buttons">
        {/* this line will be taken out */}
        <button onClick={()=> setGameActive(!gameActive)} className="start">{gameActive? "Pause":"Start"}</button>
        <button onClick={stopTimer} className="reset">Reset</button>
      </div>

    </div>
  )
}

export default Timer;

// This component is adapted from: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
// Date of access: Oct.29, 2020
