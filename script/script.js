//Get comupter input (getComputerChoice) by using math. random generator.

function getComputerChoice() {

//Computer can be 1 to 3

    let compNumChoice = Math.floor(Math.random() * 3) + 1;

//Give each numerical value a string value, as 1 = rock, 2 = paper, 3 = scissors

        if (compNumChoice === 1) {
            console.log("Rock");
        } else if (compNumChoice === 2) {
            console.log("Paper");
        } else if (compNumChoice === 3) {
            console.log("Scissors");
        } 
}

//Return computer choice

getComputerChoice();