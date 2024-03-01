// ======= 2.4 Переменные =======

// Работа с переменными
let admin
let name
name = "Джон"
admin = name
admin = name
// alert(admin)

// Придумайте правильные имена
let planetName;
let currentUser;

// Какие буквы (заглавные или строчные) использовать для имён констант?
const BIRTHDAY = '18.04.1982'; // Нужно использовать заглавные буквы так как значение заранее нам известно.
// const age = someCode(birthday); Нужно использовать строчные буквы так как значение вычисляется по мере выполнения программы.

// ======= 2.5 Типы данных =======

// Шаблонные строки

let name2 = "Ilya";

// alert( `hello ${1}` ); // 'hello 1'

// alert( `hello ${"name"}` ); // 'hello name'

// alert( `hello ${name2}` ); // 'hello Ilya'

// ======= 2.6 Взаимодействие: alert, prompt, confirm =======

// Простая страница
// const answer = prompt('Как вас зовут?') 
// alert(answer)


// ======= 2.8 Базовые операторы, математика =======

// Постфиксная и префиксная формы
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
console.log(a); // 2
console.log(b); // 2

// Результат присваивания
let a2 = 2;
let x = 1 + (a2 *= 2);
// a2 = 4
// x = 5

// Преобразование типов
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NAN
"  -9  " + 5 // ' -9 5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // Nan
" \t \n" - 2 // -2

// Исправьте сложение
// let a3 = prompt("Первое число?", 1);
// let b3 = prompt("Второе число?", 2);
// alert(+a3 + +b3);

// ======= 2.9 Операторы сравнения =======

// Операторы сравнения
5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

// ======= 2.10 Условное ветвление: if, '?' =======

// if (строка с нулём)
if ("0") {
   // alert( 'Привет' );
 } // да, выведется

//  Название JavaScript
// const answer2 = prompt('Какое «официальное» название JavaScript?')
// if(answer2 === "ECMAScript") {
//   alert( 'Верно!' );
// } else {
//    alert( 'Не знаете? ECMAScript!' );
// } 

// Покажите знак числа
// const answer3 = prompt('Введите число')
// let count;
// if(+answer3 > 0) {
//    count = 1;
// } else if(+answer3 < 0) {
//    count = -1;
// } else {
//    count = 0;
// }

// alert(count)


// Перепишите 'if' в '?'
let result = (a + b < 4) ? 'Мало' : 'Много'


// Перепишите 'if..else' в '?'
// let message = login == 'Сотрудник' ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина': ''


// ======= 2.11 Логические операторы =======

// Что выведет alert ?
// alert( null || 2 || undefined ); // 2
// alert( alert(1) || 2 || alert(3) ); // 1, 2
// alert( 1 && null && 2 ); // null 
// alert( alert(1) && alert(2) ); // 1, undefined
// alert( null || 2 && 3 || 4 ); // 3

// Что выведет этот код (||=, &&=)?
let value = NaN;

value &&= 10; // NaN
value ||= 20; // 20
value &&= 30; // 30
value ||= 40; // 30

// alert(value);


// Проверка значения из диапазона
// if(age <= 90 && age >= 14)


// Проверка значения вне диапазона
// if(!(age <= 90 && age >= 14))
// if (age < 14 || age > 90)


// Вопрос об "if"
// if (-1 || 0) alert( 'first' ); // -1
// if (-1 && 0) alert( 'second' ); // 0
// if (null || -1 && 1) alert( 'third' ); // 1


// Проверка логина
// const userName = promt('Напишите ваш логин')

// if(userName === 'Админ') {
//   const password = promt('Напишите пароль')

//     if(password === 'Я главный') {
//       alert('Здравствуйте')
//     }
//     else if (password === '' || password === null) {
//       alert('Отменено')
//     }
//     else {
//       alert('Неверный пароль')
//     }

// } else if (userName === '' || userName === null) {
//   alert('Отменено')
// } else {
//   alert('Я вас не знаю')
// }

// ======= 2.13 Циклы while и for =======

// Последнее значение цикла
// let i = 3;

// while (i) {
//   alert( i-- );
// }
// Последним выведет 1. Далее i будет равен нулю и условие будет неверно.


// Какие значения выведет цикл while?


// Префиксный вариант ++i:

// let i = 0;
// while (++i < 5) alert( i ); // 1, 2, 3, 4


// Постфиксный вариант i++

// let m = 0;
// while (m++ < 5) alert( m ); // 0, 1, 2, 3, 4

// Ответ не сошелся и не понял почему


// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.


// Постфиксная форма:
// for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4


// Префиксная форма:
// for (let i = 0; i < 5; ++i) alert( i ); 

// Выведите чётные числа
// for(let i=2; i <= 10; i++) {
//   if(i % 2 === 0) {
//     alert( i )
//   }
// }

// Замените for на while
// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++
// }

// Повторять цикл, пока ввод неверен
// do {
//   prompt('Введите число больше 100')
// } while(count <= 100 || count !== null)

// Можно ли так написать

// Вывести простые числа

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.

// let n = 10
// while(n > 0) {
//   --n;
//   if(n / )
// }

// for(let i = n; i > 0; i--) {
//   for(let k = i; i > 0; k--) {

//   }
// }


// let n = 10;

// nextPrime:
// for (let i = n; i > 0; i--) { // Для всех i...

//   for (let j = i-1; i > 0; j--) { // проверить, делится ли число..
//     console.log('i'+ '' + i)
//     console.log('j'+ '' + j)
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }

// let n = 20;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое 
// }

// Не с первого раза онял. Перерешать

// ======= 2.14 Конструкция "switch" =======

// Напишите "if", аналогичный "switch"
// if(browser === 'Edge') {
//   alert( "You've got the Edge!" );
// } else if(browser === 'Chrome' || browser === 'Firefox' ||browser === 'Safari' ||browser === 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch(number) {
//   case(0):
//     alert('Вы ввели число 0');
//     break;
//   case(1):
//     alert('Вы ввели число 1');
//     break;
//   case(2):
//   case(3):
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

// ======= 2.15 Функции =======

// Обязателен ли "else"?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
// Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

// Нет, будет работать одинаково, так как если происходит выполнение условия if, то происходит возврат return и далее код не читается


// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?')
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

function min(a, b) {
  return a < b ? a : b
}

// Функция pow(x,n)
function pow(x, n) {
  if(n < 1) {
    return
  }
  return x **n
}

let x2 = prompt("введите x?");
let n = prompt("введите n?");

if(n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x2, n) );
}

// ======= 2.17 Стрелочные функции, основы =======

// Перепишите с использованием функции-стрелки
const ask = (question, yes, no) => confirm(question) ? yes() : no()

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);