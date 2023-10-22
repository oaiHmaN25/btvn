import { client } from "./client.js"
import { config } from "./config.js"

const { SERVER_AUTH_API } = config;
console.log(SERVER_AUTH_API);
client.setUrl(SERVER_AUTH_API);
const containerLogin = document.querySelector(".container");
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('.signInButton');
const loadingSpinner = document.getElementById("loading");
let page = 1;
let limit = 10;
// signInButton
const singInForm = document.querySelector(".signin");
const signUpForm = document.querySelector(".signup");
// console.log(singInForm);
// console.log(containerLogin);
let blogsData = [];
const signup = document.querySelector(".signupform");
const render = (blogs) => {
    if (checkLogin() === true) {
        renderAfterLogin();
    } else {
        const postEl = document.querySelector(".posts");
    postEl.innerHTML = '';
    const button = document.createElement("button");
    postEl.append(button)
    button.innerText = "Sign In"
    button.classList.add("signin");
    button.addEventListener("click", () => {
        // console.log(`ok`);
         containerLogin.style.display = " block";
        singInForm.style.display = "block";
        signUpForm.style.display = "none";
        postEl.style.display = "none";
    })
    const buttonSignup = document.createElement("button");
    // buttonSignup.append(button)
    buttonSignup.innerText = "Sign Up"
    buttonSignup.classList.add("signup");
    buttonSignup.addEventListener("click", () => {
        console.log(`ok`);
        containerLogin.style.display = " block";
        signUpForm.style.display = "block";
        singInForm.style.display = "none";
        postEl.style.display = "none";
    })
    postEl.append(button);
    postEl.append(buttonSignup)
    blogs.data.forEach(({ id, title, content,userId,createdAt }) => {
        if (postEl) {
            const postItem = document.createElement("div");
            const firstName = userId.name.charAt(0);
            console.log(userId.name);
            console.log(firstName);

            console.log(createdAt);
            const dateObject = new Date(createdAt);
            const hours = dateObject.getHours(); // Lấy giờ
            const minutes = dateObject.getMinutes(); // Lấy phút
            const buoi = hours >= 12 ? "Chiều" : "Sáng";
            const gio12Gio = hours > 12 ? hours - 12 : hours;
            const timeNow = new Date();
            const timePost = timeNow - dateObject;
            const chenhLechPhut = Math.floor(timePost / (1000 * 60));
            const chenhLechGio = Math.floor(chenhLechPhut / 60);
            const chenhLechPhutConLai = chenhLechPhut % 60;
            // console.log(`Chênh lệch: ${chenhLechGio} giờ ${chenhLechPhutConLai} phút`);
            const htmlInner = `<div class="trend">
                    <a href="#">View more that bug</a>
                    <a href="#">${userId.name}</a>
                    <a href="#">${gio12Gio}h  ${buoi} ${minutes} phút</a>
                    <a href="#">${chenhLechGio}h   ${chenhLechPhutConLai}phút trước</a>
                </div>`;
            const html = `<div class="wrap">
                    <p id="1">${firstName}</p>
                    <!-- <p>Hoàng An</p> -->
                    <span>${userId.name}</span>
                        </div>

                `
            postItem.innerHTML += html;
            postItem.classList.add("post-item");
            const h2 = document.createElement("h2");
            const h3 = document.createElement("h3");
            content = regex(content);
            console.log(content);
            h2.innerHTML = content
            h3.innerText = title;
            postItem.appendChild(h2)
            postItem.appendChild(h3);
            const hr = document.createElement("hr");
            postEl.append(postItem);
            postItem.innerHTML += htmlInner;
            postEl.append(hr)
        }
    })
    }
    
};
const getBlogs = async (query = {}) => {
    try {
        const queryString = new URLSearchParams(query).toString();
        const { response, data } = await client.get(`/blogs?${queryString}`);
        
        if (response && response.status === 200) {
            console.log("Data retrieved successfully:", data);
            blogsData = data;
            // console.log(blogsData);
            render(data);
        } else {
            console.error("Failed to get blog data:", response);
        }
    } catch (error) {
        console.error("Error fetching blog data:", error);
    }
};

const renderAfterLogin = () => {
    
        console.log(blogsData);
    containerLogin.style.display = "none";
    
    const postEl = document.querySelector(".posts");
    postEl.style.display = "block"

    postEl.innerHTML = `<h1>Welcome to the logged-in page!</h1>
    <div class="table">
    <form action="#" class="addblog">
        <label for="title">Enter Your title</label>
        <input type="text" class="title" id="title">
        <label for="content">Enter your content</label>
        <div class="content" contenteditable="true"></div>
        <div>
            <button class="write">Write new!</button>
        </div>
        
    </form>
    </div>
    `;
    var form = document.querySelector(".table");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const titleEL = document.querySelector("input#title");
        const contentEL = document.querySelector(".content");
        console.log(title,content);
        var title = titleEL.value;
        var content = contentEL.textContent;
        console.log(titleEL, contentEL);
        const token = localStorage.getItem("access_token");
        if (title && content) {
            addBlog(title, content,token);
        }
        console.log(`ok`);
    });
    const button = document.createElement("button");
    postEl.append(button)
    button.innerText = "Log Out"
    button.classList.add("signin");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        render(blogsData);
    })
    blogs.data.forEach(({ id, title, content,userId,createdAt }) => {
        if (postEl) {
            const postItem = document.createElement("div");
            const firstName = userId.name.charAt(0);
            console.log(userId.name);
            console.log(firstName);

            console.log(createdAt);
            const dateObject = new Date(createdAt);
            const hours = dateObject.getHours(); // Lấy giờ
            const minutes = dateObject.getMinutes(); // Lấy phút
            const buoi = hours >= 12 ? "Chiều" : "Sáng";
            const gio12Gio = hours > 12 ? hours - 12 : hours;
            const timeNow = new Date();
            const timePost = timeNow - dateObject;
            const chenhLechPhut = Math.floor(timePost / (1000 * 60));
            const chenhLechGio = Math.floor(chenhLechPhut / 60);
            const chenhLechPhutConLai = chenhLechPhut % 60;
            // console.log(`Chênh lệch: ${chenhLechGio} giờ ${chenhLechPhutConLai} phút`);
            const htmlInner = `<div class="trend">
                    <a href="#">View more that bug</a>
                    <a href="#">${userId.name}</a>
                    <a href="#">${gio12Gio}h  ${buoi} ${minutes} phút</a>
                    <a href="#">${chenhLechGio}h   ${chenhLechPhutConLai}phút trước</a>
                </div>`;
            const html = `<div class="wrap">
                    <p id="1">${firstName}</p>
                    <!-- <p>Hoàng An</p> -->
                    <span>${userId.name}</span>
                        </div>

                `
            postItem.innerHTML += html;
            postItem.classList.add("post-item");
            const h2 = document.createElement("h2");
            const h3 = document.createElement("h3");
            content = regex(content);
            content.split("");
            h2.innerText = content
            h3.innerText = title;
            postItem.appendChild(h2)
            postItem.appendChild(h3);
            const hr = document.createElement("hr");
            postEl.append(postItem);
            postItem.innerHTML += htmlInner;
            postEl.append(hr)
        }
    })
};

// handleSignIn("vietkunai@gmail.com","viet2k03")
async function handleSignIn(email, password) {
    // loadingEL.classList.remove("is-hidden");
    const { data: tokens } = await client.post("/auth/login", {
      email,
      password,
    });
    console.log(tokens);
    console.log(tokens.message);


    // if (email !== "john@gmail.com" || password !== "changeme") {
    if (tokens.status_code === "FAILED") {
        showErrorPopup(`${tokens.message}`);
    } else {
            const access_token = tokens.data.accessToken;
    const refresh_token = tokens.data.refreshToken;
        // Perform the actual login logic here
        // console.log(access_token, refresh_token);
         localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
        renderAfterLogin();
    }
}
async function getBlogId() {
    const { data: tokens } = await client.get("/blogId");
    console.log(tokens);
}
// getBlogId();
async function registerAccount(email, password, name) {
    const { data: tokens } = await client.post("/auth/register", {
      email,
      password,
      name
    });
    loadingSpinner.style.display = "block";
    const userData = tokens;
    console.log(tokens.status_code);
    if (tokens.status_code === "FAILED") {
        showErrorPopup(`${tokens.message}`);
         loadingSpinner.style.display = "none";
    } else {
         loadingSpinner.style.display = "none";
        // singInForm.style.display = "block";
        // signUpForm.style.display = "none";
    }

    console.log("Registration successful:", userData);

}

getBlogs();

async function addBlog(title,content,token) {
    const { data } = await client.post('/blogs', {title,content},token);
     if (data.code === 200) {
        console.log(`ok`);
        renderAfterLogin();
        titleEL.value = "";
        contentEL.value = "";
     } else if (data.status === 401) {
         const refreshToken = localStorage.getItem("refresh_token");
         const dataBlog = await refreshToken(refreshToken);
         console.log(dataBlog);
       showErrorPopup(`${tokens.message}`);  
  }
}
singInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailEl = e.target.querySelector(".email");
    const passwordEl = e.target.querySelector(".password");
    console.log(e.target);
    const email = emailEl.value;
    const password = passwordEl.value;
    console.log(email, password);
    loadingSpinner.style.display = "block";

    // Add a delay before calling handleSignIn
    setTimeout(() => {
        handleSignIn(email, password);

        // Hide the loading spinner when the process is complete
        loadingSpinner.style.display = "none";
    }, 3000); 
    

})

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameEl = e.target.querySelector(".nameS");
    const emailEl = e.target.querySelector(".emailS");
    const passwordEl = e.target.querySelector(".passwordS");
    console.log(e.target);
    const name = nameEl.value;
    const email = emailEl.value;
    const password = passwordEl.value;
    registerAccount(email,password,name);
    console.log(name,email,password);
})
function showErrorPopup(message) {
    const errorPopup = document.getElementById("error-popup");
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = message;
    errorPopup.style.display = "block";

    // Automatically close the popup after 5 seconds
    setTimeout(() => {
        closePopup();
    }, 3000); // 5000 milliseconds (5 seconds)
}

// Function to close the error popup
function closePopup() {
    const errorPopup = document.getElementById("error-popup");
    errorPopup.style.display = "none";
}

function regex (content) {
    const patternEmail = /([a-z\.0-9-_]{2,}@[a-z-_\.0-9]+\.[a-z]{2,})/g
    const patternPhone = /((0|\+84)\d{9})/g;
    const patternYoutube =  /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/g;
    // const patternLink = //;
    const patternSpace = /\s/g;
    const patternLine = /\n/g;
    const patternLink = /((https?:\/\/)|(www\.))[^\s]+/g;
    const ytbLink = content.match(patternYoutube);
    if (ytbLink) {
        contentYtb = content.replace(patternYoutube, `<iframe width="560" height="315" src="$1" frameborder="0" allowfullscreen></iframe>`)
        console.log(contentYtb);
    }
    // else if (content.match(patternPhone)) {
    //     content = content.replace(patternPhone, `<a href =""el:$1" >$1</a>`);
    //     console.log(content);
    // } 
    // else if (content.match(patternEmail)) {
    //     content = content.replace(patternEmail, `<a href ="email:$1">$1</a>`)
    //     console.log(content);
    // }
    // else if (content.match(patternSpace)) {
    //     content = content.replace(patternSpace, " ");
    //     console.log(content);
    // }
    // else if (content.match(patternLine)) {
    //     content = content.replace(patternLine, "\n");
    //     console.log(content);
    // }
   
   
  
    
    return content;

}
async function  refreshToken(refreshToken) {
    const { data } = await client.post('/auth/refresh-token', { refreshToken });
    if (data.code === 200) {
        return data.token;
    } else if (data.code === 401) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        render(blogsData);
    }
}

function checkLogin() {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
        return true
    } else {
        return false;
    }
}
const loaderP = document.querySelector(".loader-page")
function showLoading(){
    loaderP.classList.add("show");
    // console.log();
    setTimeout(()=>{
        loaderP.classList.remove("show");

        setTimeout(async ()=>{
            page++;
            const newData = await getBlogs({ page:page, limit:10 });
            // render(newData);

        },300)
    },1000)
}
window.addEventListener("scroll", ()=>{
    const  {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight ){
        showLoading();
        console.log(page);
        console.log(limit);
    }
})