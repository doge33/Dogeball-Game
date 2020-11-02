import React, {useState} from "react";
import useApplicationData from '../../../hooks/useApplicationData';
import Button from "../../Button";
import Duration from "./Duration";
import Table1 from "./Table1";

import {Collapse} from "react-bootstrap";
import classNames from "classnames";

import "../Game.scss";



function Leaderboard() {
  const { state, dispatch } = useApplicationData();
  const [open, setOpen] = useState(false);

  console.log(state.matches);

  function ranking (state) {

    let rankScores = [];
    
    for (let m = 0; m < state.matches.length - 1; m++) {
      
      const match = state.matches[m];
      const user = state.users.find(user => user.id === match.user_id)

      const date = new Date(match.day_played)
      const dateParsed = `${date.getUTCFullYear()}. ${date.getUTCMonth()}. ${date.getUTCDate()}`

      const game = (
      <tr>
        <th scope="row">{m + 1}</th>
        <th>{match.score}</th>
        <th>{dateParsed}</th>
        <th>{user.username} </th>
      </tr>
      )

      rankScores.push(game);
      
    }
    return rankScores;
  };

  const listScores = ranking(state);
  

  return (
    <div>
      
      <Button onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}>
        <h1> Leaderboard </h1>
      </Button>

      <Collapse in={open}>
      <div id="collapse-text"><Table1 className="table" listScores={listScores}/></div>
      
      </Collapse>

      

    </div>

    
  )
}

export default Leaderboard;

