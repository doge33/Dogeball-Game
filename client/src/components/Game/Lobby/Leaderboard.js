import React, {useState} from "react";
import useApplicationData from '../../../hooks/useApplicationData';
import Button from "../../Button";
import {Collapse} from "react-bootstrap";
import classNames from "classnames";

import "../Game.scss";

function Leaderboard() {
  const { state, dispatch } = useApplicationData();

  const listScores = state.matches.map((match) => (<li style={{listStyle: "none"}}> Match: {match.id} Score: {match.score} Duration: {match.duration} Player: {match.user_id} </li>));
  //const listScores = state.matches.map((match) => (<li> Match: {match.id} Score: {match.score} duration:{match.end_time - match.start_time} Player: {match.user_id} </li>));
  const [open, setOpen] = useState(false);

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

