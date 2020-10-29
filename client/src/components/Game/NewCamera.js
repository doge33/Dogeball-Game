//1. Install dependencis DONE
//2. Import dependencies DONE
//3. Setup webcam and canvas DONE
//4. Define references to those DONE
//5. Load posenet DONE
//6. Detect functions DONE
//7. Drawing utilities from tensorflow DONE
//8. Draw functions

import React, { useRef, useEffect } from 'react';
import './Game.scss';
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import DrawAvatar from "./DrawAvatar";

function NewCamera() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const coordinateArray = [];
  
  for (let i = 0; i < 5; i++) {
    const x = Math.random();
    const y = Math.random();

    coordinateArray.push([x, y]);
  }

  //Load posenet
  const runPosenet = async () => {
    //wait till posenet is loaded
    const net = await posenet.load({
      architecture: 'MobileNetV1',
      outputStride: 16,
      inputResolution: { width: 320, height: 240 },
      multiplier: 0.5 //set this to a lower scale => faster but less accurate model
    })

    //continuously run the posenet model to create detections
    setInterval(() => {
      detect(net)
    }, 200)
  }

  //function to actually detect stuff. net is the loaded posenet model
  const detect = async (net) => {
    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
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

      DrawAvatar(canvasRef, pose, coordinateArray);
    }
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
          width={window.innerWidth}
          height={window.innerHeight}
          style={{
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
