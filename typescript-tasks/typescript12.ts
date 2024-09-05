// День 12: Продвинутые типы (Mapped Types, Conditional Types)

// Задача 1: Создайте mapped type, который делает все свойства типа обязательными.
type Person = {
   name?: string;
   age?: number;
 };
 
 type RequiredPerson = {
   // Mapped type implementation
 };
 
 // Задача 2: Напишите conditional type, который проверяет, является ли тип массива или нет.
 type IsArray<T> = T extends any[] ? true : false;
 
 type Test1 = IsArray<number>;  // false
 type Test2 = IsArray<number[]>;  // true
 
 // Задача 3: Создайте mapped type, который делает все свойства типа только для чтения.
 type ReadOnlyPerson = {
   // Mapped type implementation
 };
 
 // Задача 4: Напишите conditional type, который проверяет, является ли тип строкой.
 type IsString<T> = T extends string ? true : false;
 
 type Test3 = IsString<number>;  // false
 type Test4 = IsString<string>;  // true
 
 // Задача 5: Создайте mapped type, который делает все свойства типа необязательными.
 type PartialPerson = {
   // Mapped type implementation
 };
 
 // Задача 6: Напишите conditional type, который проверяет, является ли тип числом.
 type IsNumber<T> = T extends number ? true : false;
 
 type Test5 = IsNumber<string>;  // false
 type Test6 = IsNumber<number>;  // true
 
 // Задача 7: Создайте mapped type, который изменяет все свойства типа на их массивы.
 type ArrayifyPerson = {
   // Mapped type implementation
 };
 
 // Задача 8: Напишите conditional type, который проверяет, является ли тип объектом.
 type IsObject<T> = T extends object ? true : false;
 
 type Test7 = IsObject<number>;  // false
 type Test8 = IsObject<{}>;  // true
 
 // Задача 9: Создайте mapped type, который удаляет все свойства, тип которых является функцией.
 type FunctionProps<T> = {
   // Mapped type implementation
 };
 
 // Задача 10: Напишите conditional type, который проверяет, является ли тип функцией.
 type IsFunction<T> = T extends (...args: any[]) => any ? true : false;
 
 type Test9 = IsFunction<number>;  // false
 type Test10 = IsFunction<() => void>;  // true
 