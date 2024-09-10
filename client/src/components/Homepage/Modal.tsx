import { ChangeEvent, Dispatch, SyntheticEvent, useState } from "react";
import MyButton from "../common/MyButton";
import "./Modal.css";
import TextInput from "../common/TextInput";
import { ToDo } from "../../utils/types";
import todoApi from "../../api/todoApi";

interface ModalProps {
  setModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setModalOpen }: ModalProps) => {
  const [todo, setTodo] = useState<ToDo>({
    header: "",
    todo: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTodo((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const addToDo = async (event: SyntheticEvent) => {
    event.preventDefault();

    const newTodo = {
      header: todo.header,
      todo: todo.todo,
    };

    const added = await todoApi.addNewTodo(newTodo);

    if (added) {
      setModalOpen(false);
    }

    console.log("todo", todo);
  };

  return (
    <div className="modal-wrapper">
      <div className="addModal">
        <h1>ToDo</h1>
        <form onSubmit={addToDo}>
          <TextInput
            labelHeader={todo.header || "Header"}
            labelText="(optional)"
            id="header"
            name="header"
            placeholder="esim. Ostoslista..."
            onChange={handleChange}
          />

          <TextInput
            labelText="Do what?"
            id="todo"
            name="todo"
            placeholder="esim. maitoa"
            onChange={handleChange}
          />

          <div className="form-buttons">
            <MyButton
              className="btn btn-del"
              buttonText="Close"
              onClick={() => setModalOpen(false)}
              type="button"
            />
            <MyButton
              className="btn"
              buttonText="Add New!"
              type="submit"
              style={{ margin: "8px 0 8px 24px" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
