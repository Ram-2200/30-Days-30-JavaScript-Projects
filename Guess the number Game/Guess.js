//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen
let container = document.querySelector('.container');
let userInput = document.querySelector('.container .user-input-box input');
let guessBtn = document.querySelector('.container .user-input-box button');
let guessLowHigh = document.querySelector('.container .guess-low-high');
let no_of_chances = document.querySelector('.container .no-of-chances');
let guessed_number = document.querySelector('.container  .guessed-number-are');
let resultBox = document.querySelector('.result-box');
let gameResult = document.querySelector('.result-box h3');
let playAgainBtn = document.querySelector('.result-box button');

let guessed_number_are = [];
let chances = 3;
let randomNum;

let checkGuess = () => {
        let userGuess = userInput.value;
        guessLowHigh.style.display = 'block';
        no_of_chances.style.marginTop = '9px';
        if (userGuess !== randomNum) {
                chances--;
                guessed_number_are.push(userGuess);
                if (chances !== 0) {
                        no_of_chances.innerHTML = `No of chances: ${chances}`;
                } else {
                        container.style.display = 'none';
                        resultBox.style.display = 'block';
                        gameResult.innerHTML = 'You lost the game! 🙁';
                }
                guessed_number.innerHTML = `Guessed number are: ${guessed_number_are}`;
                if (userGuess > randomNum) {
                        guessLowHigh.innerHTML = 'Your guess is high!';
                } else if (userGuess < randomNum) {
                        guessLowHigh.innerHTML = 'Your guess is Low!';
                }
        }
        if (userGuess == randomNum) {
                container.style.display = 'none';
                resultBox.style.display = 'block';
                gameResult.innerHTML = 'You Win the game! 🥳';
        }
};

//generate Random Number
let generateRandomNumber = () => {
        let randomNumber = Math.floor(Math.random() * 20);
        randomNum = randomNumber;
};

guessBtn.addEventListener('click', () => {
        if (userInput.value != '') {
                checkGuess();
        }
});

playAgainBtn.addEventListener('click', () => {
        guessed_number_are = [];
        chances = 3;
        guessLowHigh.style.display = 'none';
        no_of_chances.style.marginTop = '25px';
        no_of_chances.innerHTML = `No of chances: 3`;
        container.style.display = 'block';
        resultBox.style.display = 'none';
        guessed_number.innerHTML = `Guessed number are: -----`;
        generateRandomNumber();
        console.log(randomNum)
});

generateRandomNumber();
console.log(randomNum);
