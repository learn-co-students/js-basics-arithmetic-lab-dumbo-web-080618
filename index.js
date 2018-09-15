/*
Variables defined in the test suite:
- oldID
- currentAge
newID that adds 1000000000 to the value in oldID, which you shouldn't define — it will be provided for you in the test suite.
You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = oldID + 1000000000
let ageIsValid = Number.isInteger(currentAge)
// randomNumber, which should contain a randomly-generated number between 0 (inclusive) and 20 (exclusive).
let randomNumber = Math.random()*20
// randomInteger, which should take the value in randomNumber and round it down to the nearest integer.
let randomInteger = Math.floor(randomNumber)
// randomUserID, which should convert randomInteger into a valid ID number — an integer between 1000000001 and 1000000020.
let randomUserID = 1000000000 + randomInteger