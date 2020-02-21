import React from 'react'
import './TodoList.css';

interface TodoListItemProps {
  todo: Todo;
  deleteTodo: DeleteTodo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo, deleteTodo, toggleTodo}) => {
  return  (
    <li key={todo.id}>
      <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo) }/>
      <label className={todo.complete? "complete": undefined} >
        {todo.text}
      </label>
    
      <button onClick={() => deleteTodo(todo.id)}>DELETE</button> 
    </li>
    );
}

export default TodoListItem;