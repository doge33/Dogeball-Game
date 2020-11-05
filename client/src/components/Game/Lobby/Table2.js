import React from "react";
import classNames from "classnames";
import "./tables.scss";

//table for User history
function Table2(props){

  const {listScores} = props
 
  return(

      <table class="table table-hover table-striped" >
      <thead class="thead">
        <tr>
          <th scope="col">Score</th>
          <th scope="col">Played on</th>
        </tr>
      </thead>
      <tbody>
        {listScores}
      </tbody>
    </table>

  )
}

export default Table2;