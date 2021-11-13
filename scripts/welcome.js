export function welcome() {


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

  
}