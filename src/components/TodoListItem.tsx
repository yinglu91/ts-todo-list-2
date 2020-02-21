import React from 'react'
import { Todo } from '../types';
import './TodoList.css';

interface TodoListItemProps {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo, onDeleteTodo}) => {
  return  (<li key={todo.id}>
    {/* <label><input type="checkbox" checked={todo.complete} /></label> */}
  <span>{todo.text}</span>
  
 <button onClick={() => onDeleteTodo(todo.id)}>DELETE</button> 
</li>);

}

export default TodoListItem;