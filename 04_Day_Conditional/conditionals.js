/////////////////////////LEVEL 2//////////////////////////////////////////////////////LEVEL 2
//Write a code which can give grades to students according to theirs scores:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F
let scores;
if(scores <= 100 && scores >=80){
    console.log("A");
}else if(scores <= 89 && scores >=70){
    console.log("B")
}else if(scores <= 69 && scores >=60){
    console.log("C")
}else if(scores <= 59 && scores >=50){
    console.log("D")
}else if(scores <= 49 && scores >=0){
    console.log("F")
}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer
let month = prompt("Please enter a month: ");
if(month.includes("September","October","November")){
    console.log("Autumn");
}else if(month.includes("December","January","February")){
    console.log("Winter");
}else if(month.includes("March","April","May")){
    console.log("Spring"); 
}else if(month.includes("June","July","August")){
    console.log("Summer");
}

//check if a day is weekend day or working day.
//Your script will take day as an input
///What is the day  today? Saturday
// Saturday is a weekend.
// What is the day today? saturDaY
// Saturday is a weekend.
// What is the day today? Friday
// Friday is a working day.
// What is the day today? FrIDAy
// Friday is a working day.