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

//FADE-UP SCROLL ANIMATION
let isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);
function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);
function scrolling(e) {
  for (let i = 0; i < picsCollect.length; i++) {
    let picsImg = picsCollect[i];

    if (isPartiallyVisible(picsImg)) {
      picsImg.classList.add("img-show");
    } else {
      picsImg.classList.remove("img-show");
    }
  }
}

function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  return ((top >= 0) && (bottom <= window.innerHeight));
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
const totalAmount = document.getElementById("totalAmount");
const ticketType = document.querySelectorAll(".type-list__input");

const ticketTypeSelect = document.querySelector(".form__input.ticket");
const formBasicAmount = document.querySelector(".payment__basic_num");
const formSeniorAmount = document.querySelector(".payment__senior_num");
const formBasicSum = document.querySelector(".payment__basic_price");
const formSeniorSum = document.querySelector(".payment__senior_price");
const formTotalAmount = document.querySelector(".total__num");
const formBasicRowInput = document.querySelector(".basic__row-input");
const formSeniorRowInput = document.querySelector(".senior__row-input");


let basicTotal,
  seniorTotal,
  countB = 1,
  countS = 0,
  totalSResultMain = 0,
  totalResultPopup = 0;

ticketType.forEach((el) => {
  el.addEventListener("click", checkRadio);
  checkRadio();
});

function checkRadio() {
  for (let i = 0; i < ticketType.length; i++) {
    if (ticketType[i].type === "radio" && ticketType[i].checked) {
      if (ticketType[i].value === "permanent") {
        basicTotal = 20;
      } else if (ticketType[i].value === "temporary") {
        basicTotal = 25;
      } else if (ticketType[i].value === "combined") {
        basicTotal = 40;
      }
      for (let j = 0; j < ticketTypeSelect.length; j++) {
        if (ticketTypeSelect[j].value === ticketType[i].value) {
          ticketTypeSelect[j].selected = true;
        }
      }
      seniorTotal = basicTotal / 2;
      countTotal();
    }
  }
}

plusBasic.addEventListener("click", () => plusTicket(countB, basicAmount, formBasicAmount, formBasicSum, formBasicRowInput));
plusSenior.addEventListener("click", () => plusTicket(countS, seniorAmount, formSeniorAmount, formSeniorSum, formSeniorRowInput));
minusBasic.addEventListener("click", () => minusTicket(countB, basicAmount, formBasicAmount, formBasicSum, formBasicRowInput));
minusSenior.addEventListener("click", () => minusTicket(countS, seniorAmount, formSeniorAmount, formSeniorSum, formSeniorRowInput));

function plusTicket(a, b, c, d, f) {
  if (a < 20) {
    if (a === countB && b === basicAmount && c === formBasicAmount && d === formBasicSum && f === formBasicRowInput) {
      countB++;
      b.value = c.innerHTML = f.value = countB;
      d.innerHTML = basicTotal * countB;
    }
    else {
      countS++;
      b.value = c.innerHTML = f.value = countS;
      d.innerHTML = seniorTotal * countS;
    }
  } else if (a >= 20) {
    a = 20;
    b.value = a;
  }
  countTotal();
}

function minusTicket(a, b, c, d, f) {
  if (a <= 20 && a > 0) {
    if (a === countB && b === basicAmount && c === formBasicAmount && d === formBasicSum && f === formBasicRowInput) {
      countB--;
      b.value = c.innerHTML = f.value = countB;
      d.innerHTML = basicTotal * countB;
    }
    else {
      countS--;
      b.value = c.innerHTML = f.value = countS;
      d.innerHTML = seniorTotal * countS;
    }
  } else {
    a = 0;
    b.value = a;
  }
  countTotal();
}

function countTotal() {
  totalSResult = totalResultPopup = (basicTotal * countB) + (seniorTotal * countS);
  totalAmount.innerText = totalSResult;
  formTotalAmount.innerHTML = `${totalSResult} €`;
}



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



//Стрелка вверх
const upArrow = document.querySelector(".scroll-up__btn");
upArrow.style.top = `${window.innerHeight - 100}px`;

