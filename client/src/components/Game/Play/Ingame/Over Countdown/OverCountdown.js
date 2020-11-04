import React, {useEffect, useState, useContext} from "react";
import Result from "./Result";
import scoreContext from "../../../../../Context/scoreContext";
import userContext from "../../../../../Context/userContext";
import useApplicationData from '../../../../../hooks/useApplicationData';
import classNames from "classnames";
import "./OverCountdown.scss"

function OverCountdown(props){

  const [counter, setCounter] = useState(9);
  const {sendMatchData} = useApplicationData();
  const {score, setScore} = useContext(scoreContext);
  const {user} = useContext(userContext);

  useEffect(()=>{
    let intervalId;
    intervalId = setInterval(() =>{

      if(counter > 0){
        setCounter(counter - 1)
      } 
      if(counter === 0){
        props.onQuit(); //triggered by countdown to 0
      }
    }, 1000)
    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [ counter])

    //make axios post call to send match data + update local state
    useEffect(()=> {
      sendMatchData(score, user)
      }, []);

  return(
    <div className="street-fighter">

        <div className="result"><Result score={score}/></div>
  
        <div className="continue">
          <p onClick={props.onRestart} className="pull-left" data-text="RESTART?"></p>
          <p onClick={props.onQuit} className="pull-right" data-text="QUIT"></p>
        </div>

        {/* manually quit */}
        <div className="wrapper">
          <div className="countdown"></div>
        </div>

    </div>
  )
}

export default OverCountdown;