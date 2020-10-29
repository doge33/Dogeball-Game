import React, { useState, useContext } from "react";
import classNames from "classnames";
import Button from "../Button";


function Navbar(props) {
  //if user is loggined in?
  const [username, setUsername] = useState(props.user.username || "");


  const greeting = username ? `Hello, ${username}!` : "Welcome!"

  const logoutButton = username ? <Button variant="success" type="submit"> Signout </Button> : ""


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent mb-10">

      <div className="navbar-brand">DOGEBALL</div>
      <div style={{ marginRight: "1.5em" }}><h4>{greeting}</h4></div>
      {logoutButton}

    </nav>

  )
}

export default Navbar;