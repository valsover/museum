export function videoSlider() {


  //VIDEO CAROUSEL
  const carouselList = document.querySelector(".carousel__list"),
    videoItemName = [
      //массив аттрибутов для ссылки на слайде
      {
        name: "Welcome to the Louvre",
        link: "zp1BXPX8jcU",
      },
      {
        name: "The Venus de Milo",
        link: "Vi5D6FKhRmo",
      },
      {
        name: "Mesopotamian collections with A.Thomas",
        link: "NOhDysLnTvY",
      },
      {
        name: "Exhibition - The Body and the Soul",
        link: "aWmJ5DgyWPI",
      },
      {
        name: "Little Spring Tales - La ruse du Renard",
        link: "2OR0OCr6uRE",
      },
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
          preload="none"
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
          videoItemPlayBtn[i].style.backgroundImage = "url(assets/svg/video-slider/play-youtube-btn.svg)";
        }
      }
      el.play();
      btn.style.backgroundImage = "none";
    } else {
      el.pause();
      btn.style.backgroundImage = "url(assets/svg/video-slider/play-youtube-btn.svg)";
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

  let gap,
    itemWidth,
    isEnabled = true;

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

  
}