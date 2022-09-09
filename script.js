//Point 1
const userName = prompt("What is your name?");

//Point 2
const userSurname = prompt("What is your surname?");

//Point 3
const userFavoritenumber = prompt("What is youe favorite number?");

//point 4
console.log(`Hello, ${userName} ${userSurname}! your favorite nuber is - ${userFavoritenumber}`);

//Point 5
const userFirstnumber = +prompt("Please enter first number");

//Point 6
const userSecondnumber = +prompt("Please enter second number");

//Point 7
let addition = userFirstnumber + userSecondnumber;
console.log(addition);

let subtraction = userFirstnumber - userSecondnumber;
console.log(subtraction);

let multiplication = userFirstnumber * userSecondnumber;
console.log(multiplication);

let division = userFirstnumber / userSecondnumber;
console.log(division);

//Point 8
const useryearOFbirth = prompt("Please enter your year of birth?");

//Point 9
const currentYear = new Date().getFullYear();

const userAge = currentYear - useryearOFbirth;

console.log(userAge, "Years");

//Point 10 (takes value from Point 5 and Point 6)
let result = userFirstnumber % userSecondnumber;

let resultForUser = `The remainder of dividing ${userFirstnumber} by ${userSecondnumber} is equal ${result}`;
console.log(resultForUser);

//Point 11
const anyNumber = +prompt("Enter any number");

anyNumber % 2 === 0 ? console.log("Paired") : console.log("Not paired");