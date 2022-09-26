// 1

const teamRegistration = (
  teamName,
  driverName,
  yearOfbirth,
  carBrand,
  sponsor,
  allowedTorally
) => {
  teamName = prompt("Enter name of your team");
  driverName = prompt("Enter your name");
  yearOfbirth = +prompt("Enter your year of birth");
  carBrand = prompt("Enter your car brand");
  sponsor = prompt("Enter name of your sponsor");

  if (
    teamName === null ||
    driverName === null ||
    yearOfbirth === null ||
    carBrand === null ||
    sponsor === null
  ) {
    allowedTorally = false;
  } else if (
    teamName === "" ||
    driverName === "" ||
    yearOfbirth === "" ||
    carBrand === "" ||
    sponsor === ""
  ) {
    allowedTorally = false;
  } 
  else if (
    isNaN(yearOfbirth) 
  ) {
    allowedTorally = false;
  } 
  else {
    allowedTorally = true;
  }
  return {
    name: driverName,
    yearOfbirth: yearOfbirth,
    car: carBrand,
    sponsor: sponsor,
    allowedTorally: allowedTorally,
  };
};
const team_1 = teamRegistration();
console.log(team_1);

//2

const userRegistration = () => {
  const newUser = {
    login: "",
    password: "",
    city: "",
    country: "",
    gender: "",
    age: "",
  };
  for (let key in newUser) {
    let userInfo = prompt(`Enter ${key}`);
    if (userInfo === null || userInfo === "") {
      console.log("Enter any value");
    } else {
      newUser[key] = userInfo;
    }
  }
  return newUser;
};
const newUser = userRegistration();

//3

const updateUserData = (object, key, value) => {
  return (object[key] = value);
};

updateUserData(userRegistration, "city", "Kherson");

//4

const studentsObject = {
  name: "Adam",
  surname: "Sandler",
  age: 25,
  course: 5,
  city: "Los Angeles",
  greeting: function () {
    console.log("Hi. everyone!");
  },
  addHomework: function () {
    console.log("Sending my howework... Please, wait");
  },
};
studentsObject.greeting();
studentsObject.addHomework();

//5

const isEmpty = (newUser) => {
  for (let key in newUser) {
    console.log(false);
    return false;
  }
  console.log(true);
  return true;
};
isEmpty(newUser);

//6

const employeesRevenue = {
  Taras: 2000,
  Marta: 10,
  Ivan: 1200,
  Petro: 400,
  Roma: 366,
  Alina: 829,
};

//7

const sumOfrevenue = (employeesRevenue) => {
  let sum = 0;
  for (let key in employeesRevenue) {
    sum += employeesRevenue[key];
  }
  console.log(sum);
};
sumOfrevenue(employeesRevenue);

//8

const employeesLowerRevenue = (employeesRevenue) => {
  const arrayemployeesRevenue = Object.values(employeesRevenue);
  const min = Math.min(...arrayemployeesRevenue);
  return min;
};
const result = employeesLowerRevenue(employeesRevenue);
console.log(`the lower revenu is ${result} UAH`);

//9

const employeesHigherRevenue = (employeesRevenue) => {
  const arrayemployeesRevenue = Object.values(employeesRevenue);
  const max = Math.max(...arrayemployeesRevenue);

  return max;
};
const higherResult = employeesHigherRevenue(employeesRevenue);
console.log(`the higher revenu is ${higherResult} UAH`);

//10

const showEmployeeOfTheMonth = (employeesRevenue) => {
  const arrayemployee = Object.keys(employeesRevenue);
  let randomemployee = Math.floor(Math.random() * arrayemployee.length);
  return `Congratulations, ${arrayemployee[randomemployee]}, you are the seller of the month!`;
};
console.log(showEmployeeOfTheMonth(employeesRevenue));
