var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    timePreview.classList.remove("show");
    timePreview.innerText = 0;
    timePreview.style.left = 0;
  }
});

document.addEventListener("mouseup", function () {
  if (isDrag) {
    isDrag = false;
    initialValue = value;

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var timePreview = progressBar.querySelector(".time-preview");

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;

  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);

    handleUpdateValue(value);
    
  }
  handleKaraoke(audio.currentTime);
  
});



progressBar.addEventListener("mousemove", function (e) {
  timePreview.classList.add("show");
  var rate = (e.offsetX * 100) / progressBarWidth;
  var currentTime = (rate / 100) * audio.duration;
  timePreview.innerText = getTime(currentTime);
  timePreview.style.left = `${e.offsetX}px`;
});

progressBar.addEventListener("mouseout", function () {
  timePreview.classList.remove("show");
  timePreview.innerText = 0;
  timePreview.style.left = 0;
});

audio.addEventListener("ended", function () {
  playBtn.innerHTML = playBtnIcon;
  handleUpdateValue(0);
  audio.currentTime = 0;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseBtnIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playBtnIcon;
});
// var closeIcon = document.querySelector(".close-icon");
// var karaoke= document.querySelector(".karaoke")
// var btnKaraoke = document.querySelector(".btnkaraoke");
// btnKaraoke.addEventListener("click", function(){
//     console.log(`ok`);
//     // karaoketext.style.transform = `translate(${newX}px, ${newY}px)`;
//     karaoke.style.display = "block"
//     closeIcon.style.display = "block"
//     // getSentence();
// })
// closeIcon.addEventListener("click", function(){
//     console.log(`ok`);
//     karaoke.style.display = "none"

// })
var lyric = `{
    "err": 0,
    "msg": "Success",
    "data": {
        "sentences": [
            {
                "words": [
                    {
                        "startTime": 38170,
                        "endTime": 38580,
                        "data": "Ai"
                    },
                    {
                        "startTime": 38580,
                        "endTime": 38970,
                        "data": "tìm"
                    },
                    {
                        "startTime": 38970,
                        "endTime": 39350,
                        "data": "ai"
                    },
                    {
                        "startTime": 39350,
                        "endTime": 39760,
                        "data": "trên"
                    },
                    {
                        "startTime": 39760,
                        "endTime": 40160,
                        "data": "phố"
                    },
                    {
                        "startTime": 40160,
                        "endTime": 41360,
                        "data": "vắng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 41360,
                        "endTime": 41760,
                        "data": "Ngược"
                    },
                    {
                        "startTime": 41760,
                        "endTime": 42160,
                        "data": "lối"
                    },
                    {
                        "startTime": 42160,
                        "endTime": 42560,
                        "data": "cơn"
                    },
                    {
                        "startTime": 42560,
                        "endTime": 42950,
                        "data": "mưa"
                    },
                    {
                        "startTime": 42950,
                        "endTime": 43360,
                        "data": "chiều"
                    },
                    {
                        "startTime": 43360,
                        "endTime": 44140,
                        "data": "giăng"
                    },
                    {
                        "startTime": 44140,
                        "endTime": 45350,
                        "data": "giăng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 45350,
                        "endTime": 45760,
                        "data": "Ai"
                    },
                    {
                        "startTime": 45760,
                        "endTime": 46160,
                        "data": "tìm"
                    },
                    {
                        "startTime": 46160,
                        "endTime": 46550,
                        "data": "ai"
                    },
                    {
                        "startTime": 46550,
                        "endTime": 46960,
                        "data": "dưới"
                    },
                    {
                        "startTime": 46960,
                        "endTime": 48580,
                        "data": "trăng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 48580,
                        "endTime": 48980,
                        "data": "Nghiêng"
                    },
                    {
                        "startTime": 48980,
                        "endTime": 49390,
                        "data": "bóng"
                    },
                    {
                        "startTime": 49390,
                        "endTime": 49780,
                        "data": "ngõ"
                    },
                    {
                        "startTime": 49780,
                        "endTime": 50170,
                        "data": "dài"
                    },
                    {
                        "startTime": 50170,
                        "endTime": 50970,
                        "data": "vằng"
                    },
                    {
                        "startTime": 50970,
                        "endTime": 52550,
                        "data": "vặc"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 52550,
                        "endTime": 52960,
                        "data": "Ai"
                    },
                    {
                        "startTime": 52960,
                        "endTime": 53350,
                        "data": "đặt"
                    },
                    {
                        "startTime": 53350,
                        "endTime": 53750,
                        "data": "tên"
                    },
                    {
                        "startTime": 53750,
                        "endTime": 54160,
                        "data": "cho"
                    },
                    {
                        "startTime": 54160,
                        "endTime": 54550,
                        "data": "ký"
                    },
                    {
                        "startTime": 54550,
                        "endTime": 55740,
                        "data": "ức"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 55740,
                        "endTime": 56140,
                        "data": "Là"
                    },
                    {
                        "startTime": 56140,
                        "endTime": 56940,
                        "data": "nỗi"
                    },
                    {
                        "startTime": 56940,
                        "endTime": 57350,
                        "data": "đau"
                    },
                    {
                        "startTime": 57350,
                        "endTime": 57350,
                        "data": "của"
                    },
                    {
                        "startTime": 57350,
                        "endTime": 57740,
                        "data": "ngày"
                    },
                    {
                        "startTime": 57740,
                        "endTime": 58520,
                        "data": "hôm"
                    },
                    {
                        "startTime": 58520,
                        "endTime": 59720,
                        "data": "qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 59720,
                        "endTime": 60530,
                        "data": "Ai"
                    },
                    {
                        "startTime": 60530,
                        "endTime": 60530,
                        "data": "đặt"
                    },
                    {
                        "startTime": 60530,
                        "endTime": 60920,
                        "data": "tên"
                    },
                    {
                        "startTime": 60920,
                        "endTime": 61720,
                        "data": "chúng"
                    },
                    {
                        "startTime": 61720,
                        "endTime": 62910,
                        "data": "ta"
                    },
                    {
                        "startTime": 62910,
                        "endTime": 63730,
                        "data": "là"
                    },
                    {
                        "startTime": 63730,
                        "endTime": 64110,
                        "data": "người"
                    },
                    {
                        "startTime": 64110,
                        "endTime": 66910,
                        "data": "lạ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 66910,
                        "endTime": 67300,
                        "data": "Có"
                    },
                    {
                        "startTime": 67300,
                        "endTime": 67720,
                        "data": "phải"
                    },
                    {
                        "startTime": 67720,
                        "endTime": 68120,
                        "data": "đêm"
                    },
                    {
                        "startTime": 68120,
                        "endTime": 68890,
                        "data": "qua"
                    },
                    {
                        "startTime": 68890,
                        "endTime": 69290,
                        "data": "thức"
                    },
                    {
                        "startTime": 69290,
                        "endTime": 70490,
                        "data": "trắng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 70490,
                        "endTime": 70900,
                        "data": "Để"
                    },
                    {
                        "startTime": 70900,
                        "endTime": 71270,
                        "data": "gấp"
                    },
                    {
                        "startTime": 71270,
                        "endTime": 71680,
                        "data": "con"
                    },
                    {
                        "startTime": 71680,
                        "endTime": 72080,
                        "data": "tim"
                    },
                    {
                        "startTime": 72080,
                        "endTime": 72470,
                        "data": "làm"
                    },
                    {
                        "startTime": 72470,
                        "endTime": 72880,
                        "data": "hai"
                    },
                    {
                        "startTime": 72880,
                        "endTime": 74480,
                        "data": "ngăn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 74480,
                        "endTime": 74870,
                        "data": "Ngăn"
                    },
                    {
                        "startTime": 74870,
                        "endTime": 75270,
                        "data": "phải"
                    },
                    {
                        "startTime": 75270,
                        "endTime": 75670,
                        "data": "ôm"
                    },
                    {
                        "startTime": 75670,
                        "endTime": 76060,
                        "data": "nỗi"
                    },
                    {
                        "startTime": 76060,
                        "endTime": 77250,
                        "data": "đau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 77250,
                        "endTime": 77660,
                        "data": "Còn"
                    },
                    {
                        "startTime": 77660,
                        "endTime": 78050,
                        "data": "ngăn"
                    },
                    {
                        "startTime": 78050,
                        "endTime": 78860,
                        "data": "trái"
                    },
                    {
                        "startTime": 78860,
                        "endTime": 79250,
                        "data": "chứa"
                    },
                    {
                        "startTime": 79250,
                        "endTime": 79640,
                        "data": "hạt"
                    },
                    {
                        "startTime": 79640,
                        "endTime": 80050,
                        "data": "nhiệm"
                    },
                    {
                        "startTime": 80050,
                        "endTime": 81640,
                        "data": "màu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 81640,
                        "endTime": 82050,
                        "data": "Kịp"
                    },
                    {
                        "startTime": 82050,
                        "endTime": 82450,
                        "data": "sáng"
                    },
                    {
                        "startTime": 82450,
                        "endTime": 82850,
                        "data": "mang"
                    },
                    {
                        "startTime": 82850,
                        "endTime": 83240,
                        "data": "đến"
                    },
                    {
                        "startTime": 83240,
                        "endTime": 83650,
                        "data": "làm"
                    },
                    {
                        "startTime": 83650,
                        "endTime": 84040,
                        "data": "quà"
                    },
                    {
                        "startTime": 84040,
                        "endTime": 84450,
                        "data": "cô"
                    },
                    {
                        "startTime": 84450,
                        "endTime": 85220,
                        "data": "dâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 85220,
                        "endTime": 85220,
                        "data": "Sợ"
                    },
                    {
                        "startTime": 85220,
                        "endTime": 85640,
                        "data": "mai"
                    },
                    {
                        "startTime": 85640,
                        "endTime": 86020,
                        "data": "kia"
                    },
                    {
                        "startTime": 86020,
                        "endTime": 86420,
                        "data": "sương"
                    },
                    {
                        "startTime": 86420,
                        "endTime": 87230,
                        "data": "phai"
                    },
                    {
                        "startTime": 87230,
                        "endTime": 87620,
                        "data": "hoa"
                    },
                    {
                        "startTime": 87620,
                        "endTime": 88030,
                        "data": "úa"
                    },
                    {
                        "startTime": 88030,
                        "endTime": 88430,
                        "data": "áo"
                    },
                    {
                        "startTime": 88430,
                        "endTime": 89230,
                        "data": "nhàu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 89230,
                        "endTime": 89620,
                        "data": "Anh"
                    },
                    {
                        "startTime": 89620,
                        "endTime": 89620,
                        "data": "đợi"
                    },
                    {
                        "startTime": 89620,
                        "endTime": 90810,
                        "data": "em,"
                    },
                    {
                        "startTime": 90810,
                        "endTime": 91200,
                        "data": "anh"
                    },
                    {
                        "startTime": 91200,
                        "endTime": 91600,
                        "data": "chọn"
                    },
                    {
                        "startTime": 91600,
                        "endTime": 92000,
                        "data": "ngăn"
                    },
                    {
                        "startTime": 92000,
                        "endTime": 93200,
                        "data": "nỗi"
                    },
                    {
                        "startTime": 93200,
                        "endTime": 95990,
                        "data": "đau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 95990,
                        "endTime": 95990,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 95990,
                        "endTime": 96390,
                        "data": "hôm"
                    },
                    {
                        "startTime": 96390,
                        "endTime": 96790,
                        "data": "ấy"
                    },
                    {
                        "startTime": 96790,
                        "endTime": 97180,
                        "data": "em"
                    },
                    {
                        "startTime": 97180,
                        "endTime": 97580,
                        "data": "đi"
                    },
                    {
                        "startTime": 97580,
                        "endTime": 97970,
                        "data": "trong"
                    },
                    {
                        "startTime": 97970,
                        "endTime": 98780,
                        "data": "mưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 98780,
                        "endTime": 99170,
                        "data": "Thế"
                    },
                    {
                        "startTime": 99170,
                        "endTime": 99570,
                        "data": "nhưng"
                    },
                    {
                        "startTime": 99570,
                        "endTime": 99970,
                        "data": "lại"
                    },
                    {
                        "startTime": 99970,
                        "endTime": 100370,
                        "data": "quên"
                    },
                    {
                        "startTime": 100370,
                        "endTime": 100770,
                        "data": "tim"
                    },
                    {
                        "startTime": 100770,
                        "endTime": 101180,
                        "data": "không"
                    },
                    {
                        "startTime": 101180,
                        "endTime": 101570,
                        "data": "khóa"
                    },
                    {
                        "startTime": 101570,
                        "endTime": 102750,
                        "data": "cửa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 102750,
                        "endTime": 103160,
                        "data": "Để"
                    },
                    {
                        "startTime": 103160,
                        "endTime": 103580,
                        "data": "cho"
                    },
                    {
                        "startTime": 103580,
                        "endTime": 103950,
                        "data": "mưa"
                    },
                    {
                        "startTime": 103950,
                        "endTime": 104360,
                        "data": "lân"
                    },
                    {
                        "startTime": 104360,
                        "endTime": 104750,
                        "data": "la"
                    },
                    {
                        "startTime": 104750,
                        "endTime": 105150,
                        "data": "hỏi"
                    },
                    {
                        "startTime": 105150,
                        "endTime": 105950,
                        "data": "thăm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 105950,
                        "endTime": 106340,
                        "data": "Lẻn"
                    },
                    {
                        "startTime": 106340,
                        "endTime": 106760,
                        "data": "vào"
                    },
                    {
                        "startTime": 106760,
                        "endTime": 107150,
                        "data": "trộm"
                    },
                    {
                        "startTime": 107150,
                        "endTime": 107550,
                        "data": "đi"
                    },
                    {
                        "startTime": 107550,
                        "endTime": 107960,
                        "data": "khế"
                    },
                    {
                        "startTime": 107960,
                        "endTime": 108340,
                        "data": "ước"
                    },
                    {
                        "startTime": 108340,
                        "endTime": 109150,
                        "data": "trăm"
                    },
                    {
                        "startTime": 109150,
                        "endTime": 110340,
                        "data": "năm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 110340,
                        "endTime": 110720,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 110720,
                        "endTime": 111120,
                        "data": "em"
                    },
                    {
                        "startTime": 111120,
                        "endTime": 111530,
                        "data": "đi"
                    },
                    {
                        "startTime": 111530,
                        "endTime": 111920,
                        "data": "theo"
                    },
                    {
                        "startTime": 111920,
                        "endTime": 111920,
                        "data": "cơn"
                    },
                    {
                        "startTime": 111920,
                        "endTime": 112730,
                        "data": "mưa"
                    },
                    {
                        "startTime": 112730,
                        "endTime": 113120,
                        "data": "ngâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 113120,
                        "endTime": 113520,
                        "data": "Bầy"
                    },
                    {
                        "startTime": 113520,
                        "endTime": 113930,
                        "data": "chim"
                    },
                    {
                        "startTime": 113930,
                        "endTime": 114320,
                        "data": "lạc"
                    },
                    {
                        "startTime": 114320,
                        "endTime": 115120,
                        "data": "cánh"
                    },
                    {
                        "startTime": 115120,
                        "endTime": 115120,
                        "data": "khóc"
                    },
                    {
                        "startTime": 115120,
                        "endTime": 115900,
                        "data": "hoảng"
                    },
                    {
                        "startTime": 115900,
                        "endTime": 116320,
                        "data": "tìm"
                    },
                    {
                        "startTime": 116320,
                        "endTime": 117890,
                        "data": "nhau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 117890,
                        "endTime": 118290,
                        "data": "Ai"
                    },
                    {
                        "startTime": 118290,
                        "endTime": 118700,
                        "data": "đong"
                    },
                    {
                        "startTime": 118700,
                        "endTime": 119090,
                        "data": "ai"
                    },
                    {
                        "startTime": 119090,
                        "endTime": 119490,
                        "data": "đếm"
                    },
                    {
                        "startTime": 119490,
                        "endTime": 119900,
                        "data": "hết"
                    },
                    {
                        "startTime": 119900,
                        "endTime": 121100,
                        "data": "bao"
                    },
                    {
                        "startTime": 121100,
                        "endTime": 121890,
                        "data": "giọt"
                    },
                    {
                        "startTime": 121890,
                        "endTime": 124890,
                        "data": "sầu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 125070,
                        "endTime": 125480,
                        "data": "Hỏi"
                    },
                    {
                        "startTime": 125480,
                        "endTime": 125480,
                        "data": "mùa"
                    },
                    {
                        "startTime": 125480,
                        "endTime": 125870,
                        "data": "thu"
                    },
                    {
                        "startTime": 125870,
                        "endTime": 126270,
                        "data": "đang"
                    },
                    {
                        "startTime": 126270,
                        "endTime": 126670,
                        "data": "ru"
                    },
                    {
                        "startTime": 126670,
                        "endTime": 127060,
                        "data": "miên"
                    },
                    {
                        "startTime": 127060,
                        "endTime": 127460,
                        "data": "man"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 127460,
                        "endTime": 128260,
                        "data": "Mỗi"
                    },
                    {
                        "startTime": 128260,
                        "endTime": 128650,
                        "data": "năm"
                    },
                    {
                        "startTime": 128650,
                        "endTime": 129060,
                        "data": "mùa"
                    },
                    {
                        "startTime": 129060,
                        "endTime": 129450,
                        "data": "rơi"
                    },
                    {
                        "startTime": 129450,
                        "endTime": 129850,
                        "data": "bao"
                    },
                    {
                        "startTime": 129850,
                        "endTime": 130250,
                        "data": "chiếc"
                    },
                    {
                        "startTime": 130250,
                        "endTime": 130640,
                        "data": "lá"
                    },
                    {
                        "startTime": 130640,
                        "endTime": 132240,
                        "data": "vàng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 132240,
                        "endTime": 132240,
                        "data": "Liệu"
                    },
                    {
                        "startTime": 132240,
                        "endTime": 132650,
                        "data": "có"
                    },
                    {
                        "startTime": 132650,
                        "endTime": 133040,
                        "data": "biết"
                    },
                    {
                        "startTime": 133040,
                        "endTime": 133430,
                        "data": "ở"
                    },
                    {
                        "startTime": 133430,
                        "endTime": 133850,
                        "data": "nơi"
                    },
                    {
                        "startTime": 133850,
                        "endTime": 134240,
                        "data": "nào"
                    },
                    {
                        "startTime": 134240,
                        "endTime": 135050,
                        "data": "không"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 135050,
                        "endTime": 135440,
                        "data": "Có"
                    },
                    {
                        "startTime": 135440,
                        "endTime": 135830,
                        "data": "lá"
                    },
                    {
                        "startTime": 135830,
                        "endTime": 136240,
                        "data": "nào"
                    },
                    {
                        "startTime": 136240,
                        "endTime": 136640,
                        "data": "trông"
                    },
                    {
                        "startTime": 136640,
                        "endTime": 137010,
                        "data": "như"
                    },
                    {
                        "startTime": 137010,
                        "endTime": 137450,
                        "data": "lá"
                    },
                    {
                        "startTime": 137450,
                        "endTime": 138210,
                        "data": "diêu"
                    },
                    {
                        "startTime": 138210,
                        "endTime": 139410,
                        "data": "bông"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 139410,
                        "endTime": 139820,
                        "data": "Hỡi"
                    },
                    {
                        "startTime": 139820,
                        "endTime": 140220,
                        "data": "diêu"
                    },
                    {
                        "startTime": 140220,
                        "endTime": 140220,
                        "data": "bông"
                    },
                    {
                        "startTime": 140220,
                        "endTime": 140600,
                        "data": "ơi"
                    },
                    {
                        "startTime": 140600,
                        "endTime": 141410,
                        "data": "hỡi"
                    },
                    {
                        "startTime": 141410,
                        "endTime": 141810,
                        "data": "diêu"
                    },
                    {
                        "startTime": 141810,
                        "endTime": 142200,
                        "data": "bông"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 142200,
                        "endTime": 142600,
                        "data": "Bình"
                    },
                    {
                        "startTime": 142600,
                        "endTime": 143010,
                        "data": "minh"
                    },
                    {
                        "startTime": 143010,
                        "endTime": 143400,
                        "data": "chưa"
                    },
                    {
                        "startTime": 143400,
                        "endTime": 144200,
                        "data": "hé"
                    },
                    {
                        "startTime": 144200,
                        "endTime": 144590,
                        "data": "tôi"
                    },
                    {
                        "startTime": 144590,
                        "endTime": 144990,
                        "data": "phải"
                    },
                    {
                        "startTime": 144990,
                        "endTime": 145790,
                        "data": "tìm"
                    },
                    {
                        "startTime": 145790,
                        "endTime": 146990,
                        "data": "xong"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 146990,
                        "endTime": 147390,
                        "data": "Vì"
                    },
                    {
                        "startTime": 147390,
                        "endTime": 147800,
                        "data": "mai"
                    },
                    {
                        "startTime": 147800,
                        "endTime": 148190,
                        "data": "người"
                    },
                    {
                        "startTime": 148190,
                        "endTime": 148580,
                        "data": "ta"
                    },
                    {
                        "startTime": 148580,
                        "endTime": 148990,
                        "data": "đã"
                    },
                    {
                        "startTime": 148990,
                        "endTime": 150180,
                        "data": "đi"
                    },
                    {
                        "startTime": 150180,
                        "endTime": 151370,
                        "data": "lấy"
                    },
                    {
                        "startTime": 151370,
                        "endTime": 154370,
                        "data": "chồng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 183640,
                        "endTime": 184050,
                        "data": "Có"
                    },
                    {
                        "startTime": 184050,
                        "endTime": 184450,
                        "data": "phải"
                    },
                    {
                        "startTime": 184450,
                        "endTime": 184840,
                        "data": "đêm"
                    },
                    {
                        "startTime": 184840,
                        "endTime": 185250,
                        "data": "qua"
                    },
                    {
                        "startTime": 185250,
                        "endTime": 185640,
                        "data": "thức"
                    },
                    {
                        "startTime": 185640,
                        "endTime": 186850,
                        "data": "trắng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 186850,
                        "endTime": 187260,
                        "data": "Để"
                    },
                    {
                        "startTime": 187260,
                        "endTime": 187660,
                        "data": "gấp"
                    },
                    {
                        "startTime": 187660,
                        "endTime": 188060,
                        "data": "con"
                    },
                    {
                        "startTime": 188060,
                        "endTime": 188450,
                        "data": "tim"
                    },
                    {
                        "startTime": 188450,
                        "endTime": 188880,
                        "data": "làm"
                    },
                    {
                        "startTime": 188880,
                        "endTime": 189270,
                        "data": "hai"
                    },
                    {
                        "startTime": 189270,
                        "endTime": 190870,
                        "data": "ngăn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 190870,
                        "endTime": 191280,
                        "data": "Ngăn"
                    },
                    {
                        "startTime": 191280,
                        "endTime": 191280,
                        "data": "phải"
                    },
                    {
                        "startTime": 191280,
                        "endTime": 191670,
                        "data": "ôm"
                    },
                    {
                        "startTime": 191670,
                        "endTime": 192480,
                        "data": "nỗi"
                    },
                    {
                        "startTime": 192480,
                        "endTime": 193670,
                        "data": "đau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 193670,
                        "endTime": 194050,
                        "data": "Còn"
                    },
                    {
                        "startTime": 194050,
                        "endTime": 194050,
                        "data": "ngăn"
                    },
                    {
                        "startTime": 194050,
                        "endTime": 194860,
                        "data": "trái"
                    },
                    {
                        "startTime": 194860,
                        "endTime": 195250,
                        "data": "chứa"
                    },
                    {
                        "startTime": 195250,
                        "endTime": 195650,
                        "data": "hạt"
                    },
                    {
                        "startTime": 195650,
                        "endTime": 196440,
                        "data": "nhiệm"
                    },
                    {
                        "startTime": 196440,
                        "endTime": 198030,
                        "data": "màu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 198030,
                        "endTime": 198030,
                        "data": "Kịp"
                    },
                    {
                        "startTime": 198030,
                        "endTime": 198440,
                        "data": "sáng"
                    },
                    {
                        "startTime": 198440,
                        "endTime": 198830,
                        "data": "mang"
                    },
                    {
                        "startTime": 198830,
                        "endTime": 199230,
                        "data": "đến"
                    },
                    {
                        "startTime": 199230,
                        "endTime": 199630,
                        "data": "làm"
                    },
                    {
                        "startTime": 199630,
                        "endTime": 200440,
                        "data": "quà"
                    },
                    {
                        "startTime": 200440,
                        "endTime": 200850,
                        "data": "cô"
                    },
                    {
                        "startTime": 200850,
                        "endTime": 201240,
                        "data": "dâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 201240,
                        "endTime": 201630,
                        "data": "Sợ"
                    },
                    {
                        "startTime": 201630,
                        "endTime": 202040,
                        "data": "mai"
                    },
                    {
                        "startTime": 202040,
                        "endTime": 202410,
                        "data": "kia"
                    },
                    {
                        "startTime": 202410,
                        "endTime": 202820,
                        "data": "sương"
                    },
                    {
                        "startTime": 202820,
                        "endTime": 203610,
                        "data": "phai"
                    },
                    {
                        "startTime": 203610,
                        "endTime": 203610,
                        "data": "hoa"
                    },
                    {
                        "startTime": 203610,
                        "endTime": 204020,
                        "data": "úa"
                    },
                    {
                        "startTime": 204020,
                        "endTime": 204420,
                        "data": "áo"
                    },
                    {
                        "startTime": 204420,
                        "endTime": 205210,
                        "data": "nhàu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 205210,
                        "endTime": 205620,
                        "data": "Anh"
                    },
                    {
                        "startTime": 205620,
                        "endTime": 206020,
                        "data": "đợi"
                    },
                    {
                        "startTime": 206020,
                        "endTime": 207210,
                        "data": "em,"
                    },
                    {
                        "startTime": 207210,
                        "endTime": 207610,
                        "data": "anh"
                    },
                    {
                        "startTime": 207610,
                        "endTime": 208000,
                        "data": "chọn"
                    },
                    {
                        "startTime": 208000,
                        "endTime": 208390,
                        "data": "ngăn"
                    },
                    {
                        "startTime": 208390,
                        "endTime": 209590,
                        "data": "nỗi"
                    },
                    {
                        "startTime": 209590,
                        "endTime": 212390,
                        "data": "đau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 212390,
                        "endTime": 212780,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 212780,
                        "endTime": 212780,
                        "data": "hôm"
                    },
                    {
                        "startTime": 212780,
                        "endTime": 213190,
                        "data": "ấy"
                    },
                    {
                        "startTime": 213190,
                        "endTime": 213590,
                        "data": "em"
                    },
                    {
                        "startTime": 213590,
                        "endTime": 213990,
                        "data": "đi"
                    },
                    {
                        "startTime": 213990,
                        "endTime": 214380,
                        "data": "trong"
                    },
                    {
                        "startTime": 214380,
                        "endTime": 215170,
                        "data": "mưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 215170,
                        "endTime": 215560,
                        "data": "Thế"
                    },
                    {
                        "startTime": 215560,
                        "endTime": 215560,
                        "data": "nhưng"
                    },
                    {
                        "startTime": 215560,
                        "endTime": 215980,
                        "data": "lại"
                    },
                    {
                        "startTime": 215980,
                        "endTime": 216760,
                        "data": "quên"
                    },
                    {
                        "startTime": 216760,
                        "endTime": 217160,
                        "data": "tim"
                    },
                    {
                        "startTime": 217160,
                        "endTime": 217570,
                        "data": "không"
                    },
                    {
                        "startTime": 217570,
                        "endTime": 217950,
                        "data": "khóa"
                    },
                    {
                        "startTime": 217950,
                        "endTime": 219150,
                        "data": "cửa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 219150,
                        "endTime": 219560,
                        "data": "Để"
                    },
                    {
                        "startTime": 219560,
                        "endTime": 219950,
                        "data": "cho"
                    },
                    {
                        "startTime": 219950,
                        "endTime": 220340,
                        "data": "mưa"
                    },
                    {
                        "startTime": 220340,
                        "endTime": 220750,
                        "data": "lân"
                    },
                    {
                        "startTime": 220750,
                        "endTime": 221160,
                        "data": "la"
                    },
                    {
                        "startTime": 221160,
                        "endTime": 221550,
                        "data": "hỏi"
                    },
                    {
                        "startTime": 221550,
                        "endTime": 221960,
                        "data": "thăm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 221960,
                        "endTime": 222340,
                        "data": "Lẻn"
                    },
                    {
                        "startTime": 222340,
                        "endTime": 222730,
                        "data": "vào"
                    },
                    {
                        "startTime": 222730,
                        "endTime": 223540,
                        "data": "trộm"
                    },
                    {
                        "startTime": 223540,
                        "endTime": 223930,
                        "data": "đi"
                    },
                    {
                        "startTime": 223930,
                        "endTime": 224340,
                        "data": "khế"
                    },
                    {
                        "startTime": 224340,
                        "endTime": 224740,
                        "data": "ước"
                    },
                    {
                        "startTime": 224740,
                        "endTime": 225150,
                        "data": "trăm"
                    },
                    {
                        "startTime": 225150,
                        "endTime": 226340,
                        "data": "năm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 226340,
                        "endTime": 226730,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 226730,
                        "endTime": 227130,
                        "data": "em"
                    },
                    {
                        "startTime": 227130,
                        "endTime": 227530,
                        "data": "đi"
                    },
                    {
                        "startTime": 227530,
                        "endTime": 227920,
                        "data": "theo"
                    },
                    {
                        "startTime": 227920,
                        "endTime": 228310,
                        "data": "cơn"
                    },
                    {
                        "startTime": 228310,
                        "endTime": 228730,
                        "data": "mưa"
                    },
                    {
                        "startTime": 228730,
                        "endTime": 229510,
                        "data": "ngâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 229510,
                        "endTime": 229920,
                        "data": "Bầy"
                    },
                    {
                        "startTime": 229920,
                        "endTime": 230310,
                        "data": "chim"
                    },
                    {
                        "startTime": 230310,
                        "endTime": 230710,
                        "data": "lạc"
                    },
                    {
                        "startTime": 230710,
                        "endTime": 231510,
                        "data": "cánh"
                    },
                    {
                        "startTime": 231510,
                        "endTime": 231510,
                        "data": "khóc"
                    },
                    {
                        "startTime": 231510,
                        "endTime": 231900,
                        "data": "hoảng"
                    },
                    {
                        "startTime": 231900,
                        "endTime": 232700,
                        "data": "tìm"
                    },
                    {
                        "startTime": 232700,
                        "endTime": 234300,
                        "data": "nhau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 234300,
                        "endTime": 234710,
                        "data": "Ai"
                    },
                    {
                        "startTime": 234710,
                        "endTime": 234710,
                        "data": "đong"
                    },
                    {
                        "startTime": 234710,
                        "endTime": 235480,
                        "data": "ai"
                    },
                    {
                        "startTime": 235480,
                        "endTime": 235890,
                        "data": "đếm"
                    },
                    {
                        "startTime": 235890,
                        "endTime": 236290,
                        "data": "hết"
                    },
                    {
                        "startTime": 236290,
                        "endTime": 237490,
                        "data": "bao"
                    },
                    {
                        "startTime": 237490,
                        "endTime": 237880,
                        "data": "giọt"
                    },
                    {
                        "startTime": 237880,
                        "endTime": 240880,
                        "data": "sầu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 241450,
                        "endTime": 241880,
                        "data": "Hỏi"
                    },
                    {
                        "startTime": 241880,
                        "endTime": 241880,
                        "data": "mùa"
                    },
                    {
                        "startTime": 241880,
                        "endTime": 242260,
                        "data": "thu"
                    },
                    {
                        "startTime": 242260,
                        "endTime": 242650,
                        "data": "đang"
                    },
                    {
                        "startTime": 242650,
                        "endTime": 243070,
                        "data": "ru"
                    },
                    {
                        "startTime": 243070,
                        "endTime": 243460,
                        "data": "miên"
                    },
                    {
                        "startTime": 243460,
                        "endTime": 243850,
                        "data": "man"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 243850,
                        "endTime": 244260,
                        "data": "Mỗi"
                    },
                    {
                        "startTime": 244260,
                        "endTime": 244660,
                        "data": "năm"
                    },
                    {
                        "startTime": 244660,
                        "endTime": 245060,
                        "data": "mùa"
                    },
                    {
                        "startTime": 245060,
                        "endTime": 245470,
                        "data": "rơi"
                    },
                    {
                        "startTime": 245470,
                        "endTime": 245850,
                        "data": "bao"
                    },
                    {
                        "startTime": 245850,
                        "endTime": 246660,
                        "data": "chiếc"
                    },
                    {
                        "startTime": 246660,
                        "endTime": 247060,
                        "data": "lá"
                    },
                    {
                        "startTime": 247060,
                        "endTime": 248640,
                        "data": "vàng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 248640,
                        "endTime": 248640,
                        "data": "Liệu"
                    },
                    {
                        "startTime": 248640,
                        "endTime": 249040,
                        "data": "có"
                    },
                    {
                        "startTime": 249040,
                        "endTime": 249430,
                        "data": "biết"
                    },
                    {
                        "startTime": 249430,
                        "endTime": 249840,
                        "data": "ở"
                    },
                    {
                        "startTime": 249840,
                        "endTime": 250240,
                        "data": "nơi"
                    },
                    {
                        "startTime": 250240,
                        "endTime": 250630,
                        "data": "nào"
                    },
                    {
                        "startTime": 250630,
                        "endTime": 251430,
                        "data": "không"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 251430,
                        "endTime": 251830,
                        "data": "Có"
                    },
                    {
                        "startTime": 251830,
                        "endTime": 252240,
                        "data": "lá"
                    },
                    {
                        "startTime": 252240,
                        "endTime": 252640,
                        "data": "nào"
                    },
                    {
                        "startTime": 252640,
                        "endTime": 253030,
                        "data": "trông"
                    },
                    {
                        "startTime": 253030,
                        "endTime": 253430,
                        "data": "như"
                    },
                    {
                        "startTime": 253430,
                        "endTime": 253820,
                        "data": "lá"
                    },
                    {
                        "startTime": 253820,
                        "endTime": 254640,
                        "data": "diêu"
                    },
                    {
                        "startTime": 254640,
                        "endTime": 255820,
                        "data": "bông"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 255820,
                        "endTime": 256210,
                        "data": "Hỡi"
                    },
                    {
                        "startTime": 256210,
                        "endTime": 256210,
                        "data": "diêu"
                    },
                    {
                        "startTime": 256210,
                        "endTime": 256610,
                        "data": "bông"
                    },
                    {
                        "startTime": 256610,
                        "endTime": 257010,
                        "data": "ơi"
                    },
                    {
                        "startTime": 257010,
                        "endTime": 257410,
                        "data": "hỡi"
                    },
                    {
                        "startTime": 257410,
                        "endTime": 257800,
                        "data": "diêu"
                    },
                    {
                        "startTime": 257800,
                        "endTime": 258610,
                        "data": "bông"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 258610,
                        "endTime": 259000,
                        "data": "Bình"
                    },
                    {
                        "startTime": 259000,
                        "endTime": 259410,
                        "data": "minh"
                    },
                    {
                        "startTime": 259410,
                        "endTime": 259800,
                        "data": "chưa"
                    },
                    {
                        "startTime": 259800,
                        "endTime": 260600,
                        "data": "hé"
                    },
                    {
                        "startTime": 260600,
                        "endTime": 260990,
                        "data": "tôi"
                    },
                    {
                        "startTime": 260990,
                        "endTime": 261380,
                        "data": "phải"
                    },
                    {
                        "startTime": 261380,
                        "endTime": 262180,
                        "data": "tìm"
                    },
                    {
                        "startTime": 262180,
                        "endTime": 263380,
                        "data": "xong"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 263380,
                        "endTime": 263780,
                        "data": "Vì"
                    },
                    {
                        "startTime": 263780,
                        "endTime": 263780,
                        "data": "mai"
                    },
                    {
                        "startTime": 263780,
                        "endTime": 264180,
                        "data": "người"
                    },
                    {
                        "startTime": 264180,
                        "endTime": 264980,
                        "data": "ta"
                    },
                    {
                        "startTime": 264980,
                        "endTime": 265390,
                        "data": "đã"
                    },
                    {
                        "startTime": 265390,
                        "endTime": 266570,
                        "data": "đi"
                    },
                    {
                        "startTime": 266570,
                        "endTime": 267380,
                        "data": "lấy"
                    },
                    {
                        "startTime": 267380,
                        "endTime": 270380,
                        "data": "chồng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 270550,
                        "endTime": 270550,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 270550,
                        "endTime": 270970,
                        "data": "hôm"
                    },
                    {
                        "startTime": 270970,
                        "endTime": 271360,
                        "data": "ấy"
                    },
                    {
                        "startTime": 271360,
                        "endTime": 271750,
                        "data": "em"
                    },
                    {
                        "startTime": 271750,
                        "endTime": 272160,
                        "data": "đi"
                    },
                    {
                        "startTime": 272160,
                        "endTime": 272550,
                        "data": "trong"
                    },
                    {
                        "startTime": 272550,
                        "endTime": 272940,
                        "data": "mưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 272940,
                        "endTime": 273340,
                        "data": "Thế"
                    },
                    {
                        "startTime": 273340,
                        "endTime": 274140,
                        "data": "nhưng"
                    },
                    {
                        "startTime": 274140,
                        "endTime": 274540,
                        "data": "lại"
                    },
                    {
                        "startTime": 274540,
                        "endTime": 274940,
                        "data": "quên"
                    },
                    {
                        "startTime": 274940,
                        "endTime": 275330,
                        "data": "tim"
                    },
                    {
                        "startTime": 275330,
                        "endTime": 275740,
                        "data": "không"
                    },
                    {
                        "startTime": 275740,
                        "endTime": 276130,
                        "data": "khóa"
                    },
                    {
                        "startTime": 276130,
                        "endTime": 277720,
                        "data": "cửa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 277720,
                        "endTime": 277720,
                        "data": "Để"
                    },
                    {
                        "startTime": 277720,
                        "endTime": 278130,
                        "data": "cho"
                    },
                    {
                        "startTime": 278130,
                        "endTime": 278530,
                        "data": "mưa"
                    },
                    {
                        "startTime": 278530,
                        "endTime": 278920,
                        "data": "lân"
                    },
                    {
                        "startTime": 278920,
                        "endTime": 279330,
                        "data": "la"
                    },
                    {
                        "startTime": 279330,
                        "endTime": 279720,
                        "data": "hỏi"
                    },
                    {
                        "startTime": 279720,
                        "endTime": 280520,
                        "data": "thăm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 280520,
                        "endTime": 280920,
                        "data": "Lẻn"
                    },
                    {
                        "startTime": 280920,
                        "endTime": 281310,
                        "data": "vào"
                    },
                    {
                        "startTime": 281310,
                        "endTime": 281710,
                        "data": "trộm"
                    },
                    {
                        "startTime": 281710,
                        "endTime": 282100,
                        "data": "đi"
                    },
                    {
                        "startTime": 282100,
                        "endTime": 282500,
                        "data": "khế"
                    },
                    {
                        "startTime": 282500,
                        "endTime": 282910,
                        "data": "ước"
                    },
                    {
                        "startTime": 282910,
                        "endTime": 283300,
                        "data": "trăm"
                    },
                    {
                        "startTime": 283300,
                        "endTime": 284500,
                        "data": "năm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 284500,
                        "endTime": 284890,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 284890,
                        "endTime": 285300,
                        "data": "em"
                    },
                    {
                        "startTime": 285300,
                        "endTime": 285690,
                        "data": "đi"
                    },
                    {
                        "startTime": 285690,
                        "endTime": 286100,
                        "data": "theo"
                    },
                    {
                        "startTime": 286100,
                        "endTime": 286500,
                        "data": "cơn"
                    },
                    {
                        "startTime": 286500,
                        "endTime": 286890,
                        "data": "mưa"
                    },
                    {
                        "startTime": 286890,
                        "endTime": 287680,
                        "data": "ngâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 287680,
                        "endTime": 288080,
                        "data": "Bầy"
                    },
                    {
                        "startTime": 288080,
                        "endTime": 288490,
                        "data": "chim"
                    },
                    {
                        "startTime": 288490,
                        "endTime": 288880,
                        "data": "lạc"
                    },
                    {
                        "startTime": 288880,
                        "endTime": 289690,
                        "data": "cánh"
                    },
                    {
                        "startTime": 289690,
                        "endTime": 289690,
                        "data": "khóc"
                    },
                    {
                        "startTime": 289690,
                        "endTime": 290100,
                        "data": "hoảng"
                    },
                    {
                        "startTime": 290100,
                        "endTime": 290880,
                        "data": "tìm"
                    },
                    {
                        "startTime": 290880,
                        "endTime": 292480,
                        "data": "nhau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 292480,
                        "endTime": 292480,
                        "data": "Ai"
                    },
                    {
                        "startTime": 292480,
                        "endTime": 292880,
                        "data": "đong"
                    },
                    {
                        "startTime": 292880,
                        "endTime": 293270,
                        "data": "ai"
                    },
                    {
                        "startTime": 293270,
                        "endTime": 294060,
                        "data": "đếm"
                    },
                    {
                        "startTime": 294060,
                        "endTime": 294460,
                        "data": "hết"
                    },
                    {
                        "startTime": 294460,
                        "endTime": 295660,
                        "data": "bao"
                    },
                    {
                        "startTime": 295660,
                        "endTime": 296450,
                        "data": "giọt"
                    },
                    {
                        "startTime": 296450,
                        "endTime": 299260,
                        "data": "sầu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 299260,
                        "endTime": 299650,
                        "data": "Hỏi"
                    },
                    {
                        "startTime": 299650,
                        "endTime": 300050,
                        "data": "mùa"
                    },
                    {
                        "startTime": 300050,
                        "endTime": 300460,
                        "data": "thu"
                    },
                    {
                        "startTime": 300460,
                        "endTime": 300850,
                        "data": "đang"
                    },
                    {
                        "startTime": 300850,
                        "endTime": 301220,
                        "data": "ru"
                    },
                    {
                        "startTime": 301220,
                        "endTime": 301630,
                        "data": "miên"
                    },
                    {
                        "startTime": 301630,
                        "endTime": 302030,
                        "data": "man"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 302030,
                        "endTime": 302830,
                        "data": "Mỗi"
                    },
                    {
                        "startTime": 302830,
                        "endTime": 303230,
                        "data": "năm"
                    },
                    {
                        "startTime": 303230,
                        "endTime": 303620,
                        "data": "mùa"
                    },
                    {
                        "startTime": 303620,
                        "endTime": 304030,
                        "data": "rơi"
                    },
                    {
                        "startTime": 304030,
                        "endTime": 304430,
                        "data": "bao"
                    },
                    {
                        "startTime": 304430,
                        "endTime": 304820,
                        "data": "chiếc"
                    },
                    {
                        "startTime": 304820,
                        "endTime": 305230,
                        "data": "lá"
                    },
                    {
                        "startTime": 305230,
                        "endTime": 306820,
                        "data": "vàng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 306820,
                        "endTime": 306820,
                        "data": "Liệu"
                    },
                    {
                        "startTime": 306820,
                        "endTime": 307210,
                        "data": "có"
                    },
                    {
                        "startTime": 307210,
                        "endTime": 307630,
                        "data": "biết"
                    },
                    {
                        "startTime": 307630,
                        "endTime": 308010,
                        "data": "ở"
                    },
                    {
                        "startTime": 308010,
                        "endTime": 308410,
                        "data": "nơi"
                    },
                    {
                        "startTime": 308410,
                        "endTime": 308800,
                        "data": "nào"
                    },
                    {
                        "startTime": 308800,
                        "endTime": 309190,
                        "data": "không"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 309190,
                        "endTime": 309610,
                        "data": "Có"
                    },
                    {
                        "startTime": 309610,
                        "endTime": 310000,
                        "data": "lá"
                    },
                    {
                        "startTime": 310000,
                        "endTime": 310800,
                        "data": "nào"
                    },
                    {
                        "startTime": 310800,
                        "endTime": 311200,
                        "data": "trông"
                    },
                    {
                        "startTime": 311200,
                        "endTime": 311590,
                        "data": "như"
                    },
                    {
                        "startTime": 311590,
                        "endTime": 312010,
                        "data": "lá"
                    },
                    {
                        "startTime": 312010,
                        "endTime": 312790,
                        "data": "diêu"
                    },
                    {
                        "startTime": 312790,
                        "endTime": 313990,
                        "data": "bông"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 313990,
                        "endTime": 314400,
                        "data": "Hỡi"
                    },
                    {
                        "startTime": 314400,
                        "endTime": 314780,
                        "data": "diêu"
                    },
                    {
                        "startTime": 314780,
                        "endTime": 315170,
                        "data": "bông"
                    },
                    {
                        "startTime": 315170,
                        "endTime": 315580,
                        "data": "ơi"
                    },
                    {
                        "startTime": 315580,
                        "endTime": 315580,
                        "data": "hỡi"
                    },
                    {
                        "startTime": 315580,
                        "endTime": 315980,
                        "data": "diêu"
                    },
                    {
                        "startTime": 315980,
                        "endTime": 316780,
                        "data": "bông"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 316780,
                        "endTime": 317170,
                        "data": "Bình"
                    },
                    {
                        "startTime": 317170,
                        "endTime": 317570,
                        "data": "minh"
                    },
                    {
                        "startTime": 317570,
                        "endTime": 317970,
                        "data": "chưa"
                    },
                    {
                        "startTime": 317970,
                        "endTime": 318760,
                        "data": "hé"
                    },
                    {
                        "startTime": 318760,
                        "endTime": 319180,
                        "data": "tôi"
                    },
                    {
                        "startTime": 319180,
                        "endTime": 319560,
                        "data": "phải"
                    },
                    {
                        "startTime": 319560,
                        "endTime": 320360,
                        "data": "tìm"
                    },
                    {
                        "startTime": 320360,
                        "endTime": 321550,
                        "data": "xong"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 321550,
                        "endTime": 321950,
                        "data": "Vì"
                    },
                    {
                        "startTime": 321950,
                        "endTime": 321950,
                        "data": "mai"
                    },
                    {
                        "startTime": 321950,
                        "endTime": 322350,
                        "data": "người"
                    },
                    {
                        "startTime": 322350,
                        "endTime": 323140,
                        "data": "ta"
                    },
                    {
                        "startTime": 323140,
                        "endTime": 323540,
                        "data": "đã"
                    },
                    {
                        "startTime": 323540,
                        "endTime": 324740,
                        "data": "đi"
                    },
                    {
                        "startTime": 324740,
                        "endTime": 325150,
                        "data": "lấy"
                    },
                    {
                        "startTime": 325150,
                        "endTime": 328150,
                        "data": "chồng"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 328730,
                        "endTime": 329120,
                        "data": "Vì"
                    },
                    {
                        "startTime": 329120,
                        "endTime": 329530,
                        "data": "mai"
                    },
                    {
                        "startTime": 329530,
                        "endTime": 329930,
                        "data": "người"
                    },
                    {
                        "startTime": 329930,
                        "endTime": 330310,
                        "data": "ta"
                    },
                    {
                        "startTime": 330310,
                        "endTime": 331130,
                        "data": "đã"
                    },
                    {
                        "startTime": 331130,
                        "endTime": 336300,
                        "data": "đi"
                    },
                    {
                        "startTime": 336300,
                        "endTime": 337900,
                        "data": "lấy"
                    },
                    {
                        "startTime": 337900,
                        "endTime": 338900,
                        "data": "chồng"
                    }
                ]
            }
        ],
        "file": "https://static-zmp3.zmdcdn.me/lyrics/7/0/8/a/708a68a95b3a878f68300590c88bc147.lrc",
        "enabledVideoBG": true,
        "defaultIBGUrls": [
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg"
        ],
        "BGMode": 0
    },
    "timestamp": 1694357369506
}`;

var karaokeText = document.querySelector(".karaoketext");
var lyricjson = JSON.parse(lyric).data.sentences;
// 
        // console.log(lyricjson[1]);
        // console.log(lyricjson[2]);
        // console.log(lyricjson[3]);

var songInfo = `<h3>Ngày mai người ta lấy chồng</h3>
                <p>Ca sỹ : Thành Đạt</p>`



//Xay dung tinh nag karaoke 
var karaoke = document.querySelector(".karaoke");
var karaokePlayBtn = document.querySelector(".btnkaraoke");
var karaokeInner = document.querySelector(".karaoke-inner");
var closeBtn = document.querySelector(".close");
var karaokeContent = document.querySelector(".karaoke-content");



karaokePlayBtn.addEventListener("click", function(){
    karaokeInner.classList.add("show");
    karaokeContent.innerHTML = songInfo;
})

closeBtn.addEventListener("click", function(){
    karaokeInner.classList.remove("show");
    karaokeContent.innerHTML = "";
})


var handleKaraoke = function(currentTime){
    currentTime *= 1000;
    var index = lyricjson.findIndex(function (wordItem) {
        // console.log(wordItem);
        var wordItemArray = wordItem.words;
        // console.log(wordItemArray);S
        return (currentTime >= wordItemArray[0].startTime &&
             currentTime <= wordItemArray[wordItemArray.length - 1].endTime);
    });
    if(index !== -1){
        //Vòng lặp các câu trong 1 màn hình 
        /*
        Page  = 1 => index = 0 đến 1 
        Page  = 2 => index = 1 đến 2 
        Page  = 3 => index = 2 đến 3
        index = (page - 1) * 2 
        Công thức : page = index / 2 + 1
        */
        var number = 2;

       var page = Math.floor(index/number+1);
       var offSet = (page-1)*number;
       if(index >= offSet && index < offSet + number){    
            karaokeContent.innerHTML = "";
            var div = document.createElement("div");
            for(var i = offSet; i< offSet + number; i++){
                 var p = document.createElement("p");

        // console.log(lyricjson[index].words);
        //Vòng lặp các từ trong 1 câu 
        lyricjson[i].words.forEach(function (word){
        var wordEl = document.createElement("span");
            wordEl.classList.add("word");
            wordEl.innerHTML = word.data ;
        var span = document.createElement("span");
        span.innerText = word.data;
        wordEl.append(span);
        // console.log(wordEl);
        p.append(wordEl);
        // console.log(lyricjson[i].words.data);
        // console.log(p);
         if(currentTime >= word.startTime){
            span.style.width = `100%`;
            console.log(word);
            if(currentTime >= word.startTime && currentTime <= word.endTime){
                // console.log(word.data);
                var wordTime = word.endTime - word.startTime;
                console.log(wordTime);
                var start = currentTime - word.startTime;
                var rate = (start*100)/wordTime;
                // console.log(word.data, rate);
            }
        }
        })
        karaokeContent.append(p);
        if(p.previousElementSibling !== null){
            p.previousElementSibling.remove();
        }
        div.append(p);
       
       }    
            }
           
        karaokeContent.append(div);
    }
    // console.log(currentTime);

}