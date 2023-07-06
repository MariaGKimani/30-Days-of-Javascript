dog ={}
console.log(dog)
// Add name, legs, color, age and bark
//  properties for the dog object. 
// The bark property is a method which return woof woof

// dog={
//     name: "Bosco",
//     legs: 4,
//     color:"Brown",
//     age: 23,
//     sound: "Woof Woof",
//     bark : function(){
//         return  `${ this.sound}`
//     }
// }
dog.name ='Bosco'
dog.legs = 4
dog.color =" brown"
dog.age = 23
dog.sound = "woof"
dog.bark = function(){
    return 'woofwoof'
}
console.log(dog);
 
// Get name, legs, color, age and 
// bark value from the dog object

const newDog = Object.assign({},dog)
console.log(newDog);
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog['age'])
console.log(dog.bark())

// Set new properties the dog object: 
// breed, getDogInfo
dog.getDogInfo = function(){
   return  "Name: " + this.name +
            "\nlegs: "  + this.legs +
            "\nColor: " + this.color +
            "\nage: "+ this.age
}

console.log(dog.getDogInfo())