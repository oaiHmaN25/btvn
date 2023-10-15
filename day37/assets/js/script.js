import { client } from "./client.js"
import { config } from "./config.js"

const { SERVER_AUTH_API } = config;
console.log(SERVER_AUTH_API);
client.setUrl(SERVER_AUTH_API);
const containerLogin = document.querySelector(".container");
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('.signInButton');
// signInButton
const singInForm = document.querySelector(".signin");
const signUpForm = document.querySelector(".signup");
// console.log(singInForm);
// console.log(containerLogin);
let blogsData = [];
const signup = document.querySelector(".signupform");
const render = (blogs) => {
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
    blogs.data.forEach(({ id, title, content,userId }) => {
        if (postEl) {
            const postItem = document.createElement("div");
            const firstName = userId.name.charAt(0);
            console.log(firstName);
            const htmlInner = `<div class="trend">
                    <a href="#">View more that bug</a>
                    <a href="#">${userId.name}</a>
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
            const  h3= document.createElement("h3");
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
const getBlogs = async (query = {}) => {
    try {
        const queryString = new URLSearchParams(query).toString();
        const { response, data } = await client.get(`/blogs?${queryString}`);
        
        if (response && response.status === 200) {
            console.log("Data retrieved successfully:", data);
            blogsData = data;
            console.log(blogsData);
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
        
        if (title && content) {
            addBlog(title, content);
        }
        console.log(`ok`);
    });
    const button = document.createElement("button");
    postEl.append(button)
    button.innerText = "Sign Out"
    button.classList.add("signin");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        render(blogsData);
    })
    blogsData.data.forEach(({ id, title, content,userId }) => {
        if (postEl) {
            const postItem = document.createElement("div");
            const firstName = userId.name.charAt(0);
            console.log(firstName);
            const htmlInner = `<div class="trend">
                    <a href="#">View more that bug</a>
                    <a href="#">${userId.name}</a>
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
            const  h3= document.createElement("h3");
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
    
    const access_token = tokens.data.accessToken;
    const refresh_token = tokens.data.refreshToken;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    console.log(access_token,refresh_token);
    // render(tokens.data)
    
    renderAfterLogin();

    console.log(tokens.data);
}
async function getBlogId() {
    const { data: tokens } = await client.get("/blogId");
    console.log(tokens);
}
getBlogId();
async function registerAccount(email, password, name) {
    const { data: tokens } = await client.post("/auth/register", {
      email,
      password,
      name
    });
    const userData = tokens;
    console.log(tokens.status_code);
    if (tokens.status_code === "FAILED") {
        // console.log(`ok`);
        const div = document.createElement("div");
        div.innerText = "Tài khoản đã tồn tại";
        signup.append(div);
        setTimeout( document.location.reload() ,10000)
    } else {
        singInForm.style.display = "block";
        signUpForm.style.display = "none";
    }

        // Handle the response data accordingly
    console.log("Registration successful:", userData);

}

getBlogs();
// addBlog("Test");
// async function handleNewBlog(title, content) {
//   const { response } = await client.post("/blogs",  );
//   if (response.ok) {
//     renderBlogs();
//     titleEL.value = "";
//     contentEL.value = "";
//   }
// }
async function addBlog(title,content) {
    const { response } = await client.post('/blogs', {title,content});
    if (response.ok) {

        console.log(`ok`);
    renderAfterLogin();
    titleEL.value = "";
    contentEL.value = "";
  }
}
singInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailEl = e.target.querySelector(".email");
    const passwordEl = e.target.querySelector(".password");
    console.log(e.target);
    const email = emailEl.value;
    const password = passwordEl.value;
    // blogsData.data.forEach(({ emailL, passwordL }) => {
    //     if (emailL !== email || passwordL !== password) {
    //         // alert("Tài khoản khong tồn tại")
    //         document.location.reload();
    //     }else {
        
    // }
        
    // }) 
    console.log(email, password);
    handleSignIn( email, password );
   

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
    registerAccount(email,name,password);
    console.log(name,email,password);
})
