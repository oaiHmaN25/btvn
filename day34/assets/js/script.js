document.addEventListener("DOMContentLoaded", async function () {
const btnAdd = document.querySelector(".addtodosbtn");
const modal = document.querySelector(".modal-box");
const btnCancel = document.querySelector(".cancel");
const btnDelete = document.querySelector(".remove");
const btnEdit = document.querySelector(".edit");
const btnCheck = document.querySelector(".complete")
const completeTask = document.querySelector(".complete");
const todoTask = document.querySelector(".todo");
const work = document.querySelector(".work");


const apiUrl = `http://localhost:3000/todos`;

const getTasks = async () =>{
    const response = await fetch(apiUrl);
    // console.log(response);
    //response => Trả về thông tin của response sau khi gọi API 
    const tasks = await response.json();
    //Response Message Body
    // console.log(tasks);
    const buttonItem = `<div class="icon"> 
            <button class="remove"><i class="fa-solid fa-trash-can"></i></button>
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="complete"> <i class="fa-solid fa-square-check"></i></button>
        </div>`
    // todoTask.innerHTML = "";
    // tasks.forEach(({ name, id }) => {
    //     const todo = document.createElement("p");
    //     todo.textContent = name;
    //     const editButton = document.createElement("button");
    //     editButton.innerHTML =
    //     "<i class='fa-solid fa-pen-to-square'></i>";
    //     editButton.addEventListener("click", () => editTask(id));

    //     const deleteButton = document.createElement("button");
    //     deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    //     deleteButton.addEventListener("click", () => deleteTask(id));

    //     const completeButton = document.createElement("button");
    //     completeButton.innerHTML = `<span><i class="fa-solid fa-list"></i></span>`;
    //     completeButton.addEventListener("click", () => completeTask(id));
    //     todoTask.appendChild(todo);
    //     todoTask.appendChild(editButton);
    //     todoTask.appendChild(deleteButton);
    //     todoTask.appendChild(completeButton);
    // });
    todoTask.innerHTML = users.map(({ name }) =>
        `<p1>${name}</p1>
        <div class="icon"> 
            <button class="remove"><i class="fa-solid fa-trash-can"></i></button>
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="complete"> <i class="fa-solid fa-square-check"></i></button>
        </div>`
    ).join("");
  };
    // todoTask.appendChild(tasks)


getTasks();

const getTask = async (id) =>{
    const response = await fetch(apiUrl + "/" + id);
    const task = await response.json();
    console.log(task);
}
getTask(2);

const postTask = async (data) =>{
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers :{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data)
    });
    if(response.ok){
        console.log('Thêm thành công');
    }
};
const deleteTask = async (taskid) =>{
    const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers :{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(taskid)
    });
    if(response.ok){
        console.log('Thêm thành công');
    }
};
btnAdd.addEventListener("click", function(){
    modal.classList.add("show")
})

btnCancel.addEventListener("click", function(){
    modal.classList.remove("show");
})
// iDelete.addEventListener("click", function(){
//     modal.classList.add("show")
// })
// iEdit.addEventListener("click", function(){
//     modal.classList.add("show");
// })
completeTask.addEventListener("click", function(){
    console.log(`ok`);
});

});

