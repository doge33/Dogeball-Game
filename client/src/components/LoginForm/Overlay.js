import React from 'react'
import StyledOverlay, { InnerLogin, InnerSignup } from './styled/StyledOverlay'
import { STATE_LOG_IN } from './useToggle'

const WelcomeOverlay = () => (
  <InnerLogin className="inner">
    <h1  className="form-titles">Welcome Back!</h1>
    <p className="form-contents">Sign in to the side to resume the Doge catching</p>
  </InnerLogin>
)

const NewOverlay = () => (
  <InnerSignup className="inner">
    <h1 className="form-titles">Hello there!</h1>
    <p className="form-contents">Enter your details to the side to start your Doge catching adventure</p>
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
