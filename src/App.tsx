import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const initialTodos: Todo[] = [
  {id: '1', text: 'Walk the dog', complete: true},
  {id: '2', text: 'Write app', complete: false}
]
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodoHandler = (todoText: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: todoText, complete: false }
    ]);
  };

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map((todo)=>{
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }

      return todo;
    });

    setTodos(newTodos);
  }

  const deleteTodoHandler: DeleteTodo = todoId => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className='App'>
      <NewTodo addTodo={addTodoHandler} />
      <TodoList items={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodo}/>
    </div>
  );
};

export default App;

// https://www.youtube.com/watch?v=a0xwxpr4zSo
