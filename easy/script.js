function computerPlay() {
    var options = ["Rock", "Paper", "Scissors"];

    var random = Math.floor(Math.random() * 3);
    var choice = options[random];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        return "Tied!";
    }
    if(computerSelection === "rock") {
        if(playerSelection === "scissors") {
            return "You lose! Rock beats scissors!";
        }
        else {
            return "You lose! Paper beats rock!";
        }
    }
    if(computerSelection === "paper") {
        if(playerSelection === "rock") {
            return "You lose! Paper beats rock!";
        }
        else {
            return "You win! Scissors beats paper!";
        }
    }
    if(computerSelection === "scissors") {
        if(playerSelection === "paper") {
            return "You lose! Scissors beats paper!";
        }
        else {
            return "You win! Rock beats scissors!";
        }
    }
}

function game() {
    for(i = 0; i < 5; i++) {
        playerSelection = prompt("Your choice?");
        computerSelection = computerPlay();
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());