// День 28: Продвинутые паттерны и архитектура в TypeScript

// Задача 1: Реализуйте Dependency Injection паттерн с использованием TypeScript и напишите класс с зависимостями.
class ServiceA {
   constructor() {
     // Конструктор
   }
 
   getName() {
     return 'ServiceA';
   }
 }
 
 class ServiceB {
   constructor(private serviceA) {
     // Конструктор
   }
 
   printServiceName() {
     console.log(this.serviceA.getName());
   }
 }
 
 // Задача 2: Создайте класс с использованием паттерна Singleton и типизируйте его.
 class Singleton {
   private static instance;
 
   private constructor() {
     // Приватный конструктор
   }
 
   static getInstance() {
     if (!Singleton.instance) {
       Singleton.instance = new Singleton();
     }
     return Singleton.instance;
   }
 }
 
 // Задача 3: Реализуйте паттерн Observer с использованием TypeScript и создайте класс для наблюдения за изменениями.
 class Observable {
   private observers = [];
 
   subscribe(observer) {
     this.observers.push(observer);
   }
 
   unsubscribe(observer) {
     this.observers = this.observers.filter(obs => obs !== observer);
   }
 
   notify(data) {
     this.observers.forEach(observer => observer.update(data));
   }
 }
 
 // Задача 4: Напишите класс с использованием паттерна Factory и типизируйте его.
 class Product {
   constructor(private name) {}
 
   getName() {
     return this.name;
   }
 }
 
 class ProductFactory {
   static createProduct(type) {
     if (type === 'A') {
       return new Product('ProductA');
     } else if (type === 'B') {
       return new Product('ProductB');
     }
   }
 }
 
 // Задача 5: Реализуйте паттерн Strategy и создайте классы для различных стратегий.
 class Context {
   constructor(private strategy) {}
 
   executeStrategy() {
     this.strategy.execute();
   }
 }
 
 class StrategyA {
   execute() {
     console.log('Executing Strategy A');
   }
 }
 
 class StrategyB {
   execute() {
     console.log('Executing Strategy B');
   }
 }
 
 // Задача 6: Напишите класс с использованием паттерна Adapter и типизируйте его.
 class OldSystem {
   doSomething() {
     console.log('Old system doing something');
   }
 }
 
 class NewSystem {
   doSomethingElse() {
     console.log('New system doing something else');
   }
 }
 
 class Adapter {
   constructor(private newSystem) {}
 
   adapt() {
     this.newSystem.doSomethingElse();
   }
 }
 
 // Задача 7: Создайте класс с использованием паттерна Facade и типизируйте его.
 class SubsystemA {
   operationA() {
     console.log('Subsystem A operation');
   }
 }
 
 class SubsystemB {
   operationB() {
     console.log('Subsystem B operation');
   }
 }
 
 class Facade {
   private subsystemA = new SubsystemA();
   private subsystemB = new SubsystemB();
 
   operation() {
     this.subsystemA.operationA();
     this.subsystemB.operationB();
   }
 }
 
 // Задача 8: Реализуйте паттерн Command и создайте команды для выполнения различных операций.
 class Command {
   execute() {}
 }
 
 class CommandA extends Command {
   execute() {
     console.log('Executing Command A');
   }
 }
 
 class CommandB extends Command {
   execute() {
     console.log('Executing Command B');
   }
 }
 
 class Invoker {
   private commands = [];
 
   addCommand(command) {
     this.commands.push(command);
   }
 
   executeCommands() {
     this.commands.forEach(command => command.execute());
   }
 }
 
 // Задача 9: Напишите класс с использованием паттерна Proxy и типизируйте его.
 class RealSubject {
   request() {
     console.log('RealSubject: Handling request.');
   }
 }
 
 class ProxySubject {
   private realSubject;
 
   constructor(realSubject) {
     this.realSubject = realSubject;
   }
 
   request() {
     if (this.checkAccess()) {
       this.realSubject.request();
       this.logAccess();
     }
   }
 
   checkAccess() {
     console.log('Proxy: Checking access prior to firing a real request.');
     return true;
   }
 
   logAccess() {
     console.log('Proxy: Logging the time of request.');
   }
 }
 
 // Задача 10: Реализуйте паттерн Builder и создайте класс для пошагового построения сложных объектов.
 class Product {
   private parts = [];
 
   addPart(part) {
     this.parts.push(part);
   }
 
   listParts() {
     console.log(`Product parts: ${this.parts.join(', ')}`);
   }
 }
 
 class Builder {
   private product = new Product();
 
   buildPartA() {
     this.product.addPart('PartA');
   }
 
   buildPartB() {
     this.product.addPart('PartB');
   }
 
   getResult() {
     return this.product;
   }
 }
 