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







// 4. Цепочка вызовов с разными операциями
// Напишите функцию chain(value) с методами add(n), subtract(n), multiply(n) и divide(n), которая поддерживает цепочку вызовов. Пример: chain(5).add(2).multiply(3).subtract(4).divide(2) должно вернуть 9.

function chain(value) {
  return {
    add(n) {
      value += n;
      return this;
    },
    subtract(n) {
      value -= n;
      return this;
    },
    multiply(n) {
      value *= n;
      return this;
    },
    divide(n) {
      value /= n;
      return this;
    },
    valueOf() { // Этот метод позволяет вернуть значение, когда объект используется как примитив
      return value;
    }
  };
}

// Пример использования:
console.log(chain(5).add(2).multiply(3).subtract(4).divide(2).valueOf()); // 9



// Рекурсивное сложение с условием
// Напишите функцию addUntil(sum) которая принимает число и возвращает новую функцию, которая будет складывать переданные значения до тех пор, пока их сумма не превысит sum. После этого функция должна возвращать конечное значение суммы.

function addUntil(sum) {
  let value = 0
  return function counter(a) {
    
    if(value + a <= sum) {
      return value += a
    }
    else {
      return value
    }
  }
}

const ada = addUntil(6)

console.log(ada(2))
console.log(ada(2))
console.log(ada(2))
console.log(ada(2))



// Задание суммы с динамическим количеством параметров
// Напишите функцию dynamicSum(), которая может принимать любое количество чисел через цепочку вызовов, но возвращает результат, только когда вызывается без параметров. Пример: dynamicSum(1)(2)(3)() должно вернуть 6.
function dynamicSum(a) {
  let sum = a;

  return function counter(b) {
    if (arguments.length === 0) {  // Если функция вызвана без аргументов
      return sum;
    }
    sum += b;
    return counter;
  }
}

console.log(dynamicSum(1)(2)(3)()); // 6



// Ограниченная цепочка вызовов
// Создайте функцию limitCalls(fn, maxCalls), которая возвращает новую функцию, которая может быть вызвана только maxCalls раз. После этого она должна возвращать undefined.

function limitCalls(fn, maxCalls) {
  let calls = 0;

  return function(...args) {
    if (calls < maxCalls) {
      calls++;
      return fn(...args);
    } else {
      return undefined;
    }
  };
}

// Пример использования:
function sayHello(name) {
  return `Hello, ${name}!`;
}

const limitedSayHello = limitCalls(sayHello, 3);

console.log(limitedSayHello("Alice")); // "Hello, Alice!"
console.log(limitedSayHello("Bob"));   // "Hello, Bob!"
console.log(limitedSayHello("Charlie")); // "Hello, Charlie!"
console.log(limitedSayHello("David"));  // undefined




// 1. Рекурсивное умножение
// Напишите функцию multiplyUntil(limit), которая принимает число и возвращает новую функцию, которая будет перемножать переданные значения до тех пор, пока их произведение не превысит limit. После этого функция должна возвращать конечное произведение.

function multiplyUntil(limit) {
  let multiplicationSum = 1;

  function f(a) {
    if (multiplicationSum * a <= limit) {
      multiplicationSum *= a;
      return f;
    } else {
      return multiplicationSum;
    }
  }

  // Примитивное значение возвращается, если функция больше не может быть вызвана.
  f.valueOf = function() {
    return multiplicationSum;
  };

  return f;
}

console.log(multiplyUntil(100)(2)(5)(3).valueOf()); // 30
console.log(multiplyUntil(50)(2)(4)(10)); // 40


function example() {
  return "I'm a function";
}

example.valueOf = function() {
  return 42;
};

console.log(example + 10); // 52


// 2. Условная цепочка вызовов
// Напишите функцию conditionalChain(value), которая имеет методы ifPositive(fn), ifNegative(fn), и ifZero(fn). Эти методы вызывают переданную функцию только если текущее значение положительное, отрицательное или равно нулю соответственно.

conditionalChain(5).ifPositive(() => console.log('positive')).ifNegative(() => console.log('negative'));
conditionalChain(-3).ifNegative(() => console.log('negative')).ifPositive(() => console.log('positive'));


function conditionalChain(value) {

    return {
      ifPositive(fn) {
        if(value > 0) {
          fn()
        }
        return this
      },
      ifNegative(fn) {
        if(value < 0) {
          fn()
        }
        return this
      },
      ifZero(fn) {
        if(value === 0) {
          fn()
        }
        return this
      },
      
    }
}


