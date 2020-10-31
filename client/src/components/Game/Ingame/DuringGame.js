import React, {useContext} from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import gameContext from "../../../Context/gameContext";
import Timer from "./Timer";

function DuringGame(props){

  const {gameActive, setGameActive} = useContext(gameContext);

  return(
    <div>
      <h1>DuringGame mode</h1>

      <Timer gameActive={gameActive}/>
      <button onClick={props.gameOver}>Game-over: go to OverCountdown mode</button>
    </div>
    

  )

}

export default DuringGame;