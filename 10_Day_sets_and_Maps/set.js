//set is a collection of elements that only has unique elements
const set1 = new Set()
console.log(set1)

//Create a set containing 0 to 10 using loop
const emptySet = new Set ();
for (let index = 0; index <= 10; index++) {
    emptySet.add(index);
}
console.log(emptySet)

//Remove an element from a set
emptySet.delete(0)
console.log(emptySet)

//Clear a set
emptySet.clear()
console.log(emptySet);
//Create a set of 5 string elements from array

const stringX = ["Maria","Akech","Esther","Veronica","Deo"]
const setString = new Set(stringX)
console.log(setString);

//Create a map of countries and 
//number of characters of a country

const Acountries =["Kenya","Tanzania","South-Sudan","Rwanda","Australia"]
const x = Acountries.map((country =>country.length ))
const y = Acountries.map((country =>country.toLowerCase()))
console.log(x)
console.log(y)