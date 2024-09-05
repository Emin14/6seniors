// День 17: Типизация Refs и порталов

// Задача 1: Создайте компонент с использованием useRef для хранения ссылки на элемент DOM и типизируйте его.
function RefExample() {
   const inputRef = React.useRef(null);
 
   const focusInput = () => {
     if (inputRef.current) {
       inputRef.current.focus();
     }
   };
 
   return (
     <div>
       <input ref={inputRef} />
       <button onClick={focusInput}>Focus Input</button>
     </div>
   );
 }
 
 // Задача 2: Напишите компонент, который использует forwardRef для передачи ссылки вниз по дереву компонентов и типизируйте его.
 const FancyButton = React.forwardRef((props, ref) => (
   <button ref={ref} className="FancyButton">
     {props.children}
   </button>
 ));
 
 // Задача 3: Используйте useRef для хранения ссылки на компонент и вызова его методов.
 function ComponentWithRef() {
   const buttonRef = React.useRef(null);
 
   const handleClick = () => {
     if (buttonRef.current) {
       buttonRef.current.focus();
     }
   };
 
   return (
     <div>
       <FancyButton ref={buttonRef}>Click me!</FancyButton>
       <button onClick={handleClick}>Focus on fancy button</button>
     </div>
   );
 }
 
 // Задача 4: Создайте компонент, который использует createPortal для отображения содержимого в другом месте DOM-дерева.
 function Modal({ children }) {
   const modalRoot = document.getElementById('modal-root');
   return ReactDOM.createPortal(children, modalRoot);
 }
 
 // Задача 5: Напишите компонент, который отображает модальное окно с использованием портала и типизируйте его.
 function ModalExample() {
   return (
     <Modal>
       <div className="modal">
         <h2>Modal Title</h2>
         <p>Modal Content</p>
       </div>
     </Modal>
   );
 }
 
 // Задача 6: Типизируйте компонент, который использует useImperativeHandle для управления внутренним состоянием.
 const CustomInput = React.forwardRef((props, ref) => {
   const inputRef = React.useRef(null);
 
   React.useImperativeHandle(ref, () => ({
     focus() {
       inputRef.current.focus();
     },
     clear() {
       inputRef.current.value = '';
     }
   }));
 
   return <input ref={inputRef} />;
 });
 
 // Задача 7: Напишите компонент, который передает ссылку на другой компонент и использует методы через useImperativeHandle.
 function ImperativeHandleExample() {
   const inputRef = React.useRef(null);
 
   const handleFocus = () => {
     if (inputRef.current) {
       inputRef.current.focus();
     }
   };
 
   return (
     <div>
       <CustomInput ref={inputRef} />
       <button onClick={handleFocus}>Focus Input</button>
     </div>
   );
 }
 
 // Задача 8: Создайте компонент, который рендерит дочерние элементы через портал и управляет состоянием модального окна.
 function ControlledModal({ isOpen, onClose, children }) {
   if (!isOpen) return null;
 
   return ReactDOM.createPortal(
     <div className="modal">
       <button onClick={onClose}>Close</button>
       {children}
     </div>,
     document.getElementById('modal-root')
   );
 }
 
 // Задача 9: Напишите компонент, который отображает модальное окно с использованием ControlledModal.
 function App() {
   const [isModalOpen, setModalOpen] = React.useState(false);
 
   return (
     <div>
       <button onClick={() => setModalOpen(true)}>Open Modal</button>
       <ControlledModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
         <h2>Modal Title</h2>
         <p>Modal Content</p>
       </ControlledModal>
     </div>
   );
 }
 
 // Задача 10: Создайте компонент, который использует forwardRef для передачи рефа на компонент, создающий портал.
 const PortalButton = React.forwardRef((props, ref) => {
   return ReactDOM.createPortal(
     <button ref={ref} className="FancyButton">
       {props.children}
     </button>,
     document.getElementById('button-root')
   );
 });
 