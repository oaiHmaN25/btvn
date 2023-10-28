

export default function Toast(msg) {
   let toastBox = document.getElementById("toastBox");
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
    <div id="toastBox"></div>
  )
}
