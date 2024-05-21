import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  header: {
    type: String,
    required: [false],
    maxLength: [40, "Max 40 characters on header."],
  },
  todo: {
    type: String,
    required: [true, "Can't be empty."],
    minLength: [2, "Min 2 characters thanks."],
    maxLength: [160, "Max 160 characters on todo."],
  },
  done: {
    type: Boolean,
    default: false,
  },
});

todoSchema.set("toJSON", {
  transform: (_document, returnedTodo) => {
    returnedTodo.id = returnedTodo._id.toString();
    delete returnedTodo._id;
    delete returnedTodo.__v;
  },
});

const TodoModel = mongoose.model("Todo", todoSchema);

export { TodoModel };
