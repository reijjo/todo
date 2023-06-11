import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ToDo from "../components/Todo";
import { Provider } from "react-redux";
import store from "../app/store";
import userEvent from "@testing-library/user-event";

describe("ToDo component", () => {
  const mockHandler = jest.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <Provider store={store}>
        <ToDo />
      </Provider>
    );
  });
  test("render content", () => {
    // render(
    //   <Provider store={store}>
    //     <ToDo />
    //   </Provider>
    // );

    const otsikko = screen.getByText("Do It!");
    const otsikkoClass = document.getElementsByClassName("otsikko");
    const todoInput = screen.getByPlaceholderText("what to do...?");
    const todoButton = screen.getByText("add");

    expect(otsikko).toBeInTheDocument();
    expect(otsikkoClass).toHaveLength(1);
    expect(todoButton).toBeInTheDocument();
    expect(todoInput).toBeInTheDocument();
  });

  test("Before adding a todo", () => {
    const newTodo = screen.queryByText("NEW TODO WOO!");

    expect(newTodo).not.toBeInTheDocument();
  });

  test("Adding a todo", async () => {
    // render(
    //   <Provider store={store}>
    //     <ToDo />
    //   </Provider>
    // );

    const todoInput = screen.getByPlaceholderText("what to do...?");
    const todoButton = screen.getByTestId("todo-button");

    expect(todoInput).toBeInTheDocument();
    expect(todoButton).toBeInTheDocument();

    await user.type(todoInput, "NEW TODO WOO!");
    await user.click(todoButton);

    const newTodo = screen.queryByText("NEW TODO WOO!");

    expect(newTodo).toBeInTheDocument();
  });

  test("After todo is done", async () => {
    const checked = screen.getByTestId("done?");
    expect(checked).toBeInTheDocument();

    await user.click(checked);

    const todoText = screen.getByText("NEW TODO WOO!");

    expect(todoText).toHaveStyle({
      textDecoration: "line-through",
      color: "var(--col2brown)",
    });

    await user.click(checked);
    expect(todoText).not.toHaveStyle({});
  });

  test("Delete todo", async () => {
    const deleteButton = screen.getByText("delete");
    expect(deleteButton).toBeDisabled();

    const deletedTodo = screen.queryByText("NEW TODO WOO!");
    expect(deletedTodo).toBeInTheDocument();

    const checked = screen.getByTestId("done?");
    await user.click(checked);
    expect(deleteButton).not.toBeDisabled();

    await user.click(deleteButton);
    expect(deletedTodo).not.toBeInTheDocument();
  });
});
