// Create an Animal class. The class will have 
// name, age, color, legs properties and 
// create different methods

class Animal{
    constructor(fname,age,color,legs){
        this.name = fname;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getFullName(){
        const x = this.name + ' '+ this.color;
        return x;
    }
    getage(){
        return this.age
    }
}
const dog1 = new Animal('Bosco',13,"black", 4)
console.log(dog1.getage());
console.log(dog1.getFullName());

const dog2 = new Animal('Tom',23,"black", 3)
console.log(dog2.getage());
console.log(dog2.getFullName());


// Create a Dog and Cat child class
//  from the Animal Class.

class Dog extends Animal{

}

class Cat extends Animal{
    
}



// Override the method you create in Animal class

class Chicken {
    
}

