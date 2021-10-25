export function customVideoPlayer() {


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
    mousedown = false,
    focused = false;

  const playMainVideo = () => {
    //Playing main large video player
    if (player.paused) {
      player.play();
      largePlayBtn.style.backgroundImage = "none";
      smallPlayBtn.classList.add("playing");
    } else {
      player.pause();
      largePlayBtn.style.backgroundImage = "url(assets/svg/video-player/large-play-btn.svg)";
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
    if (focused) {
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
  window.addEventListener('pointerdown', e => e.target.closest('#video') ? focused = true : focused = false);


}