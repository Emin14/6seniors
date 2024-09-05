// День 19: Типизация событий и форм

// Задача 1: Создайте компонент формы с обработчиком события onChange для текстового поля и типизируйте его.
function TextInput() {
   const [value, setValue] = React.useState('');
 
   const handleChange = (event) => {
     setValue(event.target.value);
   };
 
   return <input type="text" value={value} onChange={handleChange} />;
 }
 
 // Задача 2: Напишите компонент с формой, который типизирует обработчики onSubmit и onReset.
 function Form() {
   const handleSubmit = (event) => {
     event.preventDefault();
     // Логика обработки отправки формы
   };
 
   const handleReset = () => {
     // Логика сброса формы
   };
 
   return (
     <form onSubmit={handleSubmit} onReset={handleReset}>
       <button type="submit">Submit</button>
       <button type="reset">Reset</button>
     </form>
   );
 }
 
 // Задача 3: Создайте компонент с обработчиком события onClick на кнопке и типизируйте его.
 function ClickableButton() {
   const handleClick = (event) => {
     alert('Button clicked!');
   };
 
   return <button onClick={handleClick}>Click me</button>;
 }
 
 // Задача 4: Напишите компонент формы с несколькими полями и типизируйте их обработчики событий.
 function MultiFieldForm() {
   const [formData, setFormData] = React.useState({ name: '', age: '' });
 
   const handleInputChange = (event) => {
     const { name, value } = event.target;
     setFormData({ ...formData, [name]: value });
   };
 
   return (
     <form>
       <input
         name="name"
         value={formData.name}
         onChange={handleInputChange}
       />
       <input
         name="age"
         value={formData.age}
         onChange={handleInputChange}
       />
     </form>
   );
 }
 
 // Задача 5: Создайте компонент с обработчиком события onMouseEnter и типизируйте его.
 function HoverComponent() {
   const handleMouseEnter = (event) => {
     console.log('Mouse entered!', event);
   };
 
   return <div onMouseEnter={handleMouseEnter}>Hover over me!</div>;
 }
 
 // Задача 6: Напишите компонент с обработчиком события onKeyDown для текстового поля и типизируйте его.
 function KeyPressInput() {
   const handleKeyDown = (event) => {
     if (event.key === 'Enter') {
       alert('Enter key pressed!');
     }
   };
 
   return <input type="text" onKeyDown={handleKeyDown} />;
 }
 
 // Задача 7: Создайте компонент с использованием события onDrag и типизируйте его.
 function DraggableComponent() {
   const handleDrag = (event) => {
     console.log('Dragging!', event);
   };
 
   return <div draggable onDrag={handleDrag}>Drag me!</div>;
 }
 
 // Задача 8: Напишите компонент с использованием события onDrop и типизируйте его.
 function DropZone() {
   const handleDrop = (event) => {
     event.preventDefault();
     console.log('Dropped!', event);
   };
 
   return <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>Drop here!</div>;
 }
 
 // Задача 9: Создайте компонент с обработчиком события onFocus для текстового поля и типизируйте его.
 function FocusInput() {
   const handleFocus = (event) => {
     console.log('Input focused!', event);
   };
 
   return <input type="text" onFocus={handleFocus} />;
 }
 
 // Задача 10: Напишите компонент формы, который использует обработчики onBlur и onChange для полей ввода и типизируйте их.
 function FormWithValidation() {
   const [formData, setFormData] = React.useState({ email: '', password: '' });
 
   const handleBlur = (event) => {
     const { name, value } = event.target;
     if (name === 'email' && !value.includes('@')) {
       console.log('Invalid email!');
     }
   };
 
   const handleChange = (event) => {
     const { name, value } = event.target;
     setFormData({ ...formData, [name]: value });
   };
 
   return (
     <form>
       <input
         name="email"
         value={formData.email}
         onBlur={handleBlur}
         onChange={handleChange}
       />
       <input
         name="password"
         value={formData.password}
         onBlur={handleBlur}
         onChange={handleChange}
       />
     </form>
   );
 }
 