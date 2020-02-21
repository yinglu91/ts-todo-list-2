import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem'

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <TodoListItem key={todo.id} onDeleteTodo={props.onDeleteTodo} todo={todo} toggleTodo={props.toggleTodo} /> 
      ))}
    </ul>
  );
};

export default TodoList;
