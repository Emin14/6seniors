// День 30: Оптимизация и лучшие практики в TypeScript

// Задача 1: Оптимизируйте типы для сложного объекта с несколькими уровнями вложенности.
interface Address {
   street: string;
   city: string;
   postalCode: string;
 }
 
 interface User {
   id: number;
   name: string;
   address: Address;
 }
 
 const user: User = {
   id: 1,
   name: 'John Doe',
   address: {
     street: 'Main St',
     city: 'Anytown',
     postalCode: '12345'
   }
 };
 
 // Задача 2: Используйте утилиты типов (например, Partial, Required, Readonly) для оптимизации кода.
 interface Product {
   name: string;
   price: number;
   description?: string;
 }
 
 type PartialProduct = Partial<Product>;
 type ReadonlyProduct = Readonly<Product>;
 
 // Задача 3: Оптимизируйте функцию для работы с большим количеством данных с использованием утилитных типов.
 function updateProduct(product: PartialProduct): Product {
   return {
     name: product.name || 'Default Name',
     price: product.price || 0,
     description: product.description || 'No description'
   };
 }
 
 // Задача 4: Используйте продвинутые утилиты типов (например, Pick, Omit) для управления сложными объектами.
 type ProductOverview = Pick<Product, 'name' | 'price'>;
 
 const overview: ProductOverview = {
   name: 'Product A',
   price: 100
 };
 
 // Задача 5: Напишите функцию для глубокого клонирования объекта и оптимизируйте её для производительности.
 function deepClone<T>(obj: T): T {
   return JSON.parse(JSON.stringify(obj));
 }
 
 // Задача 6: Оптимизируйте типы для сложных API ответов с несколькими уровнями вложенности.
 interface ApiResponse {
   data: {
     user: {
       id: number;
       name: string;
     };
     posts: {
       id: number;
       title: string;
     }[];
   };
 }
 
 function handleApiResponse(response: ApiResponse) {
   console.log(response.data.user.name);
 }
 
 // Задача 7: Используйте утилиты типов для работы с неизменяемыми данными и оптимизируйте функции для работы с ними.
 const product: ReadonlyProduct = {
   name: 'Immutable Product',
   price: 100
 };
 
 // Задача 8: Напишите функции для обработки ошибок и типизируйте их с использованием пользовательских типов.
 type ErrorResponse = {
   error: string;
   code: number;
 };
 
 function handleError(response: ErrorResponse) {
   console.error(`Error ${response.code}: ${response.error}`);
 }
 
 // Задача 9: Оптимизируйте взаимодействие между модулями с использованием интерфейсов и утилитных типов.
 interface ServiceResponse {
   status: 'success' | 'error';
   data?: any;
   error?: string;
 }
 
 function processServiceResponse(response: ServiceResponse) {
   if (response.status === 'success') {
     console.log('Success:', response.data);
   } else {
     console.error('Error:', response.error);
   }
 }
 
 // Задача 10: Используйте утилиты типов для оптимизации типов в сложных структурах данных и реализации лучших практик.
 interface Settings {
   theme: 'light' | 'dark';
   notifications: boolean;
   version: string;
 }
 
 type EditableSettings = Partial<Settings>;
 
 function updateSettings(settings: EditableSettings) {
   // Логика обновления настроек
 }
 