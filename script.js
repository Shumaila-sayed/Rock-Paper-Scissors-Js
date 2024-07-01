
function getComputerChoice(){
    let random = Math.random();
    let choice = " ";
    if (random <= 0.3){
        choice = "rock";
    } else if (random > 0.3 && random <= 0.6 ) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    console.log(choice)
}
getComputerChoice()

function getHumanChoice(){
    let hChoice = prompt("Rock Paper Scissors, CHOOSE!")
    console.log(hChoice);
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;