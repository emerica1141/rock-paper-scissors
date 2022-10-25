let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

game();
reportWinner();


//Get player input for a game

function playerValue() {

    let playerInput = prompt("Pick your weapon (1 - Rock, 2 - Paper, 3 - Scissors):"); 
        if (playerInput == 1) {
            console.log("You have picked Rock as a weapon, good luck!")
        } else if (playerInput == 2) {
            console.log("You have picked Paper as a weapon, good luck!")
        } else if (playerInput == 3) {
            console.log("You have picked Scissors as a weapon, good luck!")
        } 

    return playerInput;
}

//Get computer input (getComputerChoice) by using math. random generator.

function getComputerChoice() {

//Computer can choose from 1 to 3
    
    let compNumChoice = Math.floor(Math.random() * 3) + 1;
    
//Give each numerical value a string value, as 1 = rock, 2 = paper, 3 = scissors
    
        if (compNumChoice === 1) {
            console.log("Computer has chosen Rock as a weapon");
        } else if (compNumChoice === 2) {
            console.log("Computer has chosen Paper as a weapon");
        } else if (compNumChoice === 3) {
            console.log("Computer has chosen Scissors as a weapon");
        } 

    return compNumChoice;
}

//One round play

function playRound(playerSelection, computerSelection) {

        if ((playerSelection == 1 && computerSelection == 1 ) || (playerSelection == 2 && computerSelection == 2) || (playerSelection == 3 && computerSelection == 3)) {
            console.log("It's a draw, try again!");
        }  else if (playerSelection == 1 && computerSelection == 2)
            {console.log("You Lose, Paper beats Rock!");
                computerScore = ++computerScore;

        } else if (playerSelection == 1 && computerSelection == 3)
            {console.log("Congratulations, YOU won! Rock beats Scissors!");
                playerScore = ++playerScore;

        } else if (playerSelection == 2 && computerSelection == 1 )
            {console.log("Congratulations, YOU won! Paper beats Rock!");
                playerScore = ++playerScore;

        } else if (playerSelection == 2 && computerSelection == 3)
            {console.log("You lose, Scissors beats Paper!");
                computerScore = ++computerScore;

        } else if (playerSelection == 3 && computerSelection == 1 )
            {console.log("You lose, Rock beats Scissors!");
                computerScore = ++computerScore;

        } else if (playerSelection == 3 && computerSelection == 2)
            {console.log("Congratulations, YOU won! Scissors beats Paper!");
                playerScore = ++playerScore;
        } 

    
}

function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = playerValue();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
            console.log(`Wins: ${playerScore} Loses: ${computerScore}`);
    }

}

function reportWinner() {
    if (playerScore < computerScore) {
        console.log(`Computer wins with ${computerScore} points`)
    } else if (playerScore === computerScore) {
        console.log(`It's a tie. Player score : ${playerScore} Compure score : ${computerScore}`)
    } else {
        console.log(`Congratulations, YOU have won with ${playerScore} points!`)
    }
}