window.addEventListener("resize", () => {
  upArrow.style.top = `${window.innerHeight - 100}px`;
}, false);

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    upArrow.classList.remove("hidden");
  } else { upArrow.classList.add("hidden");}
});





//MAPBOX
mapboxgl.accessToken = 'pk.eyJ1IjoidmFsc292ZXIiLCJhIjoiY2t1cDdrdXR2MWFoZDJ1dGhyMGliMHJyOCJ9.y013ADW6hGdmF4GB-SVxvg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/valsover/ckup8ik1w13pr17p563qhykht',
  center: [2.337, 48.8607],
  zoom: 16
});
map.addControl(new mapboxgl.NavigationControl());
const marker1 = new mapboxgl.Marker({ color: "black" })
  .setLngLat([2.3364, 48.86091])
  .addTo(map);

const marker2 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3333, 48.8602])
  .addTo(map);

const marker3 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3397, 48.8607])
  .addTo(map);

const marker4 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.333, 48.8619])
  .addTo(map);

const marker5 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3365, 48.8625])
  .addTo(map);





//VIDEO CAROUSEL
const carouselList = document.querySelector(".carousel__list"); //контейнер со слайдами
const videoItemName = [
  { name: "Welcome to the Louvre",
    link: "zp1BXPX8jcU",},
  { name: "The Venus de Milo",
    link: "Vi5D6FKhRmo",},
  { name: "Mesopotamian collections with A.Thomas",
    link: "NOhDysLnTvY",},
  { name: "Exhibition - The Body and the Soul",
    link: "aWmJ5DgyWPI",},
  { name: "Little Spring Tales - La ruse du Renard",
    link: "2OR0OCr6uRE",},
]; //массив аттрибутов для ссылки на слайде


//Функция заполнения контейнера слайдами
function createSlider() {
  for (let i = 0; i < 5; i++) {
    carouselList.innerHTML += `<li class="video__item">
                                <div class="carousel-video__wrapper">
                                  <video
                                    class="carousel-video"
                                    src="assets/video/video${i}.mp4"
                                    poster="assets/img/video-posters/poster${i}.jpg"
                                  ></video>
                                  <p class="video__item-btn"></p>
                                  <a href="" target="_blank" class="video__item-name"></a>
                                </div>
                              </li>`;
  }
  for (let i = 0; i < videoItemName.length; i++) {
    document.querySelectorAll(".video__item-name")[i].innerHTML = videoItemName[i].name;
    document.querySelectorAll(".video__item-name")[i].href = `https://youtu.be/${videoItemName[i].link}`;
  }
}
window.onload = createSlider();

const videoItem = document.querySelectorAll(".video__item"); //коллекция слайдов
const carouselVideos = document.querySelectorAll(".carousel-video"); //видео-элемент в слайде
const videoTags = document.getElementsByTagName("video"); //все видео-элементы в документе
const videoItemPlayBtn = document.querySelectorAll(".video__item-btn"); //кнопки play на слайде

//Функция проигрывания видео в каждом слайде с остановкой всех остальных видео на странице
function smallPlay(el, btn) {
  if (el.paused) {
    for (let i = 0; i < videoTags.length; i++) {
      videoTags[i].pause();
      for (let i = 0; i < videoItemPlayBtn.length; i++) {
        videoItemPlayBtn[i].style.backgroundImage = "url(assets/svg/play-youtube-btn.svg)";
      }
    }
    el.play();
    btn.style.backgroundImage = "none";
  } else {
    el.pause();
    btn.style.backgroundImage = "url(assets/svg/play-youtube-btn.svg)";
  }
}
for (let i = 0; i < carouselVideos.length; i++) {
  carouselVideos[i].addEventListener("click", () => {
    smallPlay(carouselVideos[i], videoItemPlayBtn[i]);
  }); //клик по самому видео в каждом слайде
  videoItemPlayBtn[i].addEventListener("click", () => {
    smallPlay(carouselVideos[i], videoItemPlayBtn[i]);
  }); //клик по кнопке "Play" на каждом слайде
}

