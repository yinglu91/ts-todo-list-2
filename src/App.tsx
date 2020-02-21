import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const initialTodos: Todo[] = [
  {id: '1', text: 'Walk the dog', complete: true},
  {id: '2', text: 'Write app', complete: false}
]
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodoHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text, complete: false }
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

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} toggleTodo={toggleTodo}/>
    </div>
  );
};

export default App;
