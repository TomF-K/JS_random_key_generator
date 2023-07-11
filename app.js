// Key generator
// declare the element that will display the generated key

let keyHolder = document.getElementById("key_display");

// Then you need an array containing all of the possible options that could be passed into practiceKey

const possibleKeys = [
  "C",
  "F",
  "Bb",
  "Eb",
  "Ab",
  "Db",
  "Gb",
  "B",
  "E",
  "A",
  "D",
  "G",
  "F#",
  "C#",
  "Cb",
];

// TODO 1 generate random number

function getRandomNumber() {
  return Math.floor(Math.random() * possibleKeys.length);
}

// TODO 2 on click, display random element from possibleKeys array

// TODO add an event listener to call the getRandomKey when the button is clicked and display the value

let generatorButton = document.querySelector("button");

generatorButton.addEventListener("click", (event) => {
  let practiceKey = possibleKeys[getRandomNumber()];
  keyHolder.textContent = practiceKey;
});

// TODO how to prevent duplicates?
