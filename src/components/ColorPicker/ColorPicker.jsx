import s from "./ColorPicker.module.css";
import colors from "../../assets/color.json";
import { useState } from "react";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("White");

  const handleChangeColor = (value) => {
    setCurrentColor(value);
  };

  return (
    <section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
      <div>
        <h2 className={s.title}>Current color: {currentColor}</h2>
        <ul className={s.list}>
          {colors.map((item) => (
            <li
              onClick={() => handleChangeColor(item.color)}
              className={s.item}
              key={item.id}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColorPicker;
