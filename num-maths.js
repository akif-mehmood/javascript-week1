// Example 1 Simple show number 

const score = 500
console.log(score);  // output => 500

// Example 2 number with value 
const balance = new Number(100.)    
console.log(balance);              // output => [Number: 100]


// Example 3 only show number don't show value
console.log(balance.toString());                 // output => 100
console.log(balance.toString().length);                 // output => 3

// Point 0 or 00 fixed value Assigent 
console.log(balance.toFixed(1));                 // output => 100.0
console.log(balance.toFixed(2));                 // output => 100.00

// Round Figure Value Assigent 
const otherNumber = 123.8957

console.log(otherNumber.toPrecision(3));  // output => 124
console.log(otherNumber.toPrecision(4));  // output => 123.9
console.log(otherNumber.toPrecision(5));  // output => 124.90

// Easy count value 
const hundreds = 1000000

console.log(hundreds.toLocaleString());   // output => 1,000,000

//***************  Maths **************/

console.log(Math);

// + or - value but show value in plus 
console.log(Math.abs(4));               // output => 4

// .round method showing round figure value 
console.log(Math.round(4.7));               // output => 5
console.log(Math.round(4.4));               // output => 4


// .ceilling method used point value but show top value 4.1 bhi hoga to 5 value ayegi
console.log(Math.ceil(4.2));               // output => 5
console.log(Math.ceil(4.6));               // output => 5

// .floor method used  low value 
console.log(Math.floor(4.9));               // output => 4
console.log(Math.floor(4.3));               // output => 4

// Math.min method
console.log(Math.min(4, 3, 6, 8, 9));        // output => 3

// Math.max method
console.log(Math.max(4, 3, 6, 8, 9));        // output => 9

// Math.random method
console.log(Math.random());          // output => 0.8950975650718593
console.log(Math.random()*10 + 1);    // output => 3.0304353435154905
console.log(Math.floor(Math.random()*10) + 1);    // output => 8

const min = 10
const max = 20

// ye trick 10 se upar ki value count karegi
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // output => 12
