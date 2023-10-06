import { config } from "./config.js";      
import { client } from "./client.js";
const loading = document.querySelector(".loader");
const postItem = document.querySelector(".post-item");
let numPost = 10;
let page = 1;

const render = (posts) =>{
    const postEl = document.querySelector(".posts");
    // postEl.innerText = "";
    // if(posts.length){
        posts.forEach( ({id,title,content }) => {
            const postItem = document.createElement("div");
            postItem.classList.add("post-item");
            const h2 = document.createElement("h2");
            const a = document.createElement("a");
            a.innerText = title;
            a.href ="#";
            h2.appendChild(a);
            postItem.appendChild(h2);
            const p = document.createElement("p");
            p.innerText = content;
            postItem.appendChild(p);
            postEl.append(postItem);
        });
    // }
}
const getPosts = async (query = {}) =>{
    const queryString = new URLSearchParams(query).toString();
    const {response,data}  = await client.get(`/posts?${queryString}`);
    // console.log(data);
    console.log(data);
    render(data);
    // return data;
}

getPosts({
    _page : page,
    _limit : 10
});

function showLoading(){
    loading.classList.add("show");
    setTimeout(()=>{
        loading.classList.remove("show");

        setTimeout(async ()=>{
            page++;
            const newData = await getPosts({ _page: page, _limit: 10 });
            // render(newData);

        },300)
    },1000)
}
window.addEventListener("scroll", ()=>{
    const  {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight - 5){
        showLoading();
    }
})


// async function loadInitialPosts() {
//   const initialData = await getPosts({ _page: page, _limit: 10 });
//   render(initialData);
// }

// // Load initial posts
// loadInitialPosts();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});