// День 5: Типы и литералы

// Задача 1: Создайте литеральный тип для представления статуса задачи (например, 'done', 'pending', 'in-progress').
type TaskStatus = 'done' | 'pending' | 'in-progress';

// Задача 2: Создайте функцию, которая принимает статус задачи и типизируйте её.
function setTaskStatus(status: TaskStatus): void {
  console.log(`Task status set to ${status}`);
}

// Задача 3: Создайте union тип для описания возможных типов данных (например, строка или число).
type StringOrNumber = string | number;

// Задача 4: Создайте функцию, которая принимает параметр типа union и типизируйте её.
function formatValue(value: StringOrNumber): string {
  return `Value: ${value}`;
}

// Задача 5: Создайте тип для представления направлений (например, 'up', 'down', 'left', 'right').
type Direction = 'up' | 'down' | 'left' | 'right';

// Задача 6: Создайте функцию, которая принимает направление и типизируйте её.
function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}

// Задача 7: Создайте тип для представления HTTP-методов (например, 'GET', 'POST', 'PUT', 'DELETE').
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// Задача 8: Создайте функцию, которая принимает HTTP-метод и URL и типизируйте её.
function sendRequest(method: HttpMethod, url: string): void {
  console.log(`Sending ${method} request to ${url}`);
}

// Задача 9: Создайте тип для представления уровня логирования (например, 'info', 'warn', 'error').
type LogLevel = 'info' | 'warn' | 'error';

// Задача 10: Создайте функцию, которая принимает уровень логирования и сообщение, и типизируйте её.
function logMessage(level: LogLevel, message: string): void {
  console.log(`[${level.toUpperCase()}] ${message}`);
}

