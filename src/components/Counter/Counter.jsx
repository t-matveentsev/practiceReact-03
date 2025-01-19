import { useEffect, useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  // Еффект спрацює лише після першого рендеру! І ВСЕ!
  useEffect(() => {
    console.log("Pages created");
  }, []);

  // Еффект буде спрацьовувати перший раз після рендеру і всі наступні рендери, коли змінився хоч один елемент залежностей (add, delete, update)
  useEffect(() => {
    if (counter === 0) return;
    console.log("Counter change", counter);
    if (counter > 5) {
      setCounter(0);
    }
  }, [counter]);

  // Еффект буде спрацьовувати перший раз після рендеру і тоді, коли ми міняємо крок
  useEffect(() => {
    console.log("Step change:", step);
  }, [step]);

  // Еффект буде працювати кожен раз коли міняється хоч щось з залежностей
  useEffect(() => {
    console.log("Change counter or step");
  }, [counter, step]);

  const handleResetClick = () => {
    setCounter(0);
    setStep(1);
  };
  const handlePlusClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleMinusClick = () => {
    if (counter < 1) {
      return alert("No, you can`t clicked more");
    }
    setCounter((prev) => prev - 1);
  };
  return (
    <div className={s.container}>
      <h2 className={s.title}>{counter}</h2>
      <input value={step} onChange={(e) => setStep(+e.target.value)} />
      <div className={s.buttons}>
        <button className={s.minus} onClick={handleMinusClick}>
          minus
        </button>
        {counter !== 0 && (
          <button className={s.reset} onClick={handleResetClick}>
            reset
          </button>
        )}
        <button className={s.plus} onClick={handlePlusClick}>
          plus
        </button>
      </div>
    </div>
  );
};

export default Counter;
