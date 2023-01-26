 // concatenating Strings with plus operator

 const ourStr = "I come first. " + "I come second.";
 console.log(ourStr);

 // += operator to concatenate a string onto the end of an existing string variable.

 let ourStr1 = "This is the first sentence. ";
ourStr1 += "This is the second sentence";
console.log(ourStr1);

//
const myName =  "Snthosh";
const myStr = "My name is " + myName + "and I am well";
console.log(myStr);

const anAdjective = "awesome ";
let ourStrs = "freeCodeCamp is ";
ourStrs += anAdjective;

console.log(ourStrs);


const someAdjectiveS = " Happy..";
let myStrs = "Learning code is";

myStrs +=  someAdjectiveS;
console.log(myStrs);

//You can find the length of the string by using .length();

console.log("Alan Peter" .length);

const firstName = "Allen Solly";
console.log(firstName.length);

//Bracket Notation is a way to get the specific index within a string

const firstNames = "Charles";
const letter = firstNames[2];
console.log(firstNames);
console.log(letter);

var firstLetterOfFirstName = "";
var firstName1 = "Ada";

firstLetterOfFirstName = firstName1[0];
