import React, {useEffect, useState, useContext} from "react";
import Button from "../../../../Button";
import scoreContext from "../../../../../Context/scoreContext";
import userContext from "../../../../../Context/userContext";
import axios from "axios";
import classNames from "classnames";

function OverCountdown(props){

  const [counter, setCounter] = useState(15);
  const {score, setScore} = useContext(scoreContext);
  const {user, setUser} = useContext(userContext);

  useEffect(()=>{
    let intervalId;
    intervalId = setInterval(() =>{

      if(counter > 0){
        setCounter(counter - 1)
      } 
      if(counter === 0){
        props.onQuit(); //triggered by countdown to 0
      }
    }, 1000)

    return()=> clearInterval(intervalId); //clean up interval every re-render(basically every second)
  }, [ counter])

    //make axios post call to send match data
    //need: current user id, score, current day, 

    let match;

    useEffect(()=>{

      axios.post("/api/matches", 
        {
          "match":{
            "score": score,
          "user_id": user.id,
          "day_played": new Date()
          }
          
        },
      {withCredentials: true})
      .catch(err => console.log("inside axios post", err.message))

    },[])

  return(
    <div>
      <h1>this is OverCountdown mode</h1>
      <h1>{counter }</h1>
      <h1>FinalScore: {score}</h1>
      <h1>{score < 10? "The Evil Nyan Cats Have Taken Over" : "Doge Hero" }</h1>
      <div><Button onClick={props.onRestart}>Restart Game?</Button></div>
      {/* manually quit */}
      <div><Button onClick={props.onQuit}>Quit</Button></div>
    </div>
  )
}

export default OverCountdown;