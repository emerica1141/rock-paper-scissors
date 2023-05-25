/* Pseudocode:
1) Get user input with addEventListener +
2) Create function and check if console logs it +
3) Create function for random computer Selection +
4) Check if console logs it +
5) Make both functions work at same time (After user has clicked on a button, computer should log a number) +
6) Make a "game" function to compare both values ( event id and computer random number ) +
7) Give them values with console.log and add score logging +
8) Create a solution to run game 5 times and add score incrementation +
9) Write base UI +
10) Write advanced UI +
11) Add Restart Game button +
12) Add responsive design +
*/

//#########################################################################################

const container = document.querySelector('#content');
const playerPicks = document.querySelector('#userPicks');
const computerPicks = document.querySelector('#compPicks')

const winnerContainer = document.querySelector('#winner');
const resultContainer = document.querySelector('#result');

const playerScoreTracker = document.createElement('div');
const playerScoreContent = document.createElement('p');
const computerScoreTracker = document.createElement('div');
const computerScoreContent = document.createElement('p');
const winnerContent = document.createElement('h2');
const restartGame = document.createElement('div');
const resultContent = document.createElement('h2');

// EXTRA CONTENT HAS BEEN ADDED FOR FUTURE UPDATES (USE IF NEEDED)
//const extraContent = document.createElement('div');

const playerPick = document.createElement('div');
const playerPickText = document.createElement('p');

const computerPick = document.createElement('div');
const computerPickText = document.createElement('p');

playerScoreTracker.classList.add('content');
playerScoreContent.classList.add('content');

computerScoreTracker.classList.add('content');
computerScoreContent.classList.add('content');

winnerContent.classList.add('winner');
restartGame.classList.add('restart');
//extraContent.classList.add('content');

playerScoreContent.textContent = `Player Score`;
playerScoreTracker.textContent = `0`;
computerScoreContent.textContent = `Computer Score`;
computerScoreTracker.textContent = `0`;

winnerContent.textContent = `Let the luckiest player win!`;
//extraContent.textContent = ``;

resultContent.textContent = "";

playerPickText.textContent = `Player Weapon:`;
computerPickText.textContent = `Computer Weapon:`

container.appendChild(playerScoreContent);
container.appendChild(playerScoreTracker);
container.appendChild(computerScoreContent);
container.appendChild(computerScoreTracker);
winnerContainer.appendChild(winnerContent);
winnerContainer.appendChild(restartGame);
resultContainer.appendChild(resultContent);
//container.appendChild(extraContent);

userPicks.appendChild(playerPickText);
userPicks.appendChild(playerPick);

compPicks.appendChild(computerPickText);
compPicks.appendChild(computerPick);

//#########################################################################################

let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let maxScore = 5;

// User input with addEventListener & Create function and check if console logs it

playerSelection = document.querySelectorAll('button');

playerSelection.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'rock') {
            game('rock')
        } else if (button.id == 'paper') {
            game('paper')
        } else if (button.id == 'scissors') {
            game('scissors')
        }
        return playerSelection
    });
});

// Create function for random computer Selection & Check if console logs it

async function compNumChoice() {
        let computerSelection = Math.floor(Math.random() * 3) + 1;
        if (computerSelection == 1) {
            computerPick.innerHTML = `<img src="img/rock.png" alt="Rock">`;
        } else if (computerSelection == 2) {
            computerPick.innerHTML = `<img src="img/paper.png" alt="Paper">`;
        } else if (computerSelection == 3) {
            computerPick.innerHTML = `<img src="img/scissors.png" alt="Scissors">`;
        }
        return computerSelection
};

// Function for one round play

async function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 1 || playerSelection == 'paper' && computerSelection == 2 || playerSelection == 'scissors' && computerSelection == 3) {
        resultContent.textContent =`It's a Tie`;
    } else if (playerSelection == 'rock' && computerSelection == 2 || playerSelection == 'paper' && computerSelection == 3 || playerSelection == 'scissors' && computerSelection == 1) {
        computerScore = ++computerScore;
        resultContent.textContent ='Too bad, You lost this round';
    } else if (playerSelection == 'rock' && computerSelection == 3 || playerSelection == 'paper' && computerSelection == 1 || playerSelection == 'scissors' && computerSelection == 2) {
        playerScore = ++playerScore;
        resultContent.textContent ='Congratulations, You won this round!';
    }
};



async function game(player) {

// If player or computer haven't reached maxScore, keep running the function

    if (playerScore < maxScore && computerScore < maxScore) {
        let playerSelection = player;
            if (player === "rock") {
                playerPick.innerHTML = `<img src="img/rock.png" alt="Rock">`;
            } else if (player === "paper") {
                playerPick.innerHTML = `<img src="img/paper.png" alt="Paper">`;
            } else if (player === "scissors") {
                playerPick.innerHTML = `<img src="img/scissors.png" alt="Scissors">`;
            };
        let computerSelection = await compNumChoice(); 
        let result = await playRound(playerSelection, computerSelection);
            console.log(result) 
            console.log(`Your score is now : Wins ${playerScore} Loses: ${computerScore}`);
            
//Edit player score and computer score HTML

            playerScoreTracker.textContent = playerScore;
            computerScoreTracker.textContent = computerScore;

//If player or computer has reached 5 points, announce the winner and end game

                if (playerScore === 5 || computerScore === 5) {
                reportWinner();
                return; }
    } else {
        return ("Game Over");
    };
};


//Function to compare results and report a Winner

function reportWinner() {
    if (playerScore < computerScore) {
        winnerContent.textContent = `Computer wins with ${computerScore} points.`;
        winnerContent.setAttribute('style', 'text-shadow: rgba(255,0,102,0.9) 0px 0px 32px;' )
    } else if (playerScore === computerScore) {
        winnerContent.textContent = `It's a tie. Player score : ${playerScore} Computer score : ${computerScore}.`;
        winnerContent.setAttribute('style', 'text-shadow: rgba(225,255,0,0.9) 0px 0px 32px;' )
    } else {
        winnerContent.textContent = `Congratulations YOU have won with ${playerScore} points!`;
        winnerContent.setAttribute('style', 'text-shadow: rgba(123,255,0,0.9) 0px 0px 32px;' )
    }
    restartGame.innerHTML = `<button type="button" id="restartBtn" onClick="window.location.reload();">Restart Game</button>`
};
