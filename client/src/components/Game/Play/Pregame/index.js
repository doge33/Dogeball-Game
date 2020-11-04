import React from "react";
import Navbar from "../../../Navbar";
import Button from "../../../Button";
import Tutorial from "../../Tutorial";
import "../../Tutorial.scss";


function Pregame(props) {

  //insert tutorial here
  return (
    <div className="pre-game">
    <div className="animate-in">
      
      <h1>Hello this is Pre-game mode</h1>
      <Button  onClick={() => props.onReady()}>Go to In-game mode</Button>
      <Tutorial />
    </div>
    
    </div>
  )

}

export default Pregame;