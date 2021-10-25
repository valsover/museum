export function gallery() {


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
  window.addEventListener("scroll", throttleScroll);
  document.addEventListener("DOMContentLoaded", scrolling);

  
}