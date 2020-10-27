import React, { useState } from "react";
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SocialButton from './styled/SocialButton'
import BrandButton from './styled/BrandButton'
import SlidingForm from './styled/SlidingForm'


function Signup() {

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

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

  /** Submits the Form when the button is clicked
   * takes no argument
   * executes the asyc flow of axios to api call
   */
  const handleSubmit = () => {
    // POST request to the rails server to enter the data to the database
    axios.post("api/users", {
      "user":
      {
        username: state.username,
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation
      }
    })
      .then(res => console.log(res, "check"))
      .catch(err => console.log(err))
  }

  return (
    <SlidingForm signup>
      <h1>Create Account</h1>
      <div>
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
      <p>or register with your email</p>
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
      <BrandButton onClick={handleSubmit}>Sign up</BrandButton>
    </SlidingForm>
  );
}

export default Signup;