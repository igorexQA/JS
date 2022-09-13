//Task 1
console.log(+(0.1 + 0.2).toFixed(2));

//Task 2
const userLogin = prompt("Please enter login");

const userPassword = prompt("Please enter password");

const userAdmin = "admin";

const adminPassword = "12pass33210";

userLogin == userAdmin && userPassword == adminPassword
  ? console.log("succsess login")
  : userLogin != userAdmin || userPassword !== adminPassword
  ? console.log("problem with login or password")
  : console.log("user doesn't have access to the admin panel");

//Task 3
const ukraineCurrency = "UAH";
const watermelon = "watermelon";
const carrot = "carrot";
const potato = "potato";
const watermelonPrice = 21;
const carrotPrice = 8;
const potatoPrice = 12;
const UnfortunatlyMessage =
  "Unfortunately, you do not have enough money to buy at least 1 pc of any products";
const tooCheap ='Insufficient funds'
const userBalance = +prompt("How much money do you have?");
const lowerProductprice = 8;
console.log(
  `${watermelon}: ${watermelonPrice} ${ukraineCurrency}, ${carrot}: ${carrotPrice} ${ukraineCurrency}, ${potato}: ${potatoPrice} ${ukraineCurrency}`
);
if (lowerProductprice > userBalance) {
  console.log(UnfortunatlyMessage);
} else {
  const userSelection = prompt("What would you like to by??").toLowerCase();
  if (
    userSelection !== watermelon &&
    userSelection !== potato &&
    userSelection !== carrot
  ) {
    console.log("This product not found");
  } else if (userSelection === watermelon) {
    if (userBalance >= watermelonPrice) {
      console.log(
        `For ${userBalance} ${ukraineCurrency}. You can by ${Math.trunc(
          userBalance / watermelonPrice
        )}pc of this product. You will have remainder ${
          userBalance % watermelonPrice
        } ${ukraineCurrency}`
      );
    } else {
      console.log(tooCheap);
    }
  } else if (userSelection === carrot) {
    if (userBalance >= carrotPrice) {
      console.log(
        `For ${userBalance} ${ukraineCurrency}. You can by ${Math.trunc(
          userBalance / carrotPrice
        )}pc of this product. You will have remainder ${
          userBalance % carrotPrice
        } ${ukraineCurrency}`
      );
    } else {
      console.log(tooCheap);
    }
  } else if (userSelection === potato) {
    if (userBalance >= potatoPrice) {
      console.log(
        `For ${userBalance} ${ukraineCurrency}. You can by ${Math.trunc(
          userBalance / potatoPrice
        )}pc of this product. You will have remainder ${
          userBalance % potatoPrice
        } ${ukraineCurrency}`
      );
    } else {
      console.log(tooCheap);
    }
  }
}
//Task 4
const triangleSideA = +prompt("Length of A ?");
const triangleSideB = +prompt("Length of B ?");
const triangleSideC = +prompt("Length of C ?");
triangleSideA < triangleSideB + triangleSideC &&
triangleSideB < triangleSideA + triangleSideC &&
triangleSideC < triangleSideA + triangleSideB
  ? console.log("This type of triangle exist")
  : console.log("This type of triangle not exist");
//Task 5
(2 && 0 && 3) || (true && false); // false

false || " " || (3 && true); // " "

1 && 1000 && '0' || 0 && 'Bob' // '0'

-1 || 0 || 0 && "" || 1010 // -1