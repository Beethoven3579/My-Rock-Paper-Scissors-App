
const choicesArray = ['Rock', 'Paper', 'Scissors'];
const message = document.getElementById('result-message');

let playerChoice;
let computerChoice;
let result;

function main() {

    document.getElementById('rock')
    .addEventListener('click', () => {   
        playerChoice = 'Rock';
        message.textContent = `You chose ${playerChoice} :
        Computer chose ${computerChoice}... ${result}`;
        getComputerChoice();
        gameResult();
    })
    document.getElementById('paper')
    .addEventListener('click', () => {
        playerChoice = 'Paper';
        message.textContent = `You chose ${playerChoice} : 
        Computer chose ${computerChoice}... ${result}`;
        getComputerChoice();
        gameResult()
    })
    document.getElementById('scissors')
    .addEventListener('click', () => {
        playerChoice = 'Scissors';
        message.textContent = `You chose ${playerChoice} : 
        Computer chose ${computerChoice}... ${result}`;
        getComputerChoice();
        gameResult();
    })

}

function getComputerChoice() {
    
    const randomChoice = Math.floor(Math.random() * 3);
    for (let i = 0; i < choicesArray.length; i++) {
        i = randomChoice;
        computerChoice = choicesArray[randomChoice];
        break;
      }
    
    }
    
function gameResult() {

    switch (playerChoice === "Rock") {
        case computerChoice === "Paper":
        result = "Sorry, you lost :(";   
            break;
        case computerChoice === "Scissors":
        result = "Nice! You Win!";
            break;
        }
    switch (playerChoice === "Paper") {
        case computerChoice === "Scissors":
        result = "Sorry, you lost :(";    
            break;
        case computerChoice === "Rock":
        result = "Nice! You Win!";
            break;
        }
    switch (playerChoice === "Scissors") {
        case computerChoice === "Rock":
        result = "Sorry, you lost :(";    
            break;
        case computerChoice === "Paper":
        result = "Nice! You Win!";
            break;
        }
    
     }

main()