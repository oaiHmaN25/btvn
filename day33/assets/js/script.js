
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
var statusRun = false;
const notice = document.querySelector(".notice");
let p = document.createElement("p");
let pNotice = document.createElement("p");
const words = document.querySelector(".words");
const btnVoice = document.querySelector(".btn");
recognition.lang = "vi-VN";
words.append(p);
recognition.addEventListener("result", e =>{
    console.log(e.results);
    const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join("");
    console.log(transcript);
    pNotice.innerHTML = `Đang thực hiện : ${transcript}`;
        notice.append(pNotice);
    if(transcript.includes("Facebook.")){
        // window.href='https://www.facebook.com/';
        window.open('https://www.facebook.com/')
        statusRun= true;
        console.log(`ok`);
    }
    if(transcript.includes("Google.")){
        window.open('https://www.google.com/');
        console.log(`ok`);
        pNotice.innerHTML = `Không thực hiện được yêu cầu`;
        notice.append(pNotice);
        statusRun= true;
    }
    if(transcript.includes("youtube")){
        window.open('https://www.youtube.com/');
        console.log(`ok`);
        statusRun= true;
    }
    if(transcript.includes("google drive")){
        window.open('https://drive.google.com/drive/u/0/my-drive');
        console.log(`ok`);
        statusRun= true;
    }
    if(transcript.includes("google map")){
        window.open('https://www.google.com/maps');
        console.log(`ok`);
        statusRun= true;
    }   
    if(transcript.includes("Xem video") || transcript.includes("Mở video") || transcript.includes("Bài hát")){
        const searchContent = transcript.replace("Xem video","").replace("Mở video","").replace("Video","")
        console.log(searchContent);
        window.open(`https://www.youtube.com/results?search_query=${searchContent}`);
        console.log(`ok`);
        statusRun= true;
    }
    if(transcript.includes("Bài hát") || transcript.includes("Mở bài hát") || transcript.includes("Bài hát")){
        const searchContent = transcript.replace("Bài hát","").replace("Mở bài hát","").replace("Bài hát","")
        console.log(searchContent);
        window.open(`https://zingmp3.vn/tim-kiem/tat-ca?q=${searchContent}`);
        console.log(`ok`);
        statusRun= true;
    }
    if(transcript.includes("Chỉ đường") || transcript.includes("Chỉ đường tới") || transcript.includes("Tới") || transcript.includes("Đường tới")){
        const searchContent = transcript.replace("Chỉ đường","").replace("Chỉ đường tới","").replace("Tới","").replace("Đường tới","");
        console.log(searchContent);
        window.open(`https://www.google.com/maps/place/${searchContent}`);
        console.log(`ok`);
        statusRun= true;
    }

})  
recognition.addEventListener("end",(e)=>{
    p.innerHTML = `Đã nói xong. Hy vọng kết quả như ý bạn`
    words.style.color = "green";
    words.append(p);
    console.log(e);
    // const transcript = Array.from(e.results).map(results => results[0]).map(results => results.transcript).join("");
    // console.log(transcript);
    console.log(this);
    
    if(statusRun === false){
        pNotice.innerHTML = `Không thực hiện được yêu cầu`;
        notice.append(pNotice);
        // console.log(`status`);
    } else {
        pNotice.innerHTML = `Đã thực hiện xong`;
        notice.append(pNotice);
    }
    
})
btnVoice.addEventListener("click", ()=>{
    recognition.start();
    p.innerHTML = `Hãy nói nội dung bạn muốn`
    words.style.color = "red";
    statusRun = false;
    notice.innerHTML = ``;
        // notice.append(pNotice);
    words.append(p);
})
