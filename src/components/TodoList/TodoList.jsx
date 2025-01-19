import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import s from "./TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("todos"));
    if (saveData?.length) {
      return saveData;
    }
    return [];
  });
  // const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) ?? []); easy alternative to what is written above
  const [newString, setNewString] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    const newData = todos.filter((item) => item.id != id);
    setTodos(newData);
  };

  const addTodo = () => {
    const newObj = {
      id: crypto.randomUUID(),
      todo: newString,
    };
    setTodos((prev) => [...prev, newObj]);
    setNewString("");
  };

  return (
    <div>
      <div className="flex">
        <input
          value={newString}
          onChange={(e) => setNewString(e.target.value)}
          className={s.input}
        />
        <button onClick={addTodo} className="btn border">
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map((item) => (
          <TodoItem key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
