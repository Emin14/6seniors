// ============================== Рекурсия и стек ==============================

// ======= Вычислить сумму чисел до данного =======

// Сделайте три варианта решения:

function sumTo(n) {
   let result = 0
   for(let i = n; i > 0; i--) {
      result += i
   }
   return result
 }

function sumTo(n) {
   if(n === 1) {
      return 1
   }
   return (n + sumTo(n-1))
}

function sumTo(n) {
   return n * (n + 1) / 2;
 }
 
console.log( sumTo(100) ); // 5050

// ======= Вычислить факториал =======

function factorial(n) {
   if(n === 1 ) {
      return 1
   }
   return n * factorial(n-1)
}

console.log( factorial(5) ); // 120

// ======= Числа Фибоначчи =======


// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....


function fib(n) {
   if(n <= 2) {
      return 1
   }
   return fib(n-1) + fib(n-2)
}

function fib(n) {
   let a = 1;
   let b = 1;
   for (let i = 3; i <= n; i++) {
     let c = a + b;
     a = b;
     b = c;
   }
   return b;
 }
 


console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757


// ======= Вывод односвязного списка =======

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
   console.log(list.value)
   if(list.next) {
      printList(list.next)
   }
}

function printList(list) {
   let tmp = list
   while(tmp) {
      console.log(tmp.value)
      tmp = tmp.next
   }
}

printList(list)


// ======= Вывод односвязного списка в обратном порядке =======

let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
   if(list.next) {
      printList(list.next)
   }
   console.log(list.value)
}

function printList(list) {
   const result = [] 
   let tmp = list
   while(tmp) {
      result.push(tmp.value)
      tmp = tmp.next
   }
   for(i = result.length-1; i >= 0; i --) {
      console.log(result[i])
   }
}


printList(list2)
