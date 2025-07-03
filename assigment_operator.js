// Operators

        //  =      comparison
        //  ==     not strict comparison
        //  ===    strict
        //  !=     not strict
        //  !==    strict
        //  >=
        //  <=
        //  >
        //  <

      //  =      ---->    assigment operator

      a  = 12;

      //  ==     ---->    comparison operator value check only

      12 == 13     //     false
      12 == "12"   //     true   only value check

      //  ===    ---->    comparison operator value & type check

      12 === "12"  //     false  check value & type

      //  !=    ---->     kia nhi hai barabr value

      12 != 13     //     true
      12 != 12    //      false

      //  !==    ---->     kia nhi hai barabr value & type

      12 !== "12"  //     true 
      12 !== 12   //      false
      
      12 !== "13"  //     true
      12 !== 13   //      ture

      //  >    ----->     greater then operator

      12 > 11  // true    // 12 bara hai 11 se 
      12 > 13  // false 

      //  <    ----->     greater then operator

      12 < 13  // true    // 12 chota hai 13 se 
      12 < 11  // false

       //  <=    ----->     greater then operator

       12 <= 12  // true    // 12 chota hai 12 se ya barabr hai
       14 <= 13  // false

       16 >= 14  // false

      // Arithmethic, comparison, assignment, logical, unary, ternary

      //   =
      //   +=
      //   -=
      //   *=
      //   /=
      //   %=

      let a = 12;

      a += 3;  // answer 15
      a -= 11; // answer 4
      a *= 2;  // answer 8
      a /= 2;  // answer 4
      a %= 3;  // answer 1

      // (&&) AND  Operator  //  dono condition true honi chahiye 

      true && true   // true
      false && true  // false
      true && false  // false 
      false && false  // false

      // (||)  OR Operator // dono condition main se ek true honi chahiye

      12>13 || 13>10    // answer true
      false ||  true

      // (!)  NOT Operator // assing ki type ko ulta kar deta hai jese k , true k agy NOT (!) lagao to answer false ayega 

      12     //   answer true
      !12    //   answer false 
      !!12   //   answer true

      // Unary Operator
      // + - ! typeof ++ --

      //  +

      "5"  // type "string"
      +"5" // type change in "Number"
      5    // answer type in number

      // -
      5
      -5 

      // !    inverted type dekh sakty 

      12   // true
      !12  // false

      // typeof  //  type bata deta hai 

      typeof 15  //  answer "Number"

      // ++  //  value ko barhata hai 

      ++15  //  start mai ++ lagane se value foran barha kr deta hai
      // pre increment
      let ak = 15;
      ++ak ;        //  answer 16

      
      15++  // ++ value k baad lagane se  late value barhata kar hai
      // post increment
      let post = 15;
      post++    //  answer 15

      // ternary Operators // multi condition check karta hai (:) colun k bad dosri value then 3 then 4 add kar sakty hain 
      // ?:

      12 > 13 ? 
      console.log("han") : console.log("nahi");

      // Question 1
      // (&&) AND Operator // dono condition true honi chahiye

      let x = 10;
      let y = 20;

      if (x > 5 && y < 25) {
        console.log("if code sahi hai");
      } else {
        console.log("if code wrong hai"); // answer "if code sahi hai"
      }

      // Question 2
      // || dono main se ek condition true honi chahiye 

      let isAdmin = true;
      let isLoginIn = false;

      if (isAdmin || isLoginIn) {
        console.log("Access granted");
      } else {
        console.log("Access denied"); // answer "Access granted"
      }

      // Question 3
      // (!) inverted type ho jati hai false hai tw true ho jayegi type

      let temp = 35;

      if (!(temp < 30)) {
        console.log("Hot");
      } else {
        console.log("Pleasant"); // answer "Hot"
      }

      // Question 4
      // 0 false value hoti hai 
      let aki = 0;

      if (aki) {
        console.log("Truthy");
      } else {
        console.log("Falsy"); // answer "Falsy"
      }

      // Question 5
      // (?:) ternary Operator multi condition add kar sakty hain 
      let score = 59;

      let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";

      console.log(grade); // answer "Fail"

       // Question 6
       // (?:) ternary Operator multi condition add kar sakty hain
       let points = 120;

       let status = points > 100 ? "Gold" : points > 50 ? "Sliver" : "Bronze";

       console.log(status); // answer "Gold"

       // Question 7
       //

       let loggedIn = true;
       let hasToken = false;

       let access = loggedIn && hasToken ? "Allow" : "Deny";

       console.log(access);

       // Question 8
       // (++) 1 value add ho jati hai bad main

       let as = 5;
       as++;
       console.log(as); // answer 6

       // Question 9
       // (++) 1 value add ho jati hai pehle
       let ad = 7;
       ++ad;
       console.log(ad); // answer 8

       // Question 10
       //
       let xy = 3;
       let zy = xy++;
       console.log(xy, zy); // answer 4, 3

       // Question 12
       //
       let p = 4;
       let q = ++p;
       console.log(p, q); // answer 5, 5

       // Question 13
       //
       let m = 10;
       console.log(m--); // answer 10
       console.log(m);  // answer 9

       // Question 14
       //
       let nm = 5;
       let result = nm++ + ++nm;
       console.log(result); // answer 12

       // Question 14
       //
       let likes = 100;

       function likesPost() {
        return ++likes
       }
       console.log(likesPost()); // answer 101
       console.log(likes);       // answer 101

      // Question 14
      // (--) bad main laga hai jbhi value 5 hi rahegi 
      let count = 5;
          //5       
      if (count-- === 5) {
        console.log("Matched");
      } else {
        console.log("Not matched");
      }




      












