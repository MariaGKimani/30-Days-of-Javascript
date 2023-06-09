///////level1////////////////level1////////////////level1/////////

//Declare a function fullName and it print out your full name.
function fullName(){
    console.log("Mariagoretti Kimani")
}
fullName()

//Declare a function fullName and now it takes firstName, lastName 
//as a parameter and it returns your full - name.
function fullName2() {
    const firstName = "Mariagoretti"
    const lastName = "Kimani"
    const full = firstName +" "+ lastName
    console.log(full)
}
fullName2()

//Declare a function addNumbers and 
//it takes two two parameters and it returns sum.
function addNumbers(num1,num2) {
    return num1 +num2
}
console.log(addNumbers(5,22))

//An area of a rectangle is calculated as follows:
// area = length x width. 
//Write a function which calculates areaOfRectangle.
function areaOfRectangle(num6,num7){
    const s = num6 *num7
    return s
}
console.log(areaOfRectangle(20 ,5))


//A perimeter of a rectangle is calculated as follows: 
//perimeter= 2x(length + width). 
//Write a function which calculates perimeterOfRectangle.
function perimeter(num3,num4) {
    const x = (num3 + num4) *2
    return x
}
console.log(perimeter(24,12))

//A volume of a rectangular prism is calculated as follows:
// volume = length x width x height.
// Write a function which calculates volumeOfRectPrism.
function  volumeOfRectPrism(num9,num99,num999){
    // const volume = num9 * num99 * num999
    console.log(num9 * num99 * num999)
}
volumeOfRectPrism(45,10,5)

function areaOfCircle(radius) {
    return Math.PI *radius *radius
}
console.log(areaOfCircle(6.5))

//Circumference of a circle is calculated as follows:
// circumference = 2πr. 
//Write a function which calculates circumOfCircle

function circumOfCircle(radius){
    return (Math.PI * radius * radius) *2
}
console.log(circumOfCircle(7))

//Density of a substance is calculated as follows:
//density= mass/volume.
// Write a function which calculates density.
function densitymv(mass,volume) {
    return(mass * volume)   
}
console.log(circumOfCircle(20,80))

//Speed is calculated by dividing the total distance covered by a moving object
// divided by the total amount of time taken.
// Write a function which calculates a speed of a moving object, speed
function speed(distance , time) {
    return (distance / time)
}
console.log(speed(3000,60))

//Weight of a substance is calculated as follows: 
//weight = mass x gravity. Write a function which calculates weight.
// function  weight(mass,gravity) {
//     return (mass * gravity)
// }
// console.log(weight(mass * gravity))


//Temperature in oC can be converted to oF using this formula:
// oF = (oC x 9/5) + 32. 
//Write a function which convert oC to oF convertCelsiusToFahrenheit.
function Temperature(Celsius){
    const x =(Celsius *9/5) + 32
    return x
}
console.log(Temperature(20))


// Body mass index(BMI) is calculated as follows:
//  bmi = weight in Kg / (height x height) in m2. 
//  Write a function which calculates bmi. 
// BMI is used to broadly define different weight
//   groups in adults 20 years old or older.
//  Check if a person is underweight, normal, overweight or
//  obese based the information given below.
function calcBMI(weight,height) {
    const bmi = weight / (height * height);
  return bmi;
}
console.log(calcBMI(20,50));


function calculateBmi(bmi) { 
    if(bmi < 18.5){
        console.log("Underweight")
    }else if (bmi > 18.5 && bmi < 24.9) {
        console.log("Normalweight")
    }else if (bmi > 25 && bmi < 29.9) {
        console.log("Overweight")
    }else{
        console.log("Obese")
    }
}
// const bmi = weight/(height * height)
console.log(calculateBmi(20,40));


// Write a function called checkSeason, it takes a month parameter
//  and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    switch (month) {
      case "December":
      case "January":
      case "February":
        return "Winter";
      case "March":
      case "April":
      case "May":
        return "Spring";
      case "June":
      case "July":
      case "August":
        return "Summer";
      case "September":
      case "October":
      case "November":
        return "Autumn";
      default:
        return "Invalid month";
    }
  }
console.log(checkSeason("June"))  


// Math.max returns its largest argument.
//  Write a function findMax that takes three arguments 
//  and returns their maximum with out using Math.max method.
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
function findMax(num1,num2,num3) {
    console.log(max(num1,num2,num3))
}
findMax(12,23,34)