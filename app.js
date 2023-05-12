// Key generator
// declare the element that will display the generated key

let keyHolder = document.getElementById("statement");

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

// TODO write (copy) a getRandomKey function that returns a random value from the array of possibleKeys. Ensure that there aren't any duplicate values

function getRandomKey(array) {
  const i = Math.floor(Math.random() * array.length);
  return array[i];
}

// TODO add an event listener to call the getRandomKey when the button is clicked and display the value

let generatorButton = document.querySelector("button");

generatorButton.addEventListener("click", (event) => {
  let practiceKey = getRandomKey(possibleKeys);
  keyHolder.textContent = practiceKey;
});

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons

/*for (let button of optionButtons) {
  button.addEventListener("click", (event) => {
    // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element

    explanation.textContent = fact.explanation;

    // TODO 7: Within the event handler function,
    // Use a for loop to disable all the option buttons

    for (let button of optionButtons) {
      disable(button);
      console.log(button.value);
    }
    // TODO 8: Within the event handler function,
    // Get the guessed value from the clicked button
    // Use a conditional to compare the guess to the fact's answer
    // and add the "correct"/"incorrect" class as appropriate

    if (isCorrect(button.value)) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
} */
