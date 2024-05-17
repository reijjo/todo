import { ToDo } from "../utils/types";
import api from "./axiosConfig";

const baseUrl = `/todos`;

const getAllTodos = async () => {
  const res = await api.get(baseUrl);
  return res.data;
};

const addNewTodo = async (todo: ToDo) => {
  console.log("TODO", todo);
  const res = await api.post<ToDo>(baseUrl, todo);
  return res.data;
};

const todoApi = {
  getAllTodos,
  addNewTodo,
};

export default todoApi;
