// День 25: Тестирование TypeScript кода

// Задача 1: Настройте Jest для работы с TypeScript и создайте простой тест для функции.
function sum(a, b) {
   return a + b;
 }
 
 // Задача 2: Напишите тест для компонента React с использованием Jest и Enzyme или React Testing Library.
 function Greeting({ name }) {
   return <h1>Hello, {name}!</h1>;
 }
 
 // Задача 3: Напишите тест для компонента, который использует useState и проверяет изменение состояния.
 function Counter() {
   const [count, setCount] = React.useState(0);
 
   return (
     <div>
       <p>Count: {count}</p>
       <button onClick={() => setCount(count + 1)}>Increment</button>
     </div>
   );
 }
 
 // Задача 4: Напишите тест для компонента с использованием контекста и проверьте правильность рендеринга.
 const ThemeContext = React.createContext('light');
 
 function ThemedComponent() {
   const theme = React.useContext(ThemeContext);
   return <div>Current theme: {theme}</div>;
 }
 
 // Задача 5: Напишите тест для компонента, который использует useEffect для загрузки данных с API.
 function DataLoader({ url }) {
   const [data, setData] = React.useState(null);
 
   React.useEffect(() => {
     fetch(url)
       .then(response => response.json())
       .then(data => setData(data));
   }, [url]);
 
   return <div>Data: {data ? JSON.stringify(data) : 'Loading...'}</div>;
 }
 
 // Задача 6: Напишите тест для компонента с использованием mock-функций для проверки вызовов.
 function ClickButton({ onClick }) {
   return <button onClick={onClick}>Click me!</button>;
 }
 
 // Задача 7: Напишите тест для компонента с использованием асинхронного кода и проверки результата.
 async function fetchData(url) {
   const response = await fetch(url);
   return await response.json();
 }
 
 // Задача 8: Создайте тест для компонента с использованием порталов и проверкой правильности отображения.
 function Modal({ children }) {
   return ReactDOM.createPortal(
     <div className="modal">{children}</div>,
     document.getElementById('modal-root')
   );
 }
 
 // Задача 9: Напишите тест для компонента с использованием HOC и проверьте корректность передачи пропсов.
 function withTheme(WrappedComponent) {
   return function ThemedComponent(props) {
     const theme = React.useContext(ThemeContext);
     return <WrappedComponent {...props} theme={theme} />;
   };
 }
 
 // Задача 10: Напишите тест для компонента с использованием React Testing Library и проверкой правильности работы хуков.
 function SearchBox({ onSearch }) {
   const [query, setQuery] = React.useState('');
 
   const handleChange = (e) => {
     setQuery(e.target.value);
   };
 
   const handleSearch = () => {
     onSearch(query);
   };
 
   return (
     <div>
       <input value={query} onChange={handleChange} />
       <button onClick={handleSearch}>Search</button>
     </div>
   );
 }
 