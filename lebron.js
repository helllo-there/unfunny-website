const image = document.getElementById("flash-image");

function flashImage() {
  image.style.display = "block";
  setTimeout(() => {
    image.style.display = "none";
  }, 150);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function flashRandomly() {
  const randomTime = getRandomInt(60) * 1000;
  setTimeout(() => {
    flashImage();
    flashRandomly();
  }, randomTime);
}

flashRandomly();