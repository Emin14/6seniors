// День 26: Обработка сложных данных и сериализация

// Задача 1: Напишите функцию для сериализации сложного объекта в JSON и типизируйте её.
function serializeToJson(obj) {
   return JSON.stringify(obj);
 }
 
 // Задача 2: Создайте функцию для десериализации JSON в объект и типизируйте её.
 function deserializeFromJson(jsonString) {
   return JSON.parse(jsonString);
 }
 
 // Задача 3: Напишите функцию для глубокого копирования объекта и типизируйте её.
 function deepClone(obj) {
   return JSON.parse(JSON.stringify(obj));
 }
 
 // Задача 4: Создайте функцию для объединения двух объектов и типизируйте её.
 function mergeObjects(obj1, obj2) {
   return { ...obj1, ...obj2 };
 }
 
 // Задача 5: Напишите функцию для фильтрации массива объектов по значению ключа и типизируйте её.
 function filterArrayByKey(arr, key, value) {
   return arr.filter(item => item[key] === value);
 }
 
 // Задача 6: Создайте функцию для проверки валидности структуры данных (например, соответствие интерфейсу) и типизируйте её.
 function validateStructure(obj, structure) {
   return Object.keys(structure).every(key => key in obj);
 }
 
 // Задача 7: Напишите функцию для трансформации объекта, изменяя его ключи, и типизируйте её.
 function transformObjectKeys(obj, transformFunc) {
   let result = {};
   Object.keys(obj).forEach(key => {
     result[transformFunc(key)] = obj[key];
   });
   return result;
 }
 
 // Задача 8: Создайте функцию для нормализации данных (например, приведение всех строк к нижнему регистру) и типизируйте её.
 function normalizeData(data) {
   if (typeof data === 'string') {
     return data.toLowerCase();
   }
   return data;
 }
 
 // Задача 9: Напишите функцию для проверки глубокого равенства двух объектов и типизируйте её.
 function deepEqual(obj1, obj2) {
   return JSON.stringify(obj1) === JSON.stringify(obj2);
 }
 
 // Задача 10: Создайте функцию для агрегации данных из массива объектов по ключу и типизируйте её.
 function aggregateByKey(arr, key) {
   return arr.reduce((acc, obj) => {
     acc[obj[key]] = (acc[obj[key]] || 0) + 1;
     return acc;
   }, {});
 }

 