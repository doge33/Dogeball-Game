import React, {useState, useEffect} from "react";
import "./Timer.scss";
import classNames from "classnames";

//this is a stateful component
function Timer (props) {

  //props will be used to obtain "isActive" state

  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [hour, setHour] = useState("00"); //ignore hours for now because it's too long a duration for the game
  const [isActive, setIsActive] = useState(false); //change when game starts counting
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    let intervalId;

    if(isActive) {
      //once timer is active, change up the intervalId every second
      intervalId = setInterval(()=> {
        const secondCounter = counter % 60; //seconds are always less than 60; this also covers when counter is greater than 60
        const minuteCounter = Math.floor(counter/60);
        const hourCounter = Math.floor(minuteCounter/60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
        const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}` : hourCounter;

        //update the states for second & minute
        setSecond(computedSecond);
        setMinute(computedMinute);
        setHour(computedHour);

        setCounter(counter => counter + 1)//updates the counter every second
      }, 1000)
    }

    return() => clearInterval(intervalId); //clear interval when the effect stops running(1 sec after setInterval)
            //why counter ?
  }, [isActive, counter]) //the dependency array ensures that the effect ONLY runs when either of them changes

  function stopTimer(){
    setIsActive(false);
    setCounter(0);
    setSecond('00');
    setMinute('00');
    setHour('00');
  }
  return(
    <div className="container">

      <div className="time">
        <span className="hour">{hour}</span>
        <span>:</span>
        <span className="minute">{minute}</span>
        <span>:</span>
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
