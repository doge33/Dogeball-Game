import React, {useContext, useEffect, useState} from "react";
import NewCamera from "../../../NewCamera";
import Timer from "./Timer";
import Score from "./Score";
import classNames from "classnames";
import "./DuringGame.scss";

function DuringGame(props) {

  return(
    // style={{backgroundImage:`url(${universe})`,
    // backgroundSize:"cover"}}
    <div className="during" >
      <div className="banner">
      <Score style={{marginLeft:"10%"}}/>
      <div id="logo">DogeBall</div>
      <Timer  gameOver={props.gameOver} /> 
      {/* <button onClick={props.gameOver}>Game-over: go to OverCountdown mode</button> */}
      </div>
      <NewCamera className="Newcamera" style={{position:"absolute"}}/>
    </div>

  )

}

export default DuringGame;