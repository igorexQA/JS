//1

const calcMinNumber = (number1, number2, number3, number4) => {
  const calcResult = Math.min(number1, number2, number3, number4);
  if (isNaN(calcResult) || calcResult === undefined) {
    return "You entered invalid variables";
  } else {
    return calcResult;
  }
};
calcMinNumber(number1, number2, number3, number4);

//2

function greatestDivisor(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "Please enter two numbers";
  } else if (y > x) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y > x) {
      let c = y;
      y = x % y;
      x = c;
    }

    return x;
  } else {
    return "Divisor is abcent";
  }
}

greatestDivisor();

//3

function perfectNumber(number) {
  let startNumber = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      startNumber += i;
    }
  }

  if (startNumber === number && startNumber !== 0) {
    return "It is a perfect number.";
  } else {
    return "It is not a perfect number.";
  }
}
perfectNumber();

//4
const getRange = (start, end) => {
  if (typeof start !== "number" || typeof end !== "number") {
    return "Please enter two numbers";
  }

  if (start === end) {
    return "Please enter two different numbers";
  }

  if (start > end) {
    let revert = start;
    start = end;
    end = revert;
  }

  let sum = 0;

  for (let i = +start; i <= +end; i++) {
    sum += i;
  }
  return `Summ of number in interval from ${start} till ${end} equel ${sum}`;
};
getRange();

//5
const tempINcelsius = +prompt("Please enter temperature in (°C)");
const convOFtemp = (tempINcelsius) => {
  const resultInfahrenheit = (tempINcelsius + 32) * 1.8;
  if (
    isNaN(tempINcelsius) ||
    tempINcelsius === null ||
    tempINcelsius === undefined
  ) {
    return "Only numbers";
  } else {
    return `${resultInfahrenheit}°F`;
  }
};
convOFtemp(tempINcelsius);
//6
const firstNumber = 0;
const lastNumber = 40;
const getRandomNumber = (lastNumber, firstNumber) => {
  return Math.floor(
    Math.random() * (lastNumber - firstNumber + 1) + firstNumber
  );
};
getRandomNumber(lastNumber, firstNumber);
