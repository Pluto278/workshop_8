# workshop_8

link:https://pluto278.github.io/workshop_8

# tasks
- Set up a canvas with a size of 800 by 600 pixels.
- Load a dog image from an external API (https://dog.ceo/api/breeds/image/random) and display it on a canvas.
  
# Notes

## 1. Canvas Setup
In the setup function, we create a canvas with a width of 800 pixels and a height of 600 pixels using the createCanvas function.
```
function setup() {
  createCanvas(800, 600);
  loadDogImage();
}
```

## 2. Loading Dog Image
We use an external API to load a dog image.
First, in the loadDogImage function, we define the API URL (https://dog.ceo/api/breeds/image/random).
```
function loadDogImage() {
  let url = "https://dog.ceo/api/breeds/image/random";
  loadJSON(url, gotData);
}
```
Then, in the gotData function, we check if the data received from the API contains the necessary message property (which holds the image link). If it does, we load the image using loadImage.
```
function gotData(data) {
  if (data && data.message) {
    loadImage(data.message, img => {
      dogImage = img;
    });
  }
}
```

## 3. Displaying the Image
In the draw function, we first set the background color to a light gray (value 220). Then, we check if the dogImage has been successfully loaded. If it has, we display the image on the canvas starting from the top - left corner (0, 0) and stretching it to fit the entire canvas width and height.
```
function draw() {
  background(220);
  if (dogImage) {
    image(dogImage, 0, 0, width, height);
  }
}
```
