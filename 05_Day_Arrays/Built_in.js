const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length)

//concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3)

//copywithin()
//It shallow copies part of an array to another location in the same array
// n returns it without modifying its length
const x =['a','b','c','d','e']
//Copy to index 1 all  element from index 3 to the end
console.log(x.copyWithin(1,3))

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result)