let computerChoice = document.getElementById("computer-choice");
let playerChoice = document.getElementById("player-choice");
let resultOutput = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let player;
let computer;
let result;

possibleChoices.forEach(button => button.addEventListener("click", (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computer = "rock";
    } else if (randomNumber == 2) {
        computer = "paper";
    } else {
        computer = "scissors";
    }
    computerChoice.innerText = computer;
}

function getResult() {
    switch (true) {
        case (computer == player) :
            result = "gelijkspel";
            break;
        case (computer == "rock" && player == "paper") :
        case (computer == "paper" && player == "scissors") :
        case (computer == "scissors" && player == "rock") :
            result = "je hebt gewonnen";
            break;
        case (computer == "rock" && player == "scissors") :
        case (computer == "paper" && player == "rock") :
        case (computer == "scissors" && player == "paper") :
            result = "je hebt verloren";
            break;
        default:
            result = "error"
        
    }
    resultOutput.innerText = result;

}