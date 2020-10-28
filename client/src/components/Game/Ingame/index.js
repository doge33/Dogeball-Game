import React from "react";
import Button from "../../Button";

function Ingame(props) {

  return (
    <div>
      <h1>Hello this is In-game mode</h1>
      <Button onClick={props.onClick}>Game finished. Go back to game lobby mode</Button>
    </div>

  )

}

export default Ingame;