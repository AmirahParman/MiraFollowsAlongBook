//practice 4.1
let happy = true;

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
let randomValue = Math.floor(Math.random() * 6) + 1;
let variableStringValueForLater = prompt('Ask me any question');
let endResponse = '';

switch (randomValue) {
    case 0: endResponse = 'certainly!';
        break;
    case 1: endResponse = 'I wouldnt count on it';
        break;
    case 2:
    case 3: endResponse = 'yes!';
        break;
    case 4: endResponse = 'absolutely not!';
        break;
    case 5: endResponse = 'give it a try';
        break;
    case 6: endResponse = 'it will change your life';
        break;
}

console.log('You asked: ' + variableStringValueForLater);
console.log(endResponse);

// more example with case statements

console.log('Can I buy alcohol from grocery stores?')
let countryYoureFrom = prompt('Which country are you from?');
let countryYoureFromUppercase = countryYoureFrom.toUpperCase();

switch (countryYoureFromUppercase) {
    case 'NORWAY':
    case 'SWEDEN': console.log('no you cant, only special stores');
        break;
    case 'GERMANY':
    case 'DENMARK': console.log('absolutelt!');
        break;
    default: console.log('Im not sure actaully');
}

// the above is equivalent to the following if statements
if (countryYoureFromUppercase == 'GERMANY' || countryYoureFromUppercase == 'DENMARK') {
    console.log('absolut!');
}
else if (countryYoureFromUppercase == 'SWEDEN' || countryYoureFromUppercase == 'NORWAY') {
    console.log('no you cant, only special stores');
}
else {
    console.log('Im not sure actaully');
}

// practice 4.5
let prize = prompt('Select a number between 0 to 5?');
let prizeInt = parseInt(prize);
let mySelectionVariable = 'My selection: ';
console.log(mySelectionVariable + prize);

switch (prizeInt) {
    case 0:
        console.log('You won a rabbit!');
        break;
    case 1:
    case 2:
    case 3: console.log('You won a soda can!');
        break;
    case 4:
    case 5: console.log('You won a tv!');
        break;
}

// chapter projects
// evaluating a number game
let usersNumber = prompt('Choose any number');
let myNumber = Math.random();

if (usersNumber == myNumber) {
    console.log('We think alike :)');
}
else if (usersNumber < myNumber) {
    console.log('Your number is lower than mine');
}
else {
    console.log('Your number is greater than mine');
}

// friend checker game 
let usersName = prompt('What is your name?');

switch (usersName) {
    case 'fathin': console.log('You are my sister');
        break;
    case 'ayla': console.log('You are my pumpa');
        break;
    case 'sofia': console.log('You are my blomma');
        break;
    case 'shad': console.log('You are my husband');
        break;
    default:
        console.log('I dont know you');
        break;
}

// rock paper scissors game
let choices = ['rock', 'paper', 'scissors'];
let ourChoice = Math.floor(Math.random() * 2);

let usersChoice = parseInt(prompt('Choose between 0 to 2'));
console.log('You chose ' + choices[usersChoice] + ', we chose ' + choices[ourChoice]);

if (ourChoice == usersChoice) {
    console.log('Tie!');
}
else if (choices[ourChoice] == 'rock' && choices[usersChoice] == 'paper'
    || choices[ourChoice] == 'paper' && choices[usersChoice] == 'scissors'
    || choices[ourChoice] == 'scissors' && choices[usersChoice] == 'rock') {
    console.log('You won!');
}
else {
    console.log('You lost!');
}
