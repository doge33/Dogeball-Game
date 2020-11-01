import React, {useContext, useEffect, useState} from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import gameContext from "../../../../../Context/gameContext";
import NewCamera from "../../../NewCamera";
import Timer from "./Timer";

function DuringGame(props){

  const {gameActive, setGameActive} = useContext(gameContext);
  const [canvas, setCanvas] = useState(null);

  useEffect(()=>{
    return <NewCamera className="Newcamera" />
  }, [canvas])

  
  return(
    <div>
      <h1>DuringGame mode</h1>
      <NewCamera className="Newcamera" canvas={canvas} /> 
      <Timer gameActive={gameActive} gameOver={props.gameOver}/> 
      <button onClick={props.gameOver}>Game-over: go to OverCountdown mode</button>
    </div>
    

  )

}

export default DuringGame;