import React, { Fragment, useState } from "react";
// import className from "classnames";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import "../components/Home.scss";
import kite from "../kite.png"
import Introduction from "../components/Introduction";
import LoginForm from '../components/LoginForm'
import Navbar from "../components/Navbar";
import TeamCards from "../components/TeamCards"
import UserHistory from "../components/Game/Lobby/UserHistory";

library.add(faFacebookF, faLinkedinIn, faGoogle)

function Home() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    user: {}
  })

  return (
    <Fragment>
      <Navbar user={user} />
      {/* <div className="scrolling-box"> */}
      <main className="main-container" id="about">


        <section className="introduction">
          <Introduction />
        </section>

        <ThemeProvider theme={theme}>
          <div className="form">
            <LoginForm />
          </div>
        </ThemeProvider>
      </main>

      <TeamCards />
      {/* </div> */}
      <section className="animation">
        <img className="kite" src={kite} alt="kite" />
      </section>
    </Fragment>
  )
}


export default Home;