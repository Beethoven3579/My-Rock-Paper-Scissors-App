const playerScore = 0;
const computerScore = 0;
const choicesArray = ['rock', 'paper', 'scissors']

let playerChoice;
let computerChoice;


document.getElementById('rock')
.addEventListener('click', (e) => {
    e.preventDefault()
    playerChoice = 'rock';
    console.log(playerChoice)
    getComputerChoice();
})
document.getElementById('paper')
.addEventListener('click', (e) => {
    e.preventDefault();
    playerChoice = 'paper';
    console.log(playerChoice)
    getComputerChoice();
})
document.getElementById('scissors')
.addEventListener('click', (e) => {
    e.preventDefault();
    playerChoice = 'scissors';
    console.log(playerChoice)
    getComputerChoice();
})


function getComputerChoice () {

const randomChoice = Math.floor(Math.random() * 3)

for (let i = 0; i < choicesArray.length; i++) {
    i = randomChoice;
    computerChoice = choicesArray[randomChoice];
    console.log(computerChoice)
    break;
  }

}