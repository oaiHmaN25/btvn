var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");

var carouselNav = carousel.querySelector(".carousel-nav");

var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");
var dot = document.querySelectorAll("li");
console.log(dot);
//Tính toán số liệu ảnh 

var carouselItems = carouselInner.querySelectorAll(".item");

function navNext(){
    
}


if(carouselItems.length) {
    //Xử lý 

    //Lấy chiều rộng của 1 item 
    var itemWidth = carouselInner.clientWidth;//Trả về chiều rộng của element
    console.log(itemWidth);

    var totalWidth = itemWidth * carouselItems.length;
    var currentIndex = 0;
    console.log(totalWidth);

    //Cật nhật CSS cho carousel inner
    carouselInner.style.width = `${totalWidth}px`;

    //Xử lí chuyển slide khi dí vào nút next 
    var position = 0;
    navNext.addEventListener("click", function(){
        console.log(position);
        if(Math.abs(position)< totalWidth -itemWidth){
            position -= itemWidth;
            carouselInner.style.translate = `${position}px`
           dot.forEach(function(indicator,index){
             if (index === dot.length - 1) {
             return;
             }
  
            // Thêm lớp "selected" vào phần tử kế tiếp
            indicator.nextElementSibling.classList.add("selected");
  
            // Loại bỏ lớp "selected" khỏi phần tử hiện tại
            indicator.classList.remove("selected");
           console.log(index);
        })
            
        }
    })
    navPrev.addEventListener("click", function(){
        if (position< 0){
        position += itemWidth;
        console.log(position);
        carouselInner.style.translate = `${position}px`
        dot.forEach(function(indicator,index){
              if (index === -1) {
             return;
             }
  
            // Thêm lớp "selected" vào phần tử kế tiếp
            indicator.nextElementSibling.classList.add("selected");
  
            // Loại bỏ lớp "selected" khỏi phần tử hiện tại
            indicator.classList.remove("selected");
            console.log(index);
        })
        }
        
    })
    
}


const dotsContainer = document.querySelector('.dots');

carouselItems.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

let currentSlide = 0;
updateDots();

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function goToSlide(index) {
  if (index >= 0 && index < carouselItems.length) {
    carouselItems[currentSlide].classList.remove('active');
    currentSlide = index;
    carouselItems[currentSlide].classList.add('active');
    updateDots();
  }
}