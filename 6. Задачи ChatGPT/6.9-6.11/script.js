// 1. Декораторы и переадресация вызова, call/apply
// Задача 1: Напишите функцию-декоратор logExecution, которая будет логировать каждый вызов декорируемой функции, включая её аргументы и возвращаемое значение. Используйте call или apply для переадресации вызова.

// Мое решение
function logExecution(func) {
  return (a, b) => {
    const result = func(a, b)
    console.log(`вызов с аргументами ${a, b}, возвращено ${result}`)
  }
}

// Правильное
function logExecution(func) {
  return (...args) => {
    const result = func(...args);
    console.log(`вызов с аргументами ${args}, возвращено ${result}`);
    return result;
  }
}


function multiply(a, b) {
  return a * b;
}

const loggedMultiply = logExecution(multiply);

console.log(loggedMultiply(2, 3)); // Лог: вызов с аргументами (2, 3), возвращено 6


// 2. Декораторы и переадресация вызова, call/apply
// Задача 2: Создайте функцию-декоратор retry, которая принимает исходную функцию и максимальное количество попыток вызова n. Если функция выбрасывает исключение, декоратор должен перезапустить функцию до тех пор, пока не достигнет лимита попыток. Используйте apply для передачи аргументов.


function retry (func, limit) {
  return(...args) => {
    let attempts = 0;
    while(attempts < limit) {
      try {
        return func.apply(this, args)
      } catch(error) {
        attempts++
        console.log(`Ошибка ${error.message}. Попытка запустить функцию ${attempts} из ${limit}`)
        if(attempts >= limit) {
          throw new Error('Не удалось запустить, попытки исчерпаны!')
        }
      }
    }
  }
}

function unreliableFunction() {
  if (Math.random() > 0.7) {
    return "Success!";
  } else {
    throw new Error("Failed!");
  }
}

const retryUnreliable = retry(unreliableFunction, 3);

try {
  console.log(retryUnreliable()); // Либо вернет "Success!", либо выбросит ошибку после 3 неудачных попыток
} catch (e) {
  console.log(e.message); // "Failed!"
}


// Задача 3: Напишите функцию-декоратор cacher, которая запоминает результаты вызова функции и возвращает сохранённый результат при повторном вызове с теми же аргументами. Используйте apply для передачи аргументов.


function slowFunction(x) {
  return x * x;
}

function cacher(func) {
  const cache = {}
  return(...arg) => {
    const key = JSON.stringify(arg)
    if(key in cache) {
      console.log('Из кэша:');
      return cache[key]
    }
    const result = func.apply(this, arg)
    cache[key] = result
    return result
  }
} 

const cachedFunction = cacher(slowFunction);

console.log(cachedFunction(2)); // Считает и возвращает 4
console.log(cachedFunction(2)); // Возвращает 4 из кеша


// Задача 4: Создайте объект user с методом getName, который возвращает имя пользователя. Напишите функцию delay, которая принимает функцию и задержку в миллисекундах, и возвращает новую функцию, которая будет выполнять исходную функцию с заданным контекстом через указанную задержку.


function delay(func, time, obj) {
  return(...args) => {
    setTimeout(() => {
      func.apply(obj, args)
    }, time)
  }
}

// Измененный вариант с промисом

function delay(func, time, obj) {
  return(...args) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = func.apply(obj, args)
        resolve(result)
      }, time)
    })
  }
}


let user = {
  name: "John",
  getName() {
    return this.name;
  }
};

let delayedGetName = delay(user.getName, 1000, user);

// console.log(delayedGetName()); // Через 1 секунду выведет "John"
console.log(delayedGetName().then(res => console.log(res))); // Через 1 секунду выведет "John"


// Задача 5: Напишите функцию partial, которая позволяет зафиксировать один или несколько аргументов функции. Проверьте работу с методами объекта и использованием bind для привязки контекста.

function partial(func, ...args) {
  return() => {
    func.bind(this, ...args)()
  }
}

function greet(greeting, name) {
  console.log(greeting + ", " + name);
}

const greetJohn = partial(greet, "Hello", "John");

greetJohn(); // Выведет "Hello, John"


// Задача 6: Создайте объект calculator с методами add(a, b) и subtract(a, b). Реализуйте функцию, которая принимает массив строк команд и выполняет соответствующие операции, используя методы объекта calculator. Функции методов должны быть привязаны к объекту.

function executeCommands(obj, commands) {
  const results = []
  for(let command of commands) {
    const result = obj[command.method].call(obj, ...command.args)
    results.push(result)
  }
  return results
}


const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

const commands = [
  { method: 'add', args: [1, 2] },
  { method: 'subtract', args: [5, 3] }
];

console.log(executeCommands(calculator, commands)); // Выведет [3, 2]


// Задача 7: Перепишите функцию, которая суммирует все элементы массива, на стрелочную функцию. Затем создайте функцию-декоратор doubleResult, которая удваивает результат исходной функции.


let sum = (arr) => arr.reduce((a, b) => a + b, 0);

function doubleResult(func) {
  return(args) => {
    const result = func.call(this, args)
    return result*2
  }
}

let doubledSum = doubleResult(sum);

console.log(doubledSum([1, 2, 3])); // Вернет 12 (сумма 6, удвоенная 12)

// Задача 8: Есть функция, которая принимает массив строк и возвращает новый массив, в котором все строки преобразованы в верхний регистр. Затем напишите декоратор prefix, который добавляет префикс к каждому элементу массива.


const toUpperCaseArray = arr => arr.map(str => str.toUpperCase());

function prefix(func, prefix) {
  return(...args) => {
    const result = func.apply(this, args)
    return result.map(item => prefix+item)
  }
}

const prefixedArray = prefix(toUpperCaseArray, "PREFIX_");

console.log(prefixedArray(["a", "b", "c"])); // ["PREFIX_A", "PREFIX_B", "PREFIX_C"]


// Задача 9: Есть стрелочная функция, которая принимает объект и возвращает его ключи в виде массива, отсортированного по длине строк ключей. Затем создайте функцию-декоратор reverseOrder, которая изменяет порядок элементов на противоположный.


const getObjectKeysSorted = obj => Object.keys(obj).sort((a, b) => a.length - b.length);

function reverseOrder(func) {
  return(arg) => {
    const result = func.call(this, arg)
    return result.reverse()
    
  }

}

const reversedKeys = reverseOrder(getObjectKeysSorted);

console.log(reversedKeys({ name: "John", age: 30, city: "New York" })); // ["city", "name", "age"]


// Задача 10: Есть стрелочная функцию, которая фильтрует массив чисел, оставляя только чётные. Затем создайте функцию-декоратор multiply, которая умножает все элементы результирующего массива на заданное число.

const filterEvenNumbers = arr => arr.filter(num => num % 2 === 0);

function multiply(func, arg) {
  return(args) => {
    console.log(args)
    const result = func.call(this, args)
    return result.map(item => item *arg )
  }
}

const multipliedNumbers = multiply(filterEvenNumbers, 2);
console.log(multipliedNumbers([1, 2, 3, 4])); // Вернет [4, 8]

