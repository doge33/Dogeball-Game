# Dogeball-Game

Dogeball is a motion-controlled browser game built with the PoseNet model of TensorFlow JS and the Canvas API. Players need to use their
head and hands to intercept avatars on screen and get rewarded or penalized according to the type of avatars they "catch". 

The project is built with React JS, CSS/SASS, Bootstrap, Axios, TensorFlow JS, and HTML Canvas on the front end. On the backend, it uses PostgreSQL database 
and consumes JSON APIs using Ruby on Rails.

## Install Dependencies:
- Go into the client directory and run ```npm i``` or ```npm install```

- Please make sure you have Rails 5.2 or above installed for the backend
- In the rails_backend directory, run ```bundle install```

## To Start:
- In the rails_backedn directory, run ```rails s -p 3001 -b 0.0.0.0```
- In the client directory, run ```npm start```

## PoseNet Configuration
The PoseNet model being used has several different configuration options that vary in accuracy vs. performance. The app comes with these settings preconfigured to favor performance over accuracy, but use the guide below to adjust (code located in NewCamera.js):
```architecture: 'MobileNetV1',
      outputStride: 16, // 8, 16, 32 ---> smaller equals more accurate, but more taxing on performance
      inputResolution:  { width: 320, height: 240 }, // default 257, can be provided as an object as well, e.g. { width: 320, height: 240 }. Higher is more accurate, but more       taxing on performance.
      multiplier: .5 // 1.0, .75, .50 ---> higher is more accurate, but more taxing on performance
```
In order to adjust how many DogeBalls are rendered on screen, you can increase the stop condition for the iterator on the below loop (also located in NewCamera.js):
```for (let i = 0; i < 9; i++) {
      projectileGenerator(projectileCoords, badProjectile);  
}```



