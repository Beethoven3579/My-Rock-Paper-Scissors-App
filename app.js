
const choicesArray = ['Rock', 'Paper', 'Scissors'];
const message = document.getElementById('result-message');

let playerChoice;
let computerChoice;
let result;

function main() {

    document.getElementById('rock')
    .addEventListener('click', () => {   
        playerChoice = 'Rock';
        getComputerChoice();
        gameResult();
        message.textContent = `You chose ${playerChoice} :
        Computer chose ${computerChoice}... ${result}`;
    })
    document.getElementById('paper')
    .addEventListener('click', () => {
        playerChoice = 'Paper';
        getComputerChoice();
        gameResult()
        message.textContent = `You chose ${playerChoice} : 
        Computer chose ${computerChoice}... ${result}`; 
    })
    document.getElementById('scissors')
    .addEventListener('click', () => {
        playerChoice = 'Scissors';
        getComputerChoice();
        gameResult();
        message.textContent = `You chose ${playerChoice} : 
        Computer chose ${computerChoice}... ${result}`;
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

    if (playerChoice === "Rock" && computerChoice === "Paper" || 
    playerChoice === "Paper" && computerChoice === "Scissors" ||
    playerChoice === "Scissors" && computerChoice === "Rock") 
    {    result = "Sorry, you lost :-(";   
            return;
        }
    if (playerChoice === "Rock" && computerChoice === "Scissors" || 
    playerChoice === "Paper" && computerChoice === "Rock" ||
    playerChoice === "Scissors" && computerChoice === "Paper") 
    {    result = "Nice! You Win :-)";   
            return;
        }    
    if (playerChoice === "Rock" && computerChoice === "Rock" || 
    playerChoice === "Paper" && computerChoice === "Paper" ||
    playerChoice === "Scissors" && computerChoice === "Scissors") 
    {    result = "Draw";   
            return;
        }  
}  
   
main()