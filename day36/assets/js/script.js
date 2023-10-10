import { config } from "./config.js";      
import { client } from "./client.js";

let countdownBtn = document.querySelector('.count');
let countdownInterval;
let quizData;
let countdownElement = document.querySelector(".countdown");
const progressBar = document.querySelector(".progress-bar");
let timer = 10;
let score = 0;
const scoreP = document.querySelector(".score-ques"); 
let currentQuestionIndex = 0;
const quizTotal = document.querySelector(".quiz-list");
const quizContainer = document.querySelector(".quiz");


const progress = () =>{
    const percentage = (value/timer) *100;
    progressBar.style.width = `${percentage}%`;
}
// let progressBar = document.getElementById('progress-bar');
countdownBtn.addEventListener("click", function () {
  let targetDate = new Date();
  targetDate.setSeconds(targetDate.getSeconds() + 5); // Countdown for 5 seconds

  updateCountdown(targetDate);  // Update the countdown immediately

  countdownInterval = setInterval(function() {
    updateCountdown(targetDate);
  }, 1000); // Update the countdown every 1 second
}) 
// countdownBtn.addEventListener("click", function())
function updateCountdown(targetDate) {
  let now = new Date();
  let difference = targetDate - now;
    countdownBtn.style.display = "none";
  if (difference < 0) {
    clearInterval(countdownInterval);
    const p = document.createElement("p");
    p.innerText = 'Go';
    countdownElement.append(p);
    countdownElement.style.display = "none";
    quizContainer.classList.add("show");
    //  progressBar.style.width = '0%';
    // countdownBtn.innerText = 'Go';
  } else {
    let seconds = Math.ceil(difference / 1000); // Lấy số giây còn lại và làm tròn lên
    // countdownBtn.innerText =  seconds;
    const p = document.createElement("p");
    p.innerText = seconds;
    countdownElement.append(p);
    // let progress = ((targetDate - now) / (targetDate - new Date(0))) * 100; // Tính tỷ lệ tiến trình
    // progressBar.style.width = progress + '%';
  }
}

const renderQuestion = (questionData) => {
    
    const quizEl = document.querySelector(".quiz-wrapper");

    // Xóa nội dung hiện tại của .quiz-wrapper
    quizEl.innerHTML = '';
    // const totalQuestions = questionData.length;
    console.log(totalQuestions);
    quizTotal.innerText = `${currentQuestionIndex +1 }/${totalQuestions}`
    const quizQuestionDiv = document.createElement("div");
    quizQuestionDiv.classList.add("quiz-question");

    const pQuestion = document.createElement("p");
    pQuestion.innerText = `Câu hỏi ${questionData.numb}: ${questionData.question}`;

    quizQuestionDiv.appendChild(pQuestion);

    const quizAnswer = document.createElement("div");
    quizAnswer.classList.add("quiz-answer");

    questionData.options.forEach((option, index) => {
        const pOption = document.createElement("p");
        pOption.innerText = `Option ${index + 1}: ${option}`;
        pOption.addEventListener('click', () => {
            checkAnswer(pOption,option, questionData.answer);
        });
        quizAnswer.appendChild(pOption);
    });

    quizEl.appendChild(quizQuestionDiv);
    quizEl.appendChild(quizAnswer);
   
}
const nextQuestion = () => {
    
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        
        renderQuestion(quizData[currentQuestionIndex]);
    } //Check wrong answer and repeat choose
    else  {
        alert("Đã hoàn thành tất cả câu hỏi!");
    } //Hiện điểm
    // else {

    // }
}
const checkAnswer =  (pOption, selectedOption, correctAnswer) => {
    if (selectedOption === correctAnswer) {
        // alert("Câu trả lời đúng!");
        // const
        score += 500;
        scoreP.innerText = `Score: ${score}`;
        pOption.classList.add("active");
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            setTimeout(() => {
                renderQuestion(quizData[currentQuestionIndex]);
            }, 1000);  // Delay 1 second before rendering next question
        }
    } else {
        pOption.classList.add("false")
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            setTimeout(() => {
                renderQuestion(quizData[currentQuestionIndex]);
            }, 1000);  // Delay 1 second before rendering next question
        }
    }
    // nextQuestion();
    
}
let totalQuestions;
const getQuizs = async (query = {}) =>{
    const queryString = new URLSearchParams(query).toString();
    const {response,data}  = await client.get(`/quizs?${queryString}`);
    // console.log(data);
     totalQuestions = data.length;
    // countdownElement.style.display = "none";
    // quizContainer.style.display ="block";
    quizData = data; // Assign data to quizData
    renderQuestion(quizData[currentQuestionIndex]);
    // return data;
}
getQuizs()

