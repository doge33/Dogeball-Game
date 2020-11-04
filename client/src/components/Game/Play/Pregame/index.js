import React from "react";
import Navbar from "../../../Navbar";
import Button from "../../../Button";
import Tutorial from "../../Tutorial";
//import "../../Tutorial.scss"; //=> conflict with App.scss


function Pregame(props) {

  //insert tutorial here
  return (
    
    <div className="animate-in pre-game">
    {/* <Navbar  />  */}
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
          
      </div> 
      
      <div className="instructions">
        <h1>Try to catch dogeballs and avoid the nyan-cats using your face & hands!</h1>
      <Button id="ready-btn" onClick={() => props.onReady()}>I'm ready!</Button>
      </div>
      
      <Tutorial />
    </div>
    

  )

}

export default Pregame;