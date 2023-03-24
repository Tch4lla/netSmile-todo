import './App.css';
import { Fragment } from 'react';

//components

import InputTodo from "./components/InputTodo"
import ListTodos from './components/ListTodo';

function App() {
  return (
    <>
    <div className="container">
    <InputTodo />
    <ListTodos />

    </div>
    </>
  );
}

export default App;
