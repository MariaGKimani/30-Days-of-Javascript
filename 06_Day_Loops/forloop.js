// Iterate 0 to 10 using for loop, 
// do the same using while and do while loop

for(let i=0;i<= 10;i++){
    console.log(i)
}

for(let i=11; i>0; i--){
    console.log(i)
}


// //Iterate 10 to 0 using for loop, 
// //do the same using while and do while loop

for(let i=10;i>=0;i--){
    console.log(i)
}

// //Iterate 0 to n using for loop
function name(n) {
    for( var i =0; i <= n; i++){
        console.log(i)
     } 
}
let n = 9
name(n)

//n.07
//Use for loop to iterate from 0 to 100
// and print only even numbers
 for(let i= 0;i <=100; i++){
    if(i% 2==0){
        console.log(i);
    }
 }
//Use for loop to iterate from 0 to 100 
 for (var c =0; c <= 100;c ++){
    console.log({c});
}
//8
//Use for loop to iterate from 0 to 100 
//and print only odd numbers
for(let x=0;x <=100;x++){
    if(x % 2 !=0){
        console.log({x});
    }
}

//9
// Use for loop to iterate from 0 to 100
// and print only prime numbers
for(let y = 0;y <= 100;y ++){
    if(y % y== 0 && y%1==0){
        console.log({y});
    }
}



//10
//Use for loop to iterate from 0 to 100
// and print the sum of all numbers.
 let summ =0
for(let sx= 0;sx <=100;sx++){
    summ += sx
}
console.log({summ});

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

var even =0
var odd =0
for (let index = 0; index <= 100; index++) {
    if(index % 2 == 0){
      even +=1 
    }else if(index % 2 != 0){
        odd += 1
    }
console.log({even},{odd});
    
}

// //13
// //Develop a small script which
// // generate array of 5 random numbers
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