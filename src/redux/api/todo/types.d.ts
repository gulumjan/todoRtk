namespace TODO {
  type PostTodoResponse = ITodo[];
  type PostTodoRequest = ITodo;

  type getTodosResponse = ITodo[];
  type getTodosRequest = void;

  type deleteTodoResponse = ITodo[];
  type deleteTodoRequest = number;

  type editTodoResponse = ITodo[];
  type editTodoRequest = {
    _id: number;
    data: ITodo;
  };
}
