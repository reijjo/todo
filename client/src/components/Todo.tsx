import { ChangeEvent, useEffect, useState } from "react";
import { TODOs } from "../types";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  setTodos,
  updateTodo,
  deleteTodo,
} from "../reducers/todoReducers";
import { RootState } from "../app/store";

const ToDo = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const generateId = Number((Math.random() * 1000000).toFixed(0));

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      dispatch(setTodos(JSON.parse(storedTodos)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("TODOS", todos);
  }, [todos]);

  const handleAddTodo = () => {
    const newJob: TODOs = {
      id: generateId,
      todo: newTodo,
      done: false,
    };
    if (newJob.todo.length > 0) {
      dispatch(addTodo(newJob));
    }
    setNewTodo("");
  };

  const delTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleCheckBox = (id: number) => {
    dispatch(updateTodo(id));
  };

  return (
    <div className="main">
      <div className="box">
        <div className="otsikko">
          <h3 style={{ padding: "1vw", height: "100%" }}>Do It!</h3>
        </div>
        <div className="newTodo">
          <input
            type="text"
            onChange={handleTodo}
            value={newTodo}
            placeholder="what to do...?"
            name="whattodo"
          />
          <button
            className="todo-button"
            data-testid="todo-button"
            onClick={() => handleAddTodo()}
          >
            add
          </button>
        </div>
        {todos
          ? todos.map((todo: TODOs) => (
              <div key={todo.id} className="jobs">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    onClick={() => handleCheckBox(todo.id)}
                    defaultChecked={todo.done}
                    name="done?"
                    data-testid="done?"
                  />{" "}
                  Check as done.
                </div>
                <div
                  className="todo-text"
                  style={
                    todo.done
                      ? {
                          textDecoration: "line-through",
                          color: "var(--col2brown)",
                        }
                      : {}
                  }
                >
                  {todo.todo}
                </div>
                <button
                  className="delbutton"
                  type="button"
                  disabled={!todo.done}
                  onClick={() => delTodo(todo.id)}
                >
                  delete
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ToDo;
