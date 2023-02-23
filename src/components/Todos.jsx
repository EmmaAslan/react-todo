import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const Todos = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    let newTodoItems = [...todoList];

    let newTodoItem = {
      id: Date.now(),
      label: newTodo,
      complete: false,
    };

    newTodoItems.push(newTodoItem);
    setTodoList(newTodoItems);
  };

  let todoValue = (e) => {
    setNewTodo(e.target.value);
  };

  const completeTodo = (id) => {
    let updatedTodoList2 = [...todoList];
    updatedTodoList2.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = true;
      }
    });
    setTodoList(updatedTodoList2);
  };

  const deleteTodo = (id) => {
    let updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="container">
      <div className="todoContainer">
        <h1>Todo List</h1>
        <p>Total number of todos: {todoList.length}</p>
        <div className="todoList">
          {todoList.map((todo) => (
            <ul>
              <li key={todo.id} className="list">
                <span className={todo.complete === true && "true"}>
                  {todo.label}
                </span>
                <div className="todoButtons">
                  {todo.complete === true ? (
                    <button disabled className="disabled">
                      <FaCheck />
                    </button>
                  ) : (
                    <button
                      className="activeButton"
                      onClick={() => {
                        completeTodo(todo.id);
                      }}
                    >
                      <FaCheck />
                    </button>
                  )}

                  <button
                    className="activeButton"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="newTodo">
        <h2>New todo</h2>
        <div className="inputButton">
          <input
            type="text"
            id="todo"
            placeholder="New todo"
            onChange={todoValue}
          />
          {newTodo.length ? (
            <button className="activeAdd" onClick={addTodo}>
              Add
            </button>
          ) : (
            <button disabled>Add</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
