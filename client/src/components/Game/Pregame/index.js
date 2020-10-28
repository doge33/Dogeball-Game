import React from "react";
import Navbar from "../Navbar";
import Button from "../../Button";


function Pregame(props) {

  return (
    <div>
      <Navbar user={props.user}/>
      <h1>Hello this is Pre-game mode</h1>
      <Button onClick={() => props.onClick()}>Go to In-game mode</Button>
    </div>

  )

}

export default Pregame;