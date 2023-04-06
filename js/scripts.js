// Business Logic

let totalScore = [];
let tempScore;
let player;

document.querySelector('.btn-new').addEventListener('click', function() {
  totalScore = [0, 0];
  tempScore = 0;
  player = 0;
  return totalScore, tempScore, player;
});

function init() {
  document.querySelector('.btn-new').click();
}

function reset() {
  tempScore = 0;
  return tempScore;
}

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (totalScore[0] + tempScore < 30 && totalScore[1] + tempScore < 30) {
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("oops").innerHTML = " ";
    document.getElementById("winner").innerHTML = " ";
    if (dice !== 1 && player === 0) {
      tempScore += dice;
      document.getElementById("temp-score-1").innerHTML = tempScore;
    } else if (dice !== 1 && player === 1) {
      tempScore += dice;
      document.getElementById("temp-score-1").innerHTML = tempScore;
    } else if (dice === 1) {
      document.getElementById("oops").innerHTML = "Oops you rolled a 1, Next Player";
      reset();
      document.getElementById("temp-score-1").innerHTML = tempScore;
      switchPlayer();
    }
    } else {
    document.getElementById("winner").innerHTML = "You Won!";
    init();
  }
  return totalScore;
});

function switchPlayer()  {
  if (player > 0) {
    player = 0;
    return player;
  } else {
    player = 1;
    return player;
  }
}

document.querySelector('.btn-hold').addEventListener('click', function() {
  totalScore[player] += tempScore;
  document.getElementById("total-score-2").innerHTML = totalScore[0];
  reset();
  return switchPlayer();
});
// UI Logic

/// WIP