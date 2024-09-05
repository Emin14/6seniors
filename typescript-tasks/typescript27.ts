// День 27: Интеграция с библиотеками и сторонними API

// Задача 1: Настройте типизацию для работы с библиотекой Axios и напишите функцию для выполнения GET-запроса.
import axios from 'axios';

function fetchData(url) {
  return axios.get(url).then(response => response.data);
}

// Задача 2: Напишите функцию для выполнения POST-запроса с использованием Axios и типизируйте её.
function postData(url, data) {
  return axios.post(url, data).then(response => response.data);
}

// Задача 3: Настройте типизацию для работы с REST API и создайте функцию для получения списка данных.
function getList(url) {
  return axios.get(url).then(response => response.data);
}

// Задача 4: Напишите функцию для отправки данных на сервер с использованием Fetch API и типизируйте её.
function sendData(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
}

// Задача 5: Создайте типизированную функцию для взаимодействия с GraphQL API и выполнения запроса.
function fetchGraphQL(query, variables) {
  return fetch('/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  }).then(response => response.json());
}

// Задача 6: Напишите функцию для работы с сторонним API (например, OpenWeatherMap) и типизируйте её.
function fetchWeatherData(city) {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
    .then(response => response.data);
}

// Задача 7: Настройте типизацию для работы с WebSocket API и создайте функцию для подключения к серверу.
function connectWebSocket(url) {
  const socket = new WebSocket(url);
  socket.onmessage = (event) => {
    console.log('Message from server:', event.data);
  };
  return socket;
}

// Задача 8: Напишите функцию для работы с локальной базой данных (например, IndexedDB) и типизируйте её.
function openDatabase(name, version) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

// Задача 9: Создайте типизированную функцию для работы с сторонним API и обработки ошибок.
function fetchDataWithHandling(url) {
  return axios.get(url).then(response => response.data).catch(error => {
    console.error('Error fetching data:', error);
    throw error;
  });
}

// Задача 10: Напишите функцию для аутентификации через сторонний API (например, OAuth) и типизируйте её.
function authenticateUser(token) {
  return axios.post('/auth', { token }).then(response => response.data);
}
