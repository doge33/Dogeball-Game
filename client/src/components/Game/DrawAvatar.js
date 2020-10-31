import {drawKeypointsAvatar, generateProjectile} from '../../utilities';

export default function DrawAvatar(canvas, pose, projectileCoords, videoWidth, videoHeight) {
  
  // Grab canvas!
  const ctx = canvas.current.getContext("2d");
  canvas.current.width = videoWidth;
  canvas.current.height = videoHeight;

  // Draw!
  drawKeypointsAvatar(ctx, pose["keypoints"], 0.6);
  generateProjectile(ctx, videoWidth, videoHeight, projectileCoords, 30, "orange");
  
  // // imgTag.onload = animate;
  
  // ctx.drawImage(imgTag, x, y, 100, 120);
  
  // function animate() {
  //   ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);  // clear canvas
  //   ctx.drawImage(imgTag, x, y, 100, 120); // draw image in center of canvas
  //   x--;
  //   if (x > 0) {
  //     requestAnimationFrame(animate)        // loop
  //   } else {
  //     x = (canvas.current.width / 2) - (100 / 2)
  //     requestAnimationFrame(animate)
  //   }
  // };
    }