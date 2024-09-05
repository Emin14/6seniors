// Неделя 1: Основы TypeScript

// День 1: Введение в TypeScript

// Задача 1: Преобразуйте обычную функцию JavaScript в TypeScript с использованием базовых типов.
function multiply(a, b) {
   return a * b;
 }
 
 // Задача 2: Типизируйте массив строк и чисел.
 let mixedArray = ['apple', 1, 'banana', 2];
 
 // Задача 3: Создайте интерфейс для описания автомобиля.
 let car = {
   make: 'Toyota',
   model: 'Corolla',
   year: 2020
 };
 
 // Задача 4: Создайте объект автомобиля на основе интерфейса.
 const myCar = {
   make: 'Toyota',
   model: 'Corolla',
   year: 2020,
 };
 
 // Задача 5: Типизируйте функцию, которая принимает объект Car и возвращает строку.
 function carInfo(car) {
   return `${car.make} ${car.model} (${car.year})`;
 }
 
 // Задача 6: Типизируйте функцию, которая возвращает массив строк.
 function getFruitNames() {
   return ['apple', 'banana', 'orange'];
 }
 
 // Задача 7: Используйте Enum для описания дней недели и типизируйте функцию, которая возвращает название дня.
 function getDayName(day) {
   switch (day) {
     case 0:
       return 'Monday';
     case 1:
       return 'Tuesday';
     case 2:
       return 'Wednesday';
     case 3:
       return 'Thursday';
     case 4:
       return 'Friday';
     case 5:
       return 'Saturday';
     case 6:
       return 'Sunday';
   }
 }
 
 // Задача 8: Типизируйте функцию, которая принимает любое количество строк и возвращает их объединение.
 function concatenate() {
   let result = '';
   for (let i = 0; i < arguments.length; i++) {
     result += arguments[i];
   }
   return result;
 }
 
 // Задача 9: Создайте кортеж для хранения координат точки (x, y).
 let point = [10, 20];
 
 // Задача 10: Типизируйте функцию, которая принимает объект с несколькими свойствами и возвращает сумму всех числовых значений.
 function sumProperties(obj) {
   return obj.a + obj.b + obj.c;
 }
 






//  ===============================


Задача 1: Преобразуйте обычную функцию JavaScript для сложения двух чисел в TypeScript.


function add(a: number, b: number) {
  return a + b;
}

Нужно типизировать параметры функции и возвращаемое значение.


Задача 2: Типизируйте массив чисел.

let numbers: number[] = [1, 2, 3, 4, 5];
Нужно типизировать массив numbers.


Задача 3: Создайте интерфейс для описания книги с полями title, author, и pages, а затем создайте объект книги на основе этого интерфейса.

interface IBook {
  title: string;
  author: string;
  pages: number
}

let book = {
  title: 'TypeScript for Beginners',
  author: 'John Doe',
  pages: 300
};
Нужно создать интерфейс и типизировать объект book.


Задача 4: Типизируйте функцию, которая принимает строку и возвращает её длину.

function getLength(str:string):number {
  return str.length;
}
Нужно типизировать параметры функции и возвращаемое значение.


Задача 5: Типизируйте объект с ключами name, age и isStudent, а затем создайте функцию, которая принимает этот объект и возвращает строку с информацией о пользователе.

interface User {
  name: string,
  age: number,
  isStudent: boolean
}

let user:User = {
  name: 'Alice',
  age: 25,
  isStudent: true
};

function getUserInfo(user:User):string {
  return `${user.name}, age ${user.age}, is a student: ${user.isStudent}`;
}
Нужно типизировать объект user и параметры функции getUserInfo.


Задача 6: Типизируйте функцию, которая принимает массив строк и возвращает массив тех же строк в верхнем регистре.

function toUpperCaseArray(strings: string[]):string[] {
  return strings.map(str => str.toUpperCase());
}
Нужно типизировать параметры функции и возвращаемое значение.


Задача 7: Типизируйте кортеж, содержащий имя пользователя и его возраст.

let userInfo:[string, number] = ['Bob', 30];
Нужно типизировать кортеж userInfo.


Задача 8: Создайте перечисление (enum) для статусов выполнения задач (NotStarted, InProgress, Completed), затем создайте переменную и присвойте ей один из этих статусов.

enum Status {
  NotStarted,
  InProgress,
  Completed,
}

let taskStatus:Status = Status.InProgress;
Нужно создать перечисление и типизировать переменную taskStatus.


Задача 9: Типизируйте функцию, которая принимает два числа и возвращает большее из них.

function max(a:number, b:number):number {
  return a > b ? a : b;
}
Нужно типизировать параметры функции и возвращаемое значение.


Задача 10: Создайте интерфейс для описания координат точки на плоскости (x и y), затем типизируйте объект, представляющий точку.

interface Ipoint {
  x: number;
  y: number
}

let point:Ipoint = {
  x: 10,
  y: 20
};
Нужно создать интерфейс и типизировать объект point.