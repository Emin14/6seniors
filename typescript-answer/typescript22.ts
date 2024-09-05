// День 22: Карты, множества и типизация сложных структур данных

// Задача 1: Создайте Map для хранения пар ключ-значение (например, ID пользователя и объект пользователя) и типизируйте его.
const userMap = new Map();

// Задача 2: Напишите функцию для добавления пользователя в Map и типизируйте её.
function addUser(userMap, id, user) {
  userMap.set(id, user);
}

// Задача 3: Создайте Set для хранения уникальных значений (например, ID пользователей) и типизируйте его.
const userIds = new Set();

// Задача 4: Напишите функцию для добавления ID пользователя в Set и типизируйте её.
function addUserId(userIds, id) {
  userIds.add(id);
}

// Задача 5: Создайте Map для хранения счетчиков событий и типизируйте его.
const eventCounters = new Map();

// Задача 6: Напишите функцию для увеличения счетчика события в Map и типизируйте её.
function incrementEventCounter(eventCounters, event) {
  let count = eventCounters.get(event) || 0;
  eventCounters.set(event, count + 1);
}

// Задача 7: Создайте функцию для фильтрации объектов в Map по значению и типизируйте её.
function filterUsers(userMap, predicate) {
  let result = new Map();
  userMap.forEach((value, key) => {
    if (predicate(value)) {
      result.set(key, value);
    }
  });
  return result;
}

// Задача 8: Напишите функцию для объединения двух Set и типизируйте её.
function unionSets(setA, setB) {
  return new Set([...setA, ...setB]);
}

// Задача 9: Создайте функцию для пересечения двух Set и типизируйте её.
function intersectSets(setA, setB) {
  return new Set([...setA].filter(x => setB.has(x)));
}

// Задача 10: Напишите функцию для создания Map, где ключами будут строки, а значениями — массивы объектов, и типизируйте её.
function createGroupedMap(arr, key) {
  let map = new Map();
  arr.forEach(item => {
    let groupKey = item[key];
    if (!map.has(groupKey)) {
      map.set(groupKey, []);
    }
    map.get(groupKey).push(item);
  });
  return map;
}
