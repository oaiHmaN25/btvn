import Shop from "./Components/Shop"
import checkgmail from "../src/assets/Js/checkemail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { AppProvider } from "./assets/Context/AppContext";
function App() {
  checkgmail();

  return (
    <>
      <Shop />
      <ToastContainer/>
    </>
  )
}

export default App
