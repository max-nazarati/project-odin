let human_score = 0;
let computer_score = 0;
let draw_count = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const index_choice = Math.floor(Math.random() * 3);

  return options[index_choice];
}

function getHumanChoice() {
  const choice = prompt("choose hand:");
  return choice;
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === "scissors" && computerSelection === "paper") {
    human_score += 1;
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    computer_score += 1;
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    computer_score += 1;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    human_score += 1;
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    computer_score += 1;
  }  else if (humanSelection === "rock" && computerSelection === "scissors") {
    human_score += 1;
  } else {
    draw_count += 1;
  }
}

function playGame() {
  human_score = 0;
  computer_score = 0;
  draw_count = 0;

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(`human score: ${human_score}`);
  console.log(`computer score: ${computer_score}`);
  console.log(`draw count: ${draw_count}`);
}
