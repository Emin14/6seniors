// Тема: Флаги и дескрипторы свойств

// Задача 1:
// Создайте объект user с одним свойством name, равным "Иван". Запретите изменение этого свойства (сделайте его неизменяемым).

const user = {
   name: "Иван"
}

Object.defineProperty(user, 'name', {
   writable: false,
})

user.name = 'Frank'

console.log(user)

// Подсказка: Используйте метод Object.defineProperty.


// Задача 2:
// Создайте объект car с двумя свойствами: brand и model. Оба свойства должны быть перечисляемыми (их можно видеть при перечислении свойств объекта). Запретите удаление свойства model.

const car = {
   brand: 'bmw',
   model: 'x5'
}

Object.defineProperties(car, {
   brand: {

   },
   model: {
      configurable: false
   }
})

// Подсказка: Используйте флаги enumerable и configurable.


// Задача 3:
// Создайте объект book с единственным свойством title. Сделайте это свойство доступным только для чтения (нельзя изменить его значение после установки).

const book = {}

Object.defineProperty(book, 'title', {
   value: 'книга',
   configurable: true,
   enumerable: true
})

book.title = 'note'
console.log(book)

// Подсказка: Используйте флаг writable.


// Тема: Свойства — геттеры и сеттеры

// Задача 4:
// Создайте объект rectangle с двумя свойствами: width и height. Добавьте геттер area, который будет возвращать площадь прямоугольника (произведение ширины на высоту).

const rectangle = {
   width: 700,
   height: 200,
   get area() {
      return this.width * this.height
   }
}

console.log(rectangle.area)


// Задача 5:
// Создайте объект user, который содержит свойство _password. Добавьте сеттер для свойства password, который будет устанавливать значение только если оно длиннее 6 символов, и геттер, который всегда возвращает строку "******" вместо настоящего пароля.

const user2 = {
   _password: '12345',
   get password() {
      return "******"
   },
   set password(value) {
      if(value.length > 6) {
         this._password = value
      }
   }
}

console.log(user2.password)
user2.password = '5555555'
console.log(user2)


// Задача 6:
// Создайте объект person, который содержит свойство birthYear. Добавьте геттер для свойства age, который будет рассчитывать и возвращать возраст на основе текущего года (используйте объект Date для получения текущего года).

const person = {
   birthYear: '1991-1-31',
   get age() {
      const years = new Date().getFullYear() - new Date(this.birthYear).getFullYear()
      return years
   }
}

console.log(person.age)



// Дополнительные задачи:
// Задача 7:
// Создайте объект account, в котором есть свойство balance. Сделайте так, чтобы свойство balance можно было увеличивать и уменьшать через сеттер, но нельзя было напрямую получить его значение через геттер.

const account = {
   balance: 500,
   set newBalance(value) {
      this.balance = value
   },
   get newBalance() {
      // throw new Error('error!!!')
   }

}

account.newBalance = 1000
console.log(account)
console.log(account.newBalance)




// Задача 1: Защита от записи и глубокое копирование свойств
// Создайте объект library с несколькими книгами. Каждая книга должна иметь свойства title и author. Реализуйте метод, который позволяет добавлять книги, но запрещает изменение или удаление существующих книг. Книги должны быть защищены от изменения как на верхнем уровне, так и внутри объектов (глубокая защита).

const library = {
   book1: {
      title: 'Руслан и Людмила',
      author: 'Пушкин',
   },
   book2: {
      title: 'Мертвые душт',
      author: 'Гоголь',
   },
}

function protection(obj) {
   if(obj !== 'object') {
      return
   }
   Object.freeze(obj)
   for(let key in obj) {
      protection(obj[key])
   }
}

// Подсказка: Используйте Object.freeze() для защиты от изменений, а также рекурсивное замораживание для вложенных объектов.


