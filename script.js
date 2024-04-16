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

const computerChoice = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return getRandomInt(3);
};

const result = (userChoice, pcChoice) => {
  if (userChoice == pcChoice) return "tie";
};

const addUserChoice = choice => {
  // console.log("working");
  // console.log(choice);
  const rocks = document.querySelectorAll(".rock");
  const papers = document.querySelectorAll(".paper");
  const scissors = document.querySelectorAll(".scissors");

  const userChoice = "";
  const computer_choice = computerChoice();
  document.getElementById("the-game").style.display = "none";
  document.getElementById("result").style.display = "flex";

  if (choice == "rock") rocks[0].style.display = "block";
  else if (choice == "paper") papers[0].style.display = "block";
  else if (choice == "scissors") scissors[0].style.display = "block";

  if (computer_choice == 0) {
    rocks[1].style.display = "block";
    userChoice = "rock";
  } else if (computer_choice == 1) {
    papers[1].style.display = "block";
    userChoice = "paper";
  } else if (computer_choice == 2) {
    scissors[1].style.display = "block";
    userChoice = "scissors";
  }
};
