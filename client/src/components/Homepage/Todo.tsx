import { useState } from "react";
import MyButton from "../common.tsx/MyButton";
import "./Todo.css";

interface TodoProps {
  todoText: string;
}

const Todo = ({ todoText }: TodoProps) => {
  const [done, setDone] = useState(false);

  const handleCheck = () => {
    setDone(!done);
  };

  return (
    <div className="task">
      <span className="what-todo">
        <input
          type="checkbox"
          name="task-check"
          checked={done}
          onChange={handleCheck}
        />
        <p className={done ? "todo-done" : ""} onClick={() => setDone(!done)}>
          {todoText}
        </p>
      </span>
      <MyButton
        buttonText="Delete"
        className={`btn btn-del ${!done && "display-none"}`}
        type="button"
      />
    </div>
  );
};

export default Todo;
