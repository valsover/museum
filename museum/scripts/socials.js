export function socials() {


  //STYLING SOCIALS ICONS
  const socials = document.querySelectorAll(".socials-list__item"),
    socialsHeader = document.querySelectorAll(".footer__socials-item");

  const socialPainting = arr => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.background = `center no-repeat url("assets/svg/socials/${arr[i].classList[1]}.svg")`;
    }
  };

  window.onload = socialPainting(socials);
  window.onload = socialPainting(socialsHeader);

  
}