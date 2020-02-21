import React, { useState, ChangeEvent } from 'react';
import './NewTodo.css';

type NewTodoProps = {
  addTodo: AddTodo;
};

const NewTodo: React.FC<NewTodoProps> = props => {
  const [todoText, setTodoText] = useState("");

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (todoText !== "") {
      props.addTodo(todoText);
    }
    
    setTodoText("");
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' value={todoText} onChange={changeHandler}/>
      </div>

      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
