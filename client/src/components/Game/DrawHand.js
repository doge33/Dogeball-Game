import img from './hand.png'

export default function DrawHand(canvas, x, y) {

      // const ctx = canvas.getContext('2d');
      // const canvas = document.querySelector('.myCanvas');
      const ctx = canvas.current.getContext("2d");    
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;

      const imgTag = new Image();
      // let x = (canvas.current.width / 2) - (100 / 2);
      // let y = (canvas.current.height /  2) - (120 / 2);

      // imgTag.onload = animate;
      imgTag.src = img;   // load image
      
      ctx.drawImage(imgTag, x, y, 100, 120);
      
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