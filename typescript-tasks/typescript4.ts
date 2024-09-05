// День 4: TypeScript и функции

// Задача 1: Типизируйте функцию, которая принимает массив чисел и возвращает максимальное значение.
function findMax(numbers) {
   return Math.max(...numbers);
 }
 
 // Задача 2: Типизируйте функцию, которая принимает строку и возвращает количество символов.
 function countChars(str) {
   return str.length;
 }
 
 // Задача 3: Создайте функцию с необязательным параметром и типизируйте её.
 function greet(name, greeting) {
   return `${greeting || 'Hello'}, ${name}`;
 }
 
 // Задача 4: Создайте функцию с параметром по умолчанию и типизируйте её.
 function multiply(a, b = 1) {
   return a * b;
 }
 
 // Задача 5: Создайте функцию, принимающую объект с несколькими свойствами, и типизируйте её.
 function createRectangle(options) {
   return `Rectangle: ${options.width}x${options.height} ${options.color || 'no color'}`;
 }
 
 // Задача 6: Типизируйте функцию, которая принимает функцию обратного вызова (callback).
 function fetchData(url, callback) {
   const data = `Data from ${url}`;
   callback(data);
 }
 
 // Задача 7: Создайте перегруженную функцию для сложения чисел и конкатенации строк.
 function add(a, b) {
   return a + b;
 }
 
 // Задача 8: Типизируйте функцию, которая возвращает другую функцию.
 function createMultiplier(factor) {
   return n => n * factor;
 }
 
 // Задача 9: Типизируйте функцию, которая принимает несколько аргументов и возвращает их сумму.
 function sum() {
   return Array.from(arguments).reduce((total, n) => total + n, 0);
 }
 
 // Задача 10: Типизируйте функцию, которая принимает параметр типа union (строка или число) и возвращает его строковое представление.
 function toString(value) {
   return value.toString();
 }
 