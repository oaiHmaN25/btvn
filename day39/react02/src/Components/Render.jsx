
// import { client } from "../assets/Js/Client.js";
// import TodoList from "../Components/TodoList.jsx";
// import { config } from "./config.js";
import "../assets/Style.css";
// import Default from "./Default.jsx";
export const Render = (msg) => {
    // const toastBoxRef = useRef(null);
  let toastBox = document.getElementById("toastBox");
  console.log(toastBox);
  // let successMessage = '<i class="fa-solid fa-circle-check"></i> Success';
  // let errorMessage = '<i class="fa-solid fa-circle-xmark"></i> Error ! Email không tồn tại trong dữ liệu';
  
  // let invalidMessage = '<i class="fa-solid fa-circle-exclamation"></i> Invalid ! Vui lòng nhập gmail.';
  // async function showToast(msg) {
    
    let toast = document.createElement("div");
    toast.innerHTML = "";
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if (msg.includes('Error')) {
      toast.classList.add("error");
    }
    if (msg.includes("Invalid")) {
      toast.classList.add("invalid")
    }
    setTimeout(() => {
      toast.remove()
    },6000)
       
  

  
  
        
    return (
      <>
        {/* <form onSubmit={checkGmail}>
          <input type="text" name="email" />
          <button>Check</button>
        </form> */}
        {/* <button onClick={showToast(successMessage)}>Success</button>
        <button onClick={showToast(errorMessage)}>Error</button>
        <button onClick={showToast(invalidMessage)}>Invalid</button> */}
        <div id="toastBox"></div>
      </>
    );
}
export default Render
