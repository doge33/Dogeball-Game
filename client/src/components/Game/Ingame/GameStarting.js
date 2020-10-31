import React, {useState, useContext} from "react";

import StartCountdown from "./StartCountdown";

function GameStarting(){

  const [counter, setCounter] = useState(3);

  

  return(
    <div><h1>GameStarting mode</h1>
    <StartCountdown />

    </div>
  )

}

export default GameStarting;