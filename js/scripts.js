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

let totalScore = 0;
function throwDice() {
  if (totalScore < 30) {
    let dice = Math.floor(Math.random() * 6) + 1;
    if (dice !== 1) {
      totalScore = totalScore += dice;
    } else if(dice === 1) {
      window.alert("Oops you rolled a 1... Next player!");
      init();
      switchPlayer();
    }
    } else {
    window.alert("You won!");
    init();
  }
  return totalScore;
}

function init() {
  tempScore = 0;
  totalScore = 0;
  window.alert(tempScore);
}

function switchPlayer() {
  if (player > 0) {
    player = 0;
    console.log(player);
    return player;
  } else {
    player = 1;
    console.log(player);
    return player;
  }
}
// ///WIP
// function playerHold(tempScore, totalScore) {
//   totalScore = totalScore + tempScore;
//   switchPlayer();
// }
// ///