import React, {useContext, useEffect} from "react";
import scoreContext from "../../../../../Context/scoreContext";
import classNames from "classnames";

function Score(){

  const {score} = useContext(scoreContext);


  return (
    <div classNames="score">
      <h1>Score Board</h1>
      <h1>{score}</h1>
    </div>
  )

}

export default Score;
