export function toTopBtn() {


  //TO TOP ARROW BUTTON
  const toTopBtn = document.querySelector(".scroll-up__btn");
  const placeToTopBtn = () => toTopBtn.style.top = `${window.innerHeight - 100}px`;

  window.onload = placeToTopBtn();
  window.addEventListener("resize", placeToTopBtn);
  window.addEventListener("scroll", () => window.scrollY >= 300 ? toTopBtn.classList.remove("hidden") : toTopBtn.classList.add("hidden"));


}