document
  .getElementById("banner-openBtn")
  .addEventListener("click", function () {
    document.getElementById("banner").style.visibility = "visible";
  });

document
  .getElementById("banner-closeBtn")
  .addEventListener("click", function () {
    document.getElementById("banner").style.visibility = "hidden";
  });

var computerScore = document.getElementById("computer-score");
var userScore = document.getElementById("your-score");
console.log(computerScore);
console.log(userScore);

const pageReload = () => location.reload();

const computerChoice = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return getRandomInt(3);
};

const result = (userChoice, pcChoice) => {
  console.log(userChoice, pcChoice);
  if (userChoice == pcChoice) {
    document.getElementById("message1").innerHTML = "TIE UP";
    document.getElementById("message2").style.visibility = "hidden";
    document.getElementById("play-again").innerHTML = "REPLAY";
  } else if (
    (userChoice == "rock" && pcChoice == "scissors") ||
    (userChoice == "scissors" && pcChoice == "paper") ||
    (userChoice == "paper" && pcChoice == "rock")
  ) {
    document.getElementById("next-button").style.display = "block";
    document.getElementById("message1").innerHTML = "YOU WIN";
    userScore.innerHTML = Number(userScore.innerHTML) + 1;
    console.log(userScore);
  } else {
    document.getElementById("message1").innerHTML = "YOU LOST";
    computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
    console.log(computerScore);
  }
};

const addChoices = userChoice => {
  const rocks = document.querySelectorAll(".rock");
  const papers = document.querySelectorAll(".paper");
  const scissors = document.querySelectorAll(".scissors");

  let computer_choice = computerChoice();
  document.getElementById("the-game").style.display = "none";
  document.getElementById("result").style.display = "flex";
  document.getElementById("result-message").style.display = "flex";

  if (userChoice == "rock") rocks[0].style.display = "block";
  else if (userChoice == "paper") papers[0].style.display = "block";
  else if (userChoice == "scissors") scissors[0].style.display = "block";

  if (computer_choice == 0) {
    rocks[1].style.display = "block";
    computer_choice = "rock";
  } else if (computer_choice == 1) {
    papers[1].style.display = "block";
    computer_choice = "paper";
  } else if (computer_choice == 2) {
    scissors[1].style.display = "block";
    computer_choice = "scissors";
  }

  result(userChoice, computer_choice);
};
