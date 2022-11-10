let sampleSpace = ["rock", "paper", "scissors"]

function getComputerChoice(items) {
  return items[Math.floor(Math.random()*items.length)];
}

let computerScore = 0
let playerScore = 0

function oneRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection)
    return ("Tie!")

  else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1
    return ("You Lose! Paper beats Rock!")
  }

  else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1
    return ("You Win! Rock beats Scissors!")
  }

  else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1
    return ("You Win! Paper beats Rock!")
  }

  else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1
    return ("You Lose! Scissors beats Paper!")
  }

  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1
    return ("You Win! Scissors beats Paper!")
  }

  else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1
    return ("You Lose! Rock beats Scissors!") 
  }
}

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

let results = document.querySelector(".results")
let playerDisplayScore = document.querySelector(".player-score")
let computerDisplayScore = document.querySelector(".computer-score")

function updatePlayer() { playerDisplayScore.textContent = `Player Score: ${playerScore}` }
function updateComputer() { computerDisplayScore.textContent = `Computer Score: ${computerScore}` }
updatePlayer()
updateComputer()

function game() {
  results.innerHTML = "Pick Rock, Paper or Scissors!"
  rock.addEventListener('click', () => { 
    let roundResult = oneRound("rock", getComputerChoice(sampleSpace))
    results.innerHTML = (roundResult)
    updatePlayer()
    updateComputer()
  })
  
  paper.addEventListener('click', () => { 
    let roundResult = oneRound("paper", getComputerChoice(sampleSpace))
    results.innerHTML = (roundResult)
    updatePlayer()
    updateComputer()
  })
  
  scissors.addEventListener('click', () => { 
    let roundResult = oneRound("scissors", getComputerChoice(sampleSpace))
    results.innerHTML = (roundResult)
    updatePlayer()
    updateComputer()
  })
  if (computerScore === 5) {
    results.innerHTML = "You lost this game. Better luck next time!"
  }
  if (playerScore === 5) {
    results.innerHTML = "Well done! You won this game"
  }
}

game()
