let score = 0;
function throwDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  score = score += dice;
  return score;
}