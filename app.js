const playerScore = 0;
const computerScore = 0;
const choicesArray = ['Rock', 'Paper', 'Scissors']
const message = document.getElementById('result-message');

let playerChoice;
let computerChoice;
let result;


    document.getElementById('rock')
    .addEventListener('click', (e) => {   
        playerChoice = 'Rock';
        message.textContent = `You chose ${playerChoice} :
        Computer chose ${computerChoice}`
        getComputerChoice();
    })
    document.getElementById('paper')
    .addEventListener('click', (e) => {
        playerChoice = 'Paper';
        message.textContent = `You chose ${playerChoice} : 
        Computer chose ${computerChoice}`
        getComputerChoice();
    })
    document.getElementById('scissors')
    .addEventListener('click', (e) => {
        playerChoice = 'Scissors';
        message.textContent = `You chose ${playerChoice} : 
        Computer chose ${computerChoice}`;
        getComputerChoice();

    })


function getComputerChoice () {

const randomChoice = Math.floor(Math.random() * 3)

for (let i = 0; i < choicesArray.length; i++) {
    i = randomChoice;
    computerChoice = choicesArray[randomChoice];
    break;
  }

}

function gameResult () {

}