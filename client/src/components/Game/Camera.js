import React, {useRef, useState, useEffect} from "react";
import "./Game.scss";
import className from "classnames";

//this goes into the Pre-game mode of Game route
function Camera() {

  //set webcam to an unchanging referece by useRef
  const webcamFeed = useRef(null);
  const [loadState, setLoadState] = useState({webcam: false, model: false})
  
  const loadWebcamAndModel = async() => {
    //if user has a webcam
    if(navigator.mediaDevices.getUserMedia && webcamFeed.current !== null) {

      try{
        //user has video. get that video and feed it to the stream
        const stream = await navigator.mediaDevices.getUserMedia({video:true})
        console.log("stream is", stream)
        stream.width = window.innerWidth;
        stream.height = window.innerHeight;
        //update the camera reference to the stream we got
        webcamFeed.current.srcObject = stream;
        console.log("webcamFeed is", webcamFeed)
        //change the load state to true cuz we ready now
        setLoadState(prev => ({...prev, webcam: true}))
        
      }
      catch(err) {
        console.log("Oops...something went wrong when loading the webcam/model! " + err)
      }
    }
  }

  useEffect(() => {
    loadWebcamAndModel()
  }, [])

    
  return (
    
    <div className="camera">
      <h1>This is pre-game!</h1>
      <video ref={webcamFeed} autoPlay />
    
    </div>
  )
}

export default Camera;