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
alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1, 2
alert( 1 && null && 2 ); // null 
alert( alert(1) && alert(2) ); // 1, undefined
alert( null || 2 && 3 || 4 ); // 3

// Что выведет этот код (||=, &&=)?
let value = NaN;

value &&= 10; // 10
value ||= 20; // 20
value &&= 30; // 30
value ||= 40;// 40

alert(value);

!!!!!!!!!Перерешать

// Проверка значения из диапазона

// if(age <= 90 && age >= 14)


// Проверка значения вне диапазона
// if(!(age <= 90 && age >= 14))
// if (age < 14 || age > 90)


// Вопрос об "if"

// Какие из перечисленных ниже alert выполнятся?

// Какие конкретно значения будут результатами выражений в условиях if(...)?

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

