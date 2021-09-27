//Styling background images for footer socials list items
const social = document.querySelectorAll(".socials-list__item");

for (let i = 0; i < social.length; i++) {
  social[i].style.background = `center no-repeat url("assets/svg/${social[i].classList[1]}.svg")`;
}

//Filling Visiting block with repeating cards
const cardsContainer = document.getElementById("cards");
let cardsArr = [
  {
    link: "https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815",
    source: "assets/img/royal-palace.jpg",
    name: "Royal Palace"
  },
  {
    link: "https://www.google.com/maps/@48.8563254,2.3352706,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10!3e12!7i11000!8i5500",
    source: "assets/img/denon-wing.jpg",
    name: "Denon Wing"
  },
  {
    link: "https://www.google.com/maps/@48.8601723,2.3395439,3a,88.4y,322.04h,84.25t/data=!3m7!1e1!3m5!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10!3e12!7i10240!8i5120",
    source: "assets/img/colonnade-perrault.jpg",
    name: "Colonnade Perrault"
  },
  {
    link: "https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736",
    source: "assets/img/greek-hall.jpg",
    name: "Greek Hall"
  },
  {
    link: "https://www.google.com/maps/@48.8598788,2.3355157,3a,82.2y,7.53h,94t/data=!3m7!1e1!3m5!1sAF1QipO1wkUUbyzpPjj-OR0mR5etZJT-xl-40XK8rDQ3!2e10!3e12!7i10240!8i5120",
    source: "assets/img/mona-lisa.jpg",
    name: "Mona Lisa"
  },
  {
    link: "https://www.google.com/maps/@48.8563254,2.3352706,3a,90y,21.26h,79.91t/data=!3m7!1e1!3m5!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10!3e12!7i11304!8i5652",
    source: "assets/img/night-palace.jpg",
    name: "Night Palace"
  }
];
for (let i = 0; i < cardsArr.length; i++) {
  cardsContainer.innerHTML += `<div><a 
  href="${cardsArr[i].link}" class="card"><img
  src="${cardsArr[i].source}" alt="${cardsArr[i].name}" width="440" height="285"><h3
  class="cards__heading forum-font-32 underline-subtitle">${cardsArr[i].name}</h3><p
  class="cards__description roboto-font-22-black">360° Virtual Tour <br><span
  class="cards__description--small">Google Street Panorama View</span></p></a></div>`;
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