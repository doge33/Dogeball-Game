import React, {useRef, useState, useEffect} from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet"
import {drawSkeleton, drawKeypoints} from "../../utilities";
import "./Game.scss";

//1. Install dependencis DONE
//2. Import dependencies DONE
//3. Setup webcam DONE(and canvas later) 
//4. Define references to those DONE
//5. Load posenet DONE
//6. Detect functions DONE
//7. Drawing utilities from tensorflow 
//8. Draw functions


//this goes into the Pre-game mode of Game route
function Camera() {

  //set webcam to an unchanging referece by useRef
  const webcamFeed = useRef(null);
  const canvasRef = useRef(null);
  const [poseNetModel, setPoseNetModel] = useState(null)
  const [loadState, setLoadState] = useState({webcam: false, model: false})
  
  const loadWebcamAndModel = async() => {
    //if user has a webcam
    if(navigator.mediaDevices.getUserMedia && webcamFeed.current !== null) {

      try{
        //user has video. load that video and feed it to the stream
        const stream = await navigator.mediaDevices.getUserMedia({video:true})
        
        //update the camera reference to the stream we got
        webcamFeed.current.srcObject = stream;
        console.log("webcamFeed is", webcamFeed)
        //change the load state to true cuz we ready now
        setLoadState(prev => ({...prev, webcam: true}))

        //load poseNet model
        const net = await posenet.load({
          architecture: 'MobileNetV1',
          outputStride: 16,
          inputResolution: { width: 640, height: 480 },
          multiplier: 0.75
        }); //this is actually by default the setting, so we can delete the object later; For now, leave it here as a reference
        
        setPoseNetModel(net)

        setInterval(() => {
          detect(net)
        }, 100)
        
      }
      catch(err) {
        console.log("Oops...something went wrong when loading the webcam/model! " + err)
      }
    }
  }

  //function for detecting pose
  const detect = async(net) => {
    //when model is ready, detect!
    if(poseNetModel) {
    const pose = await net.estimateSinglePose(webcamFeed.current, {
          flipHorizontal: false
        });
    setLoadState(prev => ({...prev, model: true}))
    //console.log(pose.keypoints);


    // const videoWidth = webcamFeed.current.videoWidth;
    // const videoHeight = webcamFeed.current.videoHeight;

    // const canvas = await document.getElementById("canvas");

    
      //console.log("canvas.current is", canvas)
    
    // drawCanvas(pose, webcamFeed, videoWidth, videoHeight, canvasRef);
      }
  }

  // Draw skeleton on canvas, utilizing the utility drawing functions from poseNet
  // const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
  //   const ctx = canvas.current.getContext("2d"); // grab canvas
  //   canvas.current.width = videoWidth; //match width and height as video
  //   canvas.current.height = videoHeight;

  //   //draw on canvas!
  //   drawKeypoints(pose["keypoints"], 0.5, ctx)
  //   drawSkeleton(pose["keypoints"], 0.5, ctx)
  // }



  useEffect(() => {
    loadWebcamAndModel()
  }, [])




    
  return (
    
    <div className="camera">
      <h1>This is pre-game!</h1>
      <video ref={webcamFeed} autoPlay
      style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
        zindex: 9, //an element with a higher zindex number is always in front of an element with a lower zindex number
        width: 480,
        height: 640
      }}/>

      <canvas 
        ref={canvasRef}
        style= {{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 480,
          height: 640
          }}
       />
    
    </div>
  )
}

export default Camera;