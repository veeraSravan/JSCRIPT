//Quotes are not the only the characters that can be escaped inside a string


/**
 *   \' single quote
 *   \" double quote
 *   \\ backslash
 *    \n newline
 *    \t tab
 *    \r carriage return
 *    \b word boundary
 *    \f form feed
 */

const  doubleStr = "This is the \"double quote string\"";
const singlStr = 'This is the \'single quote string\'';

console.log(doubleStr);

console.log(singlStr);

let myStr = "This is the single space character. ";
myStr += "This is the second space character.";
console.log(myStr);

const ourName = "Shiva";
const ourStr = "Helloo Our Name is " + ourName + ", how are you..."
console.log(ourName);
console.log(ourStr);


const someAdjective = "developer achievement..";
let myStr1 = "Learning to code is ";
myStr1 += someAdjective;
console.log(myStr1);
