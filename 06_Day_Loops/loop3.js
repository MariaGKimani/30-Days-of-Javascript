const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  
console.log(countries.sort());
const sortedCountries =[...countries]
console.log(sortedCountries)

//Sort the webTechs array and mernStack array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  console.log(mernStack.sort())
  console.log(webTechs.sort())

  //Extract all the countries contain the word 
  //'land' from the countries array and print it as array
const countriesLand =countries.filter(country =>country.includes('land'))
console.log(countriesLand)

//Find the country containing the hightest
// number of characters in the countries array
const countryHighestChar =countries.reduce((c,country) =>{
  if( country.length > c.length){
    return country;
  }else{
    return c;
  }
}
)
console.log(countryHighestChar);


//Note that if there are multiple countries with the same highest number of characters,
// the above  code will only return the first one encountered in the array. 
//if you want to find all the countries with the 
//highest number of characters, you can use the filter() method instead of reduce(). 
const countryHighestChar2 = countries.reduce((co,country)=>{
  return Math.co(co,country.length);
})