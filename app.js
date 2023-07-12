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

// on click, display random element from possibleKeys array

// add an event listener to call the getRandomKey when the button is clicked and display the value

let generatorButton = document.querySelector("button");

/* generatorButton.addEventListener("click", (event) => {
  let practiceKey = possibleKeys[getRandomNumber()];
  keyHolder.textContent = practiceKey;
}); */

// TODO how to prevent duplicates?

// set up an array to hold used keys

let usedKeys = [];

function generate() {
  usedKeys.push(practiceKey);
  console.log(usedKeys);
}

// Apply this to the generatorButton function
generatorButton.addEventListener("click", (event) => {
  let practiceKey = possibleKeys[getRandomNumber()];
  usedKeys.unshift(practiceKey);
  keyHolder.textContent = usedKeys[0];
});
