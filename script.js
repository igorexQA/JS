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
let Addition = userFirstnumber + userSecondnumber;
console.log(Addition);

const Subtraction = userFirstnumber - userSecondnumber;
console.log(Subtraction);

const Multiplication = userFirstnumber * userSecondnumber;
console.log(Multiplication);

const Division = userFirstnumber / userSecondnumber;
console.log(Division);

//Point 8
UseryearOFbirth = prompt("Please enter your year of birth?");

//Point 9
const currentYear = new Date().getFullYear();

userAge = currentYear - UseryearOFbirth;

console.log(userAge, "Years");

//Point 10 (takes value from Point 5 and Point 6)
let result = userFirstnumber % userSecondnumber;

let resultForUser = `The remainder of dividing ${userFirstnumber} by ${userSecondnumber} is equal ${result}`;
console.log(resultForUser);

//Point 11
const anyNumber = +prompt("Enter any number");

anyNumber % 2 === 0 ? console.log("Paired") : console.log("Not paired");