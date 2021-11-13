export function burgerNav() {

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

  
}