// Сумма с задержкой в цепочке вызовов
// Напишите функцию delayedChain(value), которая возвращает объект с методами add(n) и delay(ms). Метод delay(ms) откладывает выполнение следующей операции на указанное количество миллисекунд.

delayedChain(1).add(2).delay(1000).add(3); // Выводит 6 через 1 секунду


function delayedChain(value) {
  return {
    add(n) {
      value += n
      return this
    },
    delay(ms) {
      setTimeout(() => {
        console.log(value)
      }, ms)
      return this
    },
  }
}



// Прогрессивное уменьшение
// Создайте функцию progressiveDecrease(value, step), которая возвращает объект с методами decrease(), уменьшающими значение на step при каждом вызове, пока значение не достигнет нуля. После этого каждый вызов decrease() должен возвращать ноль.


function progressiveDecrease(value, step) {
  return {
    decrease() {
      if(value - step > 0) {
        value -= step
        return value
      }
      else {
        return 0
      }
    }
  }
}


let counter5 = progressiveDecrease(10, 2);
console.log(counter5.decrease()); // 8
console.log(counter5.decrease()); // 6
console.log(counter5.decrease()); // 4
console.log(counter5.decrease()); // 2
console.log(counter5.decrease()); // 0
console.log(counter5.decrease()); // 0



// 5. Максимальная сумма с отслеживанием вызовов
// Напишите функцию maxSum(count, maxSumValue), которая принимает максимальное количество вызовов и максимальную сумму. Возвращаемая функция должна складывать переданные значения до тех пор, пока не будет достигнут лимит вызовов или лимит суммы.


function maxSum(count, maxSumValue) {
  let value = 0
  let calls = 0
  return (number) => {
    calls++
    if(value + number < maxSumValue && calls < count) {
      value += number
    }
    return value
  }
}

let sum2 = maxSum(3, 10);
console.log(sum2(3)); // 3
console.log(sum2(4)); // 7
console.log(sum2(5)); // 7 (так как лимит суммы превышен)
console.log(sum2(2)); // 7 (так как лимит вызовов превышен)


// 6. Рекурсивное вычисление с условием завершения
// Напишите функцию computeUntil(conditionFn), которая принимает условную функцию и возвращает новую функцию, которая вызывает себя рекурсивно до тех пор, пока условие не выполнится.

function computeUntil(conditionFn) {
  return function recursiveFn(actionFn) {
    if(!conditionFn()) {
      actionFn()
      recursiveFn(actionFn)
    }
  }
}

let counter6 = 0;
let compute = computeUntil(() => counter6 >= 10);
compute(() => counter6++);
console.log(counter6); // 10



// 7. Переключатель значений
// Создайте функцию toggle(initialValue, values), которая возвращает функцию, переключающую значение между указанными в values. Если значение достигло конца списка, оно должно вернуться к началу.

function toggle(initialValue, values) {
  let findIndex = values.indexOf(initialValue)
  return () => {
    if(findIndex !== values.length - 1) {
      findIndex++
    }
    else {
      findIndex = 0
    }
    return values[findIndex]
  }
}


let toggle2 = toggle(0, [0, 1, 2]);
console.log(toggle2()); // 1
console.log(toggle2()); // 2
console.log(toggle2()); // 0
console.log(toggle2()); // 1



// Прогрессивное суммирование с установкой начального значения
// Напишите функцию progressiveSum(initialValue), которая возвращает объект с методами add(n) и reset(value). Метод reset(value) устанавливает новое начальное значение, от которого начинается последующее суммирование.

function progressiveSum(initialValue) {
  return {
    add(n) {
      return initialValue +=n
    },
    reset(value) {
      initialValue = value
      return initialValue
    }
  }
}


let sum3 = progressiveSum(5);
console.log(sum3.add(3)); // 8
sum3.reset(10);
console.log(sum3.add(2)); // 12



// Ограниченная цепочка вызовов с состоянием
// Создайте функцию statefulChain(initialState), которая возвращает объект с методами add(value), subtract(value) и getState(). Эти методы должны изменять внутреннее состояние и позволять получить его текущее значение через метод getState().

function statefulChain(initialState) {
  return {
    add(n) {
      initialState += n
      return this
    },
    subtract(n) {
      initialState -= n
      return this
    },
    getState(n) {
      return initialState
    }
  }
}

