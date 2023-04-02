///////////////////////////////////////////EXCERCISE :  Level 1////////////////////////
//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let number = prompt('Enter number', 'number goes here')
console.log(number)
 let x = prompt("Enter your age: ")
 console.log(x)
 if(x >= 18){
    console.log("You are old enough to drive")
 }else{
     console.log(`You are remaining with ${18 - x}`)
 }
 //Compare the values of myAge and yourAge using if … else. 
 //Based on the comparison and log the result to console stating who is older (me or you). 
 //Use prompt(“Enter your age:”) to get the age as input.
 let myAge = 22
 let yourAge = 55
let xx = prompt("Enter your Age: ")
if(myAge > yourAge){
    console.log(`You are (${myAge} - ${yourAge})years older than me`)
}else{
    console.log(" you are older than me")
}
//using if else
let a =2;
let b =3;
if(a > b){
    console.log("a is greater than b")
}else{
    return ("a is less than b")
}
//using ternary operator
let c =4;
let d =3;
c > d
? console.log("a is greater than b")
: console.log("a is less than b")

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')



//Even numbers are divisible by 2
// and the remainder is zero. 
//How do you check, if a number is even or not using JavaScript?
x= 2
x= 9
if(x % 2 == 0){
    console.log("even")
}else{
    console.log("odd")
}

