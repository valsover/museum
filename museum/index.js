//Styling background images for footer socials list items
const social = document.querySelectorAll(".socials-list__item");

for (let i = 0; i < social.length; i++) {
  social[i].style.background = `center no-repeat url("assets/svg/${social[i].classList[1]}.svg")`;
}

//Filling Visiting block with repeating cards
const cardsContainer = document.getElementById("cards");
let cardsArr = [
  {
    source: "assets/img/royal-palace.jpg",
    name: "Royal Palace"
  },
  {
    source: "assets/img/denon-wing.jpg",
    name: "Denon Wing"
  },
  {
    source: "assets/img/colonnade-perrault.jpg",
    name: "Colonnade Perrault"
  },
  {
    source: "assets/img/greek-hall.jpg",
    name: "Greek Hall"
  },
  {
    source: "assets/img/mona-lisa.jpg",
    name: "Mona Lisa"
  },
  {
    source: "assets/img/night-palace.jpg",
    name: "Night Palace"
  }
];
for (let i = 0; i < cardsArr.length; i++) {
  cardsContainer.innerHTML += `<div><a 
  href="tours/tour${i + 2}.html" target="_blank" class="card"><img
  src="${cardsArr[i].source}" alt="${cardsArr[i].name}" width="440" height="285"><h3
  class="cards__heading forum-font-32 underline-subtitle">${cardsArr[i].name}</h3><p
  class="cards__description roboto-font-22-black">360° Virtual Tour <br><span
  class="cards__description--small">Google Street Panorama View</span></p></a></div>`;
}

//Filling Gallery block with imgs
const picsArr = [
  {
    src: "assets/img/gallery/galery1.jpg",
    alt: "Psyche Revived by Cupid's Kiss",
    title: "Antonio Canova: Psyche Revived by Cupid's Kiss, 1757 – 1822, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery2.jpg",
    alt: "Artemis",
    title: "Leochares: Diana of Versailles, C1st - 2nd A.D, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery3.jpg",
    alt: "Dying Slave",
    title: "Michelangelo: Dying Slave for the Tomb of Julius II., c. 1513-15, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery4.jpg",
    alt: "Nike of Samothrace",
    title: "AWinged Victory of Samothrace, circa 220-185 BC, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery5.jpg",
    alt: "Venus de Milo",
    title: "Alexandros of Antioch: Venus de Milo, between 150 and 125 BC, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery6.jpg",
    alt: "The Virgin and Child with Saint Anne",
    title: "Leonardo da Vinci: The Virgin and Child with Saint Anne, c. 1503, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery7.jpg",
    alt: "Mona Lisa",
    title: "Leonardo da Vinci: Mona Lisa or Giocondo, c. 1503–1506, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery8.jpg",
    alt: "Mollien",
    title: "Hector Lefuel: Louvre - grand escalier Mollien"
  },
  {
    src: "assets/img/gallery/galery9.jpg",
    alt: "Venus of Arles",
    title: "Venus de Milo, 1st century BC, Paris, Louvre (It may be a copy of the Aphrodite of Thespiae by Praxiteles)"
  },
  {
    src: "assets/img/gallery/galery10.jpg",
    alt: "Louvr Viscontie",
    title: "Louvre: Art de l'Islam Cour Visconti - Kanso Déco Ricciotti, Escalier contemporain, Louvre"
  },
  {
    src: "assets/img/gallery/galery11.jpg",
    alt: "Liberty Leading the People",
    title: "Eugène Delacroix: Liberty Leading the People, 1830, Paris, Louvre "
  },
  {
    src: "assets/img/gallery/galery12.jpg",
    alt: "Arria et Paetus",
    title: "Pierre Lepautre: Arria et Paetus, 1681, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery13.jpg",
    alt: "Ermafrodito borghese",
    title: "Materazzo del bernini: Ermafrodito borghese, 2nd century AD, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery14.jpg",
    alt: "La Belle Ferronnière",
    title: "Leonardo da Vinci or his Milanese circle: La Belle Ferronnière, 1490–1496, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery15.jpg",
    alt: "Louvre Pyramid",
    title: "Ieoh Ming Pei: Louvre Pyramid, 1988, Paris, Louvre"
  },
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(picsArr);

for (let i = 1; i < picsArr.length; i++) {
  pics.innerHTML += `<img src=${picsArr[i].src} alt="${picsArr[i].alt}" title="${picsArr[i].title}">`;
}

//Video control panel
window.onload = function () {
  player = document.getElementById("player");
}

//Playing video
const largePlay = document.getElementById("largePlay");
largePlay.addEventListener("click", fastPlay);
let numOfClicks = 0;
function fastPlay() {
  ++numOfClicks;
  if (numOfClicks % 2 !== 0) {
    largePlay.style.backgroundImage = "none";
    player.play();
  } if (numOfClicks % 2 == 0) {
    largePlay.style.backgroundImage = "url(assets/svg/large-play-btn.svg)";
    player.pause();
  }
}

//Counting tickets amount
const plusBasic = document.getElementById("plusBasic");
const plusSenior = document.getElementById("plusSenior");
const minusBasic = document.getElementById("minusBasic");
const minusSenior = document.getElementById("minusSenior");
const basicAmount = document.getElementById("basic");
const seniorAmount = document.getElementById("senior");

let countB = 1;
let countS = 0;
function plusOneBasic() {
  if (countB < 20) {
    countB++;
    basicAmount.value = countB;
    totalAmount.innerText = (totalAmountNum * countB).toString();
  }
  if (countB >= 20) {
    countB = 20;
    basicAmount.value = countB;
  }
}
function plusOneSenior() {
  if (countS < 20) {
    countS++;
    seniorAmount.value = countS;
  }
  if (countS >= 20) {
    countS = 20;
    seniorAmount.value = countS;
  }
}
function minusOneBasic() {
  if (countB <= 20) {
    countB--;
    basicAmount.value = countB;
    if (+totalAmount.innerText >= 220) {
      totalAmount.innerText = (totalAmount.innerText - totalAmountNum).toString();
    } else {
      totalAmount.innerText = "0";
    }
  }
  if (countB < 1) {
    countB = 0;
    basicAmount.value = countB;
  }
}
function minusOneSenior() {
  if (countS <= 20) {
    countS--;
    seniorAmount.value = countS;
  }
  if (countS < 1) {
    countS = 0;
    seniorAmount.value = countS;
  }
}

plusBasic.addEventListener("click", plusOneBasic);
plusSenior.addEventListener("click", plusOneSenior);

minusBasic.addEventListener("click", minusOneBasic);
minusSenior.addEventListener("click", minusOneSenior);

//Counting total amount
const totalAmount = document.getElementById("totalAmount");
let totalAmountNum = +totalAmount.innerText;

// Tickets form
const buyTicketsBtn = document.getElementById("buyTicketsBtn");
const formCloseBtn = document.getElementById("formCloseBtn");
const form = document.querySelector(".pop-up_form");
const overlay = document.querySelector(".pop-up__overlay");
buyTicketsBtn.addEventListener("click", showTicketsForm);
formCloseBtn.addEventListener("click", hideTicketsForm);
overlay.addEventListener("click", hideTicketsForm);

function showTicketsForm() {
  form.classList.remove("closed");
  overlay.classList.remove("transparent");
}

function hideTicketsForm() {
  form.classList.toggle("closed");
  overlay.classList.toggle("transparent");
}


//BURGER

const burgerBtn = document.getElementById("burgerBtn");
const headerNav = document.querySelector(".header__nav-list");
const navLink = document.querySelectorAll(".header__nav-list a");

burgerBtn.addEventListener("click", () => {
  ++numOfClicks;
  if (numOfClicks % 2 != 0) {
    burgerBtn.classList.toggle("open");
    headerNav.classList.toggle("open");
    navLink.forEach(element => element.style.marginRight = `${122 - element.offsetWidth}px`);
  }
  else if (numOfClicks % 2 == 0) {
    burgerBtn.classList.remove("open");
    headerNav.classList.remove("open");
    navLink.forEach(element => element.style.marginRight = "");
  }
})
