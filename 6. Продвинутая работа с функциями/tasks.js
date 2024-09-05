// setPower() принимает число от 1 до 10, устанавливает мощность нагрева (по умолчанию мощность 5)

// setTimeLeft() принимает число от 0 до 90, устанавливает время в секундах сколько будет идти нагрев. То есть если осталось 5 секунд до остановки работы, changeTime(30) должен сделать 30 сек, а если потом сделать changeTime(0) то это должно остановить тостер. Установка значения в положительное запускает таймер на это время, установка назад в 0 останавливает и само вызывает ejectBread(). Если мы поставим время на 10 сек, через 10 сек тостер должен выключиться

// insertBread() кладет хлеб в тостер - но нельзя положить хлеб в тостер если там уже есть хлеб

// ejectBread() изъять хлеб из тостера, также метод может быть вызван автоматически при нагреве

// logStat() выводит всю информацию о тостере - мощность, время нагрева, есть ли сейчас нагрев, есть ли хлеб внутри, сколько уже хлеб греется времени, сколько мощности ушло на хлебушек

// logPower() вывести сколько мощности ушло на хлеб за время его работы (например 20 сек работали с мощностью 5, а потом 10 сек работали с мощностью 3 - получится 20 * 5 + 10 * 3 = 130). Нужна как общая сумма за все запуски так и сумма за последний. при ejectBread() или insertBread() - то есть когда у нас новый хлебушек вставился - счетчик обнуляется

// код должан правильно работать с точки зрения того что я могу вызвать любой метод в любое время и получить правильный результат. Например я могу увеличить мощность во время рабоыт тостера или установить время в 40 сек, а через 20 сек установить время на 10 сек. Суммарное время работы должно быть 30 сек в этом случае, а не. 40 тк я поменял время а тостер не прекращал работу.
// Код должен работать так что я могу действовать нерационально нелогично вызывая разные методы но все равно все будет работать каким либо образом и выводить достоверные логи


class Toster {
   constructor() {
      this.power = 0
      this.isInToaster = false
      this.heatingTime = 0
      this.heatingTimer = 0
      this.timer = 0
      this.powerTimer = 0
      this.totalPower = 0
      this.totalPowerSum = []
   }

   setPower(power=5) {
      if(power > 0 && power <= 10) {

         const lastTime = this.timer - this.powerTimer
         
         if(this.isInToaster) {
            this.powerTimer = this.timer
            this.totalPowerSum.push({
               timer: lastTime,
               power: this.power,
            })
         }
         this.power = power
      }
      return this
   }

   setTimeLeft(second) {
      if(second >= 0 && second <= 90) {
         this.heatingTime = second
         this.insertBread()
         const idTimer = setInterval(() => {
            this.timer++
            const timer = this.powerTimer || this.timer
            this.totalPower = this.power * timer
            if((this.heatingTime - this.timer) < 1) {
               this.ejectBread()
               clearInterval(idTimer)
            }
         }, 1000);
      }
      return this
   }

   changeTime(time) {
      if(time > 0 && time <=90 ) {
         this.heatingTime += time
      }
      if(time === 0) {
         this.ejectBread()
         clearInterval(idTimer)
      }
      return this
   }
   insertBread() {
      if(!this.isInToaster) {
         this.totalPowerSum = []
         this.isInToaster = true
         this.totalPower = 0
         this.totalPowerSum = []
      }
      return this
   }

   ejectBread() {
      if(this.isInToaster) {
         const lastTime = this.timer - this.powerTimer
         this.totalPowerSum.push({
            timer: lastTime,
            power: this.power,
         })
         this.isInToaster = false
         this.heatingTime = 0
         this.timer = 0
         this.power = 0
         this.powerTimer = 0
      }
      return this
   }

   logStat() {
      console.log('мощность', this.power);
      console.log('время нагрева:', this.heatingTime);
      console.log('есть ли сейчас нагрев:', !!this.heatingTime);
      console.log('есть ли хлеб внутри:', this.isInToaster);
      console.log('сколько уже хлеб греется времени:', this.timer, 'секунд');
      console.log('употребляемая мощность:', this.totalPower);
      console.log('------------')
      return this
   }

   logPower() {
      const summ = this.totalPowerSum.reduce((accum, item) => accum += item.timer * item.power, 0) || this.totalPower
      console.log('употребляемая мощность в сумме:', summ);
      console.log('------------')
      return this
   }
}


const toster1 = new Toster()

toster1.setPower(7).setTimeLeft(20)

setTimeout(() => {
   toster1.setPower(10)
}, 3000)

setTimeout(() => {
   toster1.setPower(9).logStat().logPower()
}, 5000)

setTimeout(() => {
   toster1.setPower(8).logStat().logPower()
}, 7000)

setTimeout(() => {
   toster1.logStat()
   toster1.logPower()
}, 10000)

