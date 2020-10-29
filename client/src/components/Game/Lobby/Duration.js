import React from "react";

function Duration(props){
  const minute = new Date(props.duration).getMinutes();
  const seconds = new Date(props.duration).getSeconds();

  return (
    <span>
      {minute}:{seconds}
    </span>
  )
}

export default Duration;