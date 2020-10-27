import img from './hand.png'

export default function DrawHand(canvas) {

      // const ctx = canvas.getContext('2d');
      // const canvas = document.querySelector('.myCanvas');
      const ctx = canvas.current.getContext("2d");    
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;

      const imgTag = new Image();
      // imgTag.onload = animate;
      imgTag.src = img;   // load image
      
      let x = (canvas.current.width / 2) - (100 / 2);
      let y = (canvas.current.height /  2) - (120 / 2);

      ctx.drawImage(imgTag, x, y, 100, 120); // draw image in center of canvas

      // function animate() {
      //   ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);  // clear canvas
      //   ctx.drawImage(imgTag, 0, 0, 486, 597, x, y, 100, 120);                       // draw image at current position
      //   //ctx.drawImage(imgTag, x, y)
      //   x -= 4;
      //   if (x > 0) {
      //     requestAnimationFrame(animate)        // loop
      //   } else {
      //     x = canvas.width
      //     requestAnimationFrame(animate)
      //   }
      // };
    }