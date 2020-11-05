import React, { useState } from "react";
import useApplicationData from '../../../hooks/useApplicationData';
import Button from "../../Button";
import Table1 from "./Table1";

import { Collapse } from "react-bootstrap";
import "../Game.scss";

function Leaderboard() {
  const { state, dispatch } = useApplicationData();
  const [open, setOpen] = useState(false);

  function ranking(state) {
    let rankScores = [];
    console.log(state.users)
    for (let m = 0; m < state.matches.length - 1; m++) {

      const match = state.matches[m];
      const user = state.users.find(user => user.id === match.user_id)

      const date = new Date(match.day_played)
      const dateParsed = `${date.getUTCFullYear()}. ${date.getUTCMonth()+1}. ${date.getUTCDate()}`
      const game = (
        <tr>
          <th style={{fontFamily: "Orbitron", color:"white"}} scope="row">{m + 1}</th>
          <th style={{fontFamily: "Orbitron", color:"white"}}>{match.score}</th>
          <th style={{fontFamily: "Orbitron", color:"white"}}>{dateParsed}</th>
          <th style={{fontFamily: "Orbitron", color:"white"}}>{user.username} </th>
        </tr>
      )

      rankScores.push(game);
    }

    return rankScores;
  };

  const listScores = ranking(state);

  return (
    <div >

      <Button 
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <h1> Leaderboard </h1>
      </Button>
      
      <Collapse in={open}>
        <div id="collapse-text"><Table1 className="table table-dark" listScores={listScores} /></div>
      </Collapse>

    </div>
  )
}

export default Leaderboard;

