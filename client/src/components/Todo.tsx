import { ChangeEvent, useState } from "react";
import { TODOs } from "../types";

const ToDo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<TODOs[]>([]);

  const addTodo = () => {
    console.log("todo", newTodo);
    const newJob: TODOs = {
      id: todos.length + 1,
      todo: newTodo,
      done: false,
    };
    setTodos(todos.concat(newJob));
    setNewTodo("");
  };

  const delTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log("del", id);
  };

  const handleTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleCheckBox = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);

    console.log("checkbox id", id);
  };

  // console.log("hep", jobDone);
  console.log("TODOS", todos);

  return (
    <div className="main">
      <div className="box">
        <div className="otsikko">whattodododo</div>
        <div className="newTodo">
          <input type="text" onChange={handleTodo} value={newTodo} />
          <button onClick={() => addTodo()}>add</button>
        </div>
        {todos
          ? todos.map((todo) => (
              <div key={todo.id} className="jobs">
                <input
                  type="checkbox"
                  onClick={() => handleCheckBox(todo.id)}
                  // checked={todo.done}
                />
                <div
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
        {/* <div className="jobs">
          <input type="checkbox" onClick={() => handleCheckBox(id)} />
          <div
            style={
              jobDone ? { textDecoration: "line-through", color: "grey" } : {}
            }
          >
            todoooo
          </div>
          <button type="button" disabled={!jobDone}>
            delete
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ToDo;
