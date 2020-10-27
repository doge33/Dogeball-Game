      
export default function drawHand(x, y) {
      
      const canvas = document.querySelector('.myCanvas');
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');

      let imgTag = new Image();
      

      imgTag.onload = animate;
      imgTag.src = "hand.png";   // load image

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
        ctx.drawImage(imgTag, 0, 0, 486, 597, x, y, 100, 120);                       // draw image at current position
        //ctx.drawImage(imgTag, x, y)
        x -= 4;
        if (x > 0) {
          requestAnimationFrame(animate)        // loop
        } else {
          x = canvas.width
          requestAnimationFrame(animate)
        }
      }
    }