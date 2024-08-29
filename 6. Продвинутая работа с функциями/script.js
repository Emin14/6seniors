// // ============================== Рекурсия и стек ==============================

// // ======= Вычислить сумму чисел до данного =======

// // Сделайте три варианта решения:

// function sumTo(n) {
//    let result = 0
//    for(let i = n; i > 0; i--) {
//       result += i
//    }
//    return result
//  }

// function sumTo(n) {
//    if(n === 1) {
//       return 1
//    }
//    return (n + sumTo(n-1))
// }

// function sumTo(n) {
//    return n * (n + 1) / 2;
//  }
 
// console.log( sumTo(100) ); // 5050

// // ======= Вычислить факториал =======

// function factorial(n) {
//    if(n === 1 ) {
//       return 1
//    }
//    return n * factorial(n-1)
// }

// console.log( factorial(5) ); // 120

// // ======= Числа Фибоначчи =======


// // Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// // Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....


// function fib(n) {
//    if(n <= 2) {
//       return 1
//    }
//    return fib(n-1) + fib(n-2)
// }

// function fib(n) {
//    let a = 1;
//    let b = 1;
//    for (let i = 3; i <= n; i++) {
//      let c = a + b;
//      a = b;
//      b = c;
//    }
//    return b;
//  }
 


// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757


// // ======= Вывод односвязного списка =======

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//    console.log(list.value)
//    if(list.next) {
//       printList(list.next)
//    }
// }

// function printList(list) {
//    let tmp = list
//    while(tmp) {
//       console.log(tmp.value)
//       tmp = tmp.next
//    }
// }

// printList(list)


// // ======= Вывод односвязного списка в обратном порядке =======

// let list2 = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//    if(list.next) {
//       printList(list.next)
//    }
//    console.log(list.value)
// }

// function printList(list) {
//    const result = [] 
//    let tmp = list
//    while(tmp) {
//       result.push(tmp.value)
//       tmp = tmp.next
//    }
//    for(i = result.length-1; i >= 0; i --) {
//       console.log(result[i])
//    }
// }


// printList(list2)

// ============================== Область видимости переменных, замыкание ==============================

// ======= Какие переменные доступны? =======

function makeWorker() {
  let name = "Pete";

  return function() {
   console.log(name);
  };
}

let name = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // что будет показано?
// Будет показано "Pete"


// ======= Независимы ли счётчики? =======

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1

// Да, они независимы

// ======= Объект счётчика =======

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter3 = new Counter();

console.log( counter3.up() ); 1
console.log( counter3.up() ); 2
console.log( counter3.down() ); 1


// ======= Функция внутри if =======

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
   console.log(`${phrase}, ${user}`);
  }
}

sayHi();

// Ошибка, так как мы не имеем доступ к этой функции

// ======= Сумма с помощью замыканий =======

function sum(a) {
   return function(b) {
      return a + b
   }
}

console.log(sum(1)(2)) 
console.log(sum(5)(-1))

// ======= Видна ли переменная? =======

let x = 1;

function func() {
//   console.log(x); // ?

  let x = 2;
}

func(); 
// Выведет 1
// Решил неправильно, посмотрел ответ.

// ======= Фильтрация с помощью функции =======

const inBetween = (a, b) => {
   return function(count) {
      return count >= a && count <= b
   }
}

const inArray = (arr) => {
   return function(count) {
      return arr.includes(count)
   }
}


// /* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


// ======= Сортировать по полю =======

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

function byField(arg) {
  return function (a, b) {
    return a[arg] > b[arg] ? 1 : -1
  }
}

users.sort(byField('name'));
users.sort(byField('age'));

console.log(users)

// ======= Армия функций =======


// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    const j = i
    let shooter = function() { 
      console.log(j)
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();


army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.



// // ============================== Объект функции, NFE ==============================

// // ======= Установка и уменьшение значения счётчика =======

// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

function makeCounter2() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}


const counter4 = makeCounter2()

console.log(counter4.set(10))
console.log(counter4.decrease())
console.log(counter4.decrease())
console.log(counter4.set(20))
console.log(counter4.decrease())
console.log(counter4.decrease())
console.log(counter4())
console.log(counter4())

// // ======= Сумма с произвольным количеством скобок =======

// Напишите функцию sum, которая бы работала следующим образом:

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

console.log( sum(1)(2).toString() ); // 3
console.log( sum(5)(-1)(2).toString() ); // 6
console.log( sum(6)(-1)(-2)(-3).toString() ); // 0
console.log( sum(0)(1)(2)(3)(4)(5).toString() ); // 15



// // ============================== Планирование: setTimeout и setInterval ==============================

