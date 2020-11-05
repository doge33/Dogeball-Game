import React from "react";
import classNames from "classnames";
import "./tables.scss";

//table for User history
function Table2(props){

  const {listScores} = props
 
  return(

      <table class="table table-hover" >
      <thead class="thead-dark">
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