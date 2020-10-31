//1. Install dependencis DONE
//2. Import dependencies DONE
//3. Setup webcam and canvas DONE
//4. Define references to those DONE
//5. Load posenet DONE
//6. Detect functions DONE
//7. Drawing utilities from tensorflow DONE
//8. Draw functions

import React, { useRef } from 'react';
import './Game.scss';
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import DrawAvatar from "./DrawAvatar";
import {collisionDetection, projectileGenerator} from '../../utilities';

function NewCamera() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const projectileCoords = [];
  
  
  for (let i = 0; i < 10; i++) {
    let x = Math.random();
    let y = Math.random();

    if (x < .1) {
      x += .1
    } else if (x > .9) {
      x -= .1
    }

    if (y < .1) {
      y += .1
    } else if (y > .9) {
      y -= .1
    }

    projectileCoords.push([x, y]);
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
    }, 100)
  }

  //function to actually detect stuff. net is the loaded posenet model
  const detect = async (net) => {
    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
      //Get Video Properties
      const video = webcamRef.current.video
      const videoWidth = window.innerWidth;
      const videoHeight = window.innerHeight;

      // Set video width
      video.width = videoWidth;
      video.height = videoHeight;

      //Make Detections
      const pose = await net.estimateSinglePose(video, {
        flipHorizontal: true
      });
      
      const collision = collisionDetection(pose, 0.6, projectileCoords, videoWidth, videoHeight, 30);
      // console.log(collision);
      
      if (collision) {
        projectileCoords.splice(collision, 1);
        projectileGenerator(projectileCoords);
      }
      
      DrawAvatar(canvasRef, pose, projectileCoords, videoWidth, videoHeight);
      
    }
  };

  runPosenet();
  
  return (
    <div className="App">
      <header className="App-header">
       <Webcam
        ref={webcamRef}
        style= {{
          position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            visibility: "hidden"
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9
          }}
        />

      </header>
    </div>
  );
}

export default NewCamera;