// // ======= Вывод каждую секунду =======
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Используя setInterval.

function printNumbers(from, to) {
  const id = setInterval(() => {
    console.log(from)
    from++
    if(from > to) {
      clearInterval(id)
    }
  }, 1000)
}

// Используя рекурсивный setTimeout.
// function printNumbers(from, to) {
//   setTimeout(function recursion() {
//     if(from <= to) {
//       console.log(from)
//       from++
//       setTimeout(recursion, 1000)
//     }
//   }, 1000)
// }


// printNumbers(2, 9)


// ======= Что покажет setTimeout? =======
// Когда будет выполнена запланированная функция?
// Что покажет alert?

let i = 0;

// setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 1000000000; j++) {
//   i++;
// }

// После цикла.
// alert 1000000000 покажет


// // ============================== Декораторы и переадресация вызова, call/apply ==============================

// // ======= Декоратор-шпион =======
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.


function work2(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

// Мое решение:
function spy(func) {
  return function wrapper(...arg) {
    if(!wrapper.calls) {
      wrapper.calls = []
    }
    wrapper.calls.push(arg)
    return func(...arg)
  }
}

// Решение с учебника:
function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

work2 = spy(work2);

work2(1, 2); // 3
work2(4, 5); // 9
console.log(work2.calls)

for (let args of work2.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}


// // ======= Задерживающий декоратор =======


// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  console.log(x);
}

function delay(f, ms) {
  return (...args) => {
    setTimeout(() => {
      return f.apply(this, args)
    }, ms)
  }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс



// // ======= Декоратор debounce =======

// Мое решение:
function debounce(f, ms) {
  let idSetTimeout
  return(...args)=> {
    clearTimeout(idSetTimeout)
    idSetTimeout = setTimeout(() => {
      f(...args)
    }, ms)
  }
}

function consoleLog(a, b) {
  console.log(a, b)
}

// // Решение в учебнике
// function debounce(func, ms) {
//   let timeout;
//   return function() {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, arguments), ms);
//   };
// }

const fdeb = debounce(consoleLog, 3000)

fdeb(4, 5);
setTimeout( () => fdeb(6, 4), 200);
setTimeout( () => fdeb(3, 3), 2000);


// ======= Тормозящий (throttling) декоратор =======

// function throttle(f, ms) {
//   let lastTime = Date.now()
//   return (...args) => {
//     const nowTime = Date.now()
//     if(nowTime - lastTime > ms) {
//       lastTime = nowTime
//       f(...args)
//     }
//   }
// }


// Решение после просмотра решения в учебнике:
function throttle(f, ms) {
  let isThrottled = false
  let savedArgs;
  let savedThis;

  return function wrapper(...args) {
    if(isThrottled) {
      savedThis = this
      savedArgs = args
      return
    }

    f.apply(this, args)
    isThrottled = true

    setTimeout(() => {
      isThrottled = false
      if(savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedThis = null
        savedArgs = null
      }
    }, ms)
  }
}


function f4(a) {
  console.log(a)
}

// f1200 передаёт вызовы f максимум раз в 1200 мс
let f1200 = throttle(f4, 1200);



f1200(1); // показывает 1
f1200(2); // (ограничение, 1200 мс ещё нет)
f1200(3); // (ограничение, 1200 мс ещё нет)
setTimeout( () => f1200(4), 700);
f1200(4); // (ограничение, 1200 мс ещё нет)
f1200(9); // (ограничение, 1200 мс ещё нет)
// setTimeout( () => f1200(6), 1400);
f1200(10); // (ограничение, 1200 мс ещё нет)





// // ============================== Привязка контекста к функции ==============================

// // ======= Связанная функция как метод =======

function f3() {
  console.log( this ); // ? Выведет null
}

let user3 = {
  g: f3.bind(null)
};

user3.g();

// Почему тут window?????????????????????????????????????????????????????


// // ======= Повторный bind =======

// Можем ли мы изменить this дополнительным связыванием?

function f4() {
  console.log(this.name);
}

f4 = f4.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f4(); // 'Вася'


// // ======= Свойство функции после bind =======

// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi3() {
  console.log( this.name );
}
sayHi3.test = 5;

let bound = sayHi3.bind({
  name: "Вася"
});

console.log( bound.test ); // Да, изменится, выведет ошибку так как свойство test есть у sayHi3, а не у bound. А если точнее из учебника: undefined. Результатом работы bind является другой объект. У него уже нет свойства test.


// // ======= Исправьте функцию, теряющую "this" =======

// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// // ======= Использование частично применённой функции для логина =======

// Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword2(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user6 = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword2(user6.login.bind(user6, true), user6.login.bind(user6, false)); 
