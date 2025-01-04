// String 

const name = "akif-mehmood"
const age = 25

//console.log(name + age + "year");  // output  akif-mehmood25year

//console.log(`Hello my name is ${name} and my age is ${age} ok.`);

// output => Hello my name is akif-mehmood and my age is 25 ok.

//const game = new String('counter-strike');

// check or eccess key value

//console.log(funtime[0]);  //  output => c  (string first word print)

// check Method

const funtime = new String('counter-strike');

console.log(funtime.__proto__);  //  output => {}

console.log(funtime.length);  //  output =>  14

console.log(funtime.toUpperCase());  //  output => COUNTERSTRIKE

console.log(funtime.charAt(4));  //  output => t / becouse start counting 0 then 1 so answer "t"

console.log(funtime.indexOf('r'));  //  output => 6 / becouse start counting 0 then 1 so answer "6"

const newString = funtime.substring(0, 4) 

console.log(newString);  //  output => coun  / start 0 1 2 3 but 4 no print 

const anotherString = funtime.slice(-14, 5) 

console.log(anotherString);









