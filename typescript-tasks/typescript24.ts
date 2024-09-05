// День 24: Углубленная работа с React и TypeScript

// Задача 1: Напишите типизированный компонент, который использует React.lazy и Suspense для ленивой загрузки.
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}

// Задача 2: Создайте типизированный компонент с использованием Error Boundary.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Задача 3: Напишите типизированный компонент с использованием порталов.
function Modal({ children }) {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, modalRoot);
}

// Задача 4: Создайте компонент с использованием кастомных хуков и типизируйте его.
function useCustomHook(initialValue) {
  const [value, setValue] = React.useState(initialValue);

  const reset = () => setValue(initialValue);

  return [value, setValue, reset];
}

function CustomHookComponent() {
  const [count, setCount, resetCount] = useCustomHook(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

// Задача 5: Напишите компонент с использованием React.memo и типизируйте его.
const MemoizedComponent = React.memo(function MemoComponent({ value }) {
  return <div>Memoized value: {value}</div>;
});

// Задача 6: Создайте компонент с использованием React.forwardRef и типизируйте его.
const ForwardedInput = React.forwardRef(function Input(props, ref) {
  return <input ref={ref} {...props} />;
});

// Задача 7: Напишите типизированный компонент с использованием React.Context для глобального состояния.
const GlobalContext = React.createContext(null);

function GlobalProvider({ children }) {
  const [state, setState] = React.useState('default value');

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
}

function GlobalConsumerComponent() {
  const { state, setState } = React.useContext(GlobalContext);

  return (
    <div>
      <p>Global state: {state}</p>
      <button onClick={() => setState('new value')}>Update State</button>
    </div>
  );
}

// Задача 8: Создайте компонент с использованием React.Fragment и типизируйте его.
function FragmentComponent() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Description</p>
    </React.Fragment>
  );
}

// Задача 9: Напишите компонент с использованием нескольких хуков и типизируйте его.
function MultiHookComponent() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState
