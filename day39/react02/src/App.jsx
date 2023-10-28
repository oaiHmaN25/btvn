// import CheckGmail from "./Components/CheckGmail";
import  checkgmail  from "../src/assets/Js/checkemail"
// import Default from "./Components/Default";
import TodoList from "./Components/TodoList";
// import TodoList from "./Components/TodoList";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Render from "./Components/Render";
// import Default from "./Components/Default";


function App() {
  
  checkgmail();
  
  return <TodoList />;
}

export default App
