window.onload = function () {
  var highscore = localStorage.getItem("mostRecentScore");
  var finalScore = document.querySelector("#finalScore");
  finalScore.innerText = highscore;
};

function saveHighScore(event) {
  event.preventDefault();
  var highscore = localStorage.getItem("mostRecentScore");
  var username = document.querySelector("#username");
  let scores = { [username.value]: highscore };
  var allscores = localStorage.getItem("scores");
  if (allscores) {
    var pushscores = JSON.parse(allscores);
    pushscores.push(scores);
    localStorage.setItem("scores", JSON.stringify(pushscores));
  } else {
    localStorage.setItem("scores", JSON.stringify([scores]));
  }
  console.log(scores);
}
