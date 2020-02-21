type Todo = {
  id: string;
  text: string;
  complete: boolean;
}

type AddTodo = (todoText: string) => void;
type ToggleTodo = (selectedTodo: Todo) => void;
type DeleteTodo = (todoId: string) => void;

// no export!!! and no import needed inside the project