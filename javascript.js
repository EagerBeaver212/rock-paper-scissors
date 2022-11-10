let sampleSpace = ["rock", "paper", "scissors"]

function getComputerChoice(items) {
  return items[Math.floor(Math.random()*sampleSpace.length)];
}

function oneRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection)
    return ("Tie!")

  else if (playerSelection === "rock" && computerSelection === "paper")
    return ("You Lose! Paper beats Rock!")

  else if (playerSelection === "rock" && computerSelection === "scissors")
    return ("You Win! Rock beats Scissors!")

  else if (playerSelection === "paper" && computerSelection === "rock")
    return ("You Win! Paper beats Rock!") 

  else if (playerSelection === "paper" && computerSelection === "scissors")
    return ("You Lose! Scissors beats Paper!") 

  else if (playerSelection === "scissors" && computerSelection === "paper")
    return ("You Win! Scissors beats Paper!") 

  else if (playerSelection === "scissors" && computerSelection === "rock")
    return ("You Lose! Rock beats Scissors!") 
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = (prompt("What hand?")).toLowerCase();
//     let computerSelection = getComputerChoice(sampleSpace);
//     oneRound(playerSelection, computerSelection)
//     console.log(oneRound(playerSelection, computerSelection))
//   }
// }
// game()

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

rock.addEventListener('click', () => { console.log(oneRound("rock", getComputerChoice(sampleSpace))) })
paper.addEventListener('click', () => { console.log(oneRound("paper", getComputerChoice(sampleSpace))) })
scissors.addEventListener('click', () => { console.log(oneRound("scissors", getComputerChoice(sampleSpace))) })