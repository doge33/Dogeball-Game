import React, { useState, useContext } from "react";
import classNames from "classnames";
import Button from "../Button";


function Navbar(props) {
  //if user is loggined in?
  const [username, setUsername] = useState(props.user.username || "");


  const greeting = username ? `Hello, ${username}!` : "Welcome!"

  const logoutButton = username ? <Button variant="success" type="submit"> Signout </Button> : ""


  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-transparent mb-10">

    //   <div className="navbar-brand">DOGEBALL</div>
    //   <div style={{ marginRight: "1.5em" }}><h4>{greeting}</h4></div>
    //   {logoutButton}

    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-bar">
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> */}
      {/* <div className="nav-container"> */}
      <h1>DogeBall</h1>
      <div >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <div className="icon">
                <i class="fa fa-file-text-o" aria-hidden="true"></i>
                <i class="fa fa-file-text-o" aria-hidden="true"></i>
              </div>
              <div className="name"><span data-text="About">About</span></div>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <div className="icon">
                <i class="fa fa-users" aria-hidden="true"></i>
                <i class="fa fa-users" aria-hidden="true"></i>
              </div>
              <div className="name"><span data-text="Team">Team</span></div>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <div className="icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="name"><span data-text="Contact">Contact</span></div>
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav >

  )
}

export default Navbar;