import { createContext, useState } from "react"
import NumberApp from "./components/NumberApp"
import ReactSwitch from "react-switch";
import "../src/assets/style.css";
// export NumberApp 
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <NumberApp />
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App
