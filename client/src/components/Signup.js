import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'
//import className from "classnames";

function Signup(props) {

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
    <main>
      <section>
        <Form onSubmit={event => event.preventDefault()}>

          <Form.Group controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter username"
              value={state.username}
              onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              name="password_confirmation"
              type="password"
              placeholder="Password Confirmation"
              value={state.confirm_password}
              onChange={handleChange} />
          </Form.Group>

          <Button onClick={handleSubmit} variant="primary" type="submit">
            Signup
        </Button>
        </Form>
      </section>
    </main>

  );
}

export default Signup;