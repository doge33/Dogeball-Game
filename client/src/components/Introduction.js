import React from "react";
import className from "classnames";

function Introduction() {

  return (
    <div>
      <h1> WELCOME TO DOGEBALL! </h1>
      <div className="rules">
        <p style={{fontSize: "21px"}}>
          1. Please allow access to your webcam<br />
          2. When starting a match, make sure you're in a well-lit area and at least a couple of feet back from your camera<br />
          3. Position your head and wrists within view of your camera, and confirm that the corresponding avatar points are rendered on screen.<br />
          4. The avatar points should move along with your head and wrists. Try to catch as many Dogeballs as you can while avoiding the dastardly Nyan Cats!<br />
          5. Have fun!!!
        </p>
      </div>
    </div>
  )
}

export default Introduction;