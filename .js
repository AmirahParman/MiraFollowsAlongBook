alert("saying hi from a different file!");

let a = 10; //set value of 10
console.log(a); // this will print 10
/* I am using the multiple line
comment feature
in Javascript */

prompt("Hi, How're you?");

console.log(Math.random() * 100);
console.log(Math.floor(Math.random()) * 100)

let strToNr2 = "Hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);

//Practice 2.1
let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2)

let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let str1 = 'Laurence';
console.log(str1, typeof str1);

let str2 = "Svekis";
console.log(str2, typeof str2);

let val1 = undefined;
console.log(val1, typeof val1);

let val2 = null;
console.log(val2, typeof val2);

let myNum = 1000;
console.log(myNum, typeof myNum);

//Practice 2.2
let myName = "Amirah";
let myAge = 30;
let canIcodeJavascript = true;
console.log("Hello my name is " + myName, "I am " + myAge + "years old and I can code Javacscript: " + canIcodeJavascript);

//Practice 2.3
let aSide = prompt("What is the a side?");
let aSidesquared = aSide ** 2;
console.log(aSidesquared);

let bSide = prompt("What is the b side?");
let bSideSquared = bSide ** 2;
console.log(bSideSquared);

let cSide = (aSidesquared + bSideSquared);
console.log("The c side is " + cSide);
 
