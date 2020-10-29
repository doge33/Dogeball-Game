import React from "react";
import classNames from "classnames";

//table for Leaderboard
function Table1(props){

  const {listScores} = props
 
  return(

      <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#Rank</th>
          <th scope="col">Highest_Score</th>
          <th scope="col">Duration</th>
          <th scope="col">Player</th>
        </tr>
      </thead>
      <tbody>
        {listScores}
      </tbody>
    </table>

  )
}

export default Table1;