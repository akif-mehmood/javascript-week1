// kuch bhi repeat karne ko loop kehty hain 
// for while do-while ye bhi repaet krwata hai
// 1 1 1 1 1 1 1 1 1 
// 1 2 3 4 5 6 7 8 9 

// kaha se jana hai -> kaha tak jana hai -> kese jana hai
// for 

// kaha se jana hai -> kab rukna hai -> kese jana hai
// while

// 1 - 40 -> for loop
// hello na jaye -> while loop
// laal color ka gate kab ayega - while 

// for loop
//*******************/

// for loop pattren
for (start; end; change){

}
// Example 1 

for (let i = 1; i<101; i++){
    console.log(i); 
}


 // while loop
//********************/

// while loop pattren
 start
 while(end){
    //code
    change
 }


 // Example 1

 let j = 1;
 while (j <33){
    //code
    j++
    console.log(j);
 }


 // do while loop
//********************/

// do while loop pattren
do{

}
while(end)

// Example 1

let k = 1;
do{
    console.log(k);
    k++;
}
while(k<20);


// Q1. print numbers form 1 to 10 using a for loop.

for(let ii = 1; ii<11; ii++){
    console.log(ii);
}

// Q2. print nmbers form 10 to 1 using a while loop.

//for
for(let ij = 10; ij>0; ij--){
    console.log(ij);
}

// while loop
let jk = 10;
while(jk>0){
   console.log(jk);
   jk--;
}

// Q3. print even numbers from 1 to 20 using a for loop.
// even number means 2, 4, 6, 8, 10, 12 

for(let ki = 1; ki<21; ki++){
    if (ki % 2 === 0){
        console.log(ki);
    }
}

// Q4. print odd numbers form 1 to 15 using a while loop.

let ji = 1;
while(ji<16){
    if(ji%2 === 1){
        console.log(ji)
    }
    ji++
}

// Q5. print the multiplication table of 5 (i.e., 5 x 1 = 5 ,, 5 x 10 =50)

for (let kj = 1; kj < 11; kj++){
    console.log(5 * kj);
    console.log(`5 * ${kj} = ${5 * kj}`); // table print
}

// Q6. Find the sum of numbers form 1 to 100 using a loop.

for(let ij = 1; ij<101; ij++){
    sum = sum + something;
}

// Q7. print all numbers between 1 to 50 that are divisible by 3.
// Q8. Ask the user for a number and print whether each number from
``