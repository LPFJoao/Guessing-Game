
const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let running = true;

const mySubmit = document.getElementById("mySubmit");
const guessInput = document.getElementById("guessInput");
const resultMessage = document.getElementById("resultMessage");
const resetGame = document.getElementById("resetGame");


mySubmit.onclick = submitGuess;
guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitGuess();
    }
});
function submitGuess() {
    if (!running) return;

    let guess = Number(guessInput.value);

    if (isNaN(guess)) {
        resultMessage.textContent = "Please enter a valid number.";
    } else if (guess < minNum || guess > maxNum) {
        resultMessage.textContent = `Your guess must be between ${minNum} and ${maxNum}.`;
    } else {
        attempts++;
        if (guess < answer) {
            resultMessage.textContent = `Your guess ${guess} is Too low! Try again.`;
        } else if (guess > answer) {
            resultMessage.textContent = `Your guess ${guess} is Too high! Try again.`;
        } else {
            resultMessage.textContent = `Congratulations! You guessed the number ${answer} in ${attempts} attempts.`;
            running = false;
        }
    }
};

resetGame.onclick = function() {
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    attempts = 0;
    running = true;
    guessInput.value = "";
    resultMessage.textContent = "";
};