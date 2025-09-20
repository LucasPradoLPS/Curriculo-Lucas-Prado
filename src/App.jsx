import { useState } from "react";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import "./animations.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <>
      <div className={`min-h-screen w-full flex flex-col lg:flex-row subpixel-antialiased transition-all duration-300 ${darkMode ? "bg-black" : "bg-white"}`}>
        <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
      </div>
    </>
  );
}

export default App;
