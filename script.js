let humanScore = 0;
let computerScore = 0;

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
    return choice;
}
   
  
    function playRound(humanChoice){
            let computerChoice = getComputerChoice();
            let result;

            if(humanChoice === computerChoice){
                result = "It's a tie";
            } else if(
                (humanChoice == "rock" && computerChoice == "scissors") ||
                (humanChoice == "paper" && computerChoice == "rock") ||
                (humanChoice == "scissors" && computerChoice == "paper")
            ){
                 result = `You Win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
                humanScore++;
            } else
                 result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
                 computerScore++;
            
            document.getElementById('result').textContent = result;
            document.getElementById('computer-score').textContent = computerScore;
            document.getElementById('human-score').textContent = humanScore;

            let winner = document.getElementById('winner');

            if (humanScore === 5 || computerScore === 5) {
                setTimeout(() => {
                    if(humanScore === 5){
                        winner.textContent = 'Human wins the game!'
                     }else{
                        winner.textContent = 'Computer wins the game!'
                      };
                        humanScore = 0;
                        computerScore = 0;
                        document.getElementById('human-score').textContent = humanScore;
                        document.getElementById('computer-score').textContent = computerScore;
                    },1500)};
      
            
    
            }

    function setEvent(){
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');

        rockBtn.addEventListener('click', () => playRound('rock'));
        paperBtn.addEventListener('click', () => playRound('paper'));
        scissorsBtn.addEventListener('click', () => playRound('scissors'));

    }       
     setEvent();
