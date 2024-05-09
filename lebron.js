const image = document.getElementById("flash-image");
const notImportant = document.getElementById("not-important");
const audioLebron = new Audio("images/you_are_my_sunshine.mp3");
const audioVineBoom = new Audio("images/vineboom.mp3");

function flashImage(img) {
  img.style.opacity = "1"; // Make image appear quickly
  setTimeout(() => {
    img.style.transition = "opacity 0.4s"; // Fade out effect
    img.style.opacity = "0";
    setTimeout(() => {
      img.style.display = "none"; // Completely hide the image
      if (img === image) {
        audioLebron.pause(); // Stop lebron_sun audio when image is completely invisible
      }
      flashRandomly(); // Call flashRandomly to start next flash
    }, 400); // Hide image after 0.35 seconds
  }, 10); // Start fading out after 10 milliseconds
}

function flashRandomly() {
  const randomTime = getRandomInt(60) * 1000;
  setTimeout(() => {
    if (getRandomInt(10) === 0) {
      notImportant.style.display = "block"; // Show not_important.jpg
      image.style.display = "none"; // Hide lebron_sun.png
      flashImage(notImportant);
      audioVineBoom.play(); // Play vineboom audio
      audioLebron.pause(); // Stop lebron_sun audio
    } else {
      image.style.display = "block"; // Show lebron_sun.png
      notImportant.style.display = "none"; // Hide not_important.jpg
      flashImage(image);
      audioLebron.play(); // Play lebron_sun audio
      audioVineBoom.pause(); // Stop vineboom audio
    }
  }, randomTime);
}

flashRandomly(); // Start the loop

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
