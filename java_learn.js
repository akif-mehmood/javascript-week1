document.writeln("Bismillah hirrehmaan nirraheem <br><br>");


         // Let // can be redeclared , and can be re-initialize / re assign
        document.writeln("VAR can be redeclared , and can be re-initialize / re assign <br><br>");

        var name2 = "Azhar <br>";
        var name2 = "Azhar Mehmood  ===> Var <br>";
        document.writeln(name2);
        

        var friend1 = "ALLAH <br>";
        document.writeln("<br>");

        myfriend1 = "ALLAH sab se bara hai <br>";
        document.writeln(myfriend1);

        var myName1 , fatherName1;
        myName1 = "Ather ";
        fatherName1 = "Mehmood <br><br>";

        document.writeln(myName1 , fatherName1);

       // Let // cannot be redeclared , but can be re-initialize / re assign

       document.writeln("cannot be redeclared , but can be re-initialize / re assign <br><br>");
        let name1 = "Atif <br>";
        document.writeln(name1);
        

        let friend = "ALLAH <br>";
        document.writeln("<br>");
        let myfriend = "ALLAH HU AKBAR<br>";
        document.writeln(myfriend);

        let myName , fatherName;
        myName = "Ather ";
        fatherName = "Mehmood <br>";

        document.writeln(myName , fatherName);

        // const // cannot be redeclared , cannot be re-initialize / re assign

        const god = "ALLAH <br>";
        document.writeln(god);

        // All DATA Types show 

        // string 
        let x = "Asif"
        document.writeln(x);
        document.writeln(typeof x);

        // number
        let y = 2500;
        document.writeln("<br>");
        document.writeln(y);
        document.writeln(typeof y);

        // boolean
        let z = true;
        document.writeln("<br>");
        document.writeln(z);
        document.writeln(typeof z);

        // Object
        let xx = ["HTML ","CSS ","BOOTSTRAP ","JS "];
        document.writeln("<br>");
        document.writeln(xx);
        document.writeln(typeof xx);

        // undefiend 
        let yy = undefined;
        document.writeln("<br>");
        document.writeln(yy);
        document.writeln(typeof yy);

        //Null
        let zz 
        document.writeln("<br>");
        document.writeln(zz);
        document.writeln(typeof zz);
        document.writeln("<br><br>");

        // value addition
        let a = 5;
        let b = 5;
        let c = a + b;
        document.writeln(c);
        document.writeln("<br>");

        // value substraction
        let sub1 = 50;
        let sub2 = 15;
        let sub3 = sub1 - sub2;
        document.writeln(sub3);
        document.writeln("<br>");

        // multiplication
        let aa = 5;
        let bb = 5;
        let cc = aa * bb;
        document.writeln(cc);
        document.writeln("<br>");

        // modulus
        let mod1 = 5;
        let mod2 = 5;
        let mod3 = mod1 % mod2;
        document.writeln(mod3);
        document.writeln("<br>");

        // Exponention
        let expo1 = 10;
        let expo2 = 3;
        let expo3 = expo1 ** expo2;
        document.writeln(expo3);
        document.writeln("<br>");

        // increment
        let incre1 = 10;
        let incre2 = 3;
        document.writeln(incre1 + incre2);
        incre1++;
        document.writeln("<br>");
        document.writeln(incre1 + incre2);
        document.writeln("<br>");

        //decremant
        let dec1 = 10;
        let dec2 = 3;
        document.writeln(dec1 + dec2);
        document.writeln("<br>");
        dec1--;
        document.writeln(dec1 + dec2)
        document.writeln("<br>");

        // Question 1

        score1 = 10;
        score2 = 15;
        score3 = 20;

        totalScore = score1 + score2 + score3;
        console.log(totalScore);  // answer 45

        avrgscore = totalScore / 3;
        console.log(avrgscore);  // answer 15


        // question 2

        plates = 20;
        people = 7;
        remainingPlates = plates - people;
        console.log(remainingPlates); // answer 13

        remainingPlates = ++remainingPlates;
        alert(`There are ${remainingPlates} plates available`);

      

