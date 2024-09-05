// День 16: Контексты и типизация с использованием Context API

// Задача 1: Создайте контекст для хранения информации о текущем пользователе и типизируйте его.
const UserContext = React.createContext(null);

// Задача 2: Напишите компонент, который использует UserContext для отображения имени пользователя.
function UserProfile() {
  const user = React.useContext(UserContext);
  return <div>User: {user.name}</div>;
}

// Задача 3: Создайте компонент-контейнер, который предоставляет значение UserContext, и типизируйте его.
function UserProvider(props) {
  const user = { name: 'John Doe', age: 30 };

  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
}

// Задача 4: Напишите компонент, который использует несколько контекстов (например, UserContext и ThemeContext).
const ThemeContext = React.createContext('light');

function CombinedContextComponent() {
  const user = React.useContext(UserContext);
  const theme = React.useContext(ThemeContext);

  return (
    <div style={{ color: theme === 'light' ? '#000' : '#fff' }}>
      User: {user.name}, Theme: {theme}
    </div>
  );
}

// Задача 5: Создайте компонент, который использует контекст для управления состоянием (например, переключение темы).
function ThemeToggler() {
  const [theme, setTheme] = React.useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

// Задача 6: Напишите компонент, который использует контекст с типом значения, содержащим функцию и данные.
const AuthContext = React.createContext(null);

function AuthProvider(props) {
  const login = (username, password) => {
    // Логика авторизации
  };

  const authData = { isAuthenticated: false, login };

  return <AuthContext.Provider value={authData}>{props.children}</AuthContext.Provider>;
}

// Задача 7: Создайте компонент, который использует AuthContext для отображения кнопки "Войти" или "Выйти".
function AuthButton() {
  const auth = React.useContext(AuthContext);

  return auth.isAuthenticated ? <button>Logout</button> : <button>Login</button>;
}

// Задача 8: Типизируйте компонент, который использует useReducer и предоставляет значение через контекст.
const CountContext = React.createContext(null);

function CountProvider(props) {
  const [count, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return <CountContext.Provider value={{ count, dispatch }}>{props.children}</CountContext.Provider>;
}

// Задача 9: Напишите компонент, который использует CountContext для отображения и изменения счетчика.
function CounterDisplay() {
  const { count, dispatch } = React.useContext(CountContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

// Задача 10: Создайте компонент, который использует контекст для управления глобальными состояниями, такими как язык или настройки.
const LanguageContext = React.createContext('en');

function LanguageProvider(props) {
  const [language, setLanguage] = React.useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage } = React.useContext(LanguageContext);

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
}
