import express from "express";
import {
  getAllTodos,
  addTodo,
  removeTodo,
  updateTodo,
} from "../controllers/todoController";

const todoRouter = express.Router();

todoRouter.get("/", getAllTodos);
todoRouter.post("/", addTodo);
todoRouter.delete("/:id", removeTodo);
todoRouter.put("/:id", updateTodo);

export default todoRouter;
