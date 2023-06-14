const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Change skills array to JSON using JSON.stringify()
// method and print it out in the console:

const tostringify = JSON.stringify(skills)
console.log(tostringify);


// Stringify the age variable
const ages = JSON.stringify(age);
console.log(ages);

// Stringify the age variable
// as a number (use Number()) then add one year onto its value with += operator:
const numAge = parseInt(JSON.parse('31')) + 1;

// Stringify the isMarried variable
const marry = JSON.stringify(isMarried)
console.log(marry);


// Stringify the student object
// into an actual string literal that can be used for creating new objects:
let studentsStringified = JSON.stringify({
    name:"John",
    email:"<EMAIL>",
    courses:[
        'Math',
        'English'
    ]
    })
    console.log(studentsStringified);
    // Create two variables from this string - firstName and lastName:
    const firstname = JSON.parse(studentsStringified).name;
    const lastname = JSON.parse(studentsStringified).courses[1];
    console.log(firstname);
    console.log(lastname);


    // Stringify the students object with only firstName, lastName and skills properties

const studentsx = JSON.stringify({
    firstName:'Maria',
    lastName:'Goretti',
    skills:[
        'Python',
        'Javascript'
    ]
},4)


console.log(studentsx);

// Parse the txt JSON to object.
const  text = JSON.parse(txt,undefined,4)
console.log(text);

// Find the user who has many skills from the variable stored in txt.
for (var i=0;i < text.length;i++){
    if (typeof text[i].skills == "object"){
        var skill = Object.keys(text[i]);
        break;
        }
        } 
console.log("The person whose have a lot of skils are : "+skill+"");