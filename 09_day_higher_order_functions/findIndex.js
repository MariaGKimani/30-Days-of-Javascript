//24-26
//findIndex
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

const countryy = countries.findIndex((country)=> country.length ===6)
console.log(countryy);

// Use findIndex to find the position of Norway
// if it doesn't exist in the array you will get -1
const countryxx = countries.findIndex((country) =>country ==='Norway')
console.log(countryxx);

// Use findIndex to find the position of Russia 
// if it doesn't exist in the array you will get -1.
