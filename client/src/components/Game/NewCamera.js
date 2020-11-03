//1. Install dependencis DONE
//2. Import dependencies DONE
//3. Setup webcam and canvas DONE
//4. Define references to those DONE
//5. Load posenet DONE
//6. Detect functions DONE
//7. Drawing utilities from tensorflow DONE
//8. Draw functions

import React, { useEffect, useRef, useContext, useState } from 'react';
import gameContext from "../../Context/gameContext";
import scoreContext from "../../Context/scoreContext";
//import countScoreContext from "../../Context/countScoreContext";
import './Game.scss';
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { collisionDetection, projectileGenerator, shiftCoordinates, renderCanvas } from '../../utilities';


function NewCamera(props) {
  const webcamRef = useRef(null);
  const canvasRef = useRef(props.canvas);
  let {score, setScore} = useContext(scoreContext); //this for updating the score itself
  const {gameActive, setGameActive} = useContext(gameContext); //this for when to start/stop score-counting
  
  // Projectile Generation
 // ----------------------------------------------------
  let projectileCoords = [];
  let badProjectile = 1; // Iterator used to influence creation of projectiles that should be avoided
  
  for (let i = 0; i < 9; i++) {
    // Generates random number between 0 and .99 that is used to plot coordinates on canvas
    projectileGenerator(projectileCoords, badProjectile);
 
  }
// ----------------------------------------------------
  
  //Load posenet 
  const runPosenet = async () => {
    //wait till posenet is loaded
    const net = await posenet.load({
      architecture: 'MobileNetV1',
      outputStride: 16, // 8, 16, 32 --- smaller equals more accurate, but more taxing on performance => 16 is fine
      inputResolution:  { width: 320, height: 240 }, // default 257, can be provided as an object as well, e.g. { width: 320, height: 240 }. Higher is more accurate, but more taxing on performance.
      multiplier: .5 // 1.0, .75, .50 --- higher is more accurate, but more taxing on performance 
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

      //Make Detections of pose
      const pose = await net.estimateSinglePose(video, {
        flipHorizontal: true
      });

      shiftCoordinates(projectileCoords);

      // Look for a collision (returns index position of collided object)
      
      const collision = collisionDetection(pose, projectileCoords, videoWidth, videoHeight);
      //result is a pair of numbers eg. [2, 0], [6,0] or [other numbers in 1~7, 1] or [undefined, undefined];
      //first number is the index of projectile in the projectiles array
      //second number is strike(1) or no strike[0]

      // Adjust score
      if (collision[0] && gameActive) { // remove the [undefined, undefined] pairs
        if (collision[1] === 0) {
          setScore(prev => prev - 3);
        } else if (collision[1] === 1) {
          setScore(prev => prev + 1);
        }

        // remove object from array of items to be rendered, if collison occurred
        projectileCoords.splice(collision[0], 1);

        // add new set of coordinates to array of projectile coordinates
        projectileGenerator(projectileCoords, badProjectile);
        badProjectile++;
        
      }
      
      renderCanvas(canvasRef, pose, projectileCoords, videoWidth, videoHeight);

    }
  };


  useEffect(()=>{
    if(canvasRef) {
     runPosenet();
    }  
  },[canvasRef]);
 
  
  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: -2,
            visibility: "hidden",
           
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
            zindex: -1,
          }}
        />

      </header>
    </div>
  );
}

export default NewCamera;
