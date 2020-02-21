import React from 'react'
import './TodoList.css';

interface TodoListItemProps {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo, onDeleteTodo, toggleTodo}) => {
  return  (
    <li key={todo.id}>
      <label className={todo.complete? "complete": undefined} >
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo) }/>
        {todo.text}
      </label>
    
      <button onClick={() => onDeleteTodo(todo.id)}>DELETE</button> 
    </li>
    );

}

export default TodoListItem;