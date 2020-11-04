import React from "react";
import classNames from "classnames";
import Button from "./Button";
import Leaderboard from "./Game/Lobby/Leaderboard"
import History from "./Game/Lobby/UserHistory"


function Navbar(props) {

  console.log(props.user)
  const username = props.user.username ? props.user.username : ""
  const navClass = classNames("navbar-expand-lg navbar-light", {
    "navbar__layout": username,
    "navbar__landing-page": username === "",
    "navbar": true
  })

  return (

    <nav className={navClass}>

      {
        username ?
          <div className="navbar--user">
            <h1>Welcome {username}</h1>
            <Leaderboard />
            <History />
            <div>
              <Button onClick={props.logout}>Signout</Button>
            </div>
          </div> :

          <div className="nav-bar-container">
            <h1>DogeBall</h1>
            <div >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a href="#about">
                    <div className="icon">
                      <i className="fa fa-file-text-o" aria-hidden="true"></i>
                      <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    </div>
                    <div className="name"><span data-text="About">About</span></div>
                  </a>
                </li>
                <li className="nav-item active">
                  <a href="#team">
                    <div className="icon">
                      <i className="fa fa-users" aria-hidden="true"></i>
                      <i className="fa fa-users" aria-hidden="true"></i>
                    </div>
                    <div className="name"><span data-text="Team">Team</span></div>
                  </a>
                </li>
              </ul>
            </div>
            <Leaderboard />
            <History />
          </div>
      }
    </nav >

  )
}

export default Navbar;