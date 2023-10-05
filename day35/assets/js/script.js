import { config } from "./config.js";      
import { client } from "./client.js";

const postItem = document.querySelector(".post-item");
let numPost = 10;
// function loadPost(numPost){
//     let i  = 0;
//     while(i<numPost){
//         const 
//     }
// }
const render = (posts) =>{
    const postEl = document.querySelector(".posts");
    postEl.innerText = "";
    if(posts.length){
        posts.forEach( ({id,title,excerpt }) => {
            const postItem = document.createElement("div");
            postItem.classList.add("post-item");
            const h2 = document.createElement("h2");
            const a = document.createElement("a");
            a.innerText = title;
            a.href ="#";
            h2.appendChild(a);
            postItem.appendChild(h2);
            const p = document.createElement("p");
            p.innerText = excerpt;
            postItem.appendChild(p);
            postEl.append(postItem);
        });
    }
}
const getPosts = async (query = {}) =>{
    const queryString = new URLSearchParams(query).toString();
    const {response,data}  = await client.get(`/posts?${queryString}`);
    // console.log(data);
    render(data);
}

getPosts();