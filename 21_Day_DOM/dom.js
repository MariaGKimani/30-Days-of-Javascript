// Create an index.html file and put four p elements as above:
//  Get the first paragraph by using document.querySelector(tagname) and tag name

// let x = document.querySelector('p')
//  console.log(x.textContent);

// //  Get each of the the paragraph using 
// // document.querySelector('#id') and by their id
// value1 = document.querySelector('#p-tag1')
// value2 = document.querySelector('#p-tag2')
// value3 = document.querySelector('#p-tag3')
// console.log(value1,value2,value3);

// xxy =document.querySelectorAll('p')
// console.log(xxy);

 // Function to change the year color every 1 second
 setInterval(() => {
    const yearElement = document.getElementById('year');
    const randomColor = getRandomColor();
    yearElement.style.color = randomColor;
}, 1000);

// Function to change the date and time background color every 1 second
setInterval(() => {
    const dateTimeElement = document.getElementById('date-time');
    const randomColor = getRandomColor();
    dateTimeElement.style.backgroundColor = randomColor;
}, 1000);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}