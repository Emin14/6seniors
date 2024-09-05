// День 2: Типизация объектов и интерфейсов
// typescript

// Задача 1: Создайте интерфейс для описания пользователя.
let user = {
   id: 1,
   username: 'user1',
   email: 'user1@example.com',
   age: 25
 };
 
 // Задача 2: Создайте массив объектов пользователей на основе интерфейса User.
 let users = [
   { id: 1, username: 'user1', email: 'user1@example.com' },
   { id: 2, username: 'user2', email: 'user2@example.com', age: 25 },
   { id: 3, username: 'user3', email: 'user3@example.com' },
 ];
 
 // Задача 3: Создайте интерфейс для описания товара в интернет-магазине.
 let product = {
   id: 1,
   name: 'Laptop',
   price: 1500,
   description: 'A high-end gaming laptop'
 };
 
 // Задача 4: Создайте массив товаров на основе интерфейса Product.
 let products = [
   { id: 1, name: 'Laptop', price: 1500 },
   { id: 2, name: 'Smartphone', price: 700, description: 'Latest model' },
   { id: 3, name: 'Tablet', price: 400 },
 ];
 
 // Задача 5: Типизируйте функцию, которая принимает массив товаров и возвращает сумму всех цен.
 function calculateTotal(products) {
   return products.reduce((total, product) => total + product.price, 0);
 }
 
 // Задача 6: Создайте интерфейс для описания результата операции с возможной ошибкой.
 let operationResult = {
   success: true,
   errorMessage: ''
 };
 
 // Задача 7: Типизируйте функцию, которая возвращает результат операции.
 function performOperation() {
   return { success: true };
 }
 
 // Задача 8: Создайте интерфейс для описания параметров функции отправки сообщения.
 function sendMessage(params) {
   console.log(`Message to ${params.recipientId}: ${params.message}`);
 }
 
 // Задача 9: Типизируйте функцию, которая отправляет сообщение.
 let messageParams = {
   recipientId: 1,
   message: 'Hello, world!'
 };
 sendMessage(messageParams);
 
 // Задача 10: Создайте интерфейс для описания настроек приложения.
 let config = {
   theme: 'light',
   version: '1.0.0',
   autoUpdate: true
 };
 