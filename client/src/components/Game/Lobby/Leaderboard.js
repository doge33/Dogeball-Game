import React, {useState} from "react";
import useApplicationData from '../../../hooks/useApplicationData';
import Button from "../../Button";
import Duration from "./Duration";

import {Collapse} from "react-bootstrap";
import classNames from "classnames";

import "../Game.scss";



function Leaderboard() {
  const { state, dispatch } = useApplicationData();
  const [open, setOpen] = useState(false);

  const listScores = state.matches.map((match) => {
    
    const user = state.users.find(user => user.id === match.user_id)


    return(
    <li style={{listStyle: "none"}}> 
      Score: {match.score} Duration: <Duration duration={match.duration} /> Player: {user.username} 
    </li>
    );
  });
  

  return (
    <div>
      
        <Button onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
          <h1> Leaderboard </h1>
        </Button>

        <Collapse in={open}>
        <div id="collapse-text">{listScores}</div>
      </Collapse>


    </div>

    
  )
}

export default Leaderboard;

