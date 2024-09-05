// День 3: Типизация массивов и кортежей

// Задача 1: Создайте массив чисел и типизируйте его.
let numbers = [1, 2, 3, 4, 5];

// Задача 2: Создайте массив строк и типизируйте его.
let strings = ['one', 'two', 'three'];

// Задача 3: Создайте кортеж для хранения данных о продукте (название, цена, количество).
let productTuple = ['Laptop', 1500, 5];

// Задача 4: Типизируйте функцию, которая принимает кортеж и возвращает строку с информацией о продукте.
function formatProductInfo(product) {
  return `${product[0]}: $${product[1]} (Qty: ${product[2]})`;
}

// Задача 5: Создайте массив кортежей для хранения данных о нескольких продуктах.
let productList = [
  ['Laptop', 1500, 5],
  ['Smartphone', 700, 10],
  ['Tablet', 400, 8],
];

// Задача 6: Типизируйте функцию, которая возвращает массив цен из списка продуктов.
function getProductPrices(products) {
  return products.map(product => product[1]);
}

// Задача 7: Типизируйте функцию, которая возвращает сумму всех цен из списка продуктов.
function calculateTotalPrice(products) {
  return products.reduce((total, product) => total + product[1] * product[2], 0);
}

// Задача 8: Создайте кортеж, представляющий координаты 3D-точки (x, y, z).
let point3D = [10, 20, 30];

// Задача 9: Типизируйте функцию, которая принимает кортеж с координатами и возвращает его длину.
function calculateDistance(point) {
  return Math.sqrt(point[0] ** 2 + point[1] ** 2 + point[2] ** 2);
}

// Задача 10: Создайте массив кортежей для хранения данных о пользователях (id, имя, email).
let userTuples = [
  [1, 'John Doe', 'john.doe@example.com'],
  [2, 'Jane Smith', 'jane.smith@example.com'],
  [3, 'Alice Johnson', 'alice.johnson@example.com'],
];
