const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const scoreText = document.querySelector("score");
var timerEl = document.getElementById("countdown");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};

let questions = [
  {
    question: "What is 2 + 2?",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 4,
  },
  {
    question: "What is 0 + 2?",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 3,
  },
  {
    question: "What is 5 + 2?",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 2,
  },
  {
    question: "What is 3 + 2?",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 1,
  },
  {
    question: "What is 4 + 2?",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice: "4",
    answer: 3,
  },
];
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 3;

function startQuiz() {
  questionCounter = 0;
  score = 0;
  availableQuestions = { ...questions };
  getNewQuestion();
}
function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/gameover.html");
  }

  questionCounter++;
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = question.currentQuestion;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
startQuiz();

/*function countdown() {
  var timeLeft = 60;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else timeLeft === 0;
    clearInterval(timeLeft);
  }, 1000);
}
countdown();*/
