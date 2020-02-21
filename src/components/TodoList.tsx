import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem'

interface TodoListProps {
  items: Todo[];
  deleteTodo: DeleteTodo;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <TodoListItem key={todo.id} deleteTodo={props.deleteTodo} todo={todo} toggleTodo={props.toggleTodo} /> 
      ))}
    </ul>
  );
};

export default TodoList;
