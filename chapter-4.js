//practice 4.1
happy = true;

// console.log("I'm glad you're happy")

if (happy == true) {
    console.log("I'm glad you're happy");
}

if (!happy == false) {
    console.log("Why are you so miserable?");
}

//practice 4.2

let usersAge = prompt("How old are you?");
usersAgeReceived = usersAge;

if (usersAgeReceived >= 21) {
    console.log('Welcome in. You can purchase any alcohol from here')
}
else if (usersAgeReceived >= 19) {
    console.log('Welcome in. You are not allowed to purchase alcohol');
}
else {
    console.log('You are not of legal age to enter this premise');
}


//Practice 4.3

let idValid = true

idValid == true ? console.log('You may enter') : console.log('You have been denied access');

//Practice 4.4 
let randomValue = prompt('Think of a number. What is it?');
randomValue = Math.random();
randomValue = randomValue * 5;
randomValue = Math.floor(randomValue);
