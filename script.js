//1 Створити масив, довжину та елементи якого задає користувач (через prompt). Елементами масиву повинні бути числа
const arr = [];

const addArrayData = () => {
  const getArrayLength = prompt("which length do you want ?");
  if (
    isNaN(getArrayLength) ||
    getArrayLength === null ||
    getArrayLength === ""
  ) {
    return "Enter valid data";
  } else {
    for (let i = 1; i <= getArrayLength; i++) {
      const addArrayvalue = +prompt(`Please enter nuber for element ${i}`);
      if (
        isNaN(addArrayvalue) ||
        addArrayvalue === null ||
        addArrayvalue === ""
      ) {
        console.log("Enter valid data");
      } else {
        arr.push(addArrayvalue);
      }
    }
    return arr;
  }
};
addArrayData();
console.log(arr);

//2 Відсортувати масив за зростанням.

const sortArray = arr.sort(a > b ? 1 : -1);
console.log(sortArray);

//3 Дано масив - список покупок. Кожен елемент масиву - це обʼєкт

const productList = [
  { productName: "bread", productPrice: 14.5, productQuantity: 2 },
  { productName: "crisps", productPrice: 55, productQuantity: 4 },
  { productName: "coca cola", productPrice: 30, productQuantity: 2 },
  { productName: "carrots", productPrice: 14, productQuantity: 2 },
  { productName: "potato", productPrice: 12, productQuantity: 10 },
  { productName: "watermelon", productPrice: 6, productQuantity: 2 },
];

//3.1 Порахувати загальну вартість корзини та вивести суму у зрозумілому форматі

const totalCost = productList.reduce(
  (prev, current) => prev + current.productPrice * current.productQuantity,
  0
);
console.log(`Total cost is ${totalCost}`);

//3.2 Порахувати найменшу кількість продукту, який потрібно купити

const minQuantity = productList.sort((a, b) =>
  a.productPrice > b.productPrice ? 1 : -1
)[0];
console.log(minQuantity.productName, minQuantity.productQuantity);

// 3.3 Порахувати загальну кількість продуктів (productQuantity)

const totalProductsQuantity = productList.reduce(
  (prev, current) => prev + current.productQuantity,
  0
);
console.log(`Total products: ${totalProductsQuantity}`);

// 3.4 Знайти найдорожчий продукт

const mostExpensiveProduct = productList.sort((a, b) =>
  a.productPrice < b.productPrice ? 1 : -1
)[0];
console.log(
  `The most expensive product is ${mostExpensiveProduct.productName}, they cost ${mostExpensiveProduct.productPrice}`
);

// 3.5Створити функцію, яка повинна додавати новий продукт в існуючий масив. Дані про новий продукт - користувач вводить із prompt

const addNewProduct = () => {
  const product = {
    productName: "",
    productPrice: 0,
    productQuantity: 0,
  };

  for (let key in product) {
    const value = prompt(key);
    if (key === "productPrice" || key === "productQuantity") {
      product[key] = Math.abs(value) ? Math.abs(value) : 0;
    } else {
      product[key] = value;
    }
  }
  productList.push(product);
  return productList;
};
addNewProduct();
console.log(productList);

// 3.6 Створити функцію, яка повинна видаляти конкретний продукт із існуючого масиву продуктів.Дані про видалення такого продукту - користувач вводить із prompt лише назву

const deleteProduct = () => {
  const selectedProduct = prompt("Enter product which you want to delete");
  const indexOfElement = productList.findIndex(
    (element) => element.productName === selectedProduct
  );
  if (indexOfElement === -1) {
    console.log("Can't find product");
    return "Can't find product";
  } else {
    productList.splice(indexOfElement, 1);
    return productList;
  }
};
deleteProduct();
console.log(productList);

//4 Дано масив [16, -3, 54,-4, 72,-56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35]

const arrayNumbers = [
  16, -3, 54, -4, -72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4,
  -54, 76, -4, 12, 6, -35,
];

// 4.1 Знайти суму та кількість позитивних елементів.

const positiveItems = arrayNumbers.filter((item) => item >= 0);
const sumOfPositiveItems = positiveItems.reduce((a, b) => a + b);
console.log(
  `Sum of ${positiveItems.length} elements is: ${sumOfPositiveItems}`
);

//4.2 Знайти мінімальний елемент масиву та його порядковий номер

const minItemValue = Math.min(...arrayNumbers);
const indexMinItem = arrayNumbers.findIndex((item) => item === minItemValue);
console.log(
  `the most minimal item is ${minItemValue}, it's index is: ${indexMinItem}`
);

//4.3 Знайти максимальний елемент масиву та його порядковий номер

const maxItemValue = Math.max(...arrayNumbers);
const indexMaxItem = arrayNumbers.findIndex(
  (element) => element === maxItemValue
);
console.log(`the max item is ${maxItemValue}, it's index is: ${indexMaxItem}`);

//4.4 Визначити кількість негативних елементів.

const arrayNegativeitems = arrayNumbers.filter((item) => item < 0);
console.log(`Quantity of the negative items is: ${arrayNegativeitems.length}`);

//4.5 Знайти кількість непарних позитивних елементів

const arrayNotEvenItems = arrayPositiveNumbers.filter((item) => item % 2 !== 0);
console.log(`Quantity of the not even numbers is: ${arrayNotEvenItems.length}`);

//4.6 Знайти суму парних позитивних елементів

const arrayEvenItems = arrayPositiveNumbers.filter((item) => item % 2 === 0);
const totalAmountEvenItems = arrayEvenItems.reduce((a, b) => a + b);
console.log(`Sum of the even items: ${totalAmountEvenItems}`);

//4.7 Знайти добуток позитивних елементів.

const multiplyEvenItems = positiveItems.reduce((a, b) => a * b, 1);
console.log(`Multiply of the positive items is: ${multiplyEvenItems}`);
