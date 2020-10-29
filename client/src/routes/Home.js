import React from "react";
import className from "classnames";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import "../components/Home.scss";
import Introduction from "../components/Introduction";
import LoginForm from '../components/LoginForm'
import Navbar from "../components/Game/Navbar";

library.add(faFacebookF, faLinkedinIn, faGoogle)

function Home() {
  //fixture
  let user = {};

  return (
    <main classname="App">
      <Navbar user={user} />
      <section className="introduction">
        <Introduction />
      </section>

      <ThemeProvider theme={theme}>
        <div className="App">
          <LoginForm />
        </div>
      </ThemeProvider>
    </main>
  )
}


export default Home;