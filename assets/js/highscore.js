window.onload = function () {
  var scores = localStorage.getItem("scores");
  var highscore = document.querySelector("#highscore");
  var parscores = JSON.parse(scores);
  //how to sort element
  //this sort can only be done on Arrays
  parscores = parscores.sort(
    (a, b) => parseInt(b[Object.keys(b)]) - parseInt(a[Object.keys(a)])
  );
  for (let i = 0; i < parscores.length; i++) {
    const para = document.createElement("p");
    //This gives the key of the object first, then we declare we want the value of the object here for the score
    para.innerHTML = `${Object.keys(parscores[i])} - ${
      parscores[i][Object.keys(parscores[i])]
    }`;

    highscore.appendChild(para);
  }
};
