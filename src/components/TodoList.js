import React from 'react';


const TodoList = ({ todos, deleteTodo }) => {
    return (
        <ul className="task-list">
            {todos.map((todo, index) => (
                <li key={index} className="task">
                    {todo} {/* Here we show the task */}
                    <button className="delete"onClick={() => deleteTodo(index)}>Delete</button>
                    {/* We have a button to delete the task */}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;