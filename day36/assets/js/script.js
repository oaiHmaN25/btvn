import { config } from "./config.js";      
import { client } from "./client.js";

const countdownBtn = document.querySelector('.count');
let countdownInterval;
let quizData;
const countdownElement = document.querySelector(".countdown");
const progressBar = document.querySelector(".progress-bar");
let timer = 10;
let score = 0;
const scoreP = document.querySelector(".score-ques"); 
let currentQuestionIndex = 0;
const quizTotal = document.querySelector(".quiz-list");
const quizContainer = document.querySelector(".quiz");
const quizResult = document.querySelector(".quiz-result");
const quizResultInner = document.querySelector(".quiz-result-inner")
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
async function updateCountdown(targetDate) {
  let now = new Date();
  let difference = targetDate - now;
    countdownBtn.style.display = "none";
  if (difference <= 0) {
    clearInterval(countdownInterval);
    const p = document.createElement("p");
    p.innerText = 'Go';
    countdownElement.append(p);
    await delay(1000);
    countdownElement.classList.add("hide");
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
    // if(totalQuestions === questionData.length){
    //     console.log(`ok`);
    // }
    
    console.log(questionData.length);
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
// const nextQuestion = () => {
//     if (currentQuestionIndex < quizData.length) {
//         currentQuestionIndex++;
//         renderQuestion(quizData[currentQuestionIndex]);
//     } //Check wrong answer and repeat choose
//     else  {
//         displayResult();
//     } 
// }
const displayResult = () =>{
    quizResult.classList.add('show');
    const resultDiv = document.querySelector(".result");
    const scoreSpan = document.createElement('span');
    scoreSpan.innerText = `${score} score`;

    const streakSpan = document.createElement('span');
    streakSpan.innerText = '0 streak';

    const correctSpan = document.createElement('span');
    correctSpan.innerText = trueAnswer;

    const incorrectSpan = document.createElement('span');
    incorrectSpan.innerText = falseAnswer;
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('btn-again');
    playAgainButton.innerText = 'Play again';
    // Hide the quiz questions
    resultDiv.append(scoreSpan);
    resultDiv.append(streakSpan);
    resultDiv.append(correctSpan);
    resultDiv.append(incorrectSpan);
    quizResultInner.append(resultDiv)
    quizResultInner.appendChild(playAgainButton);
    playAgainButton.addEventListener("click",resetQuiz);
    quizContainer.style.display = 'none';
}
const resetQuiz = () => {
  // Reset variables
  currentQuestionIndex = 0;
  questionAnswer = 0;
  trueAnswer = 0;
  falseAnswer = 0;
  score = 0;
    const p = document.querySelectorAll(".countdown p");
    console.log(p);
  // Clear quiz result
//   quizResultInner.innerHTML = '';

  // Reset countdown and progress bar
//   countdownElement.innerHTML = '';
//   progressBar.style.width = '0%';

  // Show countdown button
  countdownElement.classList.remove("hide");
//   countdownElement.style.display = "block"
    countdownBtn.style.display = "block"
    // p.style.display = "none";
    p.forEach((element) =>{
        // console.log(element);
        element.remove();
    })
  // Render the first question
//   renderQuestion(quizData[currentQuestionIndex]);
};
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let questionAnswer = 0;
let trueAnswer = 0;
let falseAnswer = 0;
const checkAnswer = async (pOption, selectedOption, correctAnswer) => {
    if (pOption.disabled) {
    return;
  }
    
    if (selectedOption === correctAnswer) {
        // alert("Câu trả lời đúng!");
        // const
        trueAnswer++;
        score += 500;
        scoreP.innerText = `Score: ${score}`;
        pOption.classList.add("active");
        // nextQuestion();
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            setTimeout(() => {
                renderQuestion(quizData[currentQuestionIndex]);
            }, 1000);  // Delay 1 second before rendering next question
        }
    } else {
        pOption.classList.add("false");
        falseAnswer++;
        currentQuestionIndex++;
        // nextQuestion();
        if (currentQuestionIndex < quizData.length) {
            setTimeout(() => {
                renderQuestion(quizData[currentQuestionIndex]);
            }, 1000);  // Delay 1 second before rendering next question
        }
    }
    questionAnswer++;
    console.log(`${questionAnswer}`);
    if(questionAnswer === totalQuestions){
        // displayResult();
        await delay(1000); // Adjust the delay duration as needed (e.g., 1000ms = 1 second)
        displayResult();

    }
    const allOptions = document.querySelectorAll('.quiz-answer p');
    allOptions.forEach((opt) => (opt.disabled = true));
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


getQuizs();