// Key generator
// declare an empty array that will contain the generated key

const practiceKey = [];

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

// TODO write a shuffleArray function that randomly sorts the possibleKeys array

function getRandomKey() {
  practiceKey.push(possibleKeys);
}

// TODO write (copy) a getRandomKey function that returns a random value from the array of possibleKeys. Ensure that there aren't any duplicate values

// TODO call the getRandomKey when the button is clicked and display the value

// TODO 1: Declare & assign variables pointing to the corresponding element(s)
// statement should be the "statement" div
// optionButtons should be all the elements within the "options" div
// explanation should be the "explanation" div

const statement = document.getElementById("statement");

const optionButtons = document.querySelector("#options").children;

const explanation = document.getElementById("explanation");

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation

const fact = {
  statement: "Tacos are the greatest === true",
  answer: true,
  explanation: "Because yes.",
};

// TODO 3: Set the text of the statement element to the fact's statement

statement.textContent = fact.statement;

// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// disable(button) should set the button element's attribute "disabled" to the value ""

function disable(button) {
  button.setAttribute("disabled", "");
}

/* OR const disable = (button) => button.setAttribute("disabled", "");
       Target the buttons on the page by doing this:

       disable(optionButtons[0]);
       */

// enable(button) should remove the attribute "disabled" from the button element

function enable(button) {
  document.querySelector("button").removeAttribute("disabled");
}

// OR: const enable = (button) => button.removeAttribute("disabled");

// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer

function isCorrect(guess) {
  return guess == fact.answer.toString();
}

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons

for (let button of optionButtons) {
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
}
