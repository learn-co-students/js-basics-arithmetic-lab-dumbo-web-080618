/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

let newID = 1000000000 + oldID;
let ageIsValid = Number.isInteger(currentAge);
//Math.random() returns a number between 0 and 0.999...,
//which we multiply by 10 to give us a number between 0 and 9.999
//.... We then pass that number to Math.floor(),
//which returns an integer between 0 and 9.
//That's one less than the desired range (1 to 20),
//so we add 11 at the end of the equation.

let randomNumber = Math.floor(Math.random() * 10) + 10;
let randomInteger = randomNumber;
let randomUserID = Math.max(Math.min(1000000001) + 19);
