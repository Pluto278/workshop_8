let dogImage;

function setup() {
  createCanvas(800, 600);
  loadDogImage();
}

function draw() {
  background(220);
  if (dogImage) {
    image(dogImage, 0, 0, width, height);
  }
}

function loadDogImage() {
  let url = "https://dog.ceo/api/breeds/image/random";
  loadJSON(url, gotData);
}

function gotData(data) {
  if (data && data.message) {
    loadImage(data.message, img => {
      dogImage = img;
    });
  }
}