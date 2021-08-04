import logo from './logo.svg';
import './App.css';
import Todo from './componrnts/Todo';
import Backdrop from './componrnts/Backdrop';
import Modal from './componrnts/Modal';

function App() {
  return (
    <div className="App">
    <Todo text="Title"/>
    <Todo text="CARD" />
    <Modal />
    <Backdrop />
    </div>
  );
}

export default App;
