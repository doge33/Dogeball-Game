import React, {useState} from "react";
import className from "classnames";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import "../components/Home.scss";
import Introduction from "../components/Introduction";
import LoginForm from '../components/LoginForm'
import Navbar from "../components/Game/Navbar";
import UserHistory from "../components/Game/Lobby/UserHistory";

library.add(faFacebookF, faLinkedinIn, faGoogle)

function Home() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    user: {}
  })
  //fixture
  // const user = {
  //   "id":5,
  //   "username":"jerome.schuppe",
  //   "email":"jim_lebsack@lesch.org",
  //   "password_digest":"KrDi86CxJ",
  //   "created_at":"2020-10-27T23:47:48.765Z",
  //   "updated_at":"2020-10-27T23:47:48.765Z"
  // }

  return (
    <main classname="App">
      <Navbar user={user}/>
      <section className="introduction">
        <Introduction />
      </section>

      <ThemeProvider theme={theme}>
        <div className="App">
          <LoginForm />
        </div>
      </ThemeProvider>

  <div>This is user</div>
    </main>
  )
}


export default Home;