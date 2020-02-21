import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem'
import {Todo} from '../types'

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <TodoListItem key={todo.id} onDeleteTodo={props.onDeleteTodo} todo={todo} /> 
      ))}
    </ul>
  );
};

export default TodoList;
