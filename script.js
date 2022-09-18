// Task 1
for (let i = 10; i <= 25; i += 0.5) {
  console.log(i);
}

//Task 2
let askingNumber = +prompt("Please enter prime number");
while (askingNumber === 0) {
  askingNumber = prompt("Please enter number");
}

//Task 3
const lowDiscount = 0.03;
const mediumDiscount = 0.05;
const highDiscount = 0.07;
const currency = "UAH";
const sumOforder = prompt("Sum of order?");

if (sumOforder <= 100) {
  console.log(`You have discount : ${(sumOforder * lowDiscount) .toFixed(2)} ${currency}`);
} else if (sumOforder > 100 && sumOforder <= 200) {
  console.log(`You have discount : ${(sumOforder * mediumDiscount) .toFixed(2)} ${currency}`);
} else {
  console.log(`You have discount : ${(sumOforder * highDiscount) .toFixed(2)} ${currency}`);
}
//Task 54
for (let i = 2; i <= 9; i = i + 1) {
  for (let j = 1; j <= 9; j = j + 1) {
    let result = i * j;
    console.log(`${i} * ${j} = ${result}`);
  }
  console.log(`Multiplication table by ${i} finished`);
}

// Task 5
const courseOFusd = 36.76;
const americanCurrency = "USD";
const ukranianCurency = "UAH";

for (let i = 10; i <= 100; i += 10) {
  console.log(
    `${i} ${americanCurrency} = ${(i * courseOFusd).toFixed(
      2
    )} ${ukranianCurency}`
  );
}

//Task6

let negativeNumber = 0;
let positiveNumber = 0;
let zeroNumber = 0;
let pairNumber = 0;
let notPairNumber = 0;

for (let i = 15; i >= 1; i--) {
  const promptNumber = +prompt(`Please enter number ${i} times`);
  if (promptNumber < 0) {
    negativeNumber++;
  } else if (promptNumber > 0) {
    positiveNumber++;
  } else {
    zeroNumber++;
  }
  if (promptNumber % 2 == 0) {
    pairNumber++;
  } else {
    notPairNumber++;
  }
}
console.log(
  `Positive ${positiveNumber}, Negative ${negativeNumber}, Zero ${zeroNumber},  Pair ${pairNumber} Not Pair ${notPairNumber} numbers`
);
