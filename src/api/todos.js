import api from "./axios";

// 모든 todos를 가져오는 api
const getTodos = async () => {
  const response = await api.get("/todos");
  return response;
};

const addTodo = async (newTodo) => {
    await api.post("/todos", newTodo);
  };

  const removeTodo = async (id) => {
    await api.delete(`/todos/${id}`);
  };
  
  const switchTodo = async (payload) => {
    await api.patch(`/todos/${payload.id}`, {
      isDone: payload.isDone,
    });
  };
  
  export { getTodos, addTodo, removeTodo, switchTodo };

