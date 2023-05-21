// // //Practice 5.1

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
        isGuessedCorrecty = true;
    }
}




// var isOld = age > 31;

// //Practice 5.2
// let counter = 0;
// let step = 1;

// do {
//     console.log("counter is now at:" + counter);
//     counter += step;
// } while (counter <= 100)


let age = 31;
let worksAtAmpangHospital = true;
let hasAKidCalledAyla = true;
let studiedMedSchoolIn = 'Makassar';
let marriedTo = 'bigo';
let cursedUs = true;

// write an if condition for when the person has not cursed us, aged between 30 and 35, worked at ampang hospital
// has a kid called ayla, and studied in either makassar or bali.
if (
    (age >= 30 && age <= 35)
    && hasAKidCalledAyla
    && (studiedMedSchoolIn == 'Makassar' || studiedMedSchoolIn == 'Bali')
    && marriedTo == 'bigo'
    && !cursedUs) {
    console.log('Youre the best');
}