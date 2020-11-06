# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install Dependencies:

Run `npm i` or `npm install`

## To Start:

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Configuration

The PoseNet model being used has several different configuration options that vary in accuracy vs. performance. The app comes with these settings preconfigured to favor performance over accuracy, but use the guide below to adjust (code located in NewCamera.js): 

```javascript
architecture: 'MobileNetV1',
      outputStride: 16, // 8, 16, 32 ---> smaller equals more accurate, but more taxing on performance
      inputResolution:  { width: 320, height: 240 }, // default 257, can be provided as an object as well, e.g. { width: 320, height: 240 }. Higher is more accurate, but more       taxing on performance.
      multiplier: .5 // 1.0, .75, .50 ---> higher is more accurate, but more taxing on performance
```
      
In order to adjust how many DogeBalls are rendered on screen, you can increase the stop condition for the iterator on the below loop (also located in NewCamera.js):

```javascript
for (let i = 0; i < 9; i++) {
      projectileGenerator(projectileCoords, badProjectile);  
}
```


















