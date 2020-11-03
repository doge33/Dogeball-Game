import React, {useContext, useEffect} from "react";
import scoreContext from "../../../../../Context/scoreContext";
import classNames from "classnames";
import "./score.scss";

function Score(){

  const {score} = useContext(scoreContext);


  return (
    <div id="score">
      <h1>Score :</h1>
      <h1>{score}</h1>
    </div>
  )

}

export default Score;
