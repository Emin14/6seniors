const user3 = {
   name: 'Ivan'
}

function getName() {
   return this.name
}


function customCall(fn, obj, ...args) {
   obj._tempFunction = fn
   const result = obj._tempFunction(...args)
   delete obj._tempFunction
   return result
}

function customApply(fn, obj, ...args) {
   obj._tempFunction = fn
   const result = obj._tempFunction(...args)
   delete obj._tempFunction
   return result
}

function customBind(fn, obj) {
   return (...args) => {
      obj._tempFunction = fn
      const result = obj._tempFunction(...args)
      delete obj._tempFunction
      return result
   }
}

console.log(customCall(getName, user3))
const fn5 = customBind(getName, user3)
console.log(fn5())