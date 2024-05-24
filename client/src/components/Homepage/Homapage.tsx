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

  // Get all ToDos
  useEffect(() => {
    const getTodos = async () => {
      const allTodos = await todoApi.getAllTodos();
      setTodos(allTodos);
    };

    getTodos();
  }, [modalOpen]);

  // Mark ToDo as done
  const updateTodoStatus = async (id: string) => {
    const updateStatus = await todoApi.updateTodo(id);
    console.log("updated", updateStatus);
  };

  // Remove ToDo
  const removeTodo = async (id: string) => {
    const deletedTodo = await todoApi.deleteTodo(id);
    console.log("deletedTOdo", deletedTodo);
    const updatedTodoList = await todoApi.getAllTodos();
    setTodos(updatedTodoList);
  };

  // Group todos by header
  const groupedTodos = todos.reduce((groups, todo) => {
    const header = todo.header || "";
    if (!groups[header]) {
      groups[header] = [];
    }
    groups[header].push(todo);
    return groups;
  }, {} as Record<string, ToDo[]>);

  // Sort headers
  const sortedHeaders = Object.keys(groupedTodos).sort();

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

      {todos && todos.length ? (
        sortedHeaders.map((header) => (
          <section className="todo" key={header}>
            <div>
              <h2>{header}</h2>
              <div className="all-tasks">
                {groupedTodos[header].map((todo) => (
                  <Todo
                    key={todo.id}
                    todoText={todo.todo}
                    id={String(todo.id)}
                    removeTodo={removeTodo}
                    updateTodo={updateTodoStatus}
                  />
                ))}
              </div>
            </div>
          </section>
        ))
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Homepage;
