import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import SocialButton from './styled/SocialButton'
import Button from './styled/BrandButton'
import SlidingForm from './styled/SlidingForm'
// import Button from '../Button'

function Login(props) {

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const [user, setUser] = useState({
    isLoggedIn: false,
    user: {}
  })

  const history = useHistory()
  /** Function setting the state of controlled inputs
   * @param {event} change object occurs when there is change in input element of form
  */
  const handleChange = event => {
    const { name, value } = event.target
    // Set the state of controlled inputs
    setState({
      ...state,
      [name]: value
    });
  }

  const handleSubmit = () => {
    // POST request to the rails server to enter the data to the database
    axios.all([
      axios.post("/login", { ...state }, { withCredentials: true }),
      // axios.get("/logged_in", { withCredentials: true })
    ])
      .then(resArr => {
        if (resArr[0].data.logged_in) {
          handleLogin(resArr[0].data)
          // if (user.isLoggedIn) {
          history.push("/game")
          // }
        }
        //   // } else {
        //   //   handleLogout()
      })
      .catch(err => console.log('api error:', err))
  }

  const handleLogin = data => {
    setUser({
      ...user,
      isLoggedIn: true,
      user: data.user
    });
  }

  const handleLogout = () => {
    axios.post("/logout")
      .then((res) => {
        console.log(res)
        setUser({
          ...user,
          isLoggedIn: false,
          user: {}
        })
      })
  }

  // const loginStatus = () => {
  //   axios.get("http://localhost:3001/logged_in", { withCredentials: true })
  //     .then(res => {
  //       if (res.data.logged_in) {
  //         handleLogin(res)
  //       } else {
  //         handleLogout()
  //       }
  //     })
  //     .catch(err => console.log('api error:', err))
  // }

  return (
    <SlidingForm>
      <h1>Sign in</h1>
      {/* <div>
        <SocialButton>
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </SocialButton>
        <SocialButton>
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </SocialButton>
        <SocialButton>
          <FontAwesomeIcon icon={['fab', 'google']} />
        </SocialButton>
      </div>
      <p>or use your account</p> */}
      <form>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          value={state.value}
          onChange={handleChange}
        />
      </form>
      <p>
        <a href="#">Forgot your password?</a>
      </p>
      <Button onClick={handleSubmit}>Sign in</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </SlidingForm>
  )
}

export default Login;