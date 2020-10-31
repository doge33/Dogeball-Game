import React from "react";
import { Link } from 'react-router-dom'

import Login from "./Login";
import Signup from "./Signup";
import Overlay from "./Overlay";

import Container from "./styled/Container";

import useToggle, { STATE_LOG_IN } from "./useToggle";

const Form = ({ initialState = STATE_LOG_IN }, props) => {
  const [mode, toggleMode] = useToggle(initialState);

  return (
    <Container style={{
      width: "650px", height: "350px"
    }} pose={mode === STATE_LOG_IN ? "signup" : "login"}>
      <div className="container__form container__form--one">
        < Login onSubmit={props.onSubmit} mode={mode} />
      </div >
      <div className="container__form container__form--two">
        <Signup mode={mode} />
      </div>
      <Overlay toggleMode={toggleMode} mode={mode} />
    </Container >
  );
};

export default Form;