let gap, itemWidth;

//Функция установки значения "left" для каждого слайда
function reposSlideItemLeft() {
  if (window.innerWidth <= 768) {
    gap = Math.round(carouselList.offsetWidth * 0.02747);
    itemWidth = Math.round(carouselList.offsetWidth * 0.48626);
  } else {
    gap = Math.round(carouselList.offsetWidth * 0.02917);
    itemWidth = Math.round(carouselList.offsetWidth * 0.31388);
  }

  for (let i = 0; i < videoItem.length; i++) {
    let left = i * (gap + itemWidth);
    videoItem[i].style.left = `${left}px`;
  }
}
document.addEventListener("DOMContentLoaded", reposSlideItemLeft);
window.addEventListener("resize", reposSlideItemLeft);

const nextVideo = document.querySelector(".next_btn"); //кнопка Next (анимация справа-налево)
const prevVideo = document.querySelector(".prev_btn"); //кнопка Prevew (анимация слева-направо)

function becomeEnable() {
  isEnabled = true;
}

nextVideo.addEventListener("click", function () {
  if (isEnabled) {
    for (let i = 0; i < videoItem.length; i++) {
      isEnabled = false;
      if (videoItem[i].offsetLeft == ((gap + itemWidth) * 0)) {
        videoItem[i].style.left = `${(gap + itemWidth) * (videoItem.length - 1)}px`;
        videoItem[i].classList.remove("to-right");
        videoItem[i].classList.add("to-left");
      } else if (videoItem[i].offsetLeft == ((gap + itemWidth) * (videoItem.length - 1))) {
        videoItem[i].style.left = `${videoItem[i].offsetLeft - (gap + itemWidth)}px`;
        videoItem[i].classList.remove("to-left");
      } else {
        videoItem[i].style.left = `${videoItem[i].offsetLeft - (gap + itemWidth)}px`;
      }
      videoItem[i].addEventListener('transitionend', becomeEnable);
    }
    colorVideoDotsNext();
  }
}); //перемещение слайдов справа-налево с заполнением буллетов

prevVideo.addEventListener("click", function () {
  if (isEnabled) {
    for (let i = 0; i < videoItem.length; i++) {
      isEnabled = false;
      if (videoItem[i].offsetLeft == ((gap + itemWidth) * 0)) {
        videoItem[i].style.left = `${(gap + itemWidth) * 1}px`;
        videoItem[i].classList.remove("to-left");
        videoItem[i].classList.remove("to-right");
      } else if (videoItem[i].offsetLeft == ((gap + itemWidth) * (videoItem.length - 1))) {
        videoItem[i].style.left = `${(gap + itemWidth) * 0}px`;
        videoItem[i].classList.remove("to-left");
        videoItem[i].classList.add("to-right");
      } else {
        videoItem[i].style.left = `${videoItem[i].offsetLeft + (gap + itemWidth)}px`;
      }
      carouselList.addEventListener('transitionend', becomeEnable);
    }
    colorVideoDotsPrev();
  }
});//перемещение слайдов слева-направо с заполнением буллетов

const videoDots = document.querySelectorAll(".video-dot"); //коллекция буллетов

//Функции заполнения буллетов при клике на "Next" и "Prevew"
function colorVideoDotsNext() {
  for (let i = 0; i < videoItem.length; i++) {
    videoDots[i].classList.remove("slider__dot_default");
    if (videoItem[i].offsetLeft == gap + itemWidth) {
      videoDots[i].classList.add("slider__dot_default");
      player.src = `assets/video/video${i}.mp4`;
      player.poster = `assets/img/video-posters/poster${i}.jpg`;
    }
  }
}
function colorVideoDotsPrev() {
  for (let i = 0; i < videoItem.length; i++) {
    videoDots[i].classList.remove("slider__dot_default");
    if (videoItem[i].classList[1] === "to-right") {
      videoDots[i].classList.add("slider__dot_default");
      player.src = `assets/video/video${i}.mp4`;
      player.poster = `assets/img/video-posters/poster${i}.jpg`;
    }
  }
}
