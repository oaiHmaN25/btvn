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
            const html = `<div class="wrap">
                    <p id="1">A</p>
                    <!-- <p>Hoàng An</p> -->
                    <span>Hoàng An</span>
                        </div>
                <div class="trend">
                    <a href="#">popular</a>
                    <a href="#">trending</a>
                </div>`
            const postItem = document.createElement("div");
            const postImg = document.createElement("div");
            postItem.innerHTML += html;
            postItem.classList.add("post-item");
            const h2 = document.createElement("h2");
            const a = document.createElement("a");
            a.innerText = title;
            a.href ="#";
            h2.appendChild(a);
            postItem.appendChild(h2);
            postItem.append(postImg);
            const img = document.createElement("img");
            img.src = "assets/imgs/tongthongukrainezelenskyreuters-1664558183406.webp";
            postImg.append(img);
            const pImg = document.createElement("p");
            postImg.append(pImg);
            pImg.innerText = "Tổng thống Volodymyr Zelensky (Ảnh: Reuters)."
            const p = document.createElement("p");
            p.innerText = content;
            // postItem.innerHTML(html);
            postItem.appendChild(p);
            const postCate = document.createElement("div");
            const imgCate = document.createElement("img");
            imgCate.src = "assets/imgs/post-sq-1.jpg";
            const pCate = document.createElement("p");
            pCate.innerText = "Category : Thế giới";
            const hr = document.createElement("hr");
            postCate.append(imgCate);
            postCate.append(pCate);
            postItem.appendChild(postCate);
            postItem.appendChild(hr);
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
    if(scrollTop + clientHeight >= scrollHeight ){
        showLoading();
    }
})

// window.addEventListener("scroll", () => {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//   if (scrollTop + clientHeight >= scrollHeight - 5) {
//     showLoading();
//   }
// });