// Неделя 4: Углубленные темы и лучшие практики

// День 21: Углубленная работа с Generics

// Задача 1: Создайте обобщенную функцию, которая принимает объект и ключ, и возвращает значение этого ключа.
function getValue(obj, key) {
   return obj[key];
 }
 
 // Задача 2: Напишите обобщенную функцию, которая принимает два объекта и объединяет их в один.
 function mergeObjects(obj1, obj2) {
   return { ...obj1, ...obj2 };
 }
 
 // Задача 3: Создайте обобщенную функцию, которая принимает массив и индекс, и возвращает элемент на этом индексе.
 function getElementAtIndex(arr, index) {
   return arr[index];
 }
 
 // Задача 4: Напишите обобщенную функцию, которая принимает массив объектов и ключ, и возвращает массив значений этого ключа.
 function pluckValues(arr, key) {
   return arr.map(item => item[key]);
 }
 
 // Задача 5: Создайте обобщенную функцию, которая принимает массив и возвращает новый массив, где каждый элемент преобразован через функцию.
 function mapArray(arr, callback) {
   return arr.map(callback);
 }
 
 // Задача 6: Напишите обобщенную функцию, которая принимает массив и возвращает массив уникальных элементов.
 function uniqueArray(arr) {
   return Array.from(new Set(arr));
 }
 
 // Задача 7: Создайте обобщенную функцию, которая принимает массив и возвращает новый массив, где каждый элемент удваивается.
 function doubleArrayValues(arr) {
   return arr.map(x => x * 2);
 }
 
 // Задача 8: Напишите обобщенную функцию, которая принимает массив объектов и ключ, и сортирует массив по этому ключу.
 function sortArrayByKey(arr, key) {
   return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
 }
 
 // Задача 9: Создайте обобщенную функцию, которая принимает объект и массив ключей, и возвращает новый объект с этими ключами.
 function pickKeys(obj, keys) {
   let result = {};
   keys.forEach(key => {
     if (key in obj) {
       result[key] = obj[key];
     }
   });
   return result;
 }
 
 // Задача 10: Напишите обобщенную функцию, которая принимает массив объектов и ключ, и группирует объекты по этому ключу.
 function groupBy(arr, key) {
   return arr.reduce((result, item) => {
     let groupKey = item[key];
     if (!result[groupKey]) {
       result[groupKey] = [];
     }
     result[groupKey].push(item);
     return result;
   }, {});
 }
 