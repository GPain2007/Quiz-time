const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const scoreText = document.querySelector(".score");
var timerEl = document.getElementById("countdown");
var timeInterval = 10;
var timeLeft = 60;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What are Loops in Java? What are three types of loops?",
    choice1: "When i skip to the loop",
    choice2:
      "is same as While loop with only difference that condition is checked after execution of block of statements. Hence in case of do while loop, statements are executed at least once.",
    choice3:
      "used when certain statements need to be executed repeatedly until a condition is fulfilled",
    choice4:
      "Looping is used in programming to execute a statement or a block of statement repeatedly",
    answer: 4,
  },
  {
    question: "What is a 'For Loop'",
    choice1:
      "used when certain statements need to be executed repeatedly until a condition is fulfilled",
    choice2:
      "to execute statements repeatedly for a given number of times, loops are used when number of times to execute the statements is known to programmer.",
    choice3: "Your mom's earrings!",
    choice4:
      "is same as While loop with only difference that condition is checked after execution of block of statements. Hence in case of do while loop, statements are executed at least once.",
    answer: 2,
  },
  {
    question: "What is a 'While Loop'?",
    choice1:
      "used when certain statements need to be executed repeatedly until a condition is fulfilled.condition is checked first before execution of statements.",
    choice2:
      "to execute statements repeatedly for a given number of times, loops are used when number of times to execute the statements is known to programmer.",
    choice3:
      "is same as While loop with only difference that condition is checked after execution of block of statements. Hence in case of do while loop, statements are executed at least once.",
    choice4: "the thing you put on your hip and let it swing",
    answer: 1,
  },
  {
    question: "What is 'For While?'",
    choice1:
      "is same as While loop with only difference that condition is checked after execution of block of statements. Hence in case of do while loop, statements are executed at least once.",
    choice2:
      "to execute statements repeatedly for a given number of times, loops are used when number of times to execute the statements is known to programmer",
    choice3: "The new dance all the young kids do.",
    choice4:
      "Whenthey ask you how long your going to be and you say 'For While'",
    answer: 1,
  },
  {
    question: "What is an infinite Loop? How infinite loop is declared?",
    choice1: "What Doctor Strange stuck Dormammu in!",
    choice2: "The infinite symbol",
    choice3:
      "Runs without any condition and runs infinitely. An infinite loop can be broken by defining any breaking logic in the body of the statement blocks.",
    choice4: "What happens when I try to ask my wife what she wants to eat!",
    answer: 3,
  },
  {
    question: " What is the difference between continue and break statement?",
    choice1:
      "When a break keyword is used in a loop, loop is broken instantly while when continue keyword is used, current iteration is broken and loop continues with current iteration.",
    choice2:
      "When a break keyword is used in a loop, loop is broken instantly while when continue keyword is used, current iteration is broken and loop continues with previous iteration.",
    choice3:
      "When a break keyword is used in a loop, loop is broken instantly while when continue keyword is used, current iteration is broken and loop continues with next iteration.",
    choice4:
      "When a break keyword is used in a loop, loop is broken instantly while when continue keyword is used, current iteration is broken and loop continues with current iteration.",
    answer: 3,
  },
  {
    question:
      "What is the difference between double and float variables in Java",
    choice1:
      "a constant is declared using the keyword Final. Value can be assigned only twice and after assignment, value of a constant cannot be changed.",
    choice2:
      "a constant is declared using the keyword Final. Value can be assigned only three times and after assignment, value of a constant can be changed.",
    choice3:
      "a constant is declared using the keyword Final. Value can be assigned only once and after assignment, value of a constant can be changed.",
    choice4:
      "a constant is declared using the keyword Final. Value can be assigned only once and after assignment, value of a constant cannot be changed.",
    answer: 4,
  },
  {
    question: "What is ternary operator?",
    choice1:
      "Ternary operator , also called conditional operator is used to decide which value to assign to a variable based on a Boolean value evaluation. It is denoted as",
    choice2:
      "Ternary operator , also called non operator is used to decide which value to assign to a variable based on a Boolean value evaluation. It is denoted as",
    choice3:
      "Ternary operator , also called conditional operator is used to decide which value to assign to a variable based on a current value evaluation. It is denoted as",
    choice4:
      "Ternary operator , also called value operator is used to decide which value to assign to a variable based on a Boolean value evaluation. It is denoted as",
    answer: 1,
  },
  {
    question: "How can you generate random numbers in Java?",
    choice1:
      "Using Math.random() you can generate random numbers in the range greater than or equal to 0.1 and less than 1.0",
    choice2: "Nothing is random in Java",
    choice3: "Using Random class in package java.util",
    choice4: "Both a and c",
    answer: 4,
  },
  {
    question: "What is default switch case?",
    choice1:
      "Default case is executed when other switch condition matches. Default case is an optional case .It can be declared only once all other switch cases have been coded.",
    choice2:
      "Default case is executed when other all switch conditions matches. Default case is an optional case .It can be declared only once all other switch cases have been coded.",
    choice3:
      "Default case is executed when no other switch condition matches. Default case is an optional case .It can be declared only once all other switch cases have been coded.",
    choice4:
      "Default case is executed when other switch conditions match. Default case is an optional case .It can be declared only once all other switch cases have been coded.",
    answer: 3,
  },
  {
    question:
      "What is the base class in Java from which all classes are derived?",
    choice1: "java.lang.object",
    choice2: "jav.lan.obj",
    choice3: "j.l.o",
    choice4: "class.base.java",
    answer: 1,
  },
  {
    question: "Can main() method in Java can return any data?",
    choice1:
      "In java, main() method can return any data and hence, it is always declared with a void return type.",
    choice2:
      "In java, main() method cannot return any data and hence, it is always declared with a void return type.",
    choice3:
      "In java, main() method can return any data and hence, it is not always declared with a void return type.",
    choice4:
      "In java, main() method can return any data and hence, it is not always declared with a void return type.",
    answer: 2,
  },
  {
    question:
      "Does Importing a package imports its sub-packages as well in Java?",
    choice1:
      "In java, when a package is imported, its sub-packages are imported and developer needs to import them separately if required.",
    choice2:
      "In java, when a package is imported, its sub-packages are not imported and developer needs to export them separately if required.",
    choice3:
      "In java, when a package is imported, its sub-packages are not imported and developer needs to import them separately if required.",
    choice4:
      "In java, when a package is imported, its sub-packages are imported and developer needs to export them separately if required.",
    answer: 3,
  },
  {
    question:
      "How can we pass argument to a function by reference instead of pass by value?",
    choice1:
      "In java, we can pass argument to a function only by value and not by reference",
    choice2:
      "In java, we can pass argument to a function only by value and by reference",
    choice3:
      "In css, we can pass argument to a function only by value and not by reference",
    choice4:
      "In html, we can pass argument to a function only by value and not by reference",
    answer: 1,
  },
  {
    question: "How an object is serialized in java?",
    choice1:
      "In java, to convert an key into byte stream by serialization, an interface with the name Serializable is implemented by the class. All objects of a class implementing serializable interface get serialized and their state is saved in byte stream.",
    choice2:
      "In java, to convert an object into byte stream by serialization, an interface with the number Serializable is implemented by the class. All objects of a class implementing serializable interface get serialized and their state is saved in byte stream.",
    choice3:
      "In java, to convert an object into byte stream by serialization, an interface with the name Serializable is implemented by the class. All objects of a class implementing serializable interface get serialized and their state is saved in byte stream.",
    choice4:
      "In java, to convert an key into byte stream by serialization, an interface with the name Serializable is implemented by the id. All objects of a id implementing serializable interface get serialized and their state is saved in byte stream.",
    answer: 3,
  },
  {
    question: "When we should use serialization?",
    choice1:
      "Serialization is used when data can  be transmitted over the network. Using serialization, objects state is saved and converted into byte stream .The byte stream is transferred over the network and the object is re-created at destination.",
    choice2:
      "Serialization is used when data needs to be transmitted over the network. Using serialization, objects state is not saved and converted into byte stream .The byte stream is transferred over the network and the object is deleted at destination.",
    choice3:
      "Serialization is used when data does not need to be transmitted over the network. Using serialization, objects state is saved and converted into byte stream .The byte stream is transferred over the network and the object is re-created at destination.",
    choice4:
      "Serialization is used when data needs to be transmitted over the network. Using serialization, objects state is saved and converted into byte stream .The byte stream is transferred over the network and the object is re-created at destination.",
    answer: 4,
  },
];
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 25;
const DEDUCT_TIME = 10;

function startQuiz() {
  countdown();
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();

  function countdown() {
    var timeInterval = setInterval(function () {
      if (timeLeft >= 0) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        clearInterval(timeInterval);
        localStorage.setItem("mostRecentScore", score);

        return window.location.assign("./gameover.html");
      }
    }, 1000);
  }
}
function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("./gameover.html");
  }

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
  questionCounter++;
}
const incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
const deductTime = (time) => {
  timeLeft -= time;
};

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
    } else {
      deductTime(DEDUCT_TIME);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startQuiz();
