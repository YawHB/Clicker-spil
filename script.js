document.querySelector("#pizza1a_sprite").addEventListener("click", zoomOut);

document.querySelector("#pizza3a_sprite").addEventListener("click", fadeOut);

/*Element movements */

function fadeOut() {
  document.querySelector("#pizza3a_container").classList.add("paused");
  document.querySelector("#pizza3a_sprite").classList.add("fade");
}

function zoomOut() {
  document.querySelector("#pizza1a_container").classList.add("paused");
  document.querySelector("#pizza1a_sprite").classList.add("zoom_out");
}
