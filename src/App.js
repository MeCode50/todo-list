import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/styles.css';

function App () {
  const [todos, setTodos]= useState([]);

  const addTodo = (task) =>{

    setTodos([...todos, task]);

  };

  const deleteTodo = (index) => {
    const updatedTodos =todos.filter((_, i) => i !== index) ;

    setTodos(updatedTodos);
  };

  return(
    <div className="container">
      <h1>TO DO LIST </h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App
