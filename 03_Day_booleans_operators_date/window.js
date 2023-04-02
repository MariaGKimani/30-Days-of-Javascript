// let base = parseFloat(prompt('Enter base:'));
// let height = (prompt('Enter height:'));
// let  area = 0.5 * base* height;
// console.log(base)

// let num =prompt('enter side a ', 'side a goes here');
// let num1 =prompt('enter side b ', 'side b goes here');
// let num2 =prompt('enter side c ', 'side c goes here')
// console.log(num)





//If the length of your name is greater
// than 7 say, your name is long else say your name is short.
let x = "Mariagoretti";
console.log(x.length);
if(x.length > 7){
    console.log("toolong");
}else{
    console.log("too short")
}
//Compare your first name length and your family name length and you should get this output.
//Your first name, Asabeneh is longer than your family name, Yetayeh
let f = "Mariagoretti";
let l = "Kimani";
if(f.length> l.length){
    console.log(`Your  firstname, ${f}, is  longer than your family name,${l}`)
}else{
    console.log("cool")
}
//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 22;
let yourAge = 55;
console.log(`I am ${myAge} and you are 33 years older`)


//Create a human readable time format using the Date time object

//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm
let now = new Date();
let year =now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
console.log(`${year}-${month}-${date}`);
console.log(`${date}-${month}-${year}`)

//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let xx = new Date();
let years =xx.getFullYear();
let months = xx.getMonth();
let dates = xx.getDate();
let hour = xx.getHours();
let minute = xx.getMinutes();
console.log(`${years}-${months}-${dates}-${hour}:${minute}`)

