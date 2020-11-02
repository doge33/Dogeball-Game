import React, {useContext, useEffect, useState} from "react";
import gameContext from "../../../../../Context/gameContext";
import scoreContext from "../../../../../Context/scoreContext";
import countScoreContext from "../../../../../Context/countScoreContext";
import NewCamera from "../../../NewCamera";
import Timer from "./Timer";

function DuringGame(props){

  const {score, setScore} = useContext(scoreContext);

  useEffect(()=>{
    console.log("in During game, score is:", score);
  }, [score])

  //make axios post call

  return(
    <div>
      <NewCamera className="Newcamera"  /> 
      <h1>DuringGame mode</h1>
      <Timer gameOver={props.gameOver} /> 
      <button onClick={props.gameOver}>Game-over: go to OverCountdown mode</button>
    </div>

  )

}

export default DuringGame;