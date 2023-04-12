//Iterate 0 to 10 using for loop, 
//do the same using while and do while loop

for(let i=0;i<= 10;i++){
    console.log(i)
}

//while
let i =0

while (i<=10) {
    console.log(i);
    i++;
}

//do while
let x =0
do {
    console.log(x);
    x++;
} while (x<=10);

//Iterate 10 to 0 using for loop, 
//do the same using while and do while loop
for(let i=10;i>=0;i--){
    console.log(i)
}
    //while
    i=10
while (i>=0) {
    console.log(i);
    i--;
}
//do-while
a =10;
do {
    console.log(a);
    a--;
} while (i>=0);

//Iterate 0 to n using for loop

// for (let c = 0; c <= n; c++) {
//    console.log(c);    
// }



//Write a loop that makes the following
// pattern using console.log():



//n.07
//Use for loop to iterate from 0 to 100
// and print only even numbers

for (let index = 0; index <=100; index++) {
    if (index% 2 ===0) {
        console.log(index)
    }
    
}
//8
//Use for loop to iterate from 0 to 100 
//and print only odd numbers
for (let index = 0; index <=100; index++) {
    if (index% 2 !==0) {
        console.log(index)
    }
    
}
//9
//Use for loop to iterate from 0 to 100
// and print only prime numbers





//10
//Use for loop to iterate from 0 to 100
// and print the sum of all numbers.
sum =0
for (let index = 0; index <=100; index++) {
    sum +=index
    console.log(sum)
    
}
//11 an 12
//Use for loop to iterate from 0 to 100 and
// print the sum of all evens and the sum of all odds.
var even =0
var odd =0
for (let i = 0; i <=100; i++) {
    if (i % 2===0) {
        even +=i
    } else {
        odd +=i
    }
    
}
const sums= [even,odd]
console.log(sums);
console.log("The sum of all even n.os is: "+even)
console.log("The sum of all odd n.os is: "+odd)
console.log(even +odd);


//13
//Develop a small script which
// generate array of 5 random numbers
const arr =[];
for (let xxx = 0; xxx < 5;xxx++) {
    arr.push(Math.floor(Math.random()*100))
    
}
console.log(arr)

//14
//Develop a small script which generate array 
//of 5 random numbers and the numbers must be unique
const newArr=[];
for(m = 0; m < 5;m++){
    newArr.push(Math.floor(Math.random()*100))
}
console.log(newArr);