let chain2 = statefulChain(0);
chain2.add(5).subtract(3);
console.log(chain2.getState()); // 2



// Динамическое вычисление со сбросом
// Напишите функцию dynamicCalculator(initialValue), которая возвращает объект с методами add(n), subtract(n), multiply(n), divide(n) и reset(value). Метод reset(value) должен сбрасывать текущее значение калькулятора.


function dynamicCalculator(initialValue) {
  return {
    add(n) {
      initialValue += n
      return this
    },
    subtract(n) {
      initialValue -= n
      return this
    },
    multiply(n) {
      initialValue *= n
      return this
    },
    divide(n) {
      initialValue /= n
      return this
    },
    reset(n) {
      initialValue = n
      return this
    },
    valueOf() {
      return initialValue
    }
  }
}


let calc = dynamicCalculator(10);
calc.add(5).subtract(2).multiply(3);
console.log(calc); // 39
calc.reset(100);
calc.divide(2);
console.log(calc); // 50


// Функция с кэшированием (мемоизация)
// Напишите функцию memoize(fn), которая принимает другую функцию fn и возвращает новую функцию, которая кэширует результаты вызова fn. Если функция fn вызывается с теми же аргументами, кэшированная функция должна вернуть результат из кэша вместо повторного выполнения fn.

function memoize(fn) {
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    if(cache.has(key)) {
      return cache.get(key)
    }
    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}
function slowFunction(n) {
  console.log('Выполняется функция...');
  return n * 2;
}

const memoizedFn = memoize(slowFunction);
console.log(memoizedFn(5)); // Выполняется функция... 10
console.log(memoizedFn(5)); // 10 (из кэша)


// Умножение с динамическим количеством параметров
// Напишите функцию dynamicMultiply(), которая может принимать любое количество чисел через цепочку вызовов, но возвращает результат умножения только когда вызывается без параметров. Пример: dynamicMultiply(2)(3)(4)() должно вернуть 24.

function dynamicMultiply(a) {
  return function fn(b) {
    if (b === undefined) {
      return a;
    } else {
      a *= b;
      return fn;
    }
  };
}


console.log(dynamicMultiply(2)(3)(4)()); // Ожидаемый результат: 24
console.log(dynamicMultiply(5)(-1)(2)()); // Ожидаемый результат: -10


// Переход через промежуточные состояния
// Напишите функцию stateMachine(initialState), которая возвращает объект с методами transition(newState), позволяющим переходить в новый состояние, и getState(), возвращающим текущее состояние.

function stateMachine(initialState) {
  return {
    transition(newState) {
      initialState = newState
      return this
    },
    getState() {
      return initialState
    }
  }
}


let sm = stateMachine('state1');
sm.transition('state2').transition('state3');
console.log(sm.getState()); // 'state3'


// Функция с ограничением вызовов по времени
// Создайте функцию throttle(fn, time), которая возвращает новую функцию, которая может быть вызвана только один раз в течение указанного времени time в миллисекундах. Повторные вызовы функции в течение этого времени должны быть проигнорированы.


function throttle(fn, time) {
  let isThrottled = false

  return (...args) => {
    if(!isThrottled) {
      fn(...args)
      isThrottled = true

      setTimeout(() => {
        isThrottled = false
      }, time)
    }
  }
}

const throttledFn = throttle(() => console.log('Called!'), 1000);

throttledFn(); // Ожидаемый результат: 'Called!'
throttledFn(); // Ожидаемый результат: ничего (если вызвано в пределах 1 секунды)
setTimeout(throttledFn, 1100); // Ожидаемый результат: 'Called!' (через 1.1 секунды)


// Функция с сохранением промежуточных значений
// Создайте функцию accumulator(initialValue), которая возвращает объект с методами add(value), subtract(value), и getHistory(). Метод getHistory() должен возвращать массив всех промежуточных значений, полученных после вызовов add и subtract.


function accumulator(initialValue) {
  const result = [initialValue]
  
  return {
    add(value) {
      initialValue += value
      result.push(initialValue)
    },
    subtract(value) {
      initialValue -= value
      result.push(initialValue)
    },
    getHistory() {
      return result
    }
  }
}


let acc = accumulator(10);
acc.add(5);
acc.subtract(3);
console.log(acc.getHistory()); // Ожидаемый результат: [10, 15, 12]
