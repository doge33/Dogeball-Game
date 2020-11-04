import React, { useEffect, useContext, useState } from "react";
import UserContext from '../Context/userContext'
import className from "classnames";
//import "../components/Game.scss";
import NewCamera from "../components/Game/NewCamera"
import Lobby from "../components/Game/Lobby/index";
import Play from "../components/Game/Play/index";
import Pregame from "../components/Game/Play/Pregame/index";
import Ingame from "../components/Game/Play/Ingame/index";
import useVisualMode from "../hooks/useVisualMode";
import Navbar from "../components/Navbar";
import axios from 'axios';
import { useHistory } from 'react-router-dom'


function Game() {


  const LOBBY = "LOBBY";
  const PLAY = "PLAY";

  const history = useHistory()


  const { user, setUser } = useContext(UserContext)

  // Navigating Modes
  const { mode, transition, back } = useVisualMode(PLAY);
  //console.log(user, "check")

  const handleLogout = () => {
    axios.post("/logout", {}, { withCredentials: true })
      .then((res) => {
        setUser({
          ...user,
          isLoggedIn: false,
          user: {}
        })
        history.push('/')
      })
  }

  //if mode === PREGAME
  return (
    //fixtures

    <div>
      {/* <Navbar user={user.user} logout={handleLogout} /> */}
      {mode === LOBBY && <Lobby user={user.user} onPlay={() => transition(PLAY, true)} />}
      {mode === PLAY && <Play user={user.user} onQuit={() => transition(LOBBY, true)} />}

    </div>
  )
}

export default Game;