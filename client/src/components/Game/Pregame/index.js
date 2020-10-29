import React from "react";
import Navbar from "../Navbar";
import Button from "../../Button";
import NewCamera from "../NewCamera";


function Pregame(props) {

  return (
    <div>
      <Navbar user={props.user}/>
      <h1>Hello this is Pre-game mode</h1>
      <Button onClick={() => props.onClick()}>Go to In-game mode</Button>
      <NewCamera />
    </div>

  )

}

export default Pregame;