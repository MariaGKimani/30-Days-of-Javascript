//Find a intersection b
let a =[3,4,5,6,7,8,10];
let b =[7,8,9,10,12,13];

let A = new Set(a)
let B = new Set(b)

let c =a.filter((num )=> B.has (num))
let C =new Set(c)
console.log(C)

