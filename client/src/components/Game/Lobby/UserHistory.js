import React, {useState} from "react";
import {Collapse} from "react-bootstrap";
import Button from "../../Button";
import Table2 from "./Table2";
import useApplicationData from "../../../hooks/useApplicationData";

import "../Game.scss";

function UserHistory(props) {
  const [open, setOpen] = useState(false);

  //const {user} = props;
  const {user} = props
console.log("inside User history, user is", user)

  const {state, dispatch} = useApplicationData();
  
  const userMatches = state.matches.filter((match) => user.id === match.user_id)

  const userHistory = userMatches.map((match) => {

    const date = new Date(match.day_played)
    const dateParsed = `${date.getUTCFullYear()}. ${date.getUTCMonth()}. ${date.getUTCDate()}`
    
    return(
      <tr>
        <th>{match.score}</th>
        <th>{dateParsed}  </th>
      </tr>
    
    );
  })
  
  return (
    <div>
      <Button onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
          <h1> Game History </h1>
        </Button>

        <Collapse in={open}>
        <div id="collapse-text"><Table2 className="table" listScores={userHistory}/></div>
      </Collapse>
    </div>
  )
}

export default UserHistory;


