var posts = [
    {
        title : "Bai Viet 1",
        thumbnail : "https://picsum.photos/500/300",
        excerpt : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, ex dolorum? Cupiditate sint repellendus iure inventore. Fugiat veniam odio aperiam sequi necessitatibus commodi, reprehenderit unde laudantium architecto deserunt atque aliquid.",
        
    },
    {
        title : "Bai Viet 2",
        excerpt : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, ex dolorum? Cupiditate sint repellendus iure inventore. Fugiat veniam odio aperiam sequi necessitatibus commodi, reprehenderit unde laudantium architecto deserunt atque aliquid.",
        thumbnail : "https://picsum.photos/500/300",
    },
    {
        title : "Bai Viet 3",
        thumbnail : "https://picsum.photos/500/300",
        excerpt : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, ex dolorum? Cupiditate sint repellendus iure inventore. Fugiat veniam odio aperiam sequi necessitatibus commodi, reprehenderit unde laudantium architecto deserunt atque aliquid.",
        
    }
]

var html = ` <div class="posts">
        ${
            posts.map(function(post,index){

                return `<div class="post-item">
                        <img src="${post.thumbnail}" alt=""
                        class = ${index % 2 !== 0 ? "right" : ""}>
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        </div>`
            }).join("")
        },
        
    </div>`;

    document.write(html);