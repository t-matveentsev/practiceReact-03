import Gallery from "./components/Gallery/Gallery";
import Counter from "./components/Counter/Counter";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import TodoList from "./components/TodoList/TodoList";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Gallery />
      <Counter />
      <ColorPicker />
      <TodoList />
      <button style={{ color: "black" }} onClick={openModal}>
        Open modal
      </button>
      {isOpen && <Modal closeModal={closeModal}>Sale auto</Modal>}
    </div>
  );
}
