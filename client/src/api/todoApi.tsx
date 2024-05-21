import { ToDo } from "../utils/types";
import api from "./axiosConfig";

const baseUrl = `/todos`;

const getAllTodos = async () => {
  const res = await api.get(baseUrl);
  return res.data;
};

const addNewTodo = async (todo: ToDo) => {
  const res = await api.post<ToDo>(baseUrl, todo);
  return res.data;
};

const updateTodo = async (id: string) => {
  // const res = await api.patch(`${baseUrl}/${id}`);
  const res = await api.put(`${baseUrl}/${id}`);
  return res.data;
};

const deleteTodo = async (id: string) => {
  const res = await api.delete(`${baseUrl}/${id}`);
  return res.data;
};

const todoApi = {
  getAllTodos,
  addNewTodo,
  updateTodo,
  deleteTodo,
};

export default todoApi;
