import React from "react";
import className from "classnames";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import "../components/Home.scss";
import Introduction from "../components/Introduction";
import LoginForm from '../components/LoginForm'
import Leaderboard from "../components/Leaderboard";
import UserHistory from "../components/UserHistory";

library.add(faFacebookF, faLinkedinIn, faGoogle)

function Home() {

  const userID = 5

  return (
    <main classname="App">
      <section className="introduction">
        <Introduction />
      </section>

      <ThemeProvider theme={theme}>
        <div className="App">
          <LoginForm />
        </div>
      </ThemeProvider>

      {/* for now these are displayed on the HOME page just for convenience...sigh */}
      <Leaderboard />
      <UserHistory user={userID} />
    </main>
  )
}


export default Home;