// Неделя 1: Основы TypeScript

// День 1: Введение в TypeScript

// Задача 1: Преобразуйте обычную функцию JavaScript в TypeScript с использованием базовых типов.
function multiply(a:number, b:number):number {
   return a * b;
 }
 
 // Задача 2: Типизируйте массив строк и чисел.
 let mixedArray:(string | number)[] = ['apple', 1, 'banana', 2];

 interface ICar {
  make: string,
  model: string,
  year: number
 }
 
 // Задача 3: Создайте интерфейс для описания автомобиля.
 let car:ICar  = {
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
//  Не понял это задание, разве сверху не объект?
 

 // Задача 5: Типизируйте функцию, которая принимает объект Car и возвращает строку.
 function carInfo(car:ICar):string {
   return `${car.make} ${car.model} (${car.year})`;
 }
 
 // Задача 6: Типизируйте функцию, которая возвращает массив строк.
 function getFruitNames():string[] {
   return ['apple', 'banana', 'orange'];
 }

 enum Weeks {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
 }
 
 // Задача 7: Используйте Enum для описания дней недели и типизируйте функцию, которая возвращает название дня.
 function getDayName(day: number): Weeks {
   switch (day) {
     case 0:
       return Weeks.Monday;
     case 1:
       return Weeks.Tuesday;
     case 2:
       return Weeks.Wednesday;
     case 3:
       return Weeks.Thursday;
     case 4:
       return Weeks.Friday;
     case 5:
       return Weeks.Saturday;
     case 6:
       return Weeks.Sunday;
    default: 
      throw new Error("Invalid day number");
   }
 }
 

// Не смог решить:
 // Задача 8: Типизируйте функцию, которая принимает любое количество строк и возвращает их объединение.
 function concatenate():string {
   let result = '';
   for (let i = 0; i < (arguments as IArguments).length; i++) {
     result += arguments[i];
   }
   return result;
 }
 

 // Задача 9: Создайте кортеж для хранения координат точки (x, y).
 let point:[number, number] = [10, 20];
 

 interface Obj {
  [key: string]: number
 }

 // Задача 10: Типизируйте функцию, которая принимает объект с несколькими свойствами и возвращает сумму всех числовых значений.
 function sumProperties(obj: Obj): number {
   return obj.a + obj.b + obj.c;
 }
 