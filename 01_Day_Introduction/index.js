//console.log can take multiple parameters(arguments) seperated by commas,
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2023)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')

//Adding Javascript to a Web Page
// .inline script
// .internal script
// .external script
// .Multiple external scripts


//data types
//1. Null means an empty value
//2. Undefined - we dont assign values to  a variable the value becomes undefined also if a function is not returning anything it returns undefined


//we use (type of)operator to check the type of data type

console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined

//For a variable that changes at a different time, we use let. If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const.

// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)