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

let score = 0;
function throwDice() {
  if (score < 30) {
    let dice = Math.floor(Math.random() * 6) + 1;
    if (dice !== 1) {
      score = score += dice;
    } else if(dice === 1) {
      window.alert("Oops you rolled a 1... Next player!");
      init();
      switchPlayer();
    }
    } else {
    window.alert("You won!");
    init();
  }
  return score;
}

function init() {
  tempScore = 0;
  score = 0;
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