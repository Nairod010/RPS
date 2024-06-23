const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    let randomChoice = getRandomInt(3)
    if (randomChoice === 0) {
        return rock
    } else if (randomChoice === 1) {
        return paper
    } else {
        return scissors
    };
};


function getHumanChoice() {
    let input = prompt("Type your choice below!")
    if (input.toLowerCase() != rock && input.toLowerCase() != paper && input.toLowerCase() != scissors) {
        input = prompt("Please choose between rock, paper and scissors!");
        if (input.toLowerCase() === rock) {
            return rock
        } else if (input.toLowerCase() === paper) {
            return paper
        } else if (input.toLowerCase() === scissors) {
            return scissors
        } else {
            return alert("Please choose between rock, paper and scissors")
        }
    } else {
        if (input.toLowerCase() === rock) {
            return rock
        } else if (input.toLowerCase() === paper) {
            return paper
        } else if (input.toLowerCase() === scissors) {
            return scissors
        } else {
            return alert("Please choose between rock, paper and scissors")
        }
    }
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == rock && computerChoice == paper) {
            computerScore += 1;
            console.log(computerScore)
            console.log(humanScore)
            return console.log("You lose! Paper beats Rock!")
        } else if (humanChoice == paper && computerChoice == scissors) {
            computerScore += 1;
            console.log(computerScore);
            console.log(humanScore);
            return console.log("You lose! Scissors beats papper!");
        } else if (humanChoice == scissors && computerChoice == rock) {
            computerScore += 1;
            console.log(computerScore);
            console.log(humanScore);
            return console.log("You lose! Rock beats scissors!");
        } else if (humanChoice == paper && computerChoice == rock) {
            humanScore += 1;
            console.log(computerScore);
            console.log(humanScore);
            return console.log("You win! Paper beats Rock!");
        } else if (humanChoice == scissors && computerChoice == paper) {
            humanScore += 1;
            console.log(computerScore);
            console.log(humanScore);
            return console.log("You win! Scissors beats paper");
        } else if (humanChoice == rock && computerChoice == scissors) {
            humanScore += 1;
            console.log(computerScore);
            console.log(humanScore);
            return console.log("You win! Rock beats scissors");
        } else if (humanChoice == rock && computerChoice == rock) {
            console.log(computerScore);
            console.log(humanScore);
            return console.log("It's a tie");
        } else if (humanChoice == paper && computerChoice == paper) {
            console.log(computerScore);
            console.log(humanScore);
            return console.log("It's a tie");
        } else if (humanChoice == scissors && computerChoice == scissors) {
            console.log(computerScore);
            console.log(humanScore);
            return console.log("It's a tie");
        }
    };

    let roundCounter = 1;
    while (roundCounter <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();


        playRound(humanSelection, computerSelection);
        roundCounter += 1
    };

    if (humanScore == computerScore) {
        console.log("It's a tie game!");
    } else if (humanScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You Lose the game!");
    }
};


playGame();
