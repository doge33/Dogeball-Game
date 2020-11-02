/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs';
import img from './components/Game/doge_ball.png';
import img2 from './components/Game/nyan_cat.png';

// =======================================================
// Global constants for utilities
// =======================================================
const color = 'aqua';
const boundingBoxColor = 'red';
const lineWidth = 2;

export const tryResNetButtonName = 'tryResNetButton';
export const tryResNetButtonText = '[New] Try ResNet50';
const tryResNetButtonTextCss = 'width:100%;text-decoration:underline;';
const tryResNetButtonBackgroundCss = 'background:#e61d5f;';

// =======================================================
// Utility functions
// =======================================================
export function renderCanvas(canvas, pose, projectileCoords, videoWidth, videoHeight) {
  // Grab canvas!
  const ctx = canvas.current.getContext("2d");
  canvas.current.width = videoWidth;
  canvas.current.height = videoHeight;

  // Draw!
  drawKeypointsAvatar(ctx, pose["keypoints"], 0.6);
  generateProjectile(ctx, videoWidth, videoHeight, projectileCoords, 30, "orange");
}

// ----------------------------------------------------
// * Helper function - used to render a point on canvas
// ----------------------------------------------------
export function drawPoint(ctx, y, x, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
// ----------------------------------------------------
// * Draw hitbox on canvas
// ----------------------------------------------------
export function drawBoundingBox2(ctx, rect) {

  // Box is drawn with x,y coordinates representing top left of the box. 

  ctx.rect(rect.x, rect.y, rect.width, rect.height);

  ctx.strokeStyle = boundingBoxColor;
  
  ctx.stroke();
}
// ----------------------------------------------------
// * Draw player avatar on canvas
// ----------------------------------------------------
export function drawKeypointsAvatar(ctx, keypoints, minConfidence, scale = 1) {

  for (let i = 0; i < keypoints.length; i++) {
    if (keypoints[i].part === 'rightWrist' || keypoints[i].part === 'leftWrist' || keypoints[i].part === 'nose') {
      const keypoint = keypoints[i];
      
      if (keypoint.score < minConfidence) {
        continue;
      }

      const {y, x} = keypoint.position;
      
      if (keypoint.part === 'nose') {
        drawPoint(ctx, y * scale, x * scale, 20, color);
        const rect = {x: x - (50 / 2), y: y - (50 / 2), width: 50, height: 50};
        drawBoundingBox2(ctx, rect);
      } else {
        drawPoint(ctx, y * scale, x * scale, 10, color);
        const rect = {x: x - (25 / 2), y: y - (25 / 2), width: 25, height: 25};
        drawBoundingBox2(ctx, rect);
      }
    }
  }
}
// ----------------------------------------------------
// * Draw specified image on canvas
// ----------------------------------------------------
export function renderImageToCanvas2(ctx, x, y, bad = false) {

  const projectile = new Image();
  const badProjectile = new Image();
  projectile.src = img;   // load image
  badProjectile.src = img2;

  if (!bad) {
    ctx.drawImage(projectile, x, y, 120, 140);
  } else {
    ctx.drawImage(badProjectile, x, y, 75, 75);
  }
}
// ----------------------------------------------------
// * Draw projectile on canvas
// ----------------------------------------------------
export function generateProjectile(ctx, videoWidth, videoHeight, projectileCoords) {   

  projectileCoords.forEach((pair, index) => {
    if (index !== 0) { // exclude item at index 0 from being rendered
      let x = pair[0] * videoWidth;
      let y = pair[1] * videoHeight;
      
      // Constrain spawn area of projectile 
      if (x < 100) {
        x += 100;
      } else if (x > (videoWidth * .90)) {
        x -= (videoWidth * .1);
      }
      
      // Render projectile || pair[2] % 4 === 0
      if (index === 2 || index === 6) {
        renderImageToCanvas2(ctx, x, y, true);
        const rect = {x: x, y: y, width: 75, height: 75};
        drawBoundingBox2(ctx, rect);
      } else {
        renderImageToCanvas2(ctx, x, y);
        const rect = {x: x + 25, y: y + 35, width: 75, height: 75};
        drawBoundingBox2(ctx, rect);
      }
    }
  }); 
}
// -----------------------------------------------------------------
// * Detects if there is a collision between provided hitbox renders
// -----------------------------------------------------------------
export function detectCollision(avatar, projectiles) {

  let indexCollision;
  let strike;

  for (let i = 0; i < avatar.length; i++) {
    for (let y = 0; y < projectiles.length; y++) {
      if (avatar[i].x < projectiles[y].x + projectiles[y].width && 
        avatar[i].x + avatar[i].width > projectiles[y].x &&
        avatar[i].y < projectiles[y].y + projectiles[y].height &&
        avatar[i].y + avatar[i].height > projectiles[y].y) {
          // console.log("Collision detected");
          // console.log(projectiles[y].projectileIndex); || projectiles[y].isBad % 4 === 0
          if (projectiles[y].projectileIndex === 2 || projectiles[y].projectileIndex === 6) {
            strike = 0;
          } else {
            strike = 1;
          }
          indexCollision = projectiles[y].projectileIndex;
        }
    }
  }

  const results = [indexCollision, strike];
  return results;

}
// -----------------------------------------------------------------
// * Calculates hitboxes and runs them through collision detector
// -----------------------------------------------------------------
export function collisionDetection(pose, minConfidence, projectileCoords, videoWidth, videoHeight) {
  let keypoints = pose["keypoints"];
  let poseHitboxes = [];
  let projectileHitboxes = [];

  // Avatar Hitboxes
  for (let i = 0; i < keypoints.length; i++) {
    if (keypoints[i].part === 'rightWrist' || keypoints[i].part === 'leftWrist' || keypoints[i].part === 'nose') {
      const keypoint = keypoints[i];
      
      if (keypoint.score < minConfidence) {
        continue;
      }

      const {y, x} = keypoint.position;
      
      if (keypoint.part === 'nose') {
        const rect = {x: x - (50 / 2), y: y - (50 / 2), width: 50, height: 50};
        poseHitboxes.push(rect);
      } else {
        const rect = {x: x - (25 / 2), y: y - (25 / 2), width: 25, height: 25};
        poseHitboxes.push(rect);
      }
    }
  }

  // Projectile Hitboxes
  projectileCoords.forEach((pair, index) => {
    if (index !== 0) { // exclude item at index 0 from hitbox calculations
      let x = pair[0] * videoWidth;
      let y = pair[1] * videoHeight;
  
      // Constrain spawn area of projectile 
      if (x < 100) {
        x += 100;
      } else if (x > (videoWidth * .90)) {
        x -= (videoWidth * .1);
      }

      // Calculate dimensions of hitbox
      if (index === 2 || index === 6) {
        const rect = {x: x, y: y, width: 75, height: 75, projectileIndex: index, isBad: pair[2]};
        projectileHitboxes.push(rect);
      } else {
        const rect = {x: x + 25, y: y + 35, width: 75, height: 75, projectileIndex: index, isBad: pair[2]};
        projectileHitboxes.push(rect);
      }
    }
  });

  // Hitbox Comparison
  if (detectCollision(poseHitboxes, projectileHitboxes)) {
    return detectCollision(poseHitboxes, projectileHitboxes)
  } 

};

// -----------------------------------------------------------------
// * Adds new projectile to array
// -----------------------------------------------------------------
export function projectileGenerator(array, isBad) {

  const x = Math.random();
  const y = Math.random();

  array.push([x, y, isBad]);

}
// -----------------------------------------------------------------
// * Shifts projectile coordinates between re-renders
// -----------------------------------------------------------------
export function shiftCoordinates(array) {
  array.forEach((pair) => {
    pair[1] += .005;
    
    if (pair[1] > .97) {
      pair[1] = .005 
    } 
  })
}
// ===================================================================
// ===================================================================













// /**
//  * Draw offset vector values, one of the model outputs, on to the canvas
//  * Read our blog post for a description of PoseNet's offset vector outputs
//  * https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5
//  */
// export function drawOffsetVectors(
//     heatMapValues, offsets, outputStride, scale = 1, ctx) {
//   const offsetPoints =
//       posenet.singlePose.getOffsetPoints(heatMapValues, outputStride, offsets);

//   const heatmapData = heatMapValues.buffer().values;
//   const offsetPointsData = offsetPoints.buffer().values;

//   for (let i = 0; i < heatmapData.length; i += 2) {
//     const heatmapY = heatmapData[i] * outputStride;
//     const heatmapX = heatmapData[i + 1] * outputStride;
//     const offsetPointY = offsetPointsData[i];
//     const offsetPointX = offsetPointsData[i + 1];

//     drawSegment(
//         [heatmapY, heatmapX], [offsetPointY, offsetPointX], color, scale, ctx);
//   }
// }

/**
 * Draws a line on a canvas, i.e. a joint
 */
// export function drawSegment([ay, ax], [by, bx], color, scale, ctx) {
//   ctx.beginPath();
//   ctx.moveTo(ax * scale, ay * scale);
//   ctx.lineTo(bx * scale, by * scale);
//   ctx.lineWidth = lineWidth;
//   ctx.strokeStyle = color;
//   ctx.stroke();
// }

// /**
//  * Draws a pose skeleton by looking up all adjacent keypoints/joints
//  */
// export function drawSkeleton(keypoints, minConfidence, ctx, scale = 1) {
//   const adjacentKeyPoints =
//       posenet.getAdjacentKeyPoints(keypoints, minConfidence);

//   adjacentKeyPoints.forEach((keypoints) => {
//     drawSegment(
//         toTuple(keypoints[0].position), toTuple(keypoints[1].position), color,
//         scale, ctx);
//   });
// }

// /**
//  * Draw pose keypoints onto a canvas
//  */
// export function drawKeypoints(keypoints, minConfidence, ctx, scale = 1) {
//   for (let i = 0; i < keypoints.length; i++) {
//     const keypoint = keypoints[i];

//     if (keypoint.score < minConfidence) {
//       continue;
//     }

//     const {y, x} = keypoint.position;
//     drawPoint(ctx, y * scale, x * scale, 3, color);
//   }
// }

// /**
//  * Draw the bounding box of a pose. For example, for a whole person standing
//  * in an image, the bounding box will begin at the nose and extend to one of
//  * ankles
//  */
// export function drawBoundingBox(keypoints, ctx) {
//   const boundingBox = posenet.getBoundingBox(keypoints);

//   ctx.rect(
//       boundingBox.minX, boundingBox.minY, boundingBox.maxX - boundingBox.minX,
//       boundingBox.maxY - boundingBox.minY);

//   ctx.strokeStyle = boundingBoxColor;
//   ctx.stroke();
// }

// /**
//  * Converts an arary of pixel data into an ImageData object
//  */
// export async function renderToCanvas(a, ctx) {
//   const [height, width] = a.shape;
//   const imageData = new ImageData(width, height);

//   const data = await a.data();

//   for (let i = 0; i < height * width; ++i) {
//     const j = i * 4;
//     const k = i * 3;

//     imageData.data[j + 0] = data[k + 0];
//     imageData.data[j + 1] = data[k + 1];
//     imageData.data[j + 2] = data[k + 2];
//     imageData.data[j + 3] = 255;
//   }

//   ctx.putImageData(imageData, 0, 0);
// }

// /**
//  * Draw an image on a canvas
//  */
// export function renderImageToCanvas(image, size, canvas) {
//   canvas.width = size[0];
//   canvas.height = size[1];
//   const ctx = canvas.getContext('2d');

//   ctx.drawImage(image, 0, 0);
// }

// /**
//  * Draw heatmap values, one of the model outputs, on to the canvas
//  * Read our blog post for a description of PoseNet's heatmap outputs
//  * https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5
//  */
// export function drawHeatMapValues(heatMapValues, outputStride, canvas) {
//   const ctx = canvas.getContext('2d');
//   const radius = 5;
//   const scaledValues = heatMapValues.mul(tf.scalar(outputStride, 'int32'));

//   drawPoints(ctx, scaledValues, radius, color);
// }

// /**
//  * Used by the drawHeatMapValues method to draw heatmap points on to
//  * the canvas
//  */
// function drawPoints(ctx, points, radius, color) {
//   const data = points.buffer().values;

//   for (let i = 0; i < data.length; i += 2) {
//     const pointY = data[i];
//     const pointX = data[i + 1];

//     if (pointX !== 0 && pointY !== 0) {
//       ctx.beginPath();
//       ctx.arc(pointX, pointY, radius, 0, 2 * Math.PI);
//       ctx.fillStyle = color;
//       ctx.fill();
//     }
//   }
// }

// function isAndroid() {
//   return /Android/i.test(navigator.userAgent);
// }

// function isiOS() {
//   return /iPhone|iPad|iPod/i.test(navigator.userAgent);
// }

// export function isMobile() {
//   return isAndroid() || isiOS();
// }

// function setDatGuiPropertyCss(propertyText, liCssString, spanCssString = '') {
//   var spans = document.getElementsByClassName('property-name');
//   for (var i = 0; i < spans.length; i++) {
//     var text = spans[i].textContent || spans[i].innerText;
//     if (text == propertyText) {
//       spans[i].parentNode.parentNode.style = liCssString;
//       if (spanCssString !== '') {
//         spans[i].style = spanCssString;
//       }
//     }
//   }
// }

// export function updateTryResNetButtonDatGuiCss() {
//   setDatGuiPropertyCss(
//       tryResNetButtonText, tryResNetButtonBackgroundCss,
//       tryResNetButtonTextCss);
// }

// /**
//  * Toggles between the loading UI and the main canvas UI.
//  */
// export function toggleLoadingUI(
//   showLoadingUI, loadingDivId = 'loading', mainDivId = 'main') {
//   if (showLoadingUI) {
//     document.getElementById(loadingDivId).style.display = 'block';
//     document.getElementById(mainDivId).style.display = 'none';
//   } else {
//     document.getElementById(loadingDivId).style.display = 'none';
//     document.getElementById(mainDivId).style.display = 'block';
//   }
// }

// function toTuple({y, x}) {
//   return [y, x];
// }

