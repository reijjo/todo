import { useState } from "react";
import MyButton from "../common.tsx/MyButton";
import Modal from "./Modal";
import Todo from "./Todo";
import "./Homepage.css";

const Homepage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  console.log("MODAL OPEN>?", modalOpen);

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

      <section className="todo">
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

      <section className="todo">
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

      <section className="todo">
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

      <section className="todo">
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

      <section className="todo">
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
