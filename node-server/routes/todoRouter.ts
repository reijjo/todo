import express from "express";
import { getAllTodos, addTodo } from "../controllers/todoController";

const todoRouter = express.Router();

todoRouter.get("/", getAllTodos);
todoRouter.post("/", addTodo);

export default todoRouter;
