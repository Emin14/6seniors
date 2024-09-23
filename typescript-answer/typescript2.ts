// День 2: Типизация объектов и интерфейсов
// typescript

interface IUser {
  id: number,
  username: string,
  email: string,
  age: number,
}

// Задача 1: Создайте интерфейс для описания пользователя.
let user: IUser  = {
   id: 1,
   username: 'user1',
   email: 'user1@example.com',
   age: 25
 };


 // Задача 2: Создайте массив объектов пользователей на основе интерфейса User.
 let users: (Omit<IUser, 'age'> & {age?: number})[]
 = [
   { id: 1, username: 'user1', email: 'user1@example.com' },
   { id: 2, username: 'user2', email: 'user2@example.com', age: 25 },
   { id: 3, username: 'user3', email: 'user3@example.com' },
 ];

interface Iproduct{
  id: number,
  name: string,
  price: number,
  description: string,
}
 
 // Задача 3: Создайте интерфейс для описания товара в интернет-магазине.
 let product:Iproduct = {
   id: 1,
   name: 'Laptop',
   price: 1500,
   description: 'A high-end gaming laptop'
 };

 type Product = Pick<Iproduct, 'id' | 'name' | 'price'> & {description?: string}
 
 // Задача 4: Создайте массив товаров на основе интерфейса Product.
 let products: Product[] = [
   { id: 1, name: 'Laptop', price: 1500 },
   { id: 2, name: 'Smartphone', price: 700, description: 'Latest model' },
   { id: 3, name: 'Tablet', price: 400 },
 ];

 
 // Задача 5: Типизируйте функцию, которая принимает массив товаров и возвращает сумму всех цен.
 function calculateTotal(products: Product[]):number {
   return products.reduce((total, product) => total + product.price, 0);
 }

 interface IoperationResult {
    success: boolean,
    errorMessage: string
 }
 
 // Задача 6: Создайте интерфейс для описания результата операции с возможной ошибкой.
 let operationResult: IoperationResult = {
   success: true,
   errorMessage: ''
 };
 
 // Задача 7: Типизируйте функцию, которая возвращает результат операции.
 function performOperation(): Pick<IoperationResult, 'success'> & {errorMessage?: string} {
   return { success: true };
 }

 interface Iparams {
  recipientId: number,
  message: string,
 }
 
 // Задача 8: Создайте интерфейс для описания параметров функции отправки сообщения.
 function sendMessage(params: Iparams) {
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
 