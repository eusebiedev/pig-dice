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
    } else {
      window.alert("Oops you rolled a 1... Next player!");
      init();
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