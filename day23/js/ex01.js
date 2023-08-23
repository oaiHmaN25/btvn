var actions = document.querySelector(".action-link");
var modalBox = document.querySelector(".modal-box");
var modalOverlay = modalBox.querySelector(".overlay");
var btnLogin = document.querySelector(".login-form");
var btnRegister = document.querySelector(".register-form");
var login = document.querySelector(".login");
var register = document.querySelector(".register");



actions.addEventListener("click",function(){
     modalBox.classList.add("show");
})

modalOverlay.addEventListener("click", function () {
  modalBox.classList.remove("show");
});

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    modalBox.classList.remove("show");
  }
});

btnRegister.addEventListener("click",function(){
    login.classList.add("content-1");
    register.classList.add("content-1");
})
btnLogin.addEventListener("click",function(){
    login.classList.remove("content-1");
    register.classList.remove("content-1");
})
// function validateEmail(email) {
//   var res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//   return res.test(String(email).toLowerCase());
// }

var form = document.querySelectorAll(".form-group");
var fullname =  document.getElementById("fullname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var success = document.querySelector(".form-message")

form.addEventListener("click", function () {
  if(fullname === "" || email.value === '' || password.value === '' ){
      form.classList.add("error");
  } 
 
}
)