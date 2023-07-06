function callback (){

}
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const countriesX = countries.forEach((country) =>console.log(country))
const namesX =names.forEach((name) => console.log(name))
const numbersX =numbers.forEach((number) => console.log(number))


const countriesx = countries.map((country) => country.toUpperCase())
console.log(countriesx);

const countriesLength =countries.map((country) =>country.length)
console.log(countriesLength);

const numbersArray = numbers.map((number) => number * number)
console.log(numbersArray);

const namesx =names.map ((name) =>name.toUpperCase())
console.log(name[sx);

const productsX = products.map((product =>({product: product.product, price: product.price})))
console.log(productsX);