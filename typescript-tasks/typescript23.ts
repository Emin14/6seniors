// День 23: Миграция проекта на TypeScript

// Задача 1: Возьмите простой компонент на JavaScript и перепишите его на TypeScript. 
function Button(props) {
   return <button>{props.label}</button>;
 }
 
 // Задача 2: Перепишите компонент с состоянием (useState) с JavaScript на TypeScript.
 function Counter() {
   const [count, setCount] = React.useState(0);
 
   return (
     <div>
       <p>Count: {count}</p>
       <button onClick={() => setCount(count + 1)}>Increment</button>
     </div>
   );
 }
 
 // Задача 3: Перепишите компонент с пропсами и useEffect с JavaScript на TypeScript.
 function DataFetcher({ url }) {
   const [data, setData] = React.useState(null);
 
   React.useEffect(() => {
     fetch(url)
       .then(response => response.json())
       .then(data => setData(data));
   }, [url]);
 
   return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
 }
 
 // Задача 4: Мигрируйте функциональный компонент с использованием контекста на TypeScript.
 function ThemedButton() {
   const theme = React.useContext(ThemeContext);
 
   return <button style={{ background: theme.background, color: theme.foreground }}>Themed Button</button>;
 }
 
 // Задача 5: Перепишите компонент с использованием TypeScript для интерфейса пропсов.
 function UserCard({ user }) {
   return (
     <div>
       <h2>{user.name}</h2>
       <p>Email: {user.email}</p>
     </div>
   );
 }
 
 // Задача 6: Перепишите компонент с useReducer и типизируйте его.
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
 
 // Задача 7: Мигрируйте форму с валидацией полей с JavaScript на TypeScript.
 function LoginForm() {
   const [formData, setFormData] = React.useState({ email: '', password: '' });
 
   const handleChange = (event) => {
     const { name, value } = event.target;
     setFormData({ ...formData, [name]: value });
   };
 
   const handleSubmit = (event) => {
     event.preventDefault();
     // Логика валидации и отправки формы
   };
 
   return (
     <form onSubmit={handleSubmit}>
       <input name="email" value={formData.email} onChange={handleChange} />
       <input name="password" value={formData.password} onChange={handleChange} />
       <button type="submit">Login</button>
     </form>
   );
 }
 
 // Задача 8: Перепишите компонент с использованием HOC (Higher-Order Component) и типизируйте его.
 function withLogging(WrappedComponent) {
   return function(props) {
     console.log('Rendering component with props:', props);
     return <WrappedComponent {...props} />;
   };
 }
 
 // Задача 9: Перепишите компонент с использованием TypeScript и Redux (connect).
 function Counter({ count, increment, decrement }) {
   return (
     <div>
       <p>Count: {count}</p>
       <button onClick={increment}>+</button>
       <button onClick={decrement}>-</button>
     </div>
   );
 }
 
 // Задача 10: Мигрируйте проект, используя TypeScript, добавив типизацию для сложных объектов и состояний.
 function ProjectComponent({ project }) {
   return (
     <div>
       <h1>{project.name}</h1>
       <p>{project.description}</p>
     </div>
   );
 }
 