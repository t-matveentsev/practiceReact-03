import { useState } from "react";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import LoginForm from "./LoginForm/LoginForm";
import FeedbackForm from "./FeedbackForm/FeedbackForm";

export default function App() {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };
  const [lang, setLang] = useState("uk");

  return (
    <>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <FeedbackForm />
    </>
  );
}
