// Key generator
// declare the element that will display the generated key

const keyHolder = document.querySelector(".key-display");

// Then you need an array containing all of the possible options that could be passed into practiceKey

let possibleKeys = [
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

const generatorButton = document.querySelector(".key-btn");

/* generatorButton.addEventListener("click", (event) => {
  let practiceKey = possibleKeys[getRandomNumber()];
  keyHolder.textContent = practiceKey;
}); */

// TODO how to prevent duplicates?

// set up an array to hold used keys

const usedKeys = [];

// Apply this to the generatorButton function
generatorButton.addEventListener("click", (event) => {
  if (possibleKeys.length === 0) {
    possibleKeys = [
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
  }
  let practiceKey = possibleKeys[getRandomNumber()];
  console.log(practiceKey);
  // usedKeys.unshift(practiceKey);
  keyHolder.textContent = practiceKey;
  // console.log(practiceKey.length);
  // console.log(possibleKeys);

  const index = possibleKeys.indexOf(practiceKey);
  if (index > -1) {
    // only splice array when item is found
    possibleKeys.splice(index, 1); // 2nd parameter means remove one item only
  }
  console.log(possibleKeys);
});

/* write if/else statement to prevent duplicates 

if (!usedKeys.includes(practiceKey)) {
  usedKeys.unshift(practiceKey);
}

 const newArray = possibleKeys.filter(
    {
      return (key) => !possibleKeys.includes(practiceKey)
    });
  console.log("newArray", newArray);
}

*/
