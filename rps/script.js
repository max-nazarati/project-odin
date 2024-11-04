function pcPlay() {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);

  return options[index];
}

function humanPlay() {
  return prompt("Input 'rock', 'paper' or 'scissors'");
}

function playRound(humanChoice, previousHumanScore, pcChoice, previousPcScore) {
  if (humanWins(humanChoice, pcChoice)) {
    return [previousHumanScore + 1, previousPcScore];
  } else if (pcWins(humanChoice, pcChoice)) {
    return [previousHumanScore, previousPcScore + 1];
  }
  return [previousHumanScore + 1, previousPcScore + 1];

}

function humanWins(humanChoice, pcChoice) {
  return targetWins(humanChoice, pcChoice);
}

function pcWins(humanChoice, pcChoice) {
  return targetWins(pcChoice, humanChoice);
}

function targetWins(target, oponent) {
  return (target === "rock" && oponent === "scissors")
    || (target === "paper" && oponent === "rock")
    || (target === "scissors" && oponent === "paper")
}

const ROUNDS_TO_PLAY = 3;
let HUMAN_SCORE = 0;
let PC_SCORE = 0;
let ROUND_COUNT = 0;

function playGame(rounds = ROUNDS_TO_PLAY) {
  let humanScore = 0;
  let pcScore = 0;

  while (rounds > 0) {
    const result = playRound(humanPlay(), humanScore, pcPlay(), pcScore);
    console.log(result);
    [humanScore, pcScore] = result;
    rounds--;
  }

  console.log(`human score: ${humanScore} | PC score: ${pcScore}`)
}

function btnListener(input) {
  let pcChoice = pcPlay();

  let result = playRound(input, HUMAN_SCORE, pcChoice, PC_SCORE);
  [HUMAN_SCORE, PC_SCORE] = result;
  ROUND_COUNT++;

  if (ROUND_COUNT === 5) {
    const winner = HUMAN_SCORE >= PC_SCORE ? "Human" : "PC";
    alert(`winner is: ${winner}`)
    HUMAN_SCORE = 0;
    PC_SCORE = 0;
    ROUND_COUNT = 0;
  }

  document.querySelector("#human .score").textContent = HUMAN_SCORE;
  document.querySelector("#pc .score").textContent = PC_SCORE;
  document.querySelector("#current-round .round").textContent = ROUND_COUNT;
}

document.querySelector("#rock-button").addEventListener("click", e => btnListener("rock"));
document.querySelector("#paper-button").addEventListener("click", e => btnListener("paper"));
document.querySelector("#scissors-button").addEventListener("click", e => btnListener("scissors"));

