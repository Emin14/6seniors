const obj1 = {one: 1, two: 2, three: 3}

obj1[Symbol.iterator] = function() {
   let keys = Object.keys(this)
   let index = 0
   return {
      next: () => {
         if(index < keys.length) {
            console.log(index)
            const result = {done: false, value: this[keys[index]]}
            index++
            return result
         }
         else {
            return {done: true}
         }

      }
   }
}

const [one, two, three] = obj1

const obj = {
   4: 'data'
}

console.log(obj)
// console.log(one)
// console.log(two)
// console.log(three)

for(let value of obj1) {
   console.log(value)
}


const obj2 = {
   name: 'ObjectName',
   getName: function() {
       const innerFunc = function() {
           console.log('Inner this:', this);  // Для диагностики
           const arrowFunc = () => {
               console.log('Arrow this:', this);  // Для диагностики
               console.log(this.name);
           };
           arrowFunc();
       };
       innerFunc();
   }
};

const anotherObj = {
   name: 'AnotherObjectName'
};

obj2.getName.call(anotherObj);

