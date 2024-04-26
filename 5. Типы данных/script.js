// ============================== 5.1 Методы примитивов ==============================

// ======= Можно ли добавить свойство строке? =======

let str = "Привет";

str.test = 5;

alert(str.test);

// Нет, не сработает. Выведется undefined


// ============================== 5.2 Числа ==============================

// ======= Сумма пользовательских чисел =======
const count1 = +prompt('Введите 1 число')
const count2 = +prompt('Введите 2 число')
alert(count1 + count2)

// ======= Почему 6.35.toFixed(1) == 6.3? =======

// Во внутреннем двоичном представлении 6.35 является бесконечной двоичной дробью. Хранится она с потерей точности…
console.log( Math.round(6.35 * 10) / 10 )

// ======= Ввод числового значения =======
function readNumber() {
   let entering = false
   let answer;
   while(!entering){
      answer = prompt('Введите число')
      console.log(answer)
      if(!isNaN(+answer) || answer === null) {
         entering = true
      }
   }
   return answer
}

console.log(readNumber())

// ======= Бесконечный цикл по ошибке =======

// Из-за потери точности

// ======= Случайное число от min до max =======
// Неправильный ответ
function random(min, max) {
   let count
   do {
      count = Math.random() * max
   } while(count <= min)
   return Math.floor(count)
}

// Посмотрел решение
function random(min, max) {
   return min + Math.random() * (max - min);
 }

console.log( random(1, 5) ); // 1.2345623452
console.log( random(3, 5) ); // 3.7894332423
console.log( random(2, 4) ); // 4.3435234525

// ======= Случайное целое число от min до max =======
function randomInteger(min, max) {
   return Math.floor((min + Math.random() * (max-min)))
}

console.log( randomInteger(1, 5) ); // 1
console.log( randomInteger(1, 5) ); // 3
console.log( randomInteger(1, 5) ); // 5

// ============================== 5.3 Строки ==============================

// ======= Сделать первый символ заглавным =======

function ucFirst(str) {
   const result = `${str[0].toUpperCase()}${str.slice(1)}`
   return result
}
console.log(ucFirst("вася"))

// ======= Проверка на спам =======
function checkSpam(str) {
   const censorship = ['viagra', 'XXX'].join(' ').toUpperCase().split(' ')
   for(let value of censorship) {
      if(str.toUpperCase().includes(value)) {
         return true
      }
   }
   return false
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))

// ======= Усечение строки =======
function truncate(str, maxlength) {
   if(str.length > maxlength) {
      str = `${str.slice(0, maxlength-1)}...`
   }
   return str
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
console.log(truncate("Всем привет!", 20))

// ======= Выделить число =======
function extractCurrencyValue(str) {
   const index$ = str.indexOf('$')
   const result = str.slice(index$+1)
   return +result
}

console.log(extractCurrencyValue('$120'))


// ============================== 5.4 Массивы ==============================

// ======= Скопирован ли массив? =======

console.log( fruits.length ) // 4

// ======= Операции с массивами =======

const styles = ['Jazz', 'Blues']

styles.push('Rock and roll')

console.log(styles)

styles[Math.floor(styles.length / 2)] = 'Classical'

console.log(styles)

const firstElement = styles.shift()

console.log(styles)

console.log(firstElement)

styles.unshift('Rap', 'Reggae')

console.log(styles)


// ======= Вызов в контексте массива =======

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

console.log(arr)

arr = ["a", "b", function() {alert( this )}]

arr[2](); // ? this === "a", "b", function() {alert( this )}

// ======= Сумма введённых чисел =======

function sumInput() {
   const result = []

   while(true) {
      const value = prompt('введите число')
      if(value === '' || value === null || !isFinite(value)) {
         break
      }
      result.push(+value)
   }

   const sum = result.reduce((accum, item) => accum + item, 0)
   return sum
}

console.log(sumInput())

// ======= Подмассив наибольшей суммы =======


const arr4 = [1, -2, 3, 4, -9, 6]


function getMaxSubSum(arr) {

}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9])) 
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2])) 
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))

// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.


// ============================== 5.5 Методы массивов ==============================

// ======= Переведите текст вида border-left-width в borderLeftWidth =======

// Сделал так:
function camelize(str) {
   const result = []
   strSplit = str.split('-')
   for (let i = 0; i < strSplit.length; i++) {
      if(i === 0) {
         result.push(strSplit[i])
      }

      else {
         let word = strSplit[i].split('')
         const firsLetter = word[0].toUpperCase();
         word.shift()
         word.unshift(firsLetter)
         word = word.join('')
         result.push(word)
      }
   }
   return result.join('')
}

// А можно было так:
function camelize(str) {
   return str.split('-')
   .map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1))
   .join('')
}

console.log(camelize("background-color")) 
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

// ======= Фильтрация по диапазону =======

