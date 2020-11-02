const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 100, y: -100 },
    { x: 300, y: 10 }
  ]
}

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".kite", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
)