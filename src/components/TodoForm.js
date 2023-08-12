import  React, {useState } from "react";
import './styles.css';
const TodoForm = ({addTodo}) =>{
    const [input, setInput] = useState('');

    const handleChange= (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (input.trim() !== '') {
            addTodo(input);
            setInput('');
        }
    };

    return(
        <form className="form"onSubmit={handleSubmit}>
            <input
            type='text'
            value={input}
            onChange={handleChange}
            placeholder='Add a new task'
            className="input"
            />
            <button type="submit" className="button">Add</button>
        </form>
    );
};

export default TodoForm;