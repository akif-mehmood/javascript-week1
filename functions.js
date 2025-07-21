// Example 1

function dance(v1) {
    console.log(`${v1} naach rhy hain`);
}

dance("log");
dance("bachy");
dance("ladies");

//  Example 2
// jab arguments mtlab value kafi sari hon to hamy uthny hi parameter banane parengy, issey bachny k liye, hum rest ka use karte hain, ...agr ... function ke parameter space main lage to woh rest operator hai, and agar woh array and object main lage to woh spread operator hai 

function add(v1, v2) {
    console.log(v1 + v2);
}

add(15, 15);
add(4, 4);
add(6, 6);
add(2, 3);

// first class function -> fuctions ko values ki thrah treat kar sakty hai

function val3(val) {
    val();
}

val3(function () {
    console.log("hello");
});

// HOF woh function hota hai jo return kary function ya first accept kary ek function apne parameter main

function val4() {
    return function() {
        console.log("hello world");
    };
}

val4()();

// pure vs impure functions
// aisa function jo k bahar ki value ko naa badle woh hai pure function

let a = 12;

function val5() {
    console.log("haahaha");
}

// asia function jo baha ki value ko badal de woh hai impure function

let ac = 12;

function val5() {
    console.log("haahaha");
}

function gfg() {
    ac++;
}

// closures ->
// ek function jo return karega ek aour fucntion aour return hone wala function hamesha use karega parent function ka koi variable

function val6() {
    let fan = 12;
    return function() {
        console.log(fan);
    }
}

// Lexical scoping

function blb() {
    let val7 = 12;
    function lmn() {
        let val8 = 13;
        function opq(){
            let val9 = 14;
        }
    }
}

// IFE Immediately invoked function Expression

(function() {
    console.log("helloooooooo")
}) (); 

// Hoisting  

val12();
//
//
//
function val12( ) {
    console.log("hello moto")
}

//*********** wrong *********** */

val12();
//
//
//
let val13 = function val12( ) {
    console.log("hello moto")
}

//

function checkAge(age) {
    if (age < 18) return "To Young";
    return "Allowed";
}
console.log(checkAge(13));

 