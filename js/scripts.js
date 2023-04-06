// let score = 0;
// function throwDice() {
//   if (score < 30) {
//     let dice = Math.floor(Math.random() * 6) + 1;

//     score = score += dice;
//   } else {
//     window.alert("You won!");
//   }
//   return score;
// }

// let totalScore = [0, 0];
// function throwDice() {
//   if (totalScore < 30) {
//     let dice = Math.floor(Math.random() * 6) + 1;
//     if (dice !== 1) {
//       totalScore = totalScore += dice;
//     } else if(dice === 1) {
//       window.alert("Oops you rolled a 1... Next player!");
//       init();
//       switchPlayer();
//     }
//     } else {
//     window.alert("You won!");
//     init();
//   }
//   return totalScore;
// }

// function init() {
//   tempScore = 0;
//   totalScore = 0;
//   window.alert(tempScore);
// }

// function switchPlayer() {
//   if (player > 0) {
//     player = 0;
//     console.log(player);
//     return player;
//   } else {
//     player = 1;
//     console.log(player);
//     return player;
//   }
// }

// function playerHold(tempScore, totalScore) {
//   totalScore = totalScore + tempScore;
//   switchPlayer();
// }

let totalScore = [0, 0];
let tempScore = 0;
let player;
function throwDice() {
  if (totalScore[0] + tempScore < 30 && totalScore[1] + tempScore < 30) {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log("Current Player:" + player);
    console.log("The dice rolled:" + dice);
    if (dice !== 1 && player === 0) {
      tempScore += dice;
      console.log("Temp Score Player 0: " + tempScore);
    } else if (dice !== 1 && player === 1) {
      tempScore += dice;
      console.log("Temp Score Player 1: " + tempScore);
    } else if (dice === 1) {
      window.alert("Oops you rolled a 1... Next player!");
      init();
      console.log("Temp Score: " + tempScore);
      switchPlayer();
      console.log("Its player" + player + "'s turn!");
    }
    } else {
    window.alert("You won!");
    init();
  }
  return totalScore;
}

function init() {
  tempScore = 0;
  return tempScore;
}

function switchPlayer() {
  if (player > 0) {
    player = 0;
    return player;
  } else {
    player = 1;
    return player;
  }
}

function playerHold() {
  totalScore[player] += tempScore;
  init();
  console.log("Its player " + player + "'s turn!");
  console.log("Total Scores: ");
  console.log("Player 0: " + totalScore[0]);
  console.log("Player 1: " + totalScore[1]);
  return switchPlayer();
}