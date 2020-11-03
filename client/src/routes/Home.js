import React, { Fragment, useState } from "react";
// import className from "classnames";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import "../components/Home.scss";

import Introduction from "../components/Introduction";
import LoginForm from '../components/LoginForm'
import Navbar from "../components/Navbar";
import TeamCards from "../components/TeamCards"

library.add(faFacebookF, faLinkedinIn, faGoogle)

function Home() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    user: {}
  })

  return (
    <Fragment>

      <Navbar user={user} />

      <main className="main-container animate-in" id="about">
        <section className="introduction">
          <Introduction />
        </section>

        <ThemeProvider theme={theme}>
          <div className="form">
            <LoginForm user={user} />
          </div>
        </ThemeProvider>
      </main>

      <TeamCards />

    </Fragment>
  )
}


export default Home;