const numbers = [1, 7, 8, 5, 5 , 2, 9, 3, 8, 7, 20, 21, 20]

function deleteDublicate(arr) {
   const map = new Map
   for(const number of arr) {
      if(!map.has(number)) {
         map.set(number, true)
      }
   }
   return map.keys()
}

console.log(deleteDublicate(numbers))