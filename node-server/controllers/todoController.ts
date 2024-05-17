import { Request, Response } from "express";

import { TodoModel } from "../db/models/todoModel";

// todos
// GET
// Get all todos
export const getAllTodos = async (_req: Request, res: Response) => {
  try {
    // const allTodos = await TodoModel.find({});
    const allTodos = await TodoModel.aggregate([
      { $sort: { header: 1 } }, // Sort Todos by header in ascending order
      {
        $group: {
          _id: "$header", // Group Todos by header
          todos: { $push: "$$ROOT" }, // Store grouped Todos in an array
        },
      },
    ]);

    res.status(200).json(allTodos);
  } catch (error: unknown) {
    console.log("Error fetching all todos", error);
    res.status(500).json({ message: "Fetching all todos server problems." });
  }
};

// todos
// POST
// Create new todo
export const addTodo = async (req: Request, res: Response) => {
  const { header, todo } = req.body;

  // Check that there is a todo
  if (!todo) {
    return res.status(400).json({ message: "Todo can't be empty" });
  }

  console.log("HEADER TODO", header, todo);
  try {
    const newTodo = {
      header,
      todo,
    };

    // const addedTodo = await TodoModel.create(newTodo);
    await TodoModel.create(newTodo);

    return res.status(201).json({ message: `New todo '${todo} added.` });
  } catch (error: unknown) {
    console.log("Error adding todo.", error);
    return res.status(500).json({ message: "Adding todo server problems." });
  }
};
