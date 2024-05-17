import { useEffect, useState } from "react";
import MyButton from "../common.tsx/MyButton";
import Modal from "./Modal";
import Todo from "./Todo";
import "./Homepage.css";
import todoApi from "../../api/todoApi";
import { ToDo } from "../../utils/types";

const Homepage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [todos, setTodos] = useState<{ _id: string; todos: ToDo[] }[]>([]);

  console.log("MODAL OPEN>?", modalOpen);

  // Get all ToDos
  useEffect(() => {
    const getTodos = async () => {
      const allTodos = await todoApi.getAllTodos();
      setTodos(allTodos);
    };

    getTodos();
  }, [modalOpen]);

  console.log(
    "Group IDs",
    todos.map((group) => group._id)
  );
  console.log("todos", todos);

  // Return
  return (
    <div className="wrapper-home">
      {modalOpen && <Modal setModalOpen={setModalOpen} />}

      <div className="add-new">
        <MyButton
          className="btn btn-big"
          buttonText="Add a new ToDo"
          onClick={() => setModalOpen(true)}
          type="button"
        />
      </div>

      {todos.map((group) => (
        <section className="todo" key={group._id}>
          <div>
            <h2>{group._id || ""}</h2>
            <div className="all-tasks">
              {group.todos.map((todo) => (
                <Todo key={todo._id} todoText={todo.todo} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Homepage;
