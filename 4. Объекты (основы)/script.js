// ============================== 4.1 Объекты ==============================

// ======= Задача: Привет, object =======

const user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

// ======= Задача: Проверка на пустоту =======

const isEmpty = (obj) => {
   for(let key in obj) {
      return false
   }
   return true
}

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

// ======= Задача: Объекты-константы? =======

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// Да, сам текущий объект изменить можно, а вот перезаписать на новый объект ли другой тип нельзя

// ======= Задача: Сумма свойств объекта =======

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const calcSalary = (obj) => {
   let summ = 0;
   for(let key in obj) {
      summ += obj[key]
   }
   return summ
}

console.log(calcSalary(salaries))

// ======= Задача: Умножаем все числовые свойства на  =======

let menu = {
   width: 200,
   height: 300,
   title: "My menu"
 };
 
const multiplyNumeric = (obj) => {
   for(let key in obj) {
      if(typeof obj[key] === 'number') {
         obj[key] *= 2
      }
   }
}

multiplyNumeric(menu);
console.log(menu)

// ============================== 4.4 Методы объекта, "this" ==============================

// ======= Задача: Использование "this" в литерале объекта  ======= Не до конца понял

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user2 = makeUser();

console.log(user2)

console.log( user2.ref.name); // Каким будет результат?

// будет undefined, так как user.ref это windows, а в глобальном контексте нету свойства name


// ======= Задача: Создайте калькулятор  =======

let calculator = {
   read(num1, num2) {

      this.num1 = +prompt('Введите 1 число');
      this.num2 = +prompt('Введите 2 число');
   },
   sum() {
      return this.num1 + this.num2
   },
   mul() {
      return this.num1 * this.num2
   }
};

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// ======= Задача: Цепь вызовов  ======= Тяжело было понять. посмотрел решение

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this
  }
};

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

// ============================== Конструктор, оператор "new" ==============================

// ======= Задача: Две функции - один объект
const obj = {}

function A() { 
   return obj 
}
function B() { 
   return obj 
}

let a = new A();
let b = new B();

console.log( a == b ); // true

// ======= Задача: Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {

   this.read = function(num1, num2) {
      this.num1 = +prompt('Введите 1 число');
      this.num2 = +prompt('Введите 2 число');
   },

   this.sum = function() {
      return this.num1 + this.num2
   },

   this.mul = function() {
      return this.num1 * this.num2
   }
}

let calculator2 = new Calculator();
calculator2.read();

// alert( "Sum=" + calculator2.sum() );
// alert( "Mul=" + calculator2.mul() );


// ======= Задача: Создайте new Accumulator
function Accumulator(startingValue) {
   this.value = +startingValue;

   this.read = function() {
      this.value += +prompt('введите число')
   }
}

let accumulator3 = new Accumulator(3); // начальное значение 1
accumulator3.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator3.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator3.value); // выведет сумму этих значений