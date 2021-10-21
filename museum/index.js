//STYLING SOCIALS ICONS
const socials = document.querySelectorAll(".socials-list__item"),
  socialsHeader = document.querySelectorAll(".footer__socials-item");

const socialPainting = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.background = `center no-repeat url("assets/svg/${arr[i].classList[1]}.svg")`;
  }
};

window.onload = socialPainting(socials);
window.onload = socialPainting(socialsHeader);




//VISITING SECTION
const cardsContainer = document.getElementById("cards"),
  cardsArr = [
    {source: "royal-palace",
      name: "Royal Palace"},
    {source: "denon-wing",
      name: "Denon Wing"},
    {source: "colonnade-perrault",
      name: "Colonnade Perrault"},
    {source: "greek-hall",
      name: "Greek Hall"},
    {source: "mona-lisa",
      name: "Mona Lisa"},
    {source: "night-palace",
      name: "Night Palace"}
  ];

const fillCards = () => {
  for (let i = 0; i < cardsArr.length; i++) {
    cardsContainer.innerHTML += `<div>
      <a href="tours/tour${i + 2}.html" target="_blank" class="card">
        <img src="assets/img/${cardsArr[i].source}.jpg" 
          alt="${cardsArr[i].name}"
          width="440"
          height="285"
        >
          <h3 class="cards__heading forum-font-32 underline-subtitle">${cardsArr[i].name}</h3>
          <p class="cards__description roboto-font-22-black">360° Virtual Tour <br>
            <span class="cards__description--small">Google Street Panorama View</span>
          </p>
        </a>
      </div>`;
  }
};

window.onload = fillCards();






//GALLERY SECTION CODE
const pics = document.getElementById("pics"),
  picsCollect = pics.getElementsByTagName("img"),
  picsArr = [
    {
      src: 0,
      alt: "Psyche Revived by Cupid's Kiss",
      width: 464,
      height: 464,
    },
    {
      src: 1,
      alt: "Artemis",
      width: 464,
      height: 580,
    },
    {
      src: 2,
      alt: "Dying Slave",
      width: 464,
      height: 580,
    },
    {
      src: 3,
      alt: "Nike of Samothrace",
      width: 464,
      height: 464,
    },
    {
      src: 4,
      alt: "Venus de Milo",
      width: 464,
      height: 580,
    },
    {
      src: 5,
      alt: "The Virgin and Child with Saint Anne",
      width: 464,
      height: 580,
    },
    {
      src: 6,
      alt: "Mona Lisa",
      width: 464,
      height: 580,
    },
    {
      src: 7,
      alt: "Mollien",
      width: 464,
      height: 580,
    },
    {
      src: 8,
      alt: "Venus of Arles",
      width: 464,
      height: 580,
    },
    {
      src: 9,
      alt: "Louvr Viscontie",
      width: 464,
      height: 464,
    },
    {
      src: 10,
      alt: "Liberty Leading the People",
      width: 464,
      height: 464,
    },
    {
      src: 11,
      alt: "Arria et Paetus",
      width: 464,
      height: 348,
    },
    {
      src: 12,
      alt: "Ermafrodito borghese",
      width: 464,
      height: 348,
    },
    {
      src: 13,
      alt: "La Belle Ferronnière",
      width: 464,
      height: 580,
    },
    {
      src: 14,
      alt: "Louvre Pyramid",
      width: 464,
      height: 464,
    },
  ];
let isScrolling = false;

