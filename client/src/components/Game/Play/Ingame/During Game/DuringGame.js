import React, {useContext, useEffect, useState} from "react";
import NewCamera from "../../../NewCamera";
import Timer from "./Timer";
import Score from "./Score";

function DuringGame(props){


  return(
    <div>
      <NewCamera className="Newcamera"  /> 
      <h1>DuringGame mode</h1>
      <Score />
      <Timer gameOver={props.gameOver} /> 
      <button onClick={props.gameOver}>Game-over: go to OverCountdown mode</button>
    </div>

  )

}

export default DuringGame;