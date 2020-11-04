import React from 'react'
import StyledOverlay, { InnerLogin, InnerSignup } from './styled/StyledOverlay'
import { STATE_LOG_IN } from './useToggle'

const WelcomeOverlay = () => (
  <InnerLogin className="inner">
    <h1>Welcome Back!</h1>
    <p>Login to the side to resume catching Doges</p>
  </InnerLogin>
)

const NewOverlay = () => (
  <InnerSignup className="inner">
    <h1>Hey There!</h1>
    <p>Enter your details to the side to start your Doge catching adventure</p>
  </InnerSignup>
)

const Overlay = ({ toggleMode, mode }) => (
  <StyledOverlay className="overlay">
    <WelcomeOverlay />
    <NewOverlay />
    <button onClick={toggleMode}>
      <span>{mode === STATE_LOG_IN ? 'Sign in' : 'Sign up'}</span>
    </button>
  </StyledOverlay>
)

export default Overlay
