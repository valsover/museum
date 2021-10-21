//STYLING SOCIALS ICONS
const socialsList = document.querySelector(".socials__list"),
  socialItem = socialsList.querySelectorAll(".list__item");

const socialPainting = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.background = `center no-repeat url("../assets/svg/${arr[i].classList[1]}.svg")`;
  }
};

window.onload = socialPainting(socialItem);


//VISITING SECTION
const gallery = document.querySelector(".gallery__inner"),
  pics = document.querySelectorAll(".inner__item"),
  imgs = gallery.getElementsByTagName("img"),
  articles = document.querySelector(".articles"),
  article = document.querySelectorAll(".inner__article"),
  closeBtn = document.getElementById("closeBtn"),
  names = ["Cupid and Psyche", "Diana of Versailles", "The «slaves»", "Winged victory", "Venus of Milo", "The virgin and child", "Mona Lisa", "Grand staircase Mollien", "Antiques gallery", "Visconti Court", "Liberty leading the people", "The Marly court", "Sleeping hermaphrodite", "The beautiful Ferronniere", "The pyramid"];

const imgPlace = () => {
  for (let i = 0; i < imgs.length; i++) {
    let picW = +imgs[i].getAttribute("width"),
      picH = +imgs[i].getAttribute("height");
    picW === picH ? pics[i].classList.add("square") :
      picW < picH ? pics[i].classList.add("vertical") :
        picW > picH ? pics[i].classList.add("horizontal") : false;
  }
  for (let i = 0; i < pics.length; i++) {
    pics[i].setAttribute('data-before', names[i]);
    pics[i].addEventListener("click", () => {
      article.forEach((e) => e.classList.remove("shown"));
      if (window.getComputedStyle(articles).visibility === "hidden") {
        articles.classList.remove("transparent");
        article[i].classList.add("shown");
      } else {
        articles.classList.add("transparent");
      }
    });
  }
};
window.onload = imgPlace();
closeBtn.addEventListener("click", () => {
  if (window.getComputedStyle(articles).visibility === "hidden") {
    articles.classList.remove("transparent");
  } else {
    articles.classList.add("transparent");
  }
});


//TO TOP ARROW BUTTON
const toTopBtn = document.querySelector(".scroll-up__btn");
const placeToTopBtn = () => toTopBtn.style.top = `${window.innerHeight - 100}px`;

window.onload = placeToTopBtn();
window.addEventListener("resize", placeToTopBtn, false);
window.addEventListener("scroll", () => window.scrollY >= 300 ? toTopBtn.classList.remove("hidden") : toTopBtn.classList.add("hidden"));
