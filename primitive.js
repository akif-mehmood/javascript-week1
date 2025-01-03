// Stake (Primitive) , Heap (Non-Primitive)

let fbName = "Muhammad-Akif"

let realName = fbName
realName = "Akif-Mehmood"

console.log(fbName);     // output  Muhammad-Akif
console.log(realName);   // output  Akif-Mehmood

// create object change original value

let userOne = {
    email: "muhammadakif@gmail.com",
    phone: "0123456789"
} 

// add new variable then equal first variable

let userTwo = userOne

// change first variable value Type (new variable like userTow.email or phone)

userTwo.email = "muhammadakifoutlook.com"

console.log(userOne.email);   // output  muhammadakifoutlook.com
console.log(userTwo.email);   // output  muhammadakifoutlook.com


