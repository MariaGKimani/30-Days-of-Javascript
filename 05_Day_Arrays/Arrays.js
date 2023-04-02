//Declare an empty array;
var z = [];
var x =Array()
console.log(typeof(x));

//Declare an array with more than 5 number of elements
let a =[12,24,13,69,33,11,5,30,3];
//Find the length of your array
console.log(a.length);

//Get the first item, the middle item and the last item of the array
console.log(a[0]);
// console.log(a.length/2)
let last = a.length -1;
console.log(a[last])

//Declare an array called mixedDataTypes, put different data types in the array 
//and find the length of the array.
// The array size should be greater than 5
let mixedDataTypes =["cow",24,"goat",10,true,3.3,"Pig",12,false,22.4]
console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies 
//and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0])
let lastx = itCompanies.length -1;
console.log(lastx);

let newArrCamel= itCompanies.map(item=> item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())
console.log(newArrCamel)

