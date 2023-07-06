//defining a class
class camelCase{

}
// Let us create a dog object from our Person class.

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello,my name is ${this.name}`);
    }
}
const dog = new Person('Tom',13)
dog.sayHello();

// The following Person class constructor has firstName 
// and lastName property

class Person2{
    constructor (firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person1 = new Person('Maria','Kimani')
console.log(person1);
///creating new ojects using class Person
const person2 = new Person('Esther','Kimani')
const person3 = new Person('Joseph','Kimani')
const person4 = new Person('Elizabeth','Kimani')
console.log(person2,person3,person4);

class Persons {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 25,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person5 = new Persons() // it will take the default values
  const person6 = new Persons('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person5)
  console.log(person6)
