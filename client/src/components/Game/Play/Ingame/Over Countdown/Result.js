import React from "react";
import classNames from "classnames";
import "./Result.scss";
import nyan from "../../../../../assets/nyan_cat.png";
import doge from "../../../../../assets/dogehero.png";


function Result(props){

  const {score} = props;
  return(
    <div id="result">
      <div className="consequence">{score < 10? "The Evil Nyan Cats Have Taken Over": "Doge Hero" }</div>
      <div >{score < 10? <img id="cat" src={nyan}/>: <img id="dog" src={doge} style={{maxWidth: "250px", height:"auto"}}/> }</div>
      <div className="consequence-score">score: {score}</div>
    </div>
  )
}

export default Result;