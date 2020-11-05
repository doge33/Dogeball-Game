import React, {useEffect, useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import Navbar from "../../../Navbar";
import Button from "../../../Button";
import Tutorial from "../../Tutorial";
import userContext from "../../../../Context/userContext"
import tutorialContext from "../../../../Context/tutorialContext";
import Leaderboard from "../../Lobby/Leaderboard";
import UserHistory from "../../Lobby/UserHistory";
import "../../Tutorial.scss"; //=> conflict with App.scss
import axios from 'axios';

function Pregame(props) {

  //let tutorialOpen = false;
  const [tutorialActive, setTutorialActive] = useState(false)

  const {user, setUser} = useContext(userContext)
  
  const history = useHistory()
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
  
    function expandTutorial(){
        setTutorialActive(!tutorialActive);

      }
  //insert tutorial here
  return (

    <tutorialContext.Provider value={{tutorialActive, setTutorialActive}}>
    <div className="animate-in pre-game">
    <Navbar  user={user.user} logout={handleLogout} /> 
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
          
      </div> 
      
      <div className="instructions" style={{marginTop:"10rem"}}>
      {/* style={{color:"#91C7B1"}} */}
        <h1 style={{marginBottom:"5rem"}}>CLICK THE READY BUTTON TO BEGIN PLAYING</h1>
        <Button id="ready-btn" onClick={() => props.onReady()}>Ready</Button>
      <div className="tutorial" style={{marginTop:"5rem"}}>
        <Button id="tutorial-btn" onClick={() => expandTutorial()}>Tutorial</Button>
      <Tutorial id="tutorial"/>
      </div>

      </div>

    </div>
    </tutorialContext.Provider>

  )

}

export default Pregame;