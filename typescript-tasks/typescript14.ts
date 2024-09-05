// День 14: Работа с модулями и пространства имен

// Задача 1: Создайте модуль, который экспортирует функции для работы с числами.
export function addNumbers(a, b) {
   return a + b;
 }
 
 export function multiplyNumbers(a, b) {
   return a * b;
 }
 
 // Задача 2: Импортируйте функции из модуля и используйте их.
 import { addNumbers, multiplyNumbers } from './math';
 
 let sum = addNumbers(2, 3);
 let product = multiplyNumbers(4, 5);
 
 // Задача 3: Создайте пространство имен для работы со строками и экспортируйте функции.
 namespace StringUtils {
   export function toUpperCase(str) {
     return str.toUpperCase();
   }
 
   export function toLowerCase(str) {
     return str.toLowerCase();
   }
 }
 
 // Задача 4: Используйте функции из пространства имен.
 let upper = StringUtils.toUpperCase('hello');
 let lower = StringUtils.toLowerCase('WORLD');
 
 // Задача 5: Создайте модуль, который экспортирует интерфейсы и типы данных.
 export interface User {
   id: number;
   name: string;
 }
 
 export type UserID = number;
 
 // Задача 6: Импортируйте интерфейсы и типы данных из модуля и используйте их.
 import { User, UserID } from './types';
 
 let user: User = { id: 1, name: 'John' };
 let userId: UserID = 1;
 
 // Задача 7: Создайте пространство имен для работы с массивами и экспортируйте функции для фильтрации и сортировки.
 namespace ArrayUtils {
   export function filterArray(arr, predicate) {
     return arr.filter(predicate);
   }
 
   export function sortArray(arr, compareFn) {
     return arr.sort(compareFn);
   }
 }
 
 // Задача 8: Используйте функции из пространства имен.
 let numbers = [5, 3, 8, 1];
 let filteredNumbers = ArrayUtils.filterArray(numbers, n => n > 3);
 let sortedNumbers = ArrayUtils.sortArray(numbers, (a, b) => a - b);
 
 // Задача 9: Создайте модуль, который экспортирует константы и функции для работы с датами.
 export const DAYS_IN_WEEK = 7;
 
 export function getCurrentDate() {
   return new Date();
 }
 
 // Задача 10: Импортируйте и используйте константы и функции из модуля для работы с датами.
 import { DAYS_IN_WEEK, getCurrentDate } from './dateUtils';
 
 let today = getCurrentDate();
 let daysInWeek = DAYS_IN_WEEK;
 