export function ticketsSlider() {


  //TICKETS IMAGE SLIDER
  const slides = document.querySelectorAll(".img");
  let index = 0;

  const activeSlide = (n) => {
    for (let slide of slides) {
      slide.classList.remove('visible');
    }
    slides[n].classList.add('visible');
  };
  const prepareCurrentSlide = (ind) => activeSlide(ind);
  const nextSlide = () => {
    if (index === slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  };
  const prevSlide = () => {
    if (index === 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  };
  setInterval(nextSlide, 3000);

  
}