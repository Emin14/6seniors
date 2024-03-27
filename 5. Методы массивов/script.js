// ============================== 5.1 Методы примитивов ==============================

// ======= Можно ли добавить свойство строке? =======

// let str = "Привет";

// str.test = 5;

// alert(str.test);

// Нет, не сработает. Выведется undefined


// ============================== 5.2 Числа ==============================

// ======= Сумма пользовательских чисел =======
// const count1 = +prompt('Введите 1 число')
// const count2 = +prompt('Введите 2 число')
// alert(count1 + count2)

// ======= Почему 6.35.toFixed(1) == 6.3? =======
// Посмотрел ответ

// Во внутреннем двоичном представлении 6.35 является бесконечной двоичной дробью. Хранится она с потерей точности…
// alert( Math.round(6.35 * 10) / 10 )

// ======= Ввод числового значения =======
// function readNumber() {
//    let entering = false
//    let answer;
//    while(!entering){
//       answer = prompt('Введите число')
//       console.log(answer)
//       if(!isNaN(+answer) || answer === null) {
//          entering = true
//       }
//    }
//    return answer
// }

// console.log(readNumber())

// ======= Бесконечный цикл по ошибке =======

// Из-за потери точности

// ======= Случайное число от min до max =======
// Неправильный ответ
// function random(min, max) {
//    let count
//    do {
//       count = Math.random() * max
//    } while(count <= min)
//    return Math.floor(count)
// }

// Посмотрел решение
// function random(min, max) {
//    return min + Math.random() * (max - min);
//  }

// console.log( random(1, 5) ); // 1.2345623452
// console.log( random(3, 5) ); // 3.7894332423
// console.log( random(2, 4) ); // 4.3435234525

// ======= Случайное целое число от min до max =======
// function randomInteger(min, max) {
//    return Math.floor((min + Math.random() * (max-min)))
// }

// console.log( randomInteger(1, 5) ); // 1
// console.log( randomInteger(1, 5) ); // 3
// console.log( randomInteger(1, 5) ); // 5

// ============================== 5.3 Строки ==============================

// ======= Сделать первый символ заглавным =======

// function ucFirst(str) {
//    const result = `${str[0].toUpperCase()}${str.slice(1)}`
//    return result
// }
// console.log(ucFirst("вася"))

// ======= Проверка на спам =======
// function checkSpam(str) {
//    const censorship = ['viagra', 'XXX'].join(' ').toUpperCase().split(' ')
//    for(let value of censorship) {
//       if(str.toUpperCase().includes(value)) {
//          return true
//       }
//    }
//    return false
// }

// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam("innocent rabbit"))

// ======= Усечение строки =======
// function truncate(str, maxlength) {
//    if(str.length > maxlength) {
//       str = `${str.slice(0, maxlength-1)}...`
//    }
//    return str
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
// console.log(truncate("Всем привет!", 20))

// ======= Выделить число =======
// function extractCurrencyValue(str) {
//    const index$ = str.indexOf('$')
//    const result = str.slice(index$+1)
//    return +result
// }

// console.log(extractCurrencyValue('$120'))
