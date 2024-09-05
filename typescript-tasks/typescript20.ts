// День 20: Работа с внешними API и TypeScript

// Задача 1: Создайте функцию для выполнения GET-запроса и типизируйте её с использованием fetch API.
async function fetchData(url) {
   const response = await fetch(url);
   const data = await response.json();
   return data;
 }
 
 // Задача 2: Напишите компонент, который загружает данные с API и отображает их, типизируя ответ.
 function DataLoader() {
   const [data, setData] = React.useState(null);
 
   React.useEffect(() => {
     fetchData('/api/data').then(setData);
   }, []);
 
   return <div>Data: {JSON.stringify(data)}</div>;
 }
 
 // Задача 3: Типизируйте функцию для выполнения POST-запроса с использованием fetch API.
 async function postData(url, body) {
   const response = await fetch(url, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(body)
   });
   const data = await response.json();
   return data;
 }
 
 // Задача 4: Создайте компонент, который отправляет данные на сервер и типизируйте его.
 function DataSender() {
   const handleSubmit = async () => {
     const data = await postData('/api/submit', { key: 'value' });
     console.log('Response:', data);
   };
 
   return <button onClick={handleSubmit}>Send Data</button>;
 }
 
 // Задача 5: Напишите функцию для обработки ошибок при запросах к API и типизируйте её.
 async function fetchWithErrorHandling(url) {
   try {
     const response = await fetch(url);
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return await response.json();
   } catch (error) {
     console.error('Fetch error:', error);
     return null;
   }
 }
 
 // Задача 6: Создайте компонент, который использует типизированный API для получения и отображения данных с ошибками.
 function ErrorHandlingComponent() {
   const [data, setData] = React.useState(null);
 
   React.useEffect(() => {
     fetchWithErrorHandling('/api/data').then(setData);
   }, []);
 
   return <div>{data ? `Data: ${JSON.stringify(data)}` : 'Error loading data'}</div>;
 }
 
 // Задача 7: Типизируйте функцию для обработки PUT-запроса к API.
 async function updateData(url, body) {
   const response = await fetch(url, {
     method: 'PUT',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(body)
   });
   const data = await response.json();
   return data;
 }
 
 // Задача 8: Напишите компонент, который обновляет данные через API и типизируйте его.
 function DataUpdater() {
   const handleUpdate = async () => {
     const data = await updateData('/api/update', { key: 'newValue' });
     console.log('Updated data:', data);
   };
 
   return <button onClick=
 