const shufflePics = array => array.sort(() => Math.random() - 0.5);
const displayPics = () => {
  for (let i = 0; i < picsArr.length; i++) {
    pics.innerHTML += `<img
      src="assets/img/gallery/gallery${picsArr[i].src}.jpg"
      alt="${picsArr[i].alt}" 
      width="${picsArr[i].width}" 
      height="${picsArr[i].height}" 
      loading="lazy">`;
  }
  for (let i = 0; i < picsCollect.length; i++) {
    let picW = +picsCollect[i].getAttribute("width"),
      picH = +picsCollect[i].getAttribute("height");
    picW === picH ? picsCollect[i].classList.add("square") :
      picW < picH ? picsCollect[i].classList.add("vertical") :
        picW > picH ? picsCollect[i].classList.add("horizontal") : false;
  }
};
const scrolling = e => {
  for (let i = 0; i < picsCollect.length; i++) {
    let picsImg = picsCollect[i];
    isPartiallyVisible(picsImg) ? picsImg.classList.add("img-show") : picsImg.classList.remove("img-show");
  }
};
const isPartiallyVisible = el => {
  let elementBoundary = el.getBoundingClientRect(),
    top = elementBoundary.top,
    bottom = elementBoundary.bottom,
    height = elementBoundary.height;
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
};
const throttleScroll = e => {
  if (isScrolling == false) {
    window.requestAnimationFrame(() => {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
};

window.onload = shufflePics(picsArr);
window.onload = displayPics();
window.addEventListener("scroll", throttleScroll, false);
document.addEventListener("DOMContentLoaded", scrolling, false);





//CUSTOM VIDEO-PLAYER
const playerWrapper = document.querySelector(".player__inner"),
  player = document.getElementById("player"),
  largePlayBtn = document.getElementById("largePlayBtn"),
  smallPlayBtn = document.getElementById("smallPlayBtn"),
  progressBar = document.getElementById("progressBar"),
  muteBtn = document.getElementById("muteBtn"),
  volumeSlider = document.getElementById("volumeSlider"),
  fullScreenBtn = document.getElementById("fullScreenBtn"),
  playerSpeed = document.getElementById("playerSpeed");

let isFullscreen = false,
  mousedown = false;

const playMainVideo = () => {
  //Playing main large video player
  if (player.paused) {
    player.play();
    largePlayBtn.style.backgroundImage = "none";
    smallPlayBtn.classList.add("playing");
  } else {
    player.pause();
    largePlayBtn.style.backgroundImage = "url(assets/svg/large-play-btn.svg)";
    smallPlayBtn.classList.remove("playing");
  }
};
const handleProgress = () => {
  //Progress bar changing
  let percent = (player.currentTime / player.duration) * 100;
  if (percent === 100) {
    player.play();
    playMainVideo();
  } else {
    progressBar.value = percent;
    progressBar.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${progressBar.value}%, rgb(196, 196, 196) ${progressBar.value}%, rgb(196, 196, 196) 100%)`;
  }
};
const scrubVideo = e => {
  //Video rewind
  let scrubTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
  player.currentTime = scrubTime;
};
const rewindVideo = direction => {
  //10 sec back and forth video rewind
  let time;
  if (time < 0) {
    time = 0;
  } else {
    direction === "ArrowRight" ? time = player.currentTime + 10 :
      direction === "ArrowLeft" ? time = player.currentTime - 10 : false;
    player.currentTime = time;
  }
};
const changeVideoSpeed = key => {
  //Change video speed from 0.25x to 2x
  player.defaultPlaybackRate = 1;
  if (key === "Comma") {
    while (player.playbackRate < 2) {
      player.playbackRate += 0.25;
      break;
    }
  } else if (key === "Period") {
    while (player.playbackRate > 0.25) {
      player.playbackRate -= 0.25;
      break;
    }
  }
  playerSpeed.innerText = `${player.playbackRate}x`;
  playerSpeed.classList.remove("hidden");
  setTimeout(() => {
    playerSpeed.classList.add("hidden");
  }, 1000);
};
const handleVideoVolume = e => {
  //Video volume changing
  player.volume = e.value;
  e.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${e.value * 100}%, #c4c4c4 ${e.value * 100}%, #c4c4c4 100%)`;
  if (player.volume <= 0) {
    muteBtn.classList.add("muted");
  } else {
    muteBtn.classList.remove("muted");
  }
};
const scrubVolume = e => {
  let scrubValue = (e.offsetX / volumeSlider.offsetWidth);
  player.volume = scrubValue;
  volumeSlider.style.background = `linear-gradient(to right, rgb(113, 7, 7) 0%, rgb(113, 7, 7) ${scrubValue * 100}%, #c4c4c4 ${scrubValue * 100}%, #c4c4c4 100%)`;
};
const muteVideo = () => {
  //Mute video
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
};
const doFullScreen = () => {
  //Fullscreen video opening
  isFullscreen = !isFullscreen;
  if (isFullscreen && !Boolean(document.fullscreenElement)) {
    playerWrapper.requestFullscreen();
    fullScreenBtn.classList.add("opened");
  } else {
    document.exitFullscreen();
    fullScreenBtn.classList.remove("opened");
  }
};
const keyboardControl = el => {
  //Keyboard control
  switch (el.code) {
    case " ":
      playMainVideo()
      break;
    case "KeyM":
      muteVideo()
      break;
    case "KeyF":
      doFullScreen()
      break;
    case "ArrowRight":
      rewindVideo(el.code)
      break;
    case "ArrowLeft":
      rewindVideo(el.code)
      break;
    case "KeyB":
      changeVideoSpeed("KeyB");
      break;
    case "KeyX":
      changeVideoSpeed("KeyX");
      break;
  }
};

player.addEventListener("click", playMainVideo); //play and pause when click on the player
largePlayBtn.addEventListener("click", playMainVideo); //play and pause when click on the large play button
smallPlayBtn.addEventListener("click", playMainVideo); //play and pause when click on the small play button
player.addEventListener("timeupdate", handleProgress); //filling the progress bar over time
progressBar.addEventListener("change", handleProgress); //changing the progress bar state on click
progressBar.addEventListener("click", scrubVideo); //changing the progress bar on click
progressBar.addEventListener("mousemove", (e) => mousedown && scrubVideo(e)); //changing the progress bar on mousemove
progressBar.addEventListener("mousedown", () => (mousedown = true));
progressBar.addEventListener("mouseup", () => (mousedown = false));
volumeSlider.addEventListener("change", () => handleVideoVolume(volumeSlider)); //changing the video volume state on click
volumeSlider.addEventListener("mousemove", (e) => mousedown && scrubVolume(e)); //changing the video volume on mousemove
volumeSlider.addEventListener("mousedown", () => (mousedown = true));
volumeSlider.addEventListener("mouseup", () => (mousedown = false));
muteBtn.addEventListener("click", muteVideo); //mute video when click mute button
fullScreenBtn.addEventListener("click", doFullScreen); //open video in fullscreen when click fullscreen button
window.addEventListener("keydown", keyboardControl); //check which key on a keyboard was clicked
window.addEventListener("keydown", (e) => (e.shiftKey && e.code == "Period" || e.shiftKey && e.code == "Comma") ? changeVideoSpeed(e.code) : false); //checking for a keyboard shortcuts





//TICKETS CALCULATOR
const plusBasic = document.getElementById("plusBasic"),
  plusSenior = document.getElementById("plusSenior"),
  minusBasic = document.getElementById("minusBasic"),
  minusSenior = document.getElementById("minusSenior"),
  plusBasicForm = document.getElementById("plusBasicForm"),
  plusSeniorForm = document.getElementById("plusSeniorForm"),
  minusBasicForm = document.getElementById("minusBasicForm"),
  minusSeniorForm = document.getElementById("minusSeniorForm"),
  basicAmount = document.getElementById("basic"),
  seniorAmount = document.getElementById("senior"),
  totalAmount = document.getElementById("totalAmount"),
  ticketType = document.querySelectorAll(".type-list__input"),
  ticketTypeSelect = document.querySelector(".form__input.ticket"),
  formBasicAmount = document.querySelector(".payment__basic_num"),
  formSeniorAmount = document.querySelector(".payment__senior_num"),
  formBasicSum = document.querySelector(".payment__basic_price"),
  formSeniorSum = document.querySelector(".payment__senior_price"),
  formTotalAmount = document.querySelector(".total__num"),
  formBasicRowInput = document.querySelector(".basic__row-input"),
  formSeniorRowInput = document.querySelector(".senior__row-input");

let basicTotal,
  seniorTotal,
  countB = 1,
  countS = 0,
  totalSResultMain = 0,
  totalResultPopup = 0;

const countTotal = () => {
  totalSResultMain = totalResultPopup = (basicTotal * countB) + (seniorTotal * countS);
  totalAmount.innerText = totalSResultMain;
  formTotalAmount.innerHTML = `${totalSResultMain} €`;
};
const checkRadio = () => {
  for (let i = 0; i < ticketType.length; i++) {
    if (ticketType[i].type === "radio" && ticketType[i].checked) {
      let tt = ticketType[i].value;
      tt === "permanent" ? basicTotal = 20 :
        tt === "temporary" ? basicTotal = 25 :
          tt === "combined" ? basicTotal = 40 : false;
      for (let j = 0; j < ticketTypeSelect.length; j++) {
        ticketTypeSelect[j].value === tt ? ticketTypeSelect[j].selected = true : false;
      }
      seniorTotal = basicTotal / 2;
      countTotal();
    }
  }
};
const plusTicket = (a, b, c, d, f) => {
  if (a < 20) {
    if (a === countB && b === basicAmount && c === formBasicAmount && d === formBasicSum && f === formBasicRowInput) {
      countB++;
      b.value = c.innerHTML = f.value = countB;
      d.innerHTML = basicTotal * countB;
    } else {
      countS++;
      b.value = c.innerHTML = f.value = countS;
      d.innerHTML = seniorTotal * countS;
    }
  } else if (a >= 20) {
    a = 20;
    b.value = a;
  }
  countTotal();
};
const minusTicket = (a, b, c, d, f) => {
  if (a <= 20 && a > 0) {
    if (a === countB && b === basicAmount && c === formBasicAmount && d === formBasicSum && f === formBasicRowInput) {
      countB--;
      b.value = c.innerHTML = f.value = countB;
      d.innerHTML = basicTotal * countB;
    } else {
      countS--;
      b.value = c.innerHTML = f.value = countS;
      d.innerHTML = seniorTotal * countS;
    }
  } else {
    a = 0;
    b.value = a;
  }
  countTotal();
};

ticketType.forEach(el => el.addEventListener("click", checkRadio));
plusBasic.addEventListener("click", () => plusTicket(countB, basicAmount, formBasicAmount, formBasicSum, formBasicRowInput));
plusSenior.addEventListener("click", () => plusTicket(countS, seniorAmount, formSeniorAmount, formSeniorSum, formSeniorRowInput));
minusBasic.addEventListener("click", () => minusTicket(countB, basicAmount, formBasicAmount, formBasicSum, formBasicRowInput));
minusSenior.addEventListener("click", () => minusTicket(countS, seniorAmount, formSeniorAmount, formSeniorSum, formSeniorRowInput));








// TICKETS FORM
const buyTicketsBtn = document.getElementById("buyTicketsBtn"),
  formCloseBtn = document.getElementById("formCloseBtn"),
  form = document.querySelector(".pop-up_form"),
  overlay = document.querySelector(".pop-up__overlay");

const displayTicketForm = () => {
  if (window.getComputedStyle(form).visibility === "hidden") {
    form.classList.remove("closed");
    overlay.classList.remove("transparent");
  } else {
    form.classList.add("closed");
    overlay.classList.add("transparent");
  }
};

buyTicketsBtn.addEventListener("click", displayTicketForm);
formCloseBtn.addEventListener("click", displayTicketForm);
overlay.addEventListener("click", displayTicketForm);








//BURGER NAV
const burgerBtn = document.getElementById("burgerBtn"),
  headerNav = document.querySelector(".header__nav-list"),
  headerNavFooter = document.querySelector(".header__nav-footer"),
  navLink = document.querySelectorAll(".nav-list__link");

const displayNav = () => {
  if (window.getComputedStyle(headerNav).visibility === "hidden") {
    burgerBtn.classList.add("open");
    headerNav.classList.add("open");
    window.innerWidth <= 768 ? headerNavFooter.classList.add("shown") : false;
    navLink.forEach(link => link.style.marginRight = `${109 - link.offsetWidth}px`);
  } else {
    burgerBtn.classList.remove("open");
    headerNav.classList.remove("open");
    headerNavFooter.classList.remove("shown");
    navLink.forEach(link => link.style.marginRight = "");
  }
};

burgerBtn.addEventListener("click", displayNav);
navLink.forEach(link => link.addEventListener("click", displayNav));







// WELCOME CAROUSEL
const items = document.querySelectorAll(".carousel__item"),
  dots = document.querySelectorAll(".dot"),
  carousel = document.querySelector(".items__wrapper"),
  welcomeNext = document.querySelector(".welcome_next"),
  welcomePrev = document.querySelector(".welcome_prev"),
  welcomeCount = document.querySelector(".controls__count");

let currentItem = 0,
  isEnabled = true;

const changeCurrentItem = n => {
  currentItem = (n + items.length) % items.length; //бесконечная карусель
};
const hideItem = direction => {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  dots[currentItem].classList.remove("active");
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
};
const showItem = direction => {
  items[currentItem].classList.add("next", direction);
  dots[currentItem].classList.add("active");
  items[currentItem].addEventListener("animationend", function () {
    items[currentItem].classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
};
const previousItem = n => {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
};
const nextItem = n => {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
};

welcomePrev.addEventListener("click", () => {
  if (isEnabled) {
    previousItem(currentItem);
    document.querySelector(".controls__count").innerHTML = `0${currentItem + 1} | 05`;
  }
});
welcomeNext.addEventListener("click", () => {
  if (isEnabled) {
    nextItem(currentItem);
    document.querySelector(".controls__count").innerHTML = `0${currentItem + 1} | 05`;
  }
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    if (isEnabled) {
      i === 0 ? previousItem(i + 1) :
      ((i > 0 && i < 4) && (items[i + 1].classList[1] == "active" || items[4].classList[1] == "active")) ? previousItem(i + 1) : nextItem(i - 1);
    }
    welcomeCount.innerHTML = `0${i + 1} | 05`;
    });
}

const swipeDetect = el => {
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

  surface.addEventListener("mousedown", e => {
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });
  surface.addEventListener("mouseup", e => {
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
  surface.addEventListener("touchstart", e => {
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });
  surface.addEventListener("touchmove", e => e.preventDefault()); //Чтобы ничего не происходило при перелистывании страницы сверху-вниз
  surface.addEventListener("touchend", e => {
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

swipeDetect(carousel);





//EXPLORE IMAGES COMPARE
const separator = document.querySelector(".separator"),
  originalPhoto = document.querySelector(".photo-original"),
  filteredPhoto = document.querySelector(".toaster"),
  photoContainer = document.querySelector(".photos");

let flag = false;

separator.addEventListener("mousedown", evt => {
  evt.preventDefault();
  flag = true;
}, false);
document.addEventListener("mouseup", () => {
  flag = false;
}, false);
photoContainer.addEventListener("mousemove", evt => {
  let res = evt.pageX - photoContainer.offsetLeft;
  if (flag && res > 0 && res < filteredPhoto.offsetWidth) {
    separator.style.left = res + "px";
    originalPhoto.style.width = res + "px";
  }
}, false);
separator.addEventListener('touchstart', evt => {
  evt.preventDefault();
  flag = true;
}, false);
window.addEventListener('touchend', () => {
  flag = false;
}, false);
window.addEventListener('touchcancel', () => {
  flag = false;
}, false);
window.addEventListener('touchmove', evt => {
  for (let touch of evt.changedTouches) {
    let x = touch.pageX - photoContainer.offsetLeft;
    let shift = Math.max(0, Math.min(x, photoContainer.offsetWidth));
    originalPhoto.style.width = `${shift}px`;
    separator.style.left = `${shift}px`;
  }
}, false);







//TO TOP ARROW BUTTON
const toTopBtn = document.querySelector(".scroll-up__btn");
const placeToTopBtn = () => toTopBtn.style.top = `${window.innerHeight - 100}px`;

window.onload = placeToTopBtn();
window.addEventListener("resize", placeToTopBtn, false);
window.addEventListener("scroll", () => window.scrollY >= 300 ? toTopBtn.classList.remove("hidden") : toTopBtn.classList.add("hidden"));







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
const carouselList = document.querySelector(".carousel__list"),
  videoItemName = [
  //массив аттрибутов для ссылки на слайде
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
]; 

const createSlider = () => {
  //Функция заполнения контейнера слайдами
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
};

window.onload = createSlider();

const videoItem = document.querySelectorAll(".video__item"); //коллекция слайдов
const carouselVideos = document.querySelectorAll(".carousel-video"); //видео-элемент в слайде
const videoTags = document.getElementsByTagName("video"); //все видео-элементы в документе
const videoItemPlayBtn = document.querySelectorAll(".video__item-btn"); //кнопки play на слайде

const smallPlay = (el, btn) => {
  //Функция проигрывания видео в каждом слайде с остановкой всех остальных видео на странице
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
};

for (let i = 0; i < carouselVideos.length; i++) {
  carouselVideos[i].addEventListener("click", () => {
    smallPlay(carouselVideos[i], videoItemPlayBtn[i]);
  }); //клик по самому видео в каждом слайде
  videoItemPlayBtn[i].addEventListener("click", () => {
    smallPlay(carouselVideos[i], videoItemPlayBtn[i]);
  }); //клик по кнопке "Play" на каждом слайде
}

let gap, itemWidth;

const reposSlideItemLeft = () => {
  //Функция установки значения "left" для каждого слайда
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
};

document.addEventListener("DOMContentLoaded", reposSlideItemLeft);
window.addEventListener("resize", reposSlideItemLeft);

const nextVideo = document.querySelector(".next_btn"); //кнопка Next (анимация справа-налево)
const prevVideo = document.querySelector(".prev_btn"); //кнопка Prevew (анимация слева-направо)

const becomeEnable = () => isEnabled = true;

nextVideo.addEventListener("click", () => {
  //перемещение слайдов справа-налево с заполнением буллетов
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
});
prevVideo.addEventListener("click", () => {
  //перемещение слайдов слева-направо с заполнением буллетов
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
});

//Создание буллетов по кол-ву видео слайдов
const videoDotsContainer = document.querySelector(".video-dots"); //контейнер для буллетов
for (let i = 0; i < videoItem.length; i++) {
  videoDotsContainer.innerHTML += `<p class="controls__item video-dot"></p>`;
}
const videoDots = document.querySelectorAll(".video-dot"); //коллекция буллетов
videoDots[0].classList.add("slider__dot_default");

const colorVideoDotsNext = () => {
  //Функция заполнения буллетов при клике на "Next"
  for (let i = 0; i < videoItem.length; i++) {
    videoDots[i].classList.remove("slider__dot_default");
    if (videoItem[i].offsetLeft == gap + itemWidth) {
      videoDots[i].classList.add("slider__dot_default");
      player.src = `assets/video/video${i}.mp4`;
      player.poster = `assets/img/video-posters/poster${i}.jpg`;
    }
  }
};
const colorVideoDotsPrev = () => {
  //Функция заполнения буллетов при клике на "Prevew"
  for (let i = 0; i < videoItem.length; i++) {
    videoDots[i].classList.remove("slider__dot_default");
    if (videoItem[i].classList[1] === "to-right") {
      videoDots[i].classList.add("slider__dot_default");
      player.src = `assets/video/video${i}.mp4`;
      player.poster = `assets/img/video-posters/poster${i}.jpg`;
    }
  }
};