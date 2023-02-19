/******* Choosing elements/clickable items ******/
/*******************  Pizza 1  *****************/

/* Container */
const p1a_container = document.querySelector("#pizza1a_container");
const p1b_container = document.querySelector("#pizza1b_container");
const p1c_container = document.querySelector("#pizza1c_container");

/* sprite */
const p1a_sprite = document.querySelector("#pizza1a_sprite");
const p1b_sprite = document.querySelector("#pizza1b_sprite");
const p1c_sprite = document.querySelector("#pizza1c_sprite");
/*******************  Pizza 3  *****************/

/* Container */
const p3a_container = document.querySelector("#pizza3a_container");
const p3b_container = document.querySelector("#pizza3b_container");

/* sprite */
const p3a_sprite = document.querySelector("#pizza3a_sprite");
const p3b_sprite = document.querySelector("#pizza3b_sprite");

/*******************  Pizza 5  *****************/

/* Container */
const p5_container = document.querySelector("#pizza5_container");

/* sprite */
const p5_sprite = document.querySelector("#pizza5_sprite");

////////////////////////////////////////////////////////////////////////////

/*Functions when clicking elemetns  */

p1a_sprite.addEventListener("click", zoomOut);
p1b_sprite.addEventListener("click", zoomOut);
p1c_sprite.addEventListener("click", zoomOut);

p3a_sprite.addEventListener("click", fadeOut);

/*Element movements */
function zoomOut() {
  p1a_container.classList.add("paused");
  p1a_sprite.classList.add("zoom_out");
}

function fadeOut() {
  p3a_container.classList.add("paused");
  p3a_sprite.classList.add("fade");
}
