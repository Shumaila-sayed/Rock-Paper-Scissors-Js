
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

    console.log(choice);
   return choice;
  
}


function getHumanChoice(){
    let hChoice = prompt("Rock Paper Scissors, CHOOSE!")
   return hChoice.toLowerCase();
}



let humanScore = 0;
let computerScore = 0;



    function playGame(){
        function playRound(humanChoice, computerChoice){
            if (humanChoice === "paper" && computerChoice === "scissors"){
                console.log("You lose! Scissors beats paper");
                  computerScore++;
            } else if(humanChoice === "rock" && computerChoice === "paper"){
                console.log("You lose! paper beats rock");
                    computerScore++;
            }else if(humanChoice === "scissors" && computerChoice === "rock"){
                console.log("You lose! rock beats scissors");
                    computerScore++ 
        
        
            }else if(humanChoice === "paper" && computerChoice === "rock"){
                console.log("You win! paper beats rock");
                        humanScore++; 
            }else if(humanChoice === "rock" && computerChoice === "scissors"){
                console.log("You win! rock beats scissors");
                humanScore++;  
            }else if(humanChoice === "scissors" && computerChoice === "paper"){
                console.log("You win! scissors beats paper");
                            humanScore++; 
            }else {
                console.log("It's a tie!");
            }
        
            console.log("Computer score is " + computerScore);
            console.log("Human score is " + humanScore);
                   
                 }
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            
            playRound(humanSelection, computerSelection);
                   
        
    }

    
    for(let index = 1; index <=5; index ++  ){
        playGame();
    }

    if (humanScore > computerScore) {
        console.log(`Human wins!`);
      } else if (computerScore > humanScore) {
        console.log(`Computer wins!`);
      } else console.log(`A draw. Play Again?`);