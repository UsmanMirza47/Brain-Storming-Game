let cardsArray = [
  {
    name: "CSS",
    img: "icons8-css-48.png",
  },
  {
    name: "HTML",
    img: "icons8-html-48.png",
  },
  {
    name: "JAVASCRIPT",
    img: "icons8-javascript-48.png",
  },
  {
    name: "MONGO-DB",
    img: "icons8-mongo-db-48.png",
  },
  {
    name: "NODE-JS",
    img: "icons8-node-js-48.png",
  },
  {
    name: "REACT",
    img: "icons8-react-40.png",
  },
];

let gameArray = cardsArray.concat(cardsArray);
let parentDiv = document.querySelector("#card-section");
let shuffledArray = Array.from(gameArray).sort(() => 0.5 - Math.random());
let clickCount = 0;
let firstCard = "";
let secondCard = "";

function cardMatch() {
  let cardSelected = document.querySelectorAll(".card-selected");
  cardSelected.forEach((eventSelect) => {
    eventSelect.classList.add("card-match");
  });
}

function resetGame() {
  firstCard = "";
  secondCard = "";
  clickCount = 0;
  let cardSelected = document.querySelectorAll(".card-selected");
  cardSelected.forEach((eventSelect) => {
    eventSelect.classList.remove("card-selected");
  });
}

parentDiv.addEventListener("click", (event) => {
  let curCard = event.target;
  clickCount++;

  if (curCard.id === "card-section") {
    return false;
  }

  if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = curCard.dataset.name;
      curCard.classList.add("card-selected");
    } else if (clickCount === 2) {
      secondCard = curCard.dataset.name;
      curCard.classList.add("card-selected");
    }

    if (firstCard != "" && secondCard != "") {
      if (firstCard == secondCard) {
        // curCard.classList.add("card-match")
        setTimeout(() => {
          cardMatch();
          resetGame();
        }, 1000);
      } else {
        setTimeout(() => {
          resetGame();
        }, 1000);
      }
    }
  }
});


















for (let i = 0; i < shuffledArray.length; i++) {
  let childDiv = document.createElement("div");
  childDiv.classList.add("card");
  // childDiv.style.backgroundImage = `url(${shuffledArray[i].img})`;
  childDiv.dataset.name = shuffledArray[i].name;

  let frontDiv = document.createElement("div")
  frontDiv.classList.add("front-card")

  let backDiv = document.createElement("div")
  backDiv.classList.add("back-card");
  backDiv.style.backgroundImage = `url(${shuffledArray[i].img})`;

  childDiv.appendChild(frontDiv)
  childDiv.appendChild(backDiv)

  parentDiv.appendChild(childDiv);
}
