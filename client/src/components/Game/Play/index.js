import React, {useState, useEffect} from "react";
import Pregame from "./Pregame/index";
import Ingame from "./Ingame/index";
import className from "classnames";

import useVisualMode from "../../../hooks/useVisualMode";

function Play(props){

  const PREGAME = "PREGAME";
  const INGAME = "INGAME";
  const { mode, transition, back } = useVisualMode(PREGAME);


  return(
    <div>
      
      

      {mode === PREGAME && <Pregame onReady={()=>transition(INGAME)} />}

      {mode === INGAME && <Ingame onQuit={props.onQuit} />} 
      
    </div>
  )
}

export default Play;