let arr9 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
   return arr.filter(item => item >= a & item <= b)
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)
console.log( arr9 ); // 5,3,8,1 (без изменений)


// ======= Фильтрация по диапазону "на месте" =======. Почему без i-- все работает также. Посмотрел ответ

function filterRangeInPlace(arr, a, b) {

   for (let i = 0; i < arr.length; i++) {
     let val = arr[i];
      console.log(val)
     // удалить, если за пределами интервала
     if (val < a || val > b) {
       arr.splice(i, 1);
       i--;
     }
   }
 }

filterRangeInPlace(arr6, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr6 ); // [3, 1]


// ======= Сортировать в порядке по убыванию =======
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b-a)
console.log( arr2 ); // 8, 5, 2, 1, -10

// ======= Скопировать и отсортировать массив =======

function copySorted(arr) {
   return arr.slice().sort()
}

let arr3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr3);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr3 ); // HTML, JavaScript, CSS (без изменений)


// ======= Создать расширяемый калькулятор ======= <Были трудности, посмотрел решение>
function Calculator(str) {
  this.metode =  {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  }
 this.calculate = function calculate (str) {
    const array = str.split(' ')
    const value1 = +array[0]
    const operator = array[1]
    const value2 = +array[2]
    return this.metode[operator](value1, value2)
}

  this.addMethod = function addMethod (name, func) {
    this.metode[name] = func
  }
}

let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

// ======= Трансформировать в массив имён =======
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)

console.log( names ); // Вася, Петя, Маша

// ======= Трансформировать в объекты =======

let usersMapped = users.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id}))

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин


// ======= Отсортировать пользователей по возрасту =======

let arr7 = [ vasya, petya, masha ];

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age)
}

sortByAge(arr7);

// теперь: [vasya, masha, petya]
console.log(arr7[0].name); // Вася
console.log(arr7[1].name); // Маша
console.log(arr7[2].name); // Петя

// ======= Перемешайте массив =======

function shuffle(array) {
  const max = array.length - 1
  const result = []

  array.forEach((__, index) => {
    while(index < array.length) {
      const random = Math.floor((Math.random() * (max + 1)))
      if(!result[random]) {
        result[random] = array[index]
        break
      }
    }
  })
  return result
}

// Реализация в учебнике
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i+1));
//     [array[i], array[j]] =  [array[j], array[i]];
//   }
//   return array
// }

let arr5 = [1, 2, 3];
console.log(shuffle(arr5));
console.log(shuffle(arr5));
console.log(shuffle(arr5));

// ======= Получить средний возраст =======

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr6 = [ vasya2, petya2, masha2 ];

function getAverageAge(users) {
  const totalAge = users.reduce((accum, item) => accum + item.age,0)
  return totalAge/users.length
}
console.log( getAverageAge(arr6) ); // (25 + 30 + 29) / 3 = 28


// ======= Оставить уникальные элементы массива =======

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
  const result = [];
  arr.forEach(item => {
    if(!result.includes(item)) {
      result.push(item)
    }
  })
  return result
}

console.log( unique(strings) ); // кришна, харе, :-O

// ======= Создайте объект с ключами из массива =======

let users3 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
  const result = arr.reduce((accum, item) => {
    accum[item.id] = item
    return accum
  }, {})
  return result
}

let usersById = groupById(users3);
console.log(usersById)

// ============================== 5.7 Перебираемые объекты ==============================

// ======= Фильтрация уникальных элементов массива =======

function unique(arr) {
  return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O

// ======= Отфильтруйте анаграммы =======

function aclean(arr) {
  const map = new Map()
  for(let word of arr) {
    const sorted = word.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('')
    map.set(sorted, word)
  }
  return Array.from(map.values())
}

let arr8 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr8) ); // "nap,teachers,ear" или "PAN,cheaters,era"


// ======= Перебираемые ключи =======

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys())

keys.push("more");

console.log(keys)

// ============================== 5.8 WeakMap и WeakSet ==============================

// ======= Хранение отметок "не прочитано" =======

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let unreadMessages = new WeakSet();
unreadMessages.add(messages[0])
unreadMessages.add(messages[1])
unreadMessages.add(messages[0])

console.log(unreadMessages)
console.log(unreadMessages.has(messages[0]))


// ======= Хранение времени прочтения =======

let messages2 = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
readMap.set(messages[1], new Date(2018, 1, 1));

console.log(readMap)


// ============================== 5.9 Object.keys, values, entries ==============================

// ======= Сумма свойств объекта =======

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  let summ = 0
  for(const salary of Object.values(salaries)) {
    summ += salary
  }
  return summ
}

console.log( sumSalaries(salaries) ); // 650

// ======= Подсчёт количества свойств объекта =======

let user = {
  name: 'John',
  age: 30
};

function count(obj) {
  return Object.keys(obj).length
}

console.log( count(user) ); // 2


