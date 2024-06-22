const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");


const userScoreElement = document.getElementById("user-score");
const cpuScoreElement = document.getElementById("cpu-score");


let userScore = 0;
let cpuScore = 0;

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

   
    userResult.src = cpuResult.src = "rock.png";
    result.textContent = "Wait...";

    
    optionImages.forEach((image2, index2) => {
      if (index !== index2) {
        image2.classList.remove("active");
      }
    });

    
    gameContainer.classList.add("start");

   
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;
      let userValue = image.getAttribute("data-option");

     
      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["rock.png", "paper.png", "scissors.png"];
      cpuResult.src = cpuImages[randomNumber];
      let cpuValue = optionImages[randomNumber].getAttribute("data-option");

      
      let outcomes = {
        rock: { rock: "Draw", paper: "Computer", scissors: "User" },
        paper: { rock: "User", paper: "Draw", scissors: "Computer" },
        scissors: { rock: "Computer", paper: "User", scissors: "Draw" }
      };
      let outComeValue = outcomes[userValue][cpuValue];

      
      result.textContent = outComeValue === "Draw" ? "Match Draw" : `${outComeValue} Wins!!`;

     
      if (outComeValue === "User") {
        userScore++;
      } else if (outComeValue === "Computer") {
        cpuScore++;
      }

      
      userScoreElement.textContent = userScore;
      cpuScoreElement.textContent = cpuScore;

    }, 2500); 
  });
});
