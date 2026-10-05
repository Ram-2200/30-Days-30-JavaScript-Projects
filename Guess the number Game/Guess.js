// Guess the Number Game

// -----------------------------
// DOM Elements
// -----------------------------

const container = document.querySelector('.container');
const userInput = document.querySelector('.container .user-input-box input');
const guessBtn = document.querySelector('.container .user-input-box button');
const guessLowHigh = document.querySelector('.container .guess-low-high');
const noOfChances = document.querySelector('.container .no-of-chances');
const guessedNumbersDisplay = document.querySelector('.container .guessed-number-are');

const resultBox = document.querySelector('.result-box');
const gameResult = document.querySelector('.result-box h3');
const playAgainBtn = document.querySelector('.result-box button');


// -----------------------------
// Game State
// -----------------------------

let guessedNumbers = [];
let chances = 3;
let randomNumber;


// -----------------------------
// Generate Random Number
// Generates a number between 1 and 20
// -----------------------------

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
}


// -----------------------------
// Check User's Guess
// -----------------------------

function checkGuess() {

    // Convert input value from string to number
    const userGuess = Number(userInput.value);

    // Validate input
    if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 20) {
        guessLowHigh.style.display = 'block';
        guessLowHigh.textContent = 'Please enter a number between 1 and 20.';
        return;
    }

    // Prevent duplicate guesses
    if (guessedNumbers.includes(userGuess)) {
        guessLowHigh.style.display = 'block';
        guessLowHigh.textContent = 'You already guessed that number!';
        return;
    }

    // Store the guess
    guessedNumbers.push(userGuess);

    // Display previous guesses
    guessedNumbersDisplay.textContent =
        `Guessed numbers are: ${guessedNumbers.join(', ')}`;

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        endGame('You Win the game! 🥳');
        return;
    }

    // Wrong guess
    chances--;

    // Display remaining chances
    noOfChances.textContent = `No of chances: ${chances}`;
    noOfChances.style.marginTop = '9px';

    // Tell user whether the guess was high or low
    guessLowHigh.style.display = 'block';

    if (userGuess > randomNumber) {
        guessLowHigh.textContent = 'Your guess is high!';
    } else {
        guessLowHigh.textContent = 'Your guess is low!';
    }

    // Check if the player has used all chances
    if (chances === 0) {
        endGame('You lost the game! 🙁');
    }
}


// -----------------------------
// End Game
// -----------------------------

function endGame(message) {
    container.style.display = 'none';
    resultBox.style.display = 'block';
    gameResult.textContent = message;
}


// -----------------------------
// Reset Game
// -----------------------------

function resetGame() {

    // Reset game state
    guessedNumbers = [];
    chances = 3;

    // Generate a new number
    generateRandomNumber();

    // Reset input
    userInput.value = '';

    // Reset UI
    guessLowHigh.style.display = 'none';

    noOfChances.style.marginTop = '25px';
    noOfChances.textContent = 'No of chances: 3';

    guessedNumbersDisplay.textContent = 'Guessed numbers are: -----';

    // Show game screen
    container.style.display = 'block';
    resultBox.style.display = 'none';
}


// -----------------------------
// Event Listeners
// -----------------------------

guessBtn.addEventListener('click', checkGuess);

playAgainBtn.addEventListener('click', resetGame);


// -----------------------------
// Start Game
// -----------------------------

generateRandomNumber();
