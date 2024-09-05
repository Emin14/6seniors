// День 18: Типизация сложных компонентов

// Задача 1: Создайте HOC (Higher-Order Component), который добавляет функциональность логирования и типизируйте его.
function withLogging(WrappedComponent) {
   return function(props) {
     console.log('Rendering component with props:', props);
     return <WrappedComponent {...props} />;
   };
 }
 
 // Задача 2: Напишите HOC, который обеспечивает ленивую загрузку компонентов и типизируйте его.
 function withLazyLoading(importFunc) {
   const LazyComponent = React.lazy(importFunc);
   return function(props) {
     return (
       <React.Suspense fallback={<div>Loading...</div>}>
         <LazyComponent {...props} />
       </React.Suspense>
     );
   };
 }
 
 // Задача 3: Создайте компонент с использованием Compound Components паттерна и типизируйте его.
 function Tabs({ children }) {
   const [activeTab, setActiveTab] = React.useState(0);
 
   return (
     <div>
       <div className="tab-headers">
         {React.Children.map(children, (child, index) => (
           <button onClick={() => setActiveTab(index)}>
             {child.props.title}
           </button>
         ))}
       </div>
       <div className="tab-content">
         {React.Children.toArray(children)[activeTab]}
       </div>
     </div>
   );
 }
 
 function Tab({ children }) {
   return <div>{children}</div>;
 }
 
 // Задача 4: Напишите компонент с использованием Render Props и типизируйте его.
 function DataFetcher({ render }) {
   const [data, setData] = React.useState(null);
 
   React.useEffect(() => {
     fetch('/api/data')
       .then(response => response.json())
       .then(data => setData(data));
   }, []);
 
   return render(data);
 }
 
 // Задача 5: Создайте компонент с использованием Контейнера (Container Component) и типизируйте его.
 function ContainerComponent({ children }) {
   const [state, setState] = React.useState({});
 
   // Логика управления состоянием
 
   return React.cloneElement(children, { state, setState });
 }
 
 // Задача 6: Напишите компонент с использованием Template Method паттерна и типизируйте его.
 function TemplateComponent({ renderHeader, renderBody, renderFooter }) {
   return (
     <div>
       {renderHeader()}
       {renderBody()}
       {renderFooter()}
     </div>
   );
 }
 
 // Задача 7: Создайте компонент с использованием Provider-Consumer паттерна и типизируйте его.
 const CustomContext = React.createContext(null);
 
 function CustomProvider({ children }) {
   const [state, setState] = React.useState('default');
 
   return (
     <CustomContext.Provider value={{ state, setState }}>
       {children}
     </CustomContext.Provider>
   );
 }
 
 function CustomConsumer() {
   const { state, setState } = React.useContext(CustomContext);
   return (
     <div>
       <p>State: {state}</p>
       <button onClick={() => setState('new state')}>Change State</button>
     </div>
   );
 }
 
 // Задача 8: Напишите компонент с использованием Hooks API и типизируйте его.
 function CustomHookComponent() {
   const [value, setValue] = React.useState('');
 
   React.useEffect(() => {
     console.log('Value changed:', value);
   }, [value]);
 
   return (
     <input
       value={value}
       onChange={(e) => setValue(e.target.value)}
     />
   );
 }
 
 // Задача 9: Создайте компонент с использованием виртуализации (например, для списка) и типизируйте его.
 function VirtualizedList({ items }) {
   const containerRef = React.useRef(null);
 
   // Логика виртуализации
 
   return (
     <div ref={containerRef}>
       {/* Отображение элементов */}
     </div>
   );
 }
 
 // Задача 10: Напишите компонент с использованием состояния и эффекта (useState, useEffect) и типизируйте его.
 function EffectComponent() {
   const [count, setCount] = React.useState(0);
 
   React.useEffect(() => {
     document.title = `Count: ${count}`;
   }, [count]);
 
   return (
     <div>
       <p>Count: {count}</p>
       <button onClick={() => set
 