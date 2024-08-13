// // ============================== Рекурсия ==============================
// Задача 1: Подсчет количества сотрудников
// Считаем количество сотрудников в компании.

let company = {
    sales: [{
      name: 'John',
    }, {
      name: 'Alice',
    }],
  
    development: {
      sites: [{
        name: 'Peter',
      }, {
        name: 'Alex',
      }],
  
      internals: [{
        name: 'Jack',
      }]
    }
  };
  
  function countEmployees(arg) {
    if(Array.isArray(arg)) {
        return arg.reduce((accum, item) => item.name ? ++accum : accum, 0)
    }
    else {
        let count = 0
        for(let value of Object.values(arg)) {
            count += countEmployees(value)
        }
        return count
    }
  }
  
  console.log(countEmployees(company));
  
  
  
  // Задача 4: Поиск максимальной зарплаты
  // Ищем максимальную зарплату среди всех сотрудников компании.
  
  let company4 = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };
  
  function findMaxSalary(arg) {
    if(Array.isArray(arg)) {
        return arg.reduce((accum, item) => item.salary > accum ? item.salary : accum, 0)
    }
    else {
        let salaryes = []
        for(let value of Object.values(arg)) {
            salaryes.push(findMaxSalary(value))
        }
        return Math.max(...salaryes)
    }
  }
  
  console.log(findMaxSalary(company4));
  
  
  // Задача 5: Подсчет суммы чисел в структуре
  // Вычисляем сумму всех чисел в произвольной структуре данных.
  
  
  let data = {
    a: 1,
    b: [2, 3, {d: 4, e: [5, 6]}],
    c: {f: 7, g: {h: 8, i: 9}}
  };
  
  function sumNumbers(arg) {
    if(typeof arg === "number") {
        return arg
    }
    else {
        let count = 0;
        for(let value of Object.values(arg)) {
            count += sumNumbers(value)
        }
        return count
    }
  }
  
  console.log(sumNumbers(data));
  
  // Задача 6: Подсчет общей стоимости книг в библиотеке
  // Есть библиотека с книгами, у каждой книги есть стоимость. Необходимо посчитать общую стоимость всех книг.
  
  
  let library = {
    fiction: [{
      title: 'Book1',
      price: 500
    }, {
      title: 'Book2',
      price: 300
    }],
  
    nonFiction: {
      history: [{
        title: 'Book3',
        price: 700
      }, {
        title: 'Book4',
        price: 600
      }],
  
      science: [{
        title: 'Book5',
        price: 800
      }]
    }
  };
  
  function calcTotalPrice(arg) {
    if(Array.isArray(arg)) {
        return arg.reduce((accum, item) => item.price ?  accum += item.price : accum, 0)
    }
    else {
        let totalPrices = 0
        for(let value of Object.values(arg)) {
            totalPrices += calcTotalPrice(value)
        }
        return totalPrices
    }
  }
  
  console.log(calcTotalPrice(library));
  
  // Задача 7: Поиск самого длинного слова в тексте
  // Есть объект, представляющий текст, разбитый на абзацы и предложения. Нужно найти самое длинное слово.
  
  
  let text = {
    paragraph1: [
      "This is the first sentence.",
      "Here is another one."
    ],
    paragraph2: {
      subParagraph1: [
        "Yet another sentence here.",
        "And here is the longestwordindeed."
      ],
      subParagraph2: [
        "Short one.",
        "Another short sentence."
      ]
    }
  };
  
  function findLongestWord(arg) {
    if(Array.isArray(arg)) {
        return arg.join(' ').split(' ').reduce((accum, item) => item.length > accum.length ? item : accum, '')
    }
    else {
        let words = []
        for(let value of Object.values(arg)) {
            words.push(findLongestWord(value))
        }
        console.log(words)
        return words.reduce((accum, item) => item.length > accum.length ? item : accum, '')
    }
  }
  
  console.log(findLongestWord(text));

// // ============================== Замыкание ==============================


//   Задача 1: Счётчик
// Создайте функцию makeCounter, которая возвращает другую функцию, которая считает количество вызовов и выводит это число.


function makeCounter() {
  let count = 0
  return () => {
    return ++count
  }
}

let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Задача 2: Счётчик с начальным значением
// Расширьте предыдущую задачу, чтобы можно было передавать начальное значение счётчика.

function makeCounter2(start) {
  return () => {
    return ++start
  }
}

let counter2 = makeCounter2(5);
console.log(counter2()); // 6
console.log(counter2()); // 7
console.log(counter2()); // 8

// Задача 3: Генератор случайных чисел
// Создайте функцию makeRandomGenerator, которая возвращает функцию, генерирующую случайные числа от 0 до заданного максимума.


function makeRandomGenerator(max) {
  return () => {
    return Math.floor(Math.random(0, max) * max)
  }
}

let random = makeRandomGenerator(15);
console.log(random()); // случайное число от 0 до 100
console.log(random()); // случайное число от 0 до 100

// Задача 4: Запоминание предыдущих значений
// Создайте функцию rememberValues, которая возвращает функцию, запоминающую все переданные ей значения и возвращающую их массив.


function rememberValues() {
    const arr = []
  return (arg) => {
    arr.push(arg)
    return arr
  }
}

let remember = rememberValues();
console.log(remember(1)); // [1]
console.log(remember(2)); // [1, 2]
console.log(remember(3)); // [1, 2, 3]

// Задача 5: Таймер
// Создайте функцию makeTimer, которая возвращает функцию, выводящую время, прошедшее с момента создания.


function makeTimer() {
    let timeFirstCreate = new Date()
    return () => {
        let timeSecondCreate = new Date()
        const difference = Math.round((timeSecondCreate-timeFirstCreate)/1000)
        console.log(difference)
        return timeFirstCreate-timeSecondCreate
    }
}

let timer = makeTimer();
// setTimeout(() => timer(), 1000); // Примерно 1 секунда
// setTimeout(() => timer(), 2000); // Примерно 2 секунды

// Задача 6: Ограниченный вызов функции
// Создайте функцию limitCalls, которая принимает другую функцию и возвращает новую функцию, которая может быть вызвана только заданное количество раз.


function limitCalls(fn, limit) {
    let count = 0
    return () => {
        if(count < limit) {
            count++
            fn()
          }
    }
}

let limitedFn = limitCalls(() => console.log("Called!"), 3);
limitedFn(); // "Called!"
limitedFn(); // "Called!"
limitedFn(); // "Called!"
limitedFn(); // ничего не происходит

// Задача 7: Доступ к приватной переменной
// Создайте функцию makeSecretHolder, которая возвращает объект с методами setSecret и getSecret, позволяющими устанавливать и получать секретное значение.


function makeSecretHolder(secret) {
    let secretValue = secret
    return {
        getSecret() {
            return secretValue
        },
        setSecret(arg) {
            secretValue = arg
            return secretValue
        }
    }
}

let holder = makeSecretHolder(123);
console.log(holder.getSecret()); // 123
console.log(holder.setSecret(456));
console.log(holder.getSecret()); // 456


// Задача 8: Кэширование результатов функции
// Создайте функцию cacheFunction, которая принимает другую функцию и возвращает новую функцию, которая кэширует результаты вызовов с одинаковыми аргументами.


function cacheFunction(fn) {
  const obj = {}
  return (arg) => {
    if(obj[arg]) {
        return obj[arg]
    }
    else {
        obj[arg] = fn(arg)
        return obj[arg]
    }
  }
}

let cachedFn = cacheFunction((x) => x * 2);
console.log(cachedFn(2)); // 4
console.log(cachedFn(2)); // 4, результат взят из кэша

// Задача 9: Сумматор с замыканием
// Создайте функцию makeAdder, которая возвращает другую функцию, которая добавляет заданное число к своему аргументу.

function makeAdder(a) {
  return (b) => {
    return a + b
  }
}

let add5 = makeAdder(5);
console.log(add5(2)); // 7
console.log(add5(3)); // 8

// Задача 10: Преобразование строки
// Создайте функцию makeStringTransformer, которая возвращает другую функцию, которая применяет заданную строковую функцию к своему аргументу.


function makeStringTransformer(transformFn) {
    return (word) => {
        return transformFn(word)
    }
}

let toUpperCase = makeStringTransformer((str) => str.toUpperCase());
console.log(toUpperCase("hello")); // "HELLO"
console.log(toUpperCase("world")); // "WORLD"
  



// https://leetcode.com/problems/generate-parentheses/description/
function generateParenthesis(n) {
  const result = []; // Массив для хранения всех правильных комбинаций

  function backtrack(current, open, close) {
      // Если длина текущей комбинации равна 2 * n, значит все скобки использованы
      if (current.length === n * 2) {
          result.push(current); // Добавляем комбинацию в результат
          return; // Возвращаемся, так как больше скобок добавить нельзя
      }

      // Если можно добавить открытую скобку, добавляем её
      if (open > 0) {
          backtrack(current + '(', open - 1, close);
      }

      // Если можно добавить закрывающую скобку, добавляем её
      if (close > open) {
          backtrack(current + ')', open, close - 1);
      }
  }

  // Запускаем рекурсию с пустой строкой и n парами открытых и закрытых скобок
  backtrack('', n, n);
  return result; // Возвращаем все найденные комбинации
}


console.log(generateParenthesis(3))