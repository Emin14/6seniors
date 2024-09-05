// День 29: Типизация сложных взаимодействий между модулями

// Задача 1: Напишите типизированную функцию для взаимодействия между двумя модулями с использованием интерфейсов.
interface User {
   id: number;
   name: string;
 }
 
 interface UserService {
   getUserById(id: number): User;
   getAllUsers(): User[];
 }
 
 class UserModule implements UserService {
   private users: User[] = [
     { id: 1, name: 'John Doe' },
     { id: 2, name: 'Jane Doe' }
   ];
 
   getUserById(id: number): User {
     return this.users.find(user => user.id === id);
   }
 
   getAllUsers(): User[] {
     return this.users;
   }
 }
 
 // Задача 2: Создайте интерфейс для взаимодействия между двумя модулями и реализуйте его.
 interface Logger {
   log(message: string): void;
 }
 
 class ConsoleLogger implements Logger {
   log(message: string): void {
     console.log(`Log: ${message}`);
   }
 }
 
 // Задача 3: Напишите функцию, которая принимает зависимости (модули) и типизируйте её.
 function initializeApp(userService: UserService, logger: Logger) {
   const user = userService.getUserById(1);
   if (user) {
     logger.log(`User found: ${user.name}`);
   } else {
     logger.log('User not found');
   }
 }
 
 // Задача 4: Создайте модуль, который импортирует и использует другой модуль, и типизируйте его.
 class App {
   private userService: UserService;
   private logger: Logger;
 
   constructor(userService: UserService, logger: Logger) {
     this.userService = userService;
     this.logger = logger;
   }
 
   run() {
     const users = this.userService.getAllUsers();
     users.forEach(user => this.logger.log(`User: ${user.name}`));
   }
 }
 
 // Задача 5: Напишите интерфейс для определения API другого модуля и реализуйте его в нескольких модулях.
 interface PaymentService {
   processPayment(amount: number): boolean;
 }
 
 class PayPalService implements PaymentService {
   processPayment(amount: number): boolean {
     console.log(`Processing payment of ${amount} via PayPal`);
     return true;
   }
 }
 
 class StripeService implements PaymentService {
   processPayment(amount: number): boolean {
     console.log(`Processing payment of ${amount} via Stripe`);
     return true;
   }
 }
 
 // Задача 6: Создайте функцию для работы с несколькими модулями, которые реализуют один интерфейс, и типизируйте её.
 function processPayments(payments: PaymentService[], amount: number) {
   payments.forEach(service => service.processPayment(amount));
 }
 
 // Задача 7: Напишите модуль, который зависит от другого модуля, и типизируйте взаимодействие между ними.
 class OrderService {
   constructor(private paymentService: PaymentService) {}
 
   createOrder(amount: number) {
     const paymentProcessed = this.paymentService.processPayment(amount);
     if (paymentProcessed) {
       console.log('Order created successfully');
     } else {
       console.log('Order creation failed');
     }
   }
 }
 
 // Задача 8: Создайте модуль, который экспортирует данные и типизируйте их, чтобы другой модуль мог их использовать.
 const config = {
   apiEndpoint: 'https://api.example.com',
   apiKey: '1234567890'
 };
 
 export default config;
 
 // Задача 9: Напишите типизированную функцию для взаимодействия между несколькими модулями с передачей данных.
 function performTransaction(amount: number, paymentService: PaymentService, logger: Logger) {
   if (paymentService.processPayment(amount)) {
     logger.log('Transaction successful');
   } else {
     logger.log('Transaction failed');
   }
 }
 
 // Задача 10: Создайте интерфейсы и модули для сложного приложения, типизируя взаимодействия между ними.
 interface ProductService {
   getProductById(id: number): Product;
 }
 
 class Product
 