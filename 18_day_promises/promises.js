const catsAPI = 'https://api.thecatapi.com/v1/breeds';


// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
.then(response => response.json())
.then(data=>{
  data.forEach(country => {
    console.log(country.name, country.capital, country.languages, country.population)
})
})
.catch(error =>{
  console.log('Error', error);
})