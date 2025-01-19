import s from "./TodoList.module.css";

const TodoItem = ({ id, todo, handleDelete }) => {
  return (
    <li className={s.item}>
      <span>{todo}</span>
      <button onClick={() => handleDelete(id)} className="btn border">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
