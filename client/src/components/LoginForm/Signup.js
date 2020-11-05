import React, { useState, useContext } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import UserContext from '../../Context/userContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SocialButton from './styled/SocialButton'
import Button from './styled/BrandButton'
import SlidingForm from './styled/SlidingForm'


function Signup() {

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const { user, setUser } = useContext(UserContext)
  const isInvalid =
    state.password !== state.password_confirmation ||
    state.password === "" ||
    state.email === "" ||
    state.username === "";

  /**
 * use of History to redirect the page
 */
  const history = useHistory()

  /** Function setting the state of controlled inputs
   * @param {event} change object occurs when there is change in input element of form
  */
  const handleChange = event => {
    const value = event.target.value
    // Set the state of controlled inputs
    setState({
      ...state,
      [event.target.name]: value
    });
  }


  const handleLogin = data => {
    setUser({
      ...user,
      isLoggedIn: true,
      user: data.user
    });
  }

  /** Submits the Form when the button is clicked
   * takes no argument
   * executes the asyc flow of axios to api call
   */
  const handleSubmit = () => {
    // POST request to the rails server to enter the data to the database
    axios.post("/api/users", {
      "user": { ...state }
    }, { withCredentials: true })
      .then(res => {
        if (res.data.status === "created") {
          handleLogin(res.data)
          history.push("/game")
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <SlidingForm signup>
      <h1 className="form-titles">Create Account</h1>
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
      <p>or register with your email</p> */}
      <form>
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          value={state.username}
          onChange={handleChange}
        />
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
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <input
          name="password_confirmation"
          type="password"
          placeholder="Password Confirmation"
          value={state.confirm_password}
          onChange={handleChange}
        />
      </form>
      <Button disabled={isInvalid} onClick={handleSubmit}>Sign up</Button>
    </SlidingForm>
  );
}

export default Signup;