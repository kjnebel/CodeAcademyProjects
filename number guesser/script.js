let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, compGuess, target) {
    if (Math.abs(target - userGuess) === Math.abs(target - compGuess)) {
        return true;
    }
    if (Math.abs(target - userGuess) < Math.abs(target - compGuess)) {
        return true;
    }
    return false;
}

function updateScore(str) {
    if (str === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}