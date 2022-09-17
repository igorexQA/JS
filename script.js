// Task 1
for (let i = 10; i <= 25; i += 0.5) {
  console.log(i);
}

//Task 2
let askingNumber = prompt("Please enter prime number");
while (askingNumber % 2 == 0) {
  alert("Your number is not prime");
  askingNumber = prompt("Please enter number");
}
alert("Your number is prime");

//Task 3
lowDiscount = 0.03;
mediumDiscount = 0.05;
highDiscount = 0.07;
currency = "UAH";
const SumOforder = prompt("Sum of order?");

if (SumOforder <= 100) {
  alert(`You have discount : ${(SumOforder * lowDiscount) .toFixed(2)} ${currency}`);
} else if (SumOforder > 100 && SumOforder <= 200) {
  alert(`You have discount : ${(SumOforder * mediumDiscount) .toFixed(2)} ${currency}`);
} else {
  alert(`You have discount : ${(SumOforder * highDiscount) .toFixed(2)} ${currency}`);
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
let courseOFusd = 36.76;
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
