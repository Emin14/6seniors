// Неделя 3: TypeScript в React

// День 15: Базовая типизация компонентов

// Задача 1: Создайте функциональный компонент, который принимает пропсы name и age, и типизируйте их.
function Greeting(props) {
   return <h1>Hello, {props.name}. You are {props.age} years old.</h1>;
 }
 
 // Задача 2: Создайте компонент, который принимает список строк и выводит их в виде списка.
 function StringList(props) {
   return (
     <ul>
       {props.items.map(item => (
         <li key={item}>{item}</li>
       ))}
     </ul>
   );
 }
 
 // Задача 3: Типизируйте компонент, который принимает обработчик события onClick и выводит кнопку.
 function ClickButton(props) {
   return <button onClick={props.onClick}>Click me!</button>;
 }
 
 // Задача 4: Создайте компонент, который использует state для отслеживания кликов и типизируйте его.
 function Counter() {
   const [count, setCount] = React.useState(0);
 
   return (
     <div>
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>Click me</button>
     </div>
   );
 }
 
 // Задача 5: Напишите компонент, который принимает children и выводит их внутри div.
 function Wrapper(props) {
   return <div>{props.children}</div>;
 }
 
 // Задача 6: Создайте компонент, который принимает объект с именем и возрастом и выводит их.
 function PersonInfo(props) {
   return (
     <div>
       <h2>{props.person.name}</h2>
       <p>Age: {props.person.age}</p>
     </div>
   );
 }
 
 // Задача 7: Создайте компонент с useEffect, который выполняет действие при монтировании, и типизируйте его.
 function FetchData() {
   React.useEffect(() => {
     console.log('Component mounted');
   }, []);
 
   return <div>Fetching data...</div>;
 }
 
 // Задача 8: Типизируйте компонент с useReducer, который управляет состоянием счетчика.
 function CounterWithReducer() {
   const [state, dispatch] = React.useReducer((state, action) => {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       default:
         return state;
     }
   }, { count: 0 });
 
   return (
     <div>
       <p>Count: {state.count}</p>
       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
     </div>
   );
 }
 
 // Задача 9: Напишите компонент с использованием useContext и типизируйте его.
 const ThemeContext = React.createContext('light');
 
 function ThemedComponent() {
   const theme = React.useContext(ThemeContext);
   return <div>Current theme: {theme}</div>;
 }
 
 // Задача 10: Создайте компонент с использованием useRef для фокусировки на input и типизируйте его.
 function FocusInput() {
   const inputRef = React.useRef(null);
 
   const handleClick = () => {
     if (inputRef.current) {
       inputRef.current.focus();
     }
   };
 
   return (
     <div>
       <input ref={inputRef} />
       <button onClick={handleClick}>Focus Input</button>
     </div>
   );
 }
 