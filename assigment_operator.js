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
      












