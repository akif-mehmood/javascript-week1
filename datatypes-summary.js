// ****** primitive Type 7 ******** //

String
Number
Boolean
Null 
Undefined 
Symbol
BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);   // output false

const bigNumber = 3243424434241233211n  // BigInt Type



//***** Reference Type 3 (Non Primitive Type) ******/

Array 
Object 
Functions 

// Array
const  hero = ["ImranKhan", "ShahidAfridi", "SalmanKhan"];

// Objects
// {
//     name: "Akif",
//     age: 25,
// }
// Example 

// let mydata = {
//     name: "Akif",
//     age: 25,
// }

// Functions 
// function(){}

// Example store in variable
const myFunction = function(){
    console.log("Hello Akif");
    
}
console.log(myFunction);
