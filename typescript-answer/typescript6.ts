// День 6: Типизация в условиях

// Задача 1: Создайте функцию, которая принимает параметр типа union и использует type guards для работы с ним.
function printLength(value: string | number): void {
   if (typeof value === 'string') {
     console.log(`String length: ${value.length}`);
   } else {
     console.log(`Number length: ${value.toString().length}`);
   }
 }
 
 // Задача 2: Типизируйте функцию, которая проверяет, является ли переданный параметр массивом.
 function isArray(value: any): value is any[] {
   return Array.isArray(value);
 }
 
 // Задача 3: Типизируйте функцию, которая проверяет, является ли переданный параметр строкой.
 function isString(value: any): value is string {
   return typeof value === 'string';
 }
 
 // Задача 4: Создайте функцию, которая принимает строку или массив строк и возвращает их объединение.
 function concatenateValues(values: string | string[]): string {
   return isString(values) ? values : values.join(', ');
 }
 
 // Задача 5: Типизируйте функцию, которая принимает параметр типа union (например, строка или объект) и возвращает его строковое представление.
 function formatInput(input: string | object): string {
   if (isString(input)) {
     return input;
   } else {
     return JSON.stringify(input);
   }
 }
 
 // Задача 6: Создайте функцию, которая принимает два параметра типа union (число или строка) и возвращает их сумму или конкатенацию.
 function combine(a: number | string, b: number | string): number | string {
   if (typeof a === 'number' && typeof b === 'number') {
     return a + b;
   } else {
     return a.toString() + b.toString();
   }
 }
 
 // Задача 7: Типизируйте функцию, которая проверяет, является ли переданный параметр объектом.
 function isObject(value: any): value is object {
   return value !== null && typeof value === 'object';
 }
 
 // Задача 8: Создайте функцию, которая принимает объект и возвращает количество его свойств.
 function getObjectSize(obj: object): number {
   return Object.keys(obj).length;
 }
 
 // Задача 9: Типизируйте функцию, которая принимает параметр типа union (строка, число, массив) и возвращает его длину или размер.
 function getSize(value: string | number | any[]): number {
   if (isString(value)) {
     return value.length;
   } else if (typeof value === 'number') {
     return value.toString().length;
   } else {
     return value.length;
   }
 }
 
 // Задача 10: Создайте функцию, которая принимает параметр типа union (например, объект или массив) и использует type guards для работы с ним.
 function processInput(input: object | any[]): void {
   if (isObject(input)) {
     console.log(`Object with ${getObjectSize(input)} properties`);
   } else {
     console.log(`Array with ${input.length} elements`);
   }
 }
 