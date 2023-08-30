var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");

var carouselNav = carousel.querySelector(".carousel-nav");

var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");
var dot = document.querySelectorAll("li");
console.log(dot);
//Tính toán số liệu ảnh 

var carouselItems = carouselInner.querySelectorAll(".item");
console.log(carouselItems);
var position = 0;
var currentIndex = 0;


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
            carouselInner.style.translate = `${position}px`;
            currentIndex++;
            goToSlide(currentIndex);
        }
    })
    navPrev.addEventListener("click", function(){
        if (position< 0){
        position += itemWidth;
        console.log(position);
        carouselInner.style.translate = `${position}px`;
        currentIndex--;
        goToSlide(currentIndex);
        }
    })
    



var dotsContainer = document.querySelector('.dots');
console.log(dotsContainer);

carouselItems.forEach((_, index) => {
  var dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

var currentSlide = 0;
updateDots();

function updateDots() {
  var dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function goToSlide(index) {
  if (index >= 0 && index < carouselItems.length) {
    carouselItems[currentSlide].classList.remove('active');
    currentSlide = index;
    position = -index * itemWidth;
    carouselItems[currentSlide].classList.add('active');
    carouselInner.style.translate = `${position}px`;
    updateDots();
  }
}
}