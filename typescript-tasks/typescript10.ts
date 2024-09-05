// День 10: Утилиты типов

// Задача 1: Используйте утилиту Partial для создания типа, в котором все свойства интерфейса User будут необязательными.
let user = {
   id: 1
 };
 
 // Задача 2: Создайте объект с использованием типа PartialUser.
 let userUpdate = {
   email: 'new.email@example.com'
 };
 
 // Задача 3: Используйте утилиту Required для создания типа, в котором все свойства интерфейса Product будут обязательными.
 let completeProduct = {
   name: 'Laptop',
   price: 1500,
   description: 'High-end gaming laptop'
 };
 
 // Задача 4: Создайте объект с использованием типа RequiredProduct.
 let anotherProduct = {
   name: 'Smartphone',
   price: 700,
   description: 'Latest model'
 };
 
 // Задача 5: Используйте утилиту Readonly для создания типа, в котором все свойства интерфейса Config будут доступными только для чтения.
 let serverConfig = {
   host: 'localhost',
   port: 8080
 };
 
 // Задача 6: Создайте объект с использованием типа ReadonlyConfig.
 let readonlyConfig = {
   host: '127.0.0.1',
   port: 3000
 };
 
 // Задача 7: Используйте утилиту Pick для создания типа, который будет содержать только свойства id и name из интерфейса User.
 let userIdName = {
   id: 1,
   name: 'Alice'
 };
 
 // Задача 8: Создайте объект с использованием типа UserIdName.
 let simpleUser = {
   id: 2,
   name: 'Bob'
 };
 
 // Задача 9: Используйте утилиту Omit для создания типа, который исключает свойство email из интерфейса User.
 let userWithoutEmail = {
   id: 3,
   name: 'Charlie'
 };
 
 // Задача 10: Создайте объект с использованием типа UserWithoutEmail.
 let minimalUser = {
   id: 4,
   name: 'Dave'
 };
 