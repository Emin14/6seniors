// День 9: Enums и константы

// Задача 1: Создайте enum для статусов заказа (Pending, Shipped, Delivered, Canceled).
let orderStatus = 'Pending';

// Задача 2: Напишите функцию, которая принимает статус заказа и возвращает строку с его описанием.
function describeOrderStatus(status) {
  switch (status) {
    case 'Pending':
      return 'Order is pending.';
    case 'Shipped':
      return 'Order has been shipped.';
    case 'Delivered':
      return 'Order has been delivered.';
    case 'Canceled':
      return 'Order has been canceled.';
    default:
      return 'Unknown status.';
  }
}

// Задача 3: Создайте const enum для направлений (Up, Down, Left, Right).
let direction = 'Up';

// Задача 4: Используйте enum для управления движением в игре (направление передается в функцию).
function move(direction) {
  switch (direction) {
    case 'Up':
      return 'Moving up!';
    case 'Down':
      return 'Moving down!';
    case 'Left':
      return 'Moving left!';
    case 'Right':
      return 'Moving right!';
  }
}

// Задача 5: Создайте enum для описания ролей пользователя (Admin, User, Guest) и типизируйте функцию, которая возвращает приветствие в зависимости от роли.
let role = 'Admin';

function greetUser(role) {
  switch (role) {
    case 'Admin':
      return 'Welcome, Admin!';
    case 'User':
      return 'Welcome, User!';
    case 'Guest':
      return 'Welcome, Guest!';
  }
}

// Задача 6: Определите enum для дней недели и напишите функцию, которая возвращает, является ли день выходным.
let day = 'Saturday';

function isWeekend(day) {
  return day === 'Saturday' || day === 'Sunday';
}

// Задача 7: Используйте enum для задания типов документов (Passport, IDCard, DriverLicense) и типизируйте функцию проверки документа.
let documentType = 'Passport';

function validateDocument(type, id) {
  return id.length > 0;
}

// Задача 8: Создайте enum для типов транспортных средств (Car, Truck, Motorcycle) и типизируйте функцию расчета налога.
let vehicle = 'Car';

function calculateTax(vehicle) {
  switch (vehicle) {
    case 'Car':
      return 500;
    case 'Truck':
      return 1000;
    case 'Motorcycle':
      return 200;
  }
}

// Задача 9: Используйте enum для задания цветовых схем (Light, Dark, HighContrast) и типизируйте функцию применения темы.
let scheme = 'Light';

function applyTheme(scheme) {
  return `Applying ${scheme} theme`;
}

// Задача 10: Определите enum для типов транзакций (Credit, Debit, Refund) и типизируйте функцию обработки транзакции.
let transactionType = 'Credit';

function processTransaction(type, amount) {
  switch (type) {
    case 'Credit':
      return `Crediting ${amount} to account.`;
    case 'Debit':
      return `Debiting ${amount} from account.`;
    case 'Refund':
      return `Refunding ${amount}.`;
  }
}

