import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import className from "classnames";

function Signup(props) {

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const handleChange = event => {
    const value = event.target.value
    setState({
      ...state,
      [event.target.name]: value
    });
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
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              value={state.confirm_password}
              onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Signup
        </Button>
        </Form>
      </section>
    </main>

  );
}

export default Signup;