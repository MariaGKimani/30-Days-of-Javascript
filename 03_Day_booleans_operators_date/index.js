//./Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Mariagoretti"
let lastName = "Kimani";
let country ="Kenya";
let city = "Nairobi";
let age = 22;
let isMarried = false;
let year = 2000;

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

//Check if type of '10' is equal to 10
let a = '10';
let b = 10;
console.log(b ==a);
console.log(b ===a);

//Check if parseInt('9.8') is equal to 10
let c = parseInt('9.8')
console.log(c == 10);

//Write three JavaScript statement which provide truthy value.
console.log(firstName == "Mariagoretti");
console.log(lastName == "Kimani");
//Write three JavaScript statement which provide falsy value.
console.log(age ==24);
console.log(isMarried == true);

//Figure out the result of the following comparison expression
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 !=  4);
console.log(4 == '4');
console.log(4 === '4');

//Find the length of python and jargon and make a falsy comparison statement.
let d ="python";
let e = "jargon";
console.log(d.length , e.length)
console.log(d.length != e.length)

//Figure out the result of the following expressions 
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(d.includes("on"));
console.log(e.includes("on"));

//Use the Date object to do the following activities

////What is the year today?
let f = new Date();
console.log(f.getFullYear());

////What is the month today as a number?
let g = new Date();
console.log(g.getMonth());

////What is the date today?
let h = new Date();
console.log(h.getDate());

//What is the day today as a number?
let i = new Date;
console.log(i.getDate());

//What is the hours now
let j = new Date;
console.log(j.getHours());

//What is the minutes now?
let k = new Date;
console.log(k.getMinutes());

//Find out the numbers of seconds elapsed from January 1, 1970 to now
let l = new Date;
console.log(`${i}/${g}/${f}/${j}: ${k}`)