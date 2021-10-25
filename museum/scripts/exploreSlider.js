export function exploreSlider() {


  //EXPLORE IMAGES COMPARE
  const separator = document.querySelector(".separator"),
    originalPhoto = document.querySelector(".photo-original"),
    filteredPhoto = document.querySelector(".toaster"),
    photoContainer = document.querySelector(".photos");

  let flag = false;

  separator.addEventListener("mousedown", evt => {
    evt.preventDefault();
    flag = true;
  });
  separator.addEventListener('touchstart', evt => {
    evt.preventDefault();
    flag = true;
  });
  document.addEventListener("mouseup", () => flag = false);
  window.addEventListener('touchend', () => flag = false);
  window.addEventListener('touchcancel', () => flag = false);
  photoContainer.addEventListener("mousemove", evt => {
    let res = evt.pageX - photoContainer.offsetLeft;
    if (flag && res > 0 && res < filteredPhoto.offsetWidth) {
      separator.style.left = ((res * 100) / filteredPhoto.offsetWidth) + "%";
      originalPhoto.style.width = ((res * 100) / filteredPhoto.offsetWidth) + "%";
    }
  });
  window.addEventListener('touchmove', evt => {
    for (let touch of evt.changedTouches) {
      let x = touch.pageX - photoContainer.offsetLeft;
      let shift = Math.max(0, Math.min(x, photoContainer.offsetWidth));
      originalPhoto.style.width = ((shift * 100) / photoContainer.offsetWidth) + "%";
      separator.style.left = ((shift * 100) / photoContainer.offsetWidth) + "%";
    }
  });

  
}