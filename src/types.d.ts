type Todo = {
  id: string;
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
// no export!!! and no import needed inside the project