// //Practice 5.1

let maxValue = 20;
let solution = Math.floor(Math.random() * 5) + 1;
let isGuessedCorrectly = false;
console.log('this is the number system choose: ', solution);

while (!isGuessedCorrectly) {
    let usersGuess = prompt("choose a number between 1 to 5");
    usersGuess = parseInt(usersGuess);
    if (usersGuess > solution) {
        console.log("Your guess is too high"
        )
    }
    else if (usersGuess < solution) {
        console.log('Your guess is too low');
    }
    else if (usersGuess == solution) {
        console.log('You guessed it right!');
        isGuessedCorrectly = true;
    }
}