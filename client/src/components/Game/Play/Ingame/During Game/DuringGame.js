import React, {useContext, useEffect, useState} from "react";
import gameContext from "../../../../../Context/gameContext";
import scoreContext from "../../../../../Context/scoreContext";
import NewCamera from "../../../NewCamera";
import Timer from "./Timer";

function DuringGame(props){

  const {gameActive, setGameActive} = useContext(gameContext);
  const {countScore, setCountScore} = useContext(gameContext);
  const {score, setScore} = useContext(scoreContext);
  useEffect(()=>{
    setCountScore(true);
  },[])

  useEffect(()=>{
console.log("in During game, score is:", score);
  }, [score])
  
  // const {score, setScore} = useContext(scoreContext);
  // const [canvas, setCanvas] = useState(null);

  // console.log("inside Duration; score is", score)

  return(
    <div>
      <h1>DuringGame mode</h1>
      {/* <NewCamera className="Newcamera" canvas={canvas} />  */}
      <Timer gameActive={gameActive} gameOver={props.gameOver} /> 
      <button onClick={props.gameOver}>Game-over: go to OverCountdown mode</button>
    </div>
    

  )

}

export default DuringGame;