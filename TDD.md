```
Describe: throwDice()

Test: "It should return a random number between 1-6"
Code: throwDice();
Expected Output: "Any # between 1-6"

Test: "It should add the current dice value to the temporary score"
Code: throwDice();
Expected Output: "oldScore + roll = newScore;"

Test: "It should return an alert when score < 30"
Code: throwDice()
Expected Output: "You won!"

Test: "It should return an alert when a 1 is rolled"
Code: throwDice()
Expected Output: "Oops you rolled a 1... Next player!"

Test: "It should end the game when totalScore + tempScore < 30"
Code: 
tempScore = 15;
totalScore = 15;
throwDice();
Expected Output: "You Won!"
```
```
Describe: init()

Test: "It should reset score to 0 when a 1 is rolled"
Code: init()
Expected Output: "Current score is initialized to 0 when a 1 is rolled"
```
```
Describe: switchPlayer()

Test: "It should switch players when a 1 is rolled"
Code: switchPlayer()
Expected Output: "Player is switched from 0 to 1"
```
```
Describe: playerHold()

Test: "It should add current score to total score"
Code: playerHold ()
Exepected Output:"Players score is totalled and switches players"

