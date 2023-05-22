// // // //Practice 5.1

// let maxValue = 20;
// let solution = Math.floor(Math.random() * 5) + 1;
// let isGuessedCorrectly = false;
// console.log('this is the number system choose: ', solution);

// while (!isGuessedCorrectly) {
//     let usersGuess = prompt("choose a number between 1 to 5");
//     usersGuess = parseInt(usersGuess);
//     if (usersGuess > solution) {
//         console.log("Your guess is too high"
//         )
//     }
//     else if (usersGuess < solution) {
//         console.log('Your guess is too low');
//     }
//     else if (usersGuess == solution) {
//         console.log('You guessed it right!');
//         isGuessedCorrectly = true;
//     }
// }




// // var isOld = age > 31;

// // //Practice 5.2
// // let counter = 0;
// // let step = 1;

// // do {
// //     console.log("counter is now at:" + counter);
// //     counter += step;
// // } while (counter <= 100)


// let age = 31;
// let worksAtAmpangHospital = true;
// let hasAKidCalledAyla = true;
// let studiedMedSchoolIn = 'Makassar';
// let marriedTo = 'bigo';
// let cursedUs = false;

// // write an if condition for when the person has not cursed us, aged between 30 and 35, worked at ampang hospital
// // has a kid called ayla, and studied in either makassar or bali.
// while (
//     (age >= 30 && age <= 35)
//     && hasAKidCalledAyla
//     && (studiedMedSchoolIn == 'Makassar' || studiedMedSchoolIn == 'Bali')
//     && marriedTo == 'bigo'
//     && !cursedUs) {

//     console.log('Youre the best');

//     cursedUs = true;
// }

//Practice 5.3

let myWork = [];

for (let lesson = 1; lesson < 11; lesson = lesson + 1) {
    let myStatus = lesson % 2 !== 0 ? false : true;
    myWork.push({
        lesson: 'lesson ' + lesson,
        status: myStatus
    })

}

console.log(myWork);

/* Practice scenario 1

Create a loop that outputs the number 1 to 10, but skip the numbers 5 and 7
*/

let numberOutput = []

for (let index = 1; index < 11; index++) {
    if (index !== 5 && index !== 7) {
        numberOutput.push(index);
    }
}
console.log(numberOutput)


/* Practice scenario 2

Create a loop that will output the array below one by one. 
But by the time you get to banana leaf, output "yum!

i.e:
faiz mustaza
tiara
khana
banana leaf
yum!
ridh

You are not allowed to modify the variable myFriends.

*/

const myFriends = ['faiz mustaza', 'tiara', 'khana', 'banana leaf', 'ridh'];



/* Practice scenario 3
Create a loop that will output ****, 
the number of * is depending on the const astr below

For example, if astr = 7, then the console output should be:
    *******

*/
const astr = 7;

