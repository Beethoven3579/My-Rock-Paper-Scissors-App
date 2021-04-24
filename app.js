let result;

function main() {
    const message = document.getElementById('result-message');
    const gameImages = document.querySelectorAll('img');

    for (image of gameImages) {
        image.addEventListener('click', (e) =>  {
            const playerChoice = capitalize(e.target.alt);
            const computerChoice = capitalize(getComputerChoice());
            gameResult(playerChoice, computerChoice)
            message.textContent = `You chose ${playerChoice} :
            Computer chose ${computerChoice}... ${result}`;
        })
    }  

}

function getComputerChoice() {
    const choicesArray = ['Rock', 'Paper', 'Scissors'];
    return choicesArray[Math.floor(Math.random() * choicesArray.length)]; 
}
    

function capitalize(string) {
    const remainingString = string.slice(1);
    const firstCharacter  = string.charAt(0).toUpperCase();
    return `${firstCharacter}${remainingString}`
}
function gameResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)  result = "Draw";
       
    switch(playerChoice) {
        case 'Rock':
            if (computerChoice === 'Scissors') result = "Nice! You Win :-)";
            if (computerChoice === 'Paper') result = "Sorry, you lost :-("; 
            break;
        case 'Paper':
            if (computerChoice === 'Rock') result = "Nice! You Win :-)";
            if (computerChoice === 'Scissors') result = "Sorry, you lost :-(";   
            break;
        case 'Scissors':
            if (computerChoice === 'Paper') result = "Nice! You Win :-)";
            if (computerChoice === 'Rock') result = "Sorry, you lost :-(";   
            break;    
    }
}  
   
main()