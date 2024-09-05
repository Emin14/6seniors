// Неделя 2: Продвинутая типизация

// День 8: Типы и интерфейсы
// Задача 1: Создайте интерфейс `Person` с обязательными свойствами `name` и `age`, а также необязательным свойством `address`.
let person = {
   name: 'John Doe',
   age: 30,
   address: '123 Main St'
 };
 
 // Задача 2: Расширьте интерфейс `Person`, добавив интерфейс `Employee`, который включает свойства `jobTitle` и `salary`.
 let employee = {
   name: 'Jane Doe',
   age: 28,
   jobTitle: 'Software Engineer',
   salary: 85000
 };
 
 // Задача 3: Создайте объект `Employee`, используя оба интерфейса.
 let newEmployee = {
   name: 'Alice Smith',
   age: 26,
   jobTitle: 'Designer',
   salary: 70000
 };
 
 // Задача 4: Создайте интерфейс для описания опций конфигурации, содержащих строковые, числовые и булевые свойства.
 let configOptions = {
   host: 'localhost',
   port: 8080,
   secure: false
 };
 
 // Задача 5: Напишите функцию, которая принимает объект конфигурации и выводит строку с его описанием.
 function describeConfig(config) {
   return `Host: ${config.host}, Port: ${config.port}, Secure: ${config.secure}`;
 }
 
 // Задача 6: Создайте интерфейс для описания формы, который будет содержать строковые свойства `username`, `email` и булево свойство `subscribe`.
 let form = {
   username: 'user123',
   email: 'user@example.com',
   subscribe: true
 };
 
 // Задача 7: Напишите функцию, которая принимает объект формы и возвращает его данные в виде строки.
 function formatFormData(form) {
   return `Username: ${form.username}, Email: ${form.email}, Subscribe: ${form.subscribe}`;
 }
 
 // Задача 8: Создайте интерфейс с необязательными свойствами и продемонстрируйте его использование в функции.
 let partialUser = {
   id: 1,
   name: 'John Doe'
 };
 
 function updateUser(user) {
   return `Updating user with id: ${user.id}, name: ${user.name}, email: ${user.email}`;
 }
 
 // Задача 9: Используйте утилиту `Pick` для создания нового интерфейса на основе интерфейса `Employee`.
 let employeeDetails = {
   name: 'Jane Doe',
   jobTitle: 'Software Engineer'
 };
 
 // Задача 10: Создайте тип, представляющий объединение `Person` и `Employee` и реализуйте функцию, которая принимает этот тип.
 function getPersonDetails(person) {
   return `Name: ${person.name}, Age: ${person.age}`;
 }
 