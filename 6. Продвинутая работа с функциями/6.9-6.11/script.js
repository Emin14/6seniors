// ============================== Декораторы и переадресация вызова, call/apply ==============================

// ======= Декоратор-шпион =======

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
 
 
// ======= Задерживающий декоратор =======
 
 
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
 
 
 
// ======= Декоратор debounce =======
 
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
 
 
 
// ============================== Привязка контекста к функции ==============================
 
// ======= Связанная функция как метод =======
 
 function f3() {
   console.log( this ); // ? Выведет null
 }
 
 let user3 = {
   g: f3.bind(null)
 };
 
 user3.g();
 
 // Почему тут window?????????????????????????????????
 
 
// ======= Повторный bind =======
 
// Можем ли мы изменить this дополнительным связыванием?
 
 function f4() {
   console.log(this.name);
 }
 
 f4 = f4.bind( {name: "Вася"} ).bind( {name: "Петя" } );
 
 f4(); // 'Вася'
 
 
// ======= Свойство функции после bind =======
 
// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
 
 function sayHi3() {
   console.log( this.name );
 }
 sayHi3.test = 5;
 
 let bound = sayHi3.bind({
   name: "Вася"
 });
 
 console.log( bound.test ); // Да, изменится, выведет ошибку так как свойство test есть у sayHi3, а не у bound. А если точнее из учебника: undefined. Результатом работы bind является другой объект. У него уже нет свойства test.
 
 
// ======= Исправьте функцию, теряющую "this" =======
 
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
 
// ======= Использование частично применённой функции для логина =======
 
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
 