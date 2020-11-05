import React, { useState, useContext } from "react";
import axios from 'axios';
import UserContext from '../../Context/userContext'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import SocialButton from './styled/SocialButton'
import Button from './styled/BrandButton'
import SlidingForm from './styled/SlidingForm'

function Login(props) {

  const { user, setUser } = useContext(UserContext)
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  /**
   * use of History to redirect the page
   */
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

  const handleLogin = data => {
    setUser({
      ...user,
      isLoggedIn: true,
      user: data.user
    });
  }


  /**
 * Functions calls the axios to find the data from database
 * Update the user state if found
 */
  const handleSubmit = () => {
    // POST request to the rails server to enter the data to the database
    axios.post("/login", { ...state }, { withCredentials: true })
      .then(res => {
        // check if the user is loggge in
        // if (res.data.logged_in) {
        handleLogin(res.data)
        history.push("/game")
        // }
      })
      .catch(err => console.log('api error:', err))


  }

  return (
    <SlidingForm>
      <h1 className="form-titles">Sign in</h1>
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
      <Button onClick={handleSubmit}>Sign in</Button>
    </SlidingForm>
  )
}

export default Login;