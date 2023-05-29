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

for (let i = 0; i < ibusHouseResidents.length; i++) {
    console.log(`${ibusHouseResidents[i]} is a ${theirJobs[i]}`)

}

//Practice scenario 10
const customerOrders = [{
    item: 'burger',
    quantity: 2,
    costPerUnit: 100
},
{
    item: 'pizza',
    quantity: 1,
    costPerUnit: 120
},
{
    item: 'salad',
    quantity: 3,
    costPerUnit: 80
},
{
    item: 'fries',
    quantity: 4,
    costPerUnit: 40
},
{
    item: 'soda',
    quantity: 2,
    costPerUnit: 20
},
{
    item: 'ice cream',
    quantity: 1,
    costPerUnit: 50
}
];

let totalCustomerOrder = 0;

for (let i = 0; i < customerOrders.length; i++) {
    let calculatedCost = customerOrders[i].quantity * customerOrders[i].costPerUnit;
    totalCustomerOrder += calculatedCost;
}

console.log('Total customer order', totalCustomerOrder)

//Practice 5.4

let myTable = [];
let rows = 8;
let column = 5;
let counter = 0;

for (let i = 0; i < rows; i++) {
    let tempTable = [];
    for (let j = 0; j < column; j++) {
        counter++;
        tempTable.push(`dog no ${counter}`);
    }
    myTable.push(tempTable);
}

console.table(myTable);

/*Practice scenario 11
You are given an array of numbers. 
Write a loop that takes each number from the original array, squares it, and then appends it to a new array.*/

const originalArray = [2, 4, 6, 8, 10];
const squaredArray = [];

for (let i = 0; i < originalArray.length; i++) {
    squaredArray.push(originalArray[i] * originalArray[i]);
}
console.log(squaredArray);

/* Practice scenario 12: 
Tournament of friends

Make all of your friends fight eachother
They cannot fight themselves
Random score between them

const friendsList = ['ali', 'tin', 'mot', 'sik', 'kil'];

expected output:

|     | ali | tin | mot | sik | kil |
| ali | n/a | 2-2 | 0-0 | 2-2 | 1-1 | 
| tin | 1-0 | n/a | 3-4 | 1-1 | 5-5 |
| mot | 2-9 | 9-9 | n/a | 3-3 | 4-1 |
| sik | 7-7 | 3-3 | 5-5 | n/a | 0-3 |
| kil | 3-2 | 4-4 | 6-7 | 0-0 | n/a |
*/

console.log('*****Begin friends league*****');

const friendsList = ['ali', 'tin', 'mot', 'sik', 'kil'];

const noOfRows = friendsList.length;
const noOfColumns = friendsList.length;

let leagueTable = [];

for (let row = 0; row < noOfRows; row++) {
    let rowTemp = [];
    for (let column = 0; column < noOfColumns; column++) {
        if (row == 0 && column == 0) {
            rowTemp.push(' ');
        }
        else if (row == 0 && column > 0) {
            rowTemp.push(friendsList[column]);
        }
        else if (row > 0 && column == 0) {
            rowTemp.push(friendsList[row]);
        }
        else if (row == column) {
            rowTemp.push('n/a');
        }
        else {
            let scoreLeft = Math.floor(Math.random() * 3);
            let scoreRight = Math.floor(Math.random() * 3);
            let score = `${scoreLeft} - ${scoreRight}`;
            rowTemp.push(score);
        }
    }
    leagueTable.push(rowTemp);
}


console.table(leagueTable);

/* Practice Scenario 12
Given two arrays, one containing owners, and one containing cats. Assign the cats to their owners.

Hints:

You can detect if a string is part of another string by using the includes method

E.g:

const sentence = 'The quick brown joglade jumps over shakirah.';
const word = 'joglade';

console.log(sentence.includes(word));
// output: true
And you can remove the prefix from the cat names by using the split method.

E.g:

let ownersAndCats = 'shad_chobber'.split('_');
console.log(ownersAndCats[0]); // output: shad
console.log(ownersAndCats[1]); // output: chobber


Expected result: array of objects in this form:

const ownersWithCats = [
    {
        "name": "shad",
        "cats": [
            "chobber"
        ]
    },
    {
        "name": "shakirah",
        "cats": [
            "jogladae",
            "jages",
        ]
    },
    {
        "name": "slizzard",
        "cats": [
            "noni"
        ]
    },
    {
        "name": "mok",
        "cats": [
            "tomenky"
        ]
    }
];
*/

const cats = ['mok_tomenky', 'shakirah_jogladae', 'shakirah_jages', 'slizzard_noni', 'shad_chobber'];
const owners = ['shakirah', 'slizzard', 'shad', 'mok'];
let ownersWithCatsList = [];

for (let i = 0; i < owners.length; i++) {
    let ownerName = owners[i];
    let hisCats = [];

    for (j = 0; j < cats.length; j++) {
        if (cats[j].includes(owners[i])) {
            let singleCatAndOwner = cats[j].split('_');
            hisCats.push(singleCatAndOwner[1])
        }
    }

    ownersWithCatsList.push({
        name: ownerName,
        cats: hisCats
    })

}

console.log(ownersWithCatsList);

// //Practice exercise 5.5 
// console.log('----5.5 starts here----')
// let gridArray = 64;
// let counterSet = 0;
// let cellsCounter = [];

// if (cellsCounter % 8 == 0) {
//     // if ()
//     for (let i = 0; i < gridArray + 1; i++) {
//         cellsCounter.push(i)
//     }
// }

// console.table(cellsCounter)

//Practice 5.6
console.log('----new practice begins----')
let arrays = [];
console.log(arrays)

for (let i = 0; i < 11; i++) {
    arrays.push(i)
}

for (let array of arrays) {
    console.log(array)
}

//Practice 5.7
console.log('----new practice begins----')

let myAyla = {
    name: 'Ayla Raisa',
    age: 1,
    favouriteColour: 'pink'
}

for (let info in myAyla) {
    console.log(myAyla)
}

let myAylaRaisa = ['Ayla Raisa', 1, 'pink']
for (let Ayla in myAylaRaisa) {
    console.log(myAylaRaisa[Ayla])
}

//Practice 5.8
console.log('----new practice begins----')

let string = [];
let skipThisNumber = 6;

for (let i = 1; i < 11; i++) {
    if (i !== skipThisNumber) {
        string.push(i)
    }
}

console.log(string)


