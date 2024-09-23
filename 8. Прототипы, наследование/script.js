// ======================= Тема: Прототипное наследование ======================

// ======= Задача: Работа с прототипами =======

let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // ? (true)

delete rabbit.jumps;

console.log( rabbit.jumps ); // ? (null)

delete animal.jumps;

console.log( rabbit.jumps ); // ? (undefined)


// ======= Задача: Алгоритм поиска =======

// Задача состоит из двух частей. У нас есть объекты:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

pockets.__proto__ = bed
bed.__proto__ = table
table.__proto__ = head


console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log( table.money ); // undefined

// ======= Задача: Куда будет произведена запись? =======

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal2 = {
  eat() {
    this.full = true;
  }
};

let rabbit2 = {
  __proto__: animal2
};

rabbit2.eat();

// свойство full при вызове rabbit.eat() получит объект rabbit


// ======= Задача: Почему наедаются оба хомяка? =======


// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
//   stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
   stomach: [],
  __proto__: hamster
};

let lazy = {
   stomach: [],
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple

// Убрать у объекта hamster  свойство stomach, а speedy и lazy добавить наоборот stomach


// ======================= Тема: F.prototype ======================

// ======= Задача: Изменяем "prototype" =======

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit3 = new Rabbit();

console.log( rabbit3.eats ); // true


// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit4 = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit4.eats ); // ? true



// …А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit5 = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit5.eats ); // ? false



// Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit6 = new Rabbit();

delete rabbit6.eats;

console.log( rabbit6.eats ); // ? true


// Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit7 = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit7.eats ); // ? undefined


// ======= Задача: Создайте новый объект с помощью уже существующего =======

// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

let obj2 = new obj.constructor();

// Да, можем


// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

// Некоррекно сработает сли мы перезаписали у функции конструктора Prototype


// ======================= Тема: Встроенные прототипы ======================

// ======= Задача: Добавить функциям метод "f.defer(ms)" =======

// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:

Function.prototype.defer = function(ms) {
  setTimeout(this, ms)
}

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду


// ======= Задача: Добавьте функциям декорирующий метод "defer()" =======

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:

// Мое решение
Function.prototype.defer = function(ms) {
  return (...args) => {
    setTimeout(() => {
      return this(...args)
    }, ms)
  }
}

// Решение Learn JS
Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};


function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
