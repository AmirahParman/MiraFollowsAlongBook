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

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
    if (myFriends[i] == 'banana leaf') {
        console.log('yum!');
    }
}


/* Practice scenario 3
Create a loop that will output ****, 
the number of * is depending on the const noOfAstrisks below
 
For example, if noOfAstrisks = 7, then the console output should be:
    *******
 
*/
const noOfAsterisks = 7;
let asterisks = '';

for (let i = 0; i < noOfAsterisks; i++) {
    asterisks += '*';
}
console.log(asterisks);

/* Practice scenario 4

Create a loop that will output the friendsList below, but with numbers in front of it. 
And make every names uppercase.

Like this:

1. TIN
2. BIGO
3. SHAKIRAH
4. RIDH
...
etc

p.s. To uppercase use .toUpperCase() on the string you want to uppercase

*/

// const friendsList = ['tin', 'bigo', 'shakirah', 'ridh', 'ayoh', 'mok', 'lina'];
// let counter = 1

// for (let i = 0; i < friendsList.length; i++) {
//     let list = (counter + '. ' + friendsList[i]);
//     console.log(list.toUpperCase(i));
//     counter = counter + 1;
// }

// for (let i = 0; i < friendsList.length; i++) {
//     let list = ((i + 1) + '. ' + friendsList[i]);
//     console.log(list.toUpperCase(i));
// }


/* Practice scenario 6

Use a loop to print a list of numbers in increments of 15
starting at 30, ending at 330

*/

for (i = 30; i <= 330; i += 15) {
    console.log(i)
}

/* Practice scenario 7

Using the const asteriskAndDollarsNo below, print alternately * and $ 

Example, if asteriskAndDollarsNo == 5, we print:
*$*$*

if asteriskAndDollarsNo == 8 we print:
*$*$*$*$

*/

const asteriskAndDollarsNo = 13;
const asterisk = '*';
const dollarSign = '$';
let finalOutcome = '';

for (i = 0; i < asteriskAndDollarsNo; i++) {
    if (i % 2 !== 0) {
        finalOutcome += dollarSign;
    } else {
        finalOutcome += asterisk;
    };
}
console.log(finalOutcome);


/* Practice scenario 8
 
create ourFriendsList via a loop, we need 10 friends, with names Friend 1, Friend 2, Friend 3... etc
and they also have an age. Starting with 15, and increment by 2 every time.
 
so ourFriendslist will look something like this
 
name: Friend 1
age: 15
 
name: Friend 2
age: 17
 
name: Friend 3
age: 19
 
etc
 
*/

let ourFriendslist = [];
let theirAge = 15

for (let i = 1; i < 12; i++) {
    ourFriendslist.push({
        name: 'Friend ' + i,
        age: 'age ' + theirAge
    });
    theirAge += 2
}

console.log(ourFriendslist)


/* Practice scenario 9
 
with the two arrays below, match the names of ibusHouseResidents and jobs, in an interpolated string like so:
 
bigo is an architect
anis is a student
...
etc
 
*/

const ibusHouseResidents = ['bigo', 'tin', 'anis', 'ayla', 'abah', 'ibu'];
const theirJobs = ['architect', 'doctor', 'student', 'baby', 'lecturer', 'housewife'];