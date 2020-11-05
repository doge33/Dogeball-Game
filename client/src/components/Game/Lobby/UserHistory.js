import React, {useState, useContext} from "react";
import {Collapse} from "react-bootstrap";
import Button from "../../Button";
import Table2 from "./Table2";
import useApplicationData from "../../../hooks/useApplicationData";
import userContext from "../../../Context/userContext";

import "../Game.scss";

function UserHistory() {
  const [open, setOpen] = useState(false);
  const {state} = useApplicationData();
  const {user} = useContext(userContext);

  //find matches that were played by logged-in user
  const userMatches = state.matches.filter((match) => user.user.id === match.user_id)

  const sortedHistory = userMatches.sort((a,b) => new Date(b.day_played) - new Date(a.day_played))

  const userHistory = sortedHistory.map((match) => {

      const date = new Date(match.day_played)
    const dateParsed = `${date.getUTCFullYear()}. ${date.getUTCMonth()+1}. ${date.getUTCDate()}`
    

    return(
      <tr>
        <th style={{fontFamily: "Orbitron", color:"white"}}>{match.score}</th>
        <th style={{fontFamily: "Orbitron", color:"white"}}>{dateParsed}  </th>
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


