import React from "react";
import useApplicationData from "../../../hooks/useApplicationData";

function UserHistory(props) {

  //const {user} = props;
  const {user} = props

  const {state, displatch} = useApplicationData();
  
  const userMatches = state.matches.filter((match) => user.id === match.user_id)

  const userHistory = userMatches.map((match) => (<li> Match: {match.id} Score: {match.score} Started: {match.start_time} Ended: {match.end_time} Player: {match.user_id} </li>));

  
  
  return (
    <div>
      <h1> Game History </h1>
      <div className="history">
        <ul>{userHistory}</ul>
      </div>
    </div>
  )
}

export default UserHistory;


