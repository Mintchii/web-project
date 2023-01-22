import React from "react";
import Todo from "../todo/Todo";
import { useState, useEffect } from "react";

const allTodos = [
  { description: "Einkaufen", done: true },
  { description: "Programmieren", done: false },
  { description: "Sport", done: false },
  { description: "kochen", done: false },
];

const TodoList = () => {
  const [openCount, countOpenTodos] = useState(0);
  const [todos, setTodos] = useState(() => {
    const items = localStorage.getItem("items");
    const parsed = JSON.parse(items);
    return parsed || [];
  });
  const [textinput, setTextInput] = useState("");

  const changeText = (e) => {
    setTextInput(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, { description: textinput, done: false }];
    setTodos(newTodos);
    setTextInput("");
  };

  const countOpen = () => {
    const doneTodos = todos.filter((item) => {
      return !item.done;
    });
    countOpenTodos(doneTodos.length);
  };

  const changeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].done) {
      newTodos[index].done = false;
    } else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    countOpen();
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="shadow-sm hover:shadow-lg">
      <div className="text-center bg-gray-900 text-white text-3xl py-4 font-semibold">
        <h1>TodoList</h1>
        <h2>Offene Todos: {openCount}</h2>
        <form className="grid grid-cols-3 p-2">
          <input
            onChange={changeText}
            value={textinput}
            type="text"
            placeholder="Neues Todo..."
            className="col-span-2 text-gray-900"
          />
          <input
            type="submit"
            onClick={submit}
            className="col-span-1 bg-slate-300 text-gray-900 cursor-pointer"
            value="Add Todo"
          />
        </form>
      </div>
      {todos.map((item, index) => {
        return (
          <Todo
            key={index}
            description={item.description}
            done={item.done}
            index={index}
            onChangeTodo={changeTodo}
            onDeleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
