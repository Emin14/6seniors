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
    let shooter = function() { // функция shooter
      // alert( i ); // должна выводить порядковый номер
      console.log(j)
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.
// Почему у всех стрелков одинаковые номера?

// Почините код, чтобы он работал как задумано.
