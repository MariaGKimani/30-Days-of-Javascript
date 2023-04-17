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

const countriesX = countries.filter((country) =>country.includes('land'))
console.log(countriesX)

const countriesE =countries.filter((country)=> country.length ===6)
console.log(countriesE)

const countriesChar = countries.filter((country) => country[0]==='E')
console.log(countriesChar)

// const  productPrices = products.filter((product) => typeof price === 'number' && !isNaN(price))



function getStringLists(Arr) {
  return Arr.filter((ar)=> typeof ar === 'string') 
}
const Arrays = ["Saab",3,"Volvo","Shogun","BMW",1,true,56,]
console.log(getStringLists(Arrays))

