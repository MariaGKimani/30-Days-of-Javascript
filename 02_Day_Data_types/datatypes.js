//////////////////////////////level2///////////////////////////////////
let quote = "There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote)

let teresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(teresa)

let x = '10';
let y = 10;
console.log(x===y)


let xx = parseInt(x);
console.log(xx)
console.log(xx===y)

// 

//check if on is found in both python and jargon

var j = "I hope this course is not full of jargon."
console.log(j.includes('jargon'))

//Generate a random number between 0 and 100 inclusively.
const num5 = Math.floor(Math.random()* (100 -0));
console.log({num5})

//Generate a random number between 50 and 100 inclusively.
let num6 =Math.floor(Math.random()*50)+ 50
console.log(num6)

//Generate a random number between 0 and 255 inclusively.
let num9 =Math.floor(Math.random()*128)+0
console.log(num9)

let dd = "You cannot end a sentence with because because because is a conjunction"
dd.substr(11,5)
console.log(dd)
/////////////////////////////////LEVEL 3/////////////////////////////////LEVEL 3////

//Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Count the number of word love in this sentence.
let xoxo = "Love is the best thing in this world. Some found their love and some are still looking for their love"
console.log(xoxo.match(/love/g).length)


//Use match() to count the number of all because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
let xxx = "You cannot end a sentence with because because because is a conjunction"
console.log(xxx.match(/because/g).length)


//Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


//Calculate the total annual income of the person
// by extracting the numbers from the following text. 
//'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
