

export default function Toast(msg) {
  //  let toastBox = document.getElementById("toastBox");
  // let toast = document.createElement("div");
    // toast.innerHTML = "";
  // toast.classList.add("toast");
  console.log(msg);
  if (msg) {
    // const toast = document.querySelector(".toast");
    let toastBox = document.getElementById("toastBox");
    let toast = document.createElement("div");
    console.log(msg);
    console.log(`ok`);
    if (toastBox) {
      toast.innerHTML = msg;
      toast.classList.add("toast");
      if (msg.includes("Error")) {
        toast.classList.add("error");
      }
      if (msg.includes("Invalid")) {
        toast.classList.add("invalid");
      }
      setTimeout(() => {
        toast.remove();
      }, 6000);
    }
    
  } else {
    console.log(`false`);
  }
    // toastBox.appendChild(toast);
    
        
  
  return (
    <div id="toastBox">
      {/* <div className="toast"></div> */}
    </div>
  )
}
