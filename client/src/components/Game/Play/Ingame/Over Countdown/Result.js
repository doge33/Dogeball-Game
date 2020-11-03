import React from "react";
import classNames from "classnames";
import "./Result.scss";

function Result(props){

  const {score} = props;
  return(
    <div id="result">
      <h1>{score}</h1>
      <h1>{score < 10? "The Evil Nyan Cats Have Taken Over" : "Doge Hero" }</h1>
    </div>
  )
}

export default Result;