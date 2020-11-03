import React from "react";
import classNames from "classnames";
import "./Result.scss";
import nyan from "../../../nyan_cat.png";
import doge from "../../../doge_ball.png";


function Result(props){

  const {score} = props;
  return(
    <div id="result">
      <div className="consequence">{score < 10? "The Evil Nyan Cats Have Taken Over": "Doge Hero " }</div>
      <div >{score < 10? <img id="cat" src={nyan}/>: <img src={doge}/> }</div>
      <div className="consequence-score">score: {score}</div>
    </div>
  )
}

export default Result;