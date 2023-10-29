// import CheckGmail from "./Components/CheckGmail";
import  checkgmail  from "../src/assets/Js/checkemail"
// import Default from "./Components/Default";
import TodoList from "./Components/TodoList";
// import TodoList from "./Components/TodoList";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Render from "./Components/Render";
// import Default from "./Components/Default";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  checkgmail();
  
  return (
    <>
      <TodoList />
      <ToastContainer />
    </>
  );
}

export default App
