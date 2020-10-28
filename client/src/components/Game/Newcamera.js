//1. Install dependencis DONE
//2. Import dependencies DONE
//3. Setup webcam and canvas DONE
//4. Define references to those DONE
//5. Load posenet DONE
//6. Detect functions DONE
//7. Drawing utilities from tensorflow DONE
//8. Draw functions

import React, {useRef} from 'react';
import './Game.scss';
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import {drawKeypoints, drawSkeleton} from "../../utilities";
import DrawHand from "./DrawHand";


function NewCamera() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //Load posenet
  const runPosenet = async() => {
    //wait till posenet is loaded
    const net = await posenet.load({
      architecture: 'MobileNetV1',
      outputStride: 16,
      inputResolution: {width:320, height: 240},
      multiplier: 0.5 //set this to a lower scale => faster but less accurate model
    })

    //continuously run the posenet model to create detections
    setInterval(() => {
      detect(net)
    }, 50)
  }

  //function to actually detect stuff. net is the loaded posenet model
  const detect = async(net) => {
    if(typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
      //Get Video Properties
      const video = webcamRef.current.video
      const videoWidth = window.innerWidth;//webcamRef.current.video.videoWidth / 2;
      const videoHeight = window.innerHeight;//webcamRef.current.video.videoHeight / 2;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      //Make Detections
      const pose = await net.estimateSinglePose(video, {
        flipHorizontal: true
      });
    
      // drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
      
      // console.log(pose["keypoints"]);
      let rightWrist = pose.keypoints.find(point => point.part === "rightWrist");
      let {x, y} = rightWrist.position;
      // console.log(rightWrist.position)
      DrawHand(canvasRef, x, y);
    }

    
  }
  // Draw skeleton on canvas, utilizing the utility drawing functions from poseNet
  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d"); // grab canvas
    canvas.current.width = videoWidth; //match width and height as video
    canvas.current.height = videoHeight;

    //draw on canvas!
    drawKeypoints(pose["keypoints"], 0.5, ctx)
    drawSkeleton(pose["keypoints"], 0.5, ctx)
  }
  
  runPosenet();

  return (
    <div className="App">
      <header className="App-header">
       <Webcam
        ref={webcamRef}
        style= {{
          position: "absolute",
          bottom: 0,
          right: 0,
          zindex: 8, //an element with a higher zindex number is always in front of an element with a lower zindex number
          visibility: "hidden"
        }}
       />
      
       <canvas 
        ref={canvasRef}
        style= {{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          zindex: 9
          }}
       />
     
      </header>
    </div>
  );
}

export default NewCamera;
