import React, {useState, useEffect, useContext} from "react";
import gameContext from "../../../../../Context/gameContext";
import countScoreContext from "../../../../../Context/countScoreContext";
import "./Timer.scss";
import classNames from "classnames";

function Timer (props) {

  const [second, setSecond] = useState(30);
  const {gameActive, setGameActive} = useContext(gameContext);
 
  

  useEffect(()=>{
    let intervalId;

    //when gameActive becomes true after startCoundown, start this timer of 60 sec
    if(gameActive && second > 0) {
      //make function expression so that clean up function can be used later.
      intervalId = setInterval(()=> {
        setSecond(second => second -1);
      }, 1000)
    }
    if(second === 0){
      //when 60s timer finishes, de-activate the game
      setGameActive(false);
      props.gameOver();
     }

    return() => clearInterval(intervalId); //clear interval when the effect stops running(1 sec after setInterval)
  }, [gameActive, second]) //the dependency array ensures that the effect ONLY runs when either of them changes

  function stopTimer(){
   
    setSecond(30);

  }
  //console.log("gameActive is", gameActive)
  return(
    <div className="container" id="timer">

      <div className="time">
        <div className="second">{second}</div> 
      </div>
    </div>
  )
}

export default Timer;

// This component is adapted from: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
// Date of access: Oct.29, 2020
