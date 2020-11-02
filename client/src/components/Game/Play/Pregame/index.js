import React from "react";
import Navbar from "../../../Navbar";
import Button from "../../../Button";
import NewCamera from "../../NewCamera";


function Pregame(props) {

  return (
    <div>
    <div>
      {/* <Navbar user={props.user}/> */}
      
      <h1>Hello this is Pre-game mode</h1>
      <Button  onClick={() => props.onReady()}>Go to In-game mode</Button>
    </div>
    {/* <NewCamera className="Newcamera" /> */}
    </div>
  )

}

export default Pregame;