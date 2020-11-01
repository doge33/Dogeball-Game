import React from "react";
import className from "classnames";

function Introduction() {

  return (
    <div>
      <h1> WELCOME TO DOGEBALL! </h1>
      <div className="rules">
        <p>1. Please allow access to your webcam.</p>
        <p>2. Adjust your webcam & click Play</p>
        <p>3. Put up your hand before the camera and see their avatars on screen. Using your avatar, smash the START button when ready</p>
        <p>4. Try to catch as many Dogeballs as you can, and avoid touching it with your body</p>
        <p>5. Have fun!!!</p>
      </div>
    </div>
  )
}

export default Introduction