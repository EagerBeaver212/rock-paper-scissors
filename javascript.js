let sampleSpace = ["Rock", "Paper", "Scissors"]

function getComputerChoice(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function roundWinner(playerSelection,computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie"
  }
  else if(
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) { 
    return "Player";
  }
  else {
    return "Computer";
  }
}

let computerScore = 0
let playerScore = 0

let results = document.querySelector(".results")
let playerDisplayScore = document.querySelector(".player-score")
let computerDisplayScore = document.querySelector(".computer-score")

function resetScore() {
  computerScore = 0
  playerScore = 0
  updateScore()
}

function resetMessage() {
  results.innerHTML = "Start the game by choosing Rock, Paper or Scissors."
}

function updateScore() { 
  playerDisplayScore.textContent = `Player Score: ${playerScore}`
  computerDisplayScore.textContent = `Computer Score: ${computerScore}`
}

function oneRound(playerSelection, computerSelection) {
  const result = roundWinner(playerSelection, computerSelection)
  if(result == "Tie"){
    return `It's a Tie! Both parties chose ${playerSelection}`
  }
  else if(result === "Player") {
    playerScore += 1
    return `You Win! ${playerSelection} beats ${computerSelection}`
  }
  else {
    computerScore += 1
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}

function game() {
  resetMessage()
  resetScore()
  const buttons = document.querySelectorAll('button')
  buttons.forEach((button) => {
    button.addEventListener ('click', () => {
      playerSelection = button.id;
      computerSelection = getComputerChoice(sampleSpace)
      results.innerHTML = oneRound(playerSelection, computerSelection)
      updateScore()
      if (computerScore == 5) {
        alert("You Lost!"), 1000
        resetScore()
        resetMessage()
      }
      else if (playerScore == 5) {
        alert("You Won!"), 1000
        resetScore()
        resetMessage()
      }
      })
    })
  }
game()