var playerScore = 0;
var computerScore = 0;

// Query selectors for each choice's button
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resetButton = document.querySelector(".reset");
const score = document.querySelector(".score");

const scoreText = document.querySelector(".scoreText");
scoreText.textContent = "Player: " + playerScore + " Computer: " + computerScore;

function checkWinner() {
  if(computerScore === 5) {
    alert("Computer wins!");
  }
  else if(playerScore === 5) {
    alert("You win!")
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  scoreText.textContent = "Player: " + playerScore + " Computer: " + computerScore;
}

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
      score.textContent = "Tied!";
      scoreText.textContent = "Player: " + playerScore + " Computer: " + computerScore;
  }
  if(computerSelection === "rock") {
      if(playerSelection === "scissors") {
        computerScore++;
        score.textContent = "You lose! Rock beats scissors!";
        scoreText.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        checkWinner();
      }
      else {
        computerScore++;
        score.textContent = "You lose! Paper beats rock!";
        scoreText.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        checkWinner();
      }
  }
  if(computerSelection === "paper") {
      if(playerSelection === "rock") {
        computerScore++;
        score.textContent = "You lose! Paper beats rock!";
        scoreText.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        checkWinner();
      }
      else {
        playerScore++;
        score.textContent = "You win! Scissors beats paper!";
        scoreText.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        checkWinner();
      }
  }
  if(computerSelection === "scissors") {
      if(playerSelection === "paper") {
        computerScore++;
        score.textContent = "You lose! Scissors beats paper!";
        scoreText.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        checkWinner();
      }
      else {
        playerScore++;
        score.textContent = "You win! rock beats paper!";
        scoreText.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        checkWinner();
      }
  }
}



// If rock is chosen
rock.addEventListener('click', function(e) {
  playRound("rock", computerPlay());
});

// If paper is chosen
paper.addEventListener('click', function(e) {
  playRound("paper", computerPlay());
});

// If scissors is chosen
scissors.addEventListener('click', function(e) {
  playRound("scissors", computerPlay());
});

// If 'reset' is pressed
resetButton.addEventListener('click', function(e) {
  reset();
});