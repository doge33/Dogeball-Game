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
// =======================================================
// Global constants for utilities
// =======================================================
import img from './assets/doge_ball.png';
import img2 from './assets/nyan_cat.png';

const boundingBoxColor = 'red';
const minConfidence = .50;
const projectileImg = new Image();
const badProjectileImg = new Image();
projectileImg.src = img;
badProjectileImg.src = img2;
// =======================================================
// Utility functions
// =======================================================
// ----------------------------------------------------
// * Draws avatar points and projectiles on canvas
// ----------------------------------------------------
export function renderCanvas(canvas, pose, projectileCoords, videoWidth, videoHeight) {
  if (canvas.current) {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;
  
    drawKeypointsAvatar(ctx, pose["keypoints"]);
    generateProjectile(ctx, videoWidth, videoHeight, projectileCoords);
  }
}

export function renderCanvas2(canvas, pose, projectileCoords, videoWidth, videoHeight) {
  if (canvas.current) {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;
  
    drawKeypointsAvatar(ctx, pose["keypoints"]);
    generateProjectile(ctx, videoWidth, videoHeight, projectileCoords);
  }
}
// ----------------------------------------------------
// * Helper function - used to render a point on canvas
// ----------------------------------------------------
export function drawPoint(ctx, y, x, r) {
  const color = ctx.createRadialGradient(x, y, r / 12, x, y, r)
  color.addColorStop(0, "#b3daff");
  color.addColorStop(1, "#339cff");
  
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
export function drawKeypointsAvatar(ctx, keypoints, scale = 1) {

  for (let i = 0; i < keypoints.length; i++) {
    if (keypoints[i].part === 'rightWrist' || keypoints[i].part === 'leftWrist' || keypoints[i].part === 'nose') {
      const keypoint = keypoints[i];

      if (keypoint.score < minConfidence) {
        continue;
      }

      const { y, x } = keypoint.position;

      drawPoint(ctx, y * scale, x * scale, 20);
    }
  }
}
// ----------------------------------------------------
// * Draw specified image on canvas
// ----------------------------------------------------
export function renderImageToCanvas2(ctx, x, y, bad = false) {

  if (!bad) {
    ctx.drawImage(projectileImg, x, y, 120, 140);
  } else {
    ctx.drawImage(badProjectileImg, x, y, 75, 75);
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

      // Render projectile
      if (index === 1 || index === 4 || index === 7 || pair[2] % 6 === 0) {
        renderImageToCanvas2(ctx, x, y, true);
        // const rect = { x: x, y: y, width: 75, height: 75 };
        // drawBoundingBox2(ctx, rect);
      } else {
        renderImageToCanvas2(ctx, x, y);
        // const rect = { x: x + 25, y: y + 35, width: 75, height: 75 };
        // drawBoundingBox2(ctx, rect);
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

  //avatar is the hitboxes array for keypoints; projectiles is the hitboxes array for the 7 balls; 
  for (let i = 0; i < avatar.length; i++) {
    for (let y = 0; y < projectiles.length; y++) {

      if (avatar[i].x < projectiles[y].x + projectiles[y].width &&
        avatar[i].x + avatar[i].width > projectiles[y].x &&
        avatar[i].y < projectiles[y].y + projectiles[y].height &&
        avatar[i].y + avatar[i].height > projectiles[y].y) {
        // console.log("Collision detected");
        // console.log(projectiles[y].projectileIndex);
        if (projectiles[y].projectileIndex === 1 || projectiles[y].projectileIndex === 4 || projectiles[y].projectileIndex === 7 || projectiles[y].badProjectile % 6 === 0) {
          strike = 0;
        } else {
          strike = 1;
        }
        indexCollision = projectiles[y].projectileIndex;
        // console.log("indexCollision is", indexCollision)
      }
    }
  }

  const results = [indexCollision, strike];
  // console.log("results is ", results) // ==> [2,0] or [6,0] or [other numbers, 1] or mostly [undefined, undefined]
  return results

}
// -----------------------------------------------------------------
// * Calculates hitboxes and runs them through collision detector
// -----------------------------------------------------------------
export function collisionDetection(pose, projectileCoords, videoWidth, videoHeight) {
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

      const { y, x } = keypoint.position;

      const rect = { x: x - (50 / 2), y: y - (50 / 2), width: 50, height: 50 };
      poseHitboxes.push(rect);
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
      if ((index === 1 || index === 4 || index === 7 || pair[2] % 6 === 0)) {
        const rect = { x: x, y: y, width: 75, height: 75, projectileIndex: index, badProjectile: pair[2] };
        projectileHitboxes.push(rect);
      } else {
        const rect = { x: x + 25, y: y + 35, width: 75, height: 75, projectileIndex: index, badProjectile: pair[2] };
        projectileHitboxes.push(rect);
      }
    }
  });

  // Hitbox Comparison
  //(detectCollision =>[undefined, undefined] or [2,0], [6,0], or [other numbers in 1~7, 1])
  return detectCollision(poseHitboxes, projectileHitboxes)

};

// -----------------------------------------------------------------
// * Adds new projectile to array
// -----------------------------------------------------------------
export function projectileGenerator(array, badProjectile) {

  const x = Math.random();
  const y = Math.random();

  array.push([x, y, badProjectile]);

}
// -----------------------------------------------------------------
// * Shifts projectile coordinates between re-renders
// -----------------------------------------------------------------
export function shiftCoordinates(array) {
  array.forEach((pair) => {
    pair[1] += .0075;

    if (pair[1] > .97) {
      pair[1] = .001
    }
  })
}
// ===================================================================
// ===================================================================