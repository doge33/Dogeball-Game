import React from "react";
import className from "classnames";
import "../components/Home.scss"

import Introduction from "../components/Introduction";
import Signup from "../components/Signup";
import Login from "../components/Login";

function Home() {
  return (
    <main classname="App">
      <section className="introduction">
        <Introduction />
      </section>

      <section className="forms">
        <Signup />
        <Login />
      </section>
    </main>
  )
}

export default Home;