import React, { useState } from "react";
import "../components/Home.scss"

import Introduction from "../components/Introduction";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'

import { ThemeProvider } from 'styled-components'

import theme from '../theme'
import "../components/Home.scss"
import LoginForm from '../components/LoginForm'

library.add(faFacebookF, faLinkedinIn, faGoogle)

function Home() {

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
    </main>
  )
}


export default Home;