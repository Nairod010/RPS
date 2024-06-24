const rock = "rock";
const paper = "paper";
const scissors = "scissors";


const container = document.querySelector("div.container");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const result = document.createElement("h1");
const humanPoints = document.createElement("p");
const cpuPoints = document.createElement("p");

rockButton.className = "rock"
paperButton.className = "paper"
scissorsButton.className = "scissors"
result.className = "result"
humanPoints.className = "humanPoints";
cpuPoints.className = "cpuPoints";

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
result.textContent = "";
humanPoints.textContent = "Your Score: ";
cpuPoints.textContent = "Cpu Score: ";

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


let resultText = ""
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == rock && computerChoice == paper) {
        computerScore += 1;
        resultText = "You lose! Paper beats Rock!"
        return resultText
    } else if (humanChoice == paper && computerChoice == scissors) {
        computerScore += 1;
        resultText = "You lose! Scissors beats papper!";
        return resultText
    } else if (humanChoice == scissors && computerChoice == rock) {
        computerScore += 1;
        resultText = "You lose! Rock beats scissors!";
        return resultText
    } else if (humanChoice == paper && computerChoice == rock) {
        humanScore += 1;
        resultText = "You win! Paper beats Rock!";
        return resultText
    } else if (humanChoice == scissors && computerChoice == paper) {
        humanScore += 1;
        resultText = "You win! Scissors beats paper";
        return resultText
    } else if (humanChoice == rock && computerChoice == scissors) {
        humanScore += 1;
        resultText = "You win! Rock beats scissors";
        return resultText
    } else if (humanChoice == rock && computerChoice == rock) {
        resultText = "It's a tie";
        return resultText
    } else if (humanChoice == paper && computerChoice == paper) {
        resultText = "It's a tie";
        return resultText
    } else if (humanChoice == scissors && computerChoice == scissors) {
        resultText = "It's a tie";
        return resultText
    }
};

rockButton.addEventListener("click", () => {
    if( humanScore < 5 && computerScore < 5){
    playRound(rock, getComputerChoice());
    result.textContent = resultText
    humanPoints.textContent =  "Your Score is: " + humanScore;
    cpuPoints.textContent =  "Cpu Score is: " + computerScore;
    };

    if (humanScore == 5){
        result.textContent = "You Win!"
    } else if (computerScore == 5){
        result.textContent = "Computer Wins!"
    };
});
paperButton.addEventListener("click", () => {
    if( humanScore < 5 && computerScore < 5){
    playRound(paper, getComputerChoice());
    result.textContent = resultText;
    humanPoints.textContent =  "Your Score is: " + humanScore;
    cpuPoints.textContent =  "Cpu Score is: " + computerScore;
    };

    if (humanScore == 5){
        result.textContent = "You Win!"
    } else if (computerScore == 5){
        result.textContent = "Computer Wins!"
    };
});
paperButton.addEventListener("click", () => {
    if ( humanScore < 5 && computerScore < 5){
    playRound(scissors, getComputerChoice());
    result.textContent = resultText;
    humanPoints.textContent =  "Your Score is: " + humanScore;
    cpuPoints.textContent =  "Cpu Score is: " + computerScore;
    
    };
    if (humanScore == 5){
        result.textContent = "You Win!"
    } else if (computerScore == 5){
        result.textContent = "Computer Wins!"
    };
});

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(result);
container.appendChild(humanPoints);
container.appendChild(cpuPoints);



