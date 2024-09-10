import { useState } from "react";
import MyButton from "../common/MyButton";
import "./Todo.css";

interface TodoProps {
  todoText: string;
  id: string;
  removeTodo: (id: string) => Promise<void>;
  updateTodo: (id: string) => Promise<void>;
}

const Todo = ({ todoText, id, removeTodo, updateTodo }: TodoProps) => {
  const [done, setDone] = useState(false);

  const handleCheck = async (id: string) => {
    setDone(!done);
    await updateTodo(id);
  };

  return (
    <div className="task">
      <span className="what-todo">
        <input
          type="checkbox"
          name="task-check"
          checked={done}
          onChange={() => handleCheck(id)}
        />
        <p className={done ? "todo-done" : ""} onClick={() => handleCheck(id)}>
          {todoText}
        </p>
      </span>
      <MyButton
        buttonText="Delete"
        className={`btn btn-del ${!done && "display-none"}`}
        type="button"
        onClick={() => removeTodo(id)}
      />
    </div>
  );
};

export default Todo;
