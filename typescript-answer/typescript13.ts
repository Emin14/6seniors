// День 13: Полиморфизм и перегрузка функций

// Задача 1: Напишите перегруженную функцию для сложения двух или более чисел.
function add(a) {
   if (Array.isArray(a)) {
     return a.reduce((sum, value) => sum + value, 0);
   } else {
     return arguments[0] + arguments[1];
   }
 }
 
 // Задача 2: Создайте полиморфную функцию, которая принимает строку или массив строк и возвращает их длину или сумму длин.
 function getLength(value) {
   if (typeof value === 'string') {
     return value.length;
   } else if (Array.isArray(value)) {
     return value.reduce((sum, str) => sum + str.length, 0);
   }
 }
 
 // Задача 3: Напишите перегруженную функцию для объединения строк или массивов.
 function merge(a, b) {
   if (typeof a === 'string' && typeof b === 'string') {
     return a + b;
   } else if (Array.isArray(a) && Array.isArray(b)) {
     return [...a, ...b];
   }
 }
 
 // Задача 4: Реализуйте полиморфную функцию для фильтрации массива по условию или поиска элемента по значению.
 function findOrFilter(arr, predicateOrValue) {
   if (typeof predicateOrValue === 'function') {
     return arr.filter(predicateOrValue);
   } else {
     return arr.find(item => item === predicateOrValue);
   }
 }
 
 // Задача 5: Напишите перегруженную функцию для работы с числами и строками, возвращающую их удвоенные значения.
 function double(value) {
   if (typeof value === 'number') {
     return value * 2;
   } else if (typeof value === 'string') {
     return value.repeat(2);
   }
 }
 
 // Задача 6: Создайте полиморфную функцию для преобразования строки в число или числа в строку.
 function convert(value) {
   if (typeof value === 'string') {
     return Number(value);
   } else if (typeof value === 'number') {
     return value.toString();
   }
 }
 
 // Задача 7: Напишите перегруженную функцию для расчета площади прямоугольника или круга.
 function calculateArea(shape) {
   if (shape.radius) {
     return Math.PI * shape.radius ** 2;
   } else {
     return shape.width * shape.height;
   }
 }
 
 // Задача 8: Реализуйте полиморфную функцию для сравнения двух значений, возвращающую булево значение.
 function compare(a, b) {
   if (typeof a === 'number' && typeof b === 'number') {
     return a === b;
   } else if (typeof a === 'string' && typeof b === 'string') {
     return a.localeCompare(b) === 0;
   }
 }
 
 // Задача 9: Напишите перегруженную функцию для объединения строк, чисел или массивов.
 function combine(a, b) {
   if (typeof a === 'string' && typeof b === 'string') {
     return a + b;
   } else if (typeof a === 'number' && typeof b === 'number') {
     return a + b;
   } else if (Array.isArray(a) && Array.isArray(b)) {
     return [...a, ...b];
   }
 }
 
 // Задача 10: Создайте полиморфную функцию для поиска минимального значения в массиве или сравнения двух чисел.
 function findMin(a, b) {
   if (Array.isArray(a)) {
     return Math.min(...a);
   } else if (typeof a === 'number' && typeof b === 'number') {
     return Math.min(a, b);
   }
 }
 