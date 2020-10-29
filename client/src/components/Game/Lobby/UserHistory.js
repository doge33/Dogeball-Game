import React, {useState} from "react";
import {Collapse} from "react-bootstrap";
import Button from "../../Button";
import useApplicationData from "../../../hooks/useApplicationData";

import "../Game.scss";

function UserHistory(props) {

  //const {user} = props;
  const {user} = props

  const {state, displatch} = useApplicationData();
  
  const userMatches = state.matches.filter((match) => user.id === match.user_id)

  const userHistory = userMatches.map((match) => (<li style={{listStyle: "none"}}> Match: {match.id} Score: {match.score} Started: {match.start_time} Ended: {match.end_time} Player: {match.user_id} </li>));

  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <Button onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
          <h1> Game History </h1>
        </Button>

        <Collapse in={open}>
        <div id="collapse-text">{userHistory}</div>
      </Collapse>
    </div>
  )
}

export default UserHistory;


