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

// Find the total price of products by 
// chaining two or more array iterators
// (eg. arr.map(callback).filter(callback)
// .reduce(callback))
// const totalPrice = products.map({...item,price: Number(item.price)})


// Find the sum of price of products using only reduce reduce(callback))
const priceProduct = products.reduce((acc,cur)=>acc +cur,0)
console.log(priceProduct);

// Declare a function called categorizeCountries which returns
//  an array of countries which have some common pattern
// (you find the countries array in this repository as countries.js
// (eg 'land', 'ia', 'island','stan')).
function categorizeCountries(params) {
    
}
