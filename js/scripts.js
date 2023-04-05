let score = 0;
function throwDice() {
  if (score < 30) {
    let dice = Math.floor(Math.random() * 6) + 1;
    score = score += dice;
  } else {
    window.alert("You won!");
  }
  return score;
}