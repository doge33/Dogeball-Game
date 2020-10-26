import React from "react";
import useApplicationData from '../hooks/useApplicationData';

function Leaderboard() {
  const { state, dispatch } = useApplicationData();

  const listScores = state.matches.map((match) => (<li> Match: {match.id} Score: {match.score} Started: {match.start_time} Ended: {match.end_time} Player: {match.user_id} </li>));
  
  return (
    <div>
      <h1> Leaderboard </h1>
      <div className="leaderboard">
        <ul>{listScores}</ul>
      </div>
    </div>
  )
}

export default Leaderboard

