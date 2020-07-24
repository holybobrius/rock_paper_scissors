function computerPlay(){
    let num;
    num = Math.floor(Math.random() * 3);
    if (num == 0){
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else if (num == 2) {
        return "scissors";
    }
}

function playRound(player, computer) {
    const results_output = document.createElement("p");
    if (player == "rock") {
        switch (computer) {
            case "rock":
                results_output.textContent = "Draw!" + " Your score is " + playerScore + ". Computer's score is " + computerScore + "."
                break;
            case "paper":
                computerScore++;
                results_output.textContent = "You lose! Paper beats Rock." + " Your score is " + playerScore + ". Computer's score is " + computerScore + "."
                break;
            case "scissors": 
                playerScore++;
                results_output.textContent = "You win! Rock beats Scissors." + " Your score is " + playerScore + ". Computer's score is " + computerScore + "."
        }
    } else if (player == "paper") {
        switch (computer) {
            case "paper":
                results_output.textContent = "Draw!" + " Your score is " + playerScore + ". Computer's score is " + computerScore + "."
                break;
            case "scissors":
                computerScore++;
                results_output.textContent = "You lose! Scissors beat Paper." + " Your score is " + playerScore + ". Computer's score is " + computerScore + "." 
                break;
            case "rock": 
                playerScore++;
                results_output.textContent = "You win! Paper beats Rock." + " Your score is " + playerScore + ". Computer's score is " + computerScore + "."
        }
    } else if (player == "scissors") {
        switch (computer) {
            case "scissors":
                results_output.textContent = "Draw!" + " Your score is " + playerScore + ". Computer's score is " + computerScore + "."
                break;
            case "rock":
                computerScore++;
                results_output.textContent = "You lose! Rock beats Scissors." + " Your score is " + playerScore + ". Computer's score is " + computerScore + "." 
                break;
            case "paper": 
                playerScore++;
                results_output.textContent = "You win! Scissors beat Rock." + " Your score is " + playerScore + ". Computer's score is " + computerScore + "."
        }
    }
    results.appendChild(results_output);
    playerScoreOutput.innerHTML = playerScore;
    computerScoreOutput.innerHTML = computerScore;
    if ((playerScore === 5) || (computerScore === 5)) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        const results_output = document.createElement("p");
        if (playerScore > computerScore) {
            results_output.textContent = "Game is over! Player won the game!";
        } else {
            results_output.textContent = "Game is over! Computer won the game!";
        }
        results.appendChild(results_output);
        const reset_button = document.createElement("button");
        reset_button.textContent = "Play Again";
        results.appendChild(reset_button);
        reset_button.addEventListener('click', () => {
            location.reload();
        });
    }
}

const playerScoreOutput = document.getElementById('player-score-int');
const computerScoreOutput = document.getElementById('computer-score-int');

let playerScore = 0;
let computerScore = 0;
playerScoreOutput.innerHTML = playerScore;
computerScoreOutput.innerHTML = computerScore;

const rockButton = document.getElementById('Rock');
const paperButton = document.getElementById('Paper');
const scissorsButton = document.getElementById('Scissors');

const results = document.getElementById('results');

let playerSelection = "";
let computerSelection = "";

rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});
paperButton.addEventListener('click', () => {
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});
scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});
