var questions = [
  {
    id: 1,
    question: "HTML stand for",
    options: {
      a: "Hyper text markup Language",
      b: "Hyper text programming Language",
      c: "Hyper text styling Language",
      d: "Hyper text scripting Language",
    },
    answer: "Hyper text markup Language",
  },
  {
    id: 2,
    question: "Which type of JavaScript Languages is",
    options: {
      a: "Object-Oriented ",
      b: "Object-Base",
      c: "Assembly Languages",
      d: "high Level",
    },
    answer: "Object-Base",
  },
  {
    id: 3,
    question: "The 'function' and  'var' are known as:",
    options: {
      a: "Keywords",
      b: "Data types",
      c: "Declaration statements",
      d: "Prototypes",
    },
    answer: "Declaration statements",
  },
  {
    id: 4,
    question: "who is the present president of pakistan",
    options: {
      a: "Arif Alvi",
      b: "Imran Khan",
      c: "Nawaz Sharif",
      d: "Zardari",
    },
    answer: "Arif Alvi",
  },
  {
    id: 5,
    question: "How many prayers in a day:",
    options: {
      a: "6",
      b: "5",
      c: "3",
      d: "none",
    },
    answer: "5",
  },
  {
    id: 6,
    question: "How many total surah in quran",
    options: {
      a: "113",
      b: "114",
      c: "112",
      d: "111",
    },
    answer: "114",
  },
  {
    id: 7,
    question: "The correct sequence of HTML tags for starting a webpage is",
    options: {
      a: "Head, Title, HTML, body",
      b: "HTML, Body, Title, Head",
      c: "HTML, Head, Title, Body",
      d: "HTML, Title , Head,  Body",
    },
    answer: "HTML, Head, Title, Body",
  },
];

var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
userName.innerHTML = localStorage.getItem("name");
userEmail.innerHTML = localStorage.getItem("email");

var Question = document.getElementById("Question");
var answerButtons = document.getElementById("answer-buttons");
var indexNumber = 0;
var currentCount = document.getElementById("currentCount");
var correctAnsCount = 0;
var wrongCount = 0;
var totalCount = document.getElementById("totalCount");
totalCount.innerHTML = questions.length;
var nextQuestionbtn = document.getElementById("next-btn");
var QuizContainer = document.getElementsByClassName("app")[0];
var resultContainer = document.getElementsByClassName("resulContainer")[0];
var correctans = document.getElementById("correctans");
var wrongans = document.getElementById("wrongans");
function startQuiz() {
  clearInterval(intervalId);
  Question.innerHTML = questions[indexNumber].question;
  answerButtons.innerHTML = "";
  for (var key in questions[indexNumber].options) {
    var option = questions[indexNumber].options[key];
    answerButtons.innerHTML += `<button class="btn" onclick="checkAnswer(this)">${option}</button>`;
  }
  intervalId = setInterval(updateTimer, intervalDuration);
}

function next() {
  if (indexNumber < questions.length - 1) {
    indexNumber++;
    nextQuestionbtn.classList.add("hide");
    currentCount.innerHTML++;

    startQuiz();
  } else {
    QuizContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
    correctans.innerHTML = correctAnsCount;
    wrongans.innerHTML = wrongCount;
    clearInterval(intervalId);
  }
}

function checkAnswer(ele) {
  var isCorrect = ele.innerHTML === questions[indexNumber].answer;
  var Passed = document.getElementById("Passed");
  if (isCorrect) {
    ele.classList.add("correctAns");
    correctAnsCount++;
  } else {
    ele.classList.add("wrongAns");
    wrongCount++;
    var buttons = answerButtons.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].innerHTML === questions[indexNumber].answer) {
        buttons[i].classList.add("correctAns");
        break;
      }
      if (correctAnsCount >= 5) {
        Passed.innerHTML = "Passed";
      } else {
        Passed.innerHTML = "Failed";
      }
    }
  }

  var buttons = answerButtons.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  nextQuestionbtn.classList.remove("hide");
}
let Timer = document.getElementById("Timer");
let countDownValue = 419;
var header = document.getElementById("header");
const intervalDuration = 1000;
let intervalId;
function updateTimer() {
  let minutes = Math.floor(countDownValue / 60);
  let seconds = countDownValue % 60;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  Timer.innerText = `${formattedMinutes}:${formattedSeconds}`;
  countDownValue--;
  if (countDownValue < 0) {
    clearInterval(intervalId);
    Timer.innerText = "Countdown timer has finished!";
  }
}
window.onload = function () {
  startQuiz();
};
