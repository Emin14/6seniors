const ada = {
   a: 1
}

const b = 'hh'

function Fnc() {
   this.b = 'hh'
}

console.log(ada)
console.log(ada.__proto__)


console.log(String.__proto__)
console.log(Array.prototype.__proto__)

console.log(Fnc)
console.log(Fnc.prototype)

const ads = new Fnc()

console.dir(Function)
console.dir(String)
