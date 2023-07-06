const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }  

// Find the person who has many 
// skills in the users object.

let maxskills = 0;
let maxuser =" ";
for(user in users){
  if(users[user].skills.length > maxskills){
    maxskills = users[user].skills.length
    maxuser = user
  }


}


// let maxskills = 0
// let maxSkillsUser =""
// for(person in users){
//   if(users[person].skills.length > maxskills){
//     maxskills = users[person].skills.length
//     maxSkillsUser = person
//   }
// }
// console.log(maxSkillsUser,maxskills)

// Count logged in users, count users having greater 
// than equal to 50 points from the following object
let loggedInCount = 0;
let highPointsCount = 0;

for (let person in users) {
  if (users[person].isLoggedIn) {
    loggedInCount++;
  }
  
  if (users[person].points >= 50) {
    highPointsCount++;
  }
}

console.log(loggedInCount);
console.log(highPointsCount);



