import React from "react";
import className from "classnames";
import "../components/Home.scss";

import Introduction from "../components/Introduction";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Leaderboard from "../components/Leaderboard";
import UserHistory from "../components/UserHistory";

function Home() {

  const userID = 5 

  return (
    <main classname="App">
      <section className="introduction">
        <Introduction />
      </section>

      <section className="forms">
        <Signup />
        <Login />
      </section>

      {/* for now these are displayed on the HOME page just for convenience...sigh */}
      <Leaderboard />
      <UserHistory user={userID}/>
    </main>
  )
}

export default Home;