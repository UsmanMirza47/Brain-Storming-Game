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


// ---------------------------
// All Variable declared  
// ---------------------------

let gameArray = cardsArray.concat(cardsArray);
let parentDiv = document.querySelector("#card-section");
let shuffledArray = Array.from(gameArray).sort(() => 0.5 - Math.random());
let clickCount = 0;
let firstCard = "";
let secondCard = "";


// -------------------------------
// All Function declared
// -------------------------------

// Reset Function Start
function Reset() {
  clickCount = 0;
   let a = Array.from(parentDiv.children);
   a.forEach((e) => {
      
       e.disabled = false;
     
   });
}
// Reset Function End


// Reset Selected Start
function resetSelected() {
  let a = Array.from(parentDiv.children);
   a.forEach((e) => {
       if (e.classList.contains("card-selected")) {
        e.classList.remove("card-selected");
       };
   });
}
// Reset Selected End

// btndisabled function is started
function btndisabled() {
  let a = Array.from(parentDiv.children);
  a.forEach((e) => {
    if (e.id == "select") {
      e.disabled = true;
    }
  });
}
// btndisabled function is End


function result() {
    clickCount = 0;

    if (firstCard === secondCard) {
      let a = Array.from(parentDiv.children);
      a.forEach((e) => {
        if (e.dataset.name===firstCard) {
          e.classList.add("card-match");
          e.id = "select";
        }
      });
      resetSelected();
    } else {
      Reset();
      resetSelected();
    }
}

// ---------------------------
// All Event Listener declared  
// ---------------------------


parentDiv.addEventListener("click", (event) => {
  let curCard = event.target;
  curCard.parentElement.disabled = true;
  btndisabled();
  clickCount++;

  if (curCard.id === "card-section") {
    return false;
  }

  if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = curCard.parentElement.dataset.name;
      curCard.parentElement.classList.add("card-selected");
      // console.log(curCard.children)
    } else if (clickCount === 2) {
      secondCard = curCard.parentElement.dataset.name;
      curCard.parentElement.classList.add("card-selected");

      setTimeout(() => {
        result();
      }, 500);
    }

    
  }
  
});
























for (let i = 0; i < shuffledArray.length; i++) {
  let childDiv = document.createElement("button");
  childDiv.classList.add("card");
  // childDiv.style.backgroundImage = `url(${shuffledArray[i].img})`;
  childDiv.dataset.name = shuffledArray[i].name;

  let frontDiv = document.createElement("div");
  frontDiv.classList.add("front-card");

  let backDiv = document.createElement("div");
  backDiv.classList.add("back-card");
  backDiv.style.backgroundImage = `url(${shuffledArray[i].img})`;

  childDiv.appendChild(frontDiv);
  childDiv.appendChild(backDiv);

  parentDiv.appendChild(childDiv);
}
