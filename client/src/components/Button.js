import React from 'react';
import classNames from "classnames";
import "./Game/button.scss";

function Button(props) {

  const buttonClass = classNames({
    "btn": true,
    //"btn-outline-info": true,
    "btn-lg": true
  })

  return (
    <button className={buttonClass}
      onClick={props.onClick}
    >{props.children}</button>
  )
}

export default Button;