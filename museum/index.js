//Styling background images for footer socials list items
const social = document.querySelectorAll(".socials-list__item");
const social768 = document.querySelectorAll(".footer__socials-item");

function socialPainting(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.background = `center no-repeat url("assets/svg/${arr[i].classList[1]}.svg")`;
  }
}
socialPainting(social);
socialPainting(social768);




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
    width: 464,
    height: 464,
    title: "Antonio Canova: Psyche Revived by Cupid's Kiss, 1757 – 1822, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery2.jpg",
    alt: "Artemis",
    width: 464,
    height: 580,
    title: "Leochares: Diana of Versailles, C1st - 2nd A.D, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery3.jpg",
    alt: "Dying Slave",
    width: 464,
    height: 580,
    title: "Michelangelo: Dying Slave for the Tomb of Julius II., c. 1513-15, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery4.jpg",
    alt: "Nike of Samothrace",
    width: 464,
    height: 464,
    title: "AWinged Victory of Samothrace, circa 220-185 BC, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery5.jpg",
    alt: "Venus de Milo",
    width: 464,
    height: 580,
    title: "Alexandros of Antioch: Venus de Milo, between 150 and 125 BC, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery6.jpg",
    alt: "The Virgin and Child with Saint Anne",
    width: 464,
    height: 580,
    title: "Leonardo da Vinci: The Virgin and Child with Saint Anne, c. 1503, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery7.jpg",
    alt: "Mona Lisa",
    width: 464,
    height: 580,
    title: "Leonardo da Vinci: Mona Lisa or Giocondo, c. 1503–1506, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery8.jpg",
    alt: "Mollien",
    width: 464,
    height: 580,
    title: "Hector Lefuel: Louvre - grand escalier Mollien"
  },
  {
    src: "assets/img/gallery/galery9.jpg",
    alt: "Venus of Arles",
    width: 464,
    height: 580,
    title: "Venus de Milo, 1st century BC, Paris, Louvre (It may be a copy of the Aphrodite of Thespiae by Praxiteles)"
  },
  {
    src: "assets/img/gallery/galery10.jpg",
    alt: "Louvr Viscontie",
    width: 464,
    height: 464,
    title: "Louvre: Art de l'Islam Cour Visconti - Kanso Déco Ricciotti, Escalier contemporain, Louvre"
  },
  {
    src: "assets/img/gallery/galery11.jpg",
    alt: "Liberty Leading the People",
    width: 464,
    height: 464,
    title: "Eugène Delacroix: Liberty Leading the People, 1830, Paris, Louvre "
  },
  {
    src: "assets/img/gallery/galery12.jpg",
    alt: "Arria et Paetus",
    width: 464,
    height: 348,
    title: "Pierre Lepautre: Arria et Paetus, 1681, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery13.jpg",
    alt: "Ermafrodito borghese",
    width: 464,
    height: 348,
    title: "Materazzo del bernini: Ermafrodito borghese, 2nd century AD, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery14.jpg",
    alt: "La Belle Ferronnière",
    width: 464,
    height: 580,
    title: "Leonardo da Vinci or his Milanese circle: La Belle Ferronnière, 1490–1496, Paris, Louvre"
  },
  {
    src: "assets/img/gallery/galery15.jpg",
    alt: "Louvre Pyramid",
    width: 464,
    height: 464,
    title: "Ieoh Ming Pei: Louvre Pyramid, 1988, Paris, Louvre"
  },
];
const pics = document.getElementById("pics");
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(picsArr);

for (let i = 1; i < picsArr.length; i++) {
  pics.innerHTML += `<img src=${picsArr[i].src} alt="${picsArr[i].alt}" width="${picsArr[i].width}" height="${picsArr[i].height}" title="${picsArr[i].title}">`;
}

const picsCollect = pics.getElementsByTagName("img");
for (let i = 0; i < picsCollect.length; i++) {
  if (+picsCollect[i].getAttribute("width") === +picsCollect[i].getAttribute("height")) {
    picsCollect[i].classList.add("square");
  } else if (+picsCollect[i].getAttribute("width") < +picsCollect[i].getAttribute("height")) {
    picsCollect[i].classList.add("vertical");
  } else if (+picsCollect[i].getAttribute("width") > +picsCollect[i].getAttribute("height")) {
    picsCollect[i].classList.add("horizontal");
  }
}

if (window.scrollY == 4337) {
  pics.style.backgroundColor = "#fff";
}






//Custom video player
const playerWrapper = document.querySelector(".player__inner");
const player = document.getElementById("player");
const largePlayBtn = document.getElementById("largePlayBtn");
const smallPlayBtn = document.getElementById("smallPlayBtn");
const progressBar = document.getElementById("progressBar");
const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volumeSlider");
const fullScreenBtn = document.getElementById("fullScreenBtn");

//Проигрывание видео
function fastPlay() {
  if (player.paused) {
    player.play();
    largePlayBtn.style.backgroundImage = "none";
    smallPlayBtn.classList.add("playing");
  } else {
    player.pause();
    largePlayBtn.style.backgroundImage = "url(assets/svg/large-play-btn.svg)";
    smallPlayBtn.classList.remove("playing");
  }
}

//Изменение шкалы прогреса видео
function handleProgress() {
  const percent = (player.currentTime / player.duration) * 100;
  progressBar.value = percent;
  progressBar.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${progressBar.value}%, rgb(196, 196, 196) ${progressBar.value}%, rgb(196, 196, 196) 100%)`;

  if (percent === 100) {
    player.currentTime = 0;
    player.pause();
    largePlayBtn.style.backgroundImage = "url(assets/svg/large-play-btn.svg)";
    smallPlayBtn.classList.remove("playing");
  }
}

//Перемотка видео
function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
  player.currentTime = scrubTime;
}

//Перемотка видео на 10 сек назад и вперёд
function rewind(direction) {
  let time;
  if (direction === "ArrowRight") {
    time = player.currentTime + 10;
  } else if (direction === "ArrowLeft") {
    time = player.currentTime - 10;
  }
  if (time < 0) {
    time = 0;
  }
  player.currentTime = time;
}

//Выключение звука видео
function muteVideo() {
  if (player.muted == false && player.volume > 0) {
    player.muted = true;
    muteBtn.classList.add("muted");
    volumeSlider.value = 0;
    volumeSlider.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${volumeSlider.value * 100}%, #c4c4c4 ${volumeSlider.value * 100}%, #c4c4c4 100%)`;
  } else if (player.muted == true) {
    player.muted = false;
    muteBtn.classList.remove("muted");
    volumeSlider.value = player.volume;
    volumeSlider.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${volumeSlider.value * 100}%, #c4c4c4 ${volumeSlider.value * 100}%, #c4c4c4 100%)`;
  } else if (player.volume === 0) {
    player.muted = false;
    muteBtn.classList.remove("muted");
    player.volume = 0.5;
    volumeSlider.value = player.volume;
    volumeSlider.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${volumeSlider.value * 100}%, #c4c4c4 ${volumeSlider.value * 100}%, #c4c4c4 100%)`;
  }
}

//Изменение громкости видео
function handleVolume() {
  player.volume = this.value;
  this.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${this.value * 100}%, #c4c4c4 ${this.value * 100}%, #c4c4c4 100%)`;
  if (player.volume <= 0) {
    muteBtn.classList.add("muted");
  } else {
    muteBtn.classList.remove("muted");
  }
}

//Открытие видео на весь экран
let isFullscreen = false;
function doFullScreen() {
  isFullscreen = !isFullscreen;
  if (isFullscreen && !Boolean(document.fullscreenElement)) {
    playerWrapper.requestFullscreen();
    fullScreenBtn.classList.add("opened");
  } else {
    document.exitFullscreen();
    fullScreenBtn.classList.remove("opened");
  }
}
function exitHandler() {
  if (!document.fullscreenElement) {
    isFullscreen = false;
    fullScreenBtn.classList.remove("opened");
  }
}

//Управление с помощью клавиатуры
function keyboardControl(el) {
  switch (el.code) {
    case " ":
      fastPlay()
      break;
    case "KeyM":
      muteVideo()
      break;
    case "KeyF":
      doFullScreen()
      break;
    case "ArrowRight":
      rewind(el.code)
      break;
    case "ArrowLeft":
      rewind(el.code)
      break;
    case "KeyB":
      changeVideoSpeed("KeyB");
      break;
    case "KeyX":
      changeVideoSpeed("KeyX");
      break;
  }
}

player.defaultPlaybackRate = 1;
const playerSpeed = document.getElementById("playerSpeed");
function changeVideoSpeed(k) {
  if (k === "Comma") {
    while (player.playbackRate < 2) {
      player.playbackRate += 0.25;
      playerSpeed.innerText = `${player.playbackRate}x`;
      break;
    }
  } else if (k === "Period") {
    while (player.playbackRate > 0.25) {
      player.playbackRate -= 0.25;
      playerSpeed.innerText = `${player.playbackRate}x`;
      break;
    }
  }
  playerSpeed.classList.remove("hidden");
  setTimeout(() => {
    playerSpeed.classList.add("hidden");
  }, 1000);
}

//Список событий
player.addEventListener("click", fastPlay);
player.addEventListener("timeupdate", handleProgress);
largePlayBtn.addEventListener("click", fastPlay);
smallPlayBtn.addEventListener("click", fastPlay);
muteBtn.addEventListener("click", muteVideo);
fullScreenBtn.addEventListener("click", doFullScreen);
volumeSlider.addEventListener("change", handleVolume);
progressBar.addEventListener("change", handleProgress);
progressBar.addEventListener("click", scrub);

progressBar.addEventListener("mousemove", (e) => mousedown && scrub(e));
let mousedown = false;
progressBar.addEventListener("mousedown", () => (mousedown = true));
progressBar.addEventListener("mouseup", () => (mousedown = false));

window.addEventListener("keydown", keyboardControl);
window.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.code == "Period" || e.shiftKey && e.code == "Comma") {
    changeVideoSpeed(e.code);
  }
});





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
const headerNavFooter = document.querySelector(".header__nav-footer");
const navLink = document.querySelectorAll(".nav-list__link");

let numOfClicks = 0;
burgerBtn.addEventListener("click", () => {
  ++numOfClicks;
  if (numOfClicks % 2 != 0) {
    burgerBtn.classList.toggle("open");
    headerNav.classList.toggle("open");
    if (window.innerWidth <= 768) {
      headerNavFooter.classList.toggle("shown");
    }
    navLink.forEach(element => element.style.marginRight = `${109 - element.offsetWidth}px`);
  }
  else if (numOfClicks % 2 == 0) {
    burgerBtn.classList.remove("open");
    headerNav.classList.remove("open");
    headerNavFooter.classList.remove("shown");
    navLink.forEach(element => element.style.marginRight = "");
  }
})




// WELCOME CAROUSEL
let items = document.querySelectorAll(".carousel__item");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length; //бесконечная карусель
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  dots[currentItem].classList.remove("active");
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  dots[currentItem].classList.add("active");
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

//Смена изображений при клике на стрелки
document.querySelector(".welcome_prev").addEventListener("click", function () {
  if (isEnabled) {
    previousItem(currentItem);
    document.querySelector(".controls__count").innerHTML = `0${currentItem + 1} | 05`;
  }
});

document.querySelector(".welcome_next").addEventListener("click", function () {
  if (isEnabled) {
    nextItem(currentItem);
    document.querySelector(".controls__count").innerHTML = `0${currentItem + 1} | 05`;
  }
});

//Смена изображений при клике на кубики
let dots = document.querySelectorAll(".dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    if (isEnabled) {
      if (i === 0) {
        previousItem(i + 1);
      } else if ((i > 0 && i < 4) && (items[i + 1].classList[1] == "active" || items[4].classList[1] == "active")) {
        previousItem(i + 1);
      } else {
        nextItem(i - 1);
      }
      document.querySelector(".controls__count").innerHTML = `0${i + 1} | 05`;
    }
  });
}

//Свайп
const swipeDetect = (el) => {
  let surface = el,
    startX = 0,
    startY = 0,
    distX = 0,
    distY = 0,
    startTime = 0,
    elapsedTime = 0,
    threshold = 150,
    restraint = 100,
    allowedTime = 300;
  
  
//Смена изображений при свайпе мышью
  surface.addEventListener("mousedown", function (e) {
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });

  surface.addEventListener("mouseup", function (e) {
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if (distX > 0) {
          if (isEnabled) {
            previousItem(currentItem);
            document.querySelector(".controls__count").innerHTML = `0${currentItem + 1} | 05`;
          }
        } else {
            if (isEnabled) {
              nextItem(currentItem);
              document.querySelector(".controls__count").innerHTML = `0${currentItem + 1} | 05`;
            }
        }
      }
    }
    e.preventDefault();
  });


  //Смена изображений при свайпе пальцем
  surface.addEventListener("touchstart", function (e) {
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });

  surface.addEventListener("touchmove", function (e) {
    e.preventDefault();
  }); //Чтобы ничего не происходило при перелистывании страницы сверху-вниз

  surface.addEventListener("touchend", function (e) {
    let touchObj = e.changedTouches[0];
    distX = touchObj.pageX - startX;
    distY = touchObj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;

    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if (distX > 0) {
          if (isEnabled) {
            previousItem(currentItem);
            document.querySelector(".controls__count").innerHTML = `0${currentItem + 1} | 05`;
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
            document.querySelector(".controls__count").innerHTML = `0${currentItem + 1} | 05`;
          }
        }
      }
    }
    e.preventDefault();
  });
}

let carousel = document.querySelector(".items__wrapper");
swipeDetect(carousel);





//EXPLORE IMAGES COMPARE
const separator = document.querySelector(".separator");
const originalPhoto = document.querySelector(".photo-original");
const filteredPhoto = document.querySelector(".toaster");
const photoContainer = document.querySelector(".photos");
let flag = false;

separator.addEventListener("mousedown", function (evt) {
  evt.preventDefault();
  flag = true;
}, false);

document.addEventListener("mouseup", function () {
  flag = false;
}, false);

photoContainer.addEventListener("mousemove", function (evt) {
  let res = evt.pageX - this.offsetLeft;

  if (flag && res > 0 && res < filteredPhoto.offsetWidth) {
    separator.style.left = res + "px";
    originalPhoto.style.width = res + "px";
  }
}, false);