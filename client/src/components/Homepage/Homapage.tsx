import { useEffect, useState } from "react";
import MyButton from "../common.tsx/MyButton";
import Modal from "./Modal";
import Todo from "./Todo";
import "./Homepage.css";
import todoApi from "../../api/todoApi";
import { ToDo } from "../../utils/types";

const Homepage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [todos, setTodos] = useState<ToDo[]>([]);

  console.log("MODAL OPEN>?", modalOpen);

  // Get all ToDos
  useEffect(() => {
    const getTodos = async () => {
      const allTodos = await todoApi.getAllTodos();
      setTodos(allTodos);
    };

    getTodos();
  }, []);

  // Sort and group todos by header
  const sortedTodos = todos.sort((a, b) =>
    String(a.header).localeCompare(String(b.header))
  );
  const groupedTodos: { [key: string]: ToDo[] } = {};
  sortedTodos.forEach((todo) => {
    if (!groupedTodos[String(todo.header)]) {
      groupedTodos[String(todo.header)] = [];
    }
    groupedTodos[String(todo.header)].push(todo);
  });
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
      <section className="todo">
        {/* {Object.entries(groupedTodos).map(([header, todos]) => (
          <div key={header}>
            <h2>{header}</h2>
            <div className="all-tasks">
              {todos.map((todo) => (
                <Todo key={todo.id} todoText={todo.todo} />
              ))}
            </div>
          </div>
        ))} */}
        <h2>Header</h2>
        <div className="all-tasks">
          <Todo
            todoText="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos quos debitis quam magni excepturi ullam id alias sit
                laudantium?"
          />

          <Todo todoText="osta makkaraa" />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
