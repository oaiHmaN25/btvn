const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");


inputBox.addEventListener("keyup", function(){
    let userEnteredValue = inputBox.value;
    if(userEnteredValue.trim() != 0){
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
})

showTasks();
addBtn.addEventListener("click", function(){
    var userEnteredValue = inputBox.value;

    var getLocalStorageData = localStorage.getItem("New todo");
    if(getLocalStorageData == null){
        
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("New todo", JSON.stringify(listArray)); 
    showTasks();
    addBtn.classList.remove("active");
})
    

function showTasks(){
    var getLocalStorageData = localStorage.getItem("New todo");
    if(getLocalStorageData == null){
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
  var newLiTag  = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}
    <span class="icon" onclick="editTask(${index})"> <i class="fa-solid fa-pen-to-square edit"> </i></span>
    <span class="icon" onclick="deleteTask(${index})">  </i> <i class="fas fa-trash delete"></i></span>
    </li>`;
  });
  todoList.innerHTML = newLiTag; 
  inputBox.value = ""; 
}

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); 
  localStorage.setItem("New todo", JSON.stringify(listArray));
  showTasks();
}
function editTask(index){
  let getLocalStorageData = localStorage.getItem("New todo");
  if(getLocalStorageData.length > 0){
      getLocalStorageData[index].name = inputBox.value;
      addBtn.addAttribute("index");
  } 
  // listArray = JSON.parse(getLocalStorageData);
  // listArray.splice(index, 1); 
  // localStorage.setItem("New todo", JSON.stringify(listArray));
  showTasks();
}

deleteAllBtn.addEventListener("click",function(){
    listArray = []; 
    localStorage.setItem("New todo", JSON.stringify(listArray)); 
    showTasks(); 
})
  