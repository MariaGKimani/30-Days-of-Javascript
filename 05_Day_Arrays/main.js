///////////////////////////////////////////EXCERCISE :  Level 1////////////////////////

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
let itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0])
let lastx = itCompanies.length -1;
let middle =Math.floor(([0] + lastx)/2)
console.log(itCompanies[middle])
console.log(lastx);
console.log(itCompanies[lastx])
//print out each company

let newArrCamel= itCompanies.map(x=> x)
let newArrCamel2= itCompanies.map(x=> x.toUpperCase())
console.log(newArrCamel)
console.log(newArrCamel2)

//Print the array like as a sentence: 
//Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies.toString)




//Check if a certain company exists in the itCompanies array.
// If it exist return the company else return a company is not found
if (itCompanies.includes("Kenya")){
    console.log("Kenya");
}else{
   console.log("Company not found")
}

//Filter out companies which have more
// than one 'o' without the filter method




//Sort the array using sort() method
console.log(itCompanies.sort())

//Reverse the array using reverse() method
console.log(itCompanies.reverse())

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,4))

//Slice out the last 3 companies from the array
console.log(itCompanies.length)
console.log(itCompanies.slice(-3))

//Slice out the middle IT company or companies from the array



//Remove the first IT company from the array
console.log(itCompanies.shift())
console.log(itCompanies)

//Remove the middle IT company or 
//companies from the array


//Remove the last IT company
// from the array
console.log(itCompanies.pop())

//Remove all IT companies
console.log(itCompanies.splice(0,itCompanies.length))
console.log(itCompanies)




