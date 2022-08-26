import ToDoList from './components/ToDoList';
import './General.css';

export default function App() {
  return (
    <>
      {/*<Navbar/> */}
      <div className='navbar'>
        <h1>react-TODOLIST</h1>
      </div>
        <ToDoList/>
    </>
  );
}