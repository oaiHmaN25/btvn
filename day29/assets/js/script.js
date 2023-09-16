 var list = [ 
     "Nhập môn lập trình web",
    "Giới thiệu khóa học HTML, CSS",
    "Lập trình web là gì? Thiết kế web là gì?",
    "Lộ trình học lập trình web Fullstack",
    "Phương pháp học lập trình hiệu quả",
    "Giới thiệu về ngôn ngữ HTML",
    "Cấu trúc trang HTML, cấu trúc thẻ HTML, cách học và nhớ các thẻ HTML",
    "Các loại thẻ HTML, các nhóm thẻ HTML",
    "Các thẻ HTML hay dùng trong nhóm Block",
    "Các thẻ HTML hay dùng trong nhóm Inline",
    "Giới thiệu về ngôn ngữ CSS",
    "Cấu trúc trang CSS, cấu trúc thẻ CSS, cách học và nhớ các thẻ CSS",
    "Các loại thẻ CSS, các nhóm thẻ CSS",
    "Các thẻ CSS hay dùng trong nhóm Block",
    "Các thẻ CSS hay dùng trong nhóm Inline"
] 
var listModule = [
    "Nhập môn lập trình web",
    "Giới thiệu về ngôn ngữ HTML",
    "Giới thiệu về ngôn ngữ CSS",
]


var dragged;
var listhead = document.querySelector(".listhead");
var indexItem = 0;
var indexModule = 0;

listModule.forEach((value, indexModule) => {
     var p = document.createElement("p");
    p.textContent = `Module ${indexModule + 1}: ${value}`;
    p.classList.add("draggable-module");
    p.draggable = true;
    p.addEventListener("dragstart", function(event) {
        dragged = this;
        var module = document.querySelectorAll(".draggable-module");
        module.forEach((element,index) =>{
        this.classList.add("hover");
    })
    });
    p.addEventListener("dragend", function(event) {
        dragged = null;
         var moduleItems = document.querySelectorAll(".draggable-module");
        moduleItems.forEach((item, itemIndex) => {
            item.innerHTML = `Module ${itemIndex + 1}: ${item.innerText.split(": ")[1]}`;
            this.classList.remove("hover")
        });
        
    });

    listhead.appendChild(p);
})



list.forEach((value, indexItem) => {
    var p = document.createElement("p");
    p.innerHTML = `Bài ${indexItem + 1}: ${value}`;
    p.classList.add("draggable-item");
    p.draggable = true;

    p.addEventListener("dragstart", function(event) {
        dragged = this;
        var allItems = document.querySelectorAll(".draggable-item");
        allItems.forEach((element,index) =>{
            this.classList.add("active");
        })
    // console.log(module);
    // console.log(`ok`);
    });
    p.addEventListener("dragend", function(event) {
        dragged = null;
        var allItems = document.querySelectorAll(".draggable-item");
        allItems.forEach((item, itemIndex) => {
            item.innerHTML = `Bài ${itemIndex + 1}: ${item.innerText.split(": ")[1]}`;
            this.classList.remove("active");
        });
            
    });

    listhead.appendChild(p);
});

listhead.addEventListener("dragover", function(event) {
    event.preventDefault();
    
});

// Event listener for when dropping
listhead.addEventListener("drop", function(event) {
    event.preventDefault();
    if (dragged) {
        var targetElement = event.target;
        console.log(targetElement);
        listhead.insertBefore(dragged, targetElement );    
    }
});