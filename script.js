window.addEventListener("load", ready);

let points;
let life;

function ready() {
  console.log("ready function");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document
    .querySelector("#btn_instructions")
    .addEventListener("click", howToPlay);
  document
    .querySelector("#btn_level_complete")
    .addEventListener("click", showStartScreen);
  document
    .querySelector("#btn_game_over")
    .addEventListener("click", showStartScreen);
}

function showStartScreen() {
  ("Show start screen");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#instructions_page").classList.add("hidden");
}

function howToPlay() {
  console.log("how to play");
  document.querySelector("#instructions_page").classList.remove("hidden");
  document.querySelector("#instructions_page").classList.add("pages_fade_in");

  document
    .querySelector("#instructions_page")
    .addEventListener("click", showStartScreen);
}

function startGame() {
  console.log("start");
  points = 0;
  resetLives();
  resetPoints();

  document.querySelector("#sound_background_music").play();
  document.querySelector("#start").classList.add("hidden");

  // Initiates the starting animations
  startAnimationPizza();
  setPositions();
  registerClick();
  AnimationEndReset();
  iterationReset();

  function startAnimationPizza() {
    //Set falling on animations

    document.querySelector("#pizza1_container").classList.add("falling");
    document.querySelector("#pizza2_container").classList.add("falling");
    document.querySelector("#pizza3_container").classList.add("falling");
    document.querySelector("#pizza4_container").classList.add("falling");
    document.querySelector("#pizza5_container").classList.add("falling");
    document.querySelector("#pizza6_container").classList.add("falling");

    //Set delay on animations
    document.querySelector("#pizza1_container").classList.add("delay1");
    document.querySelector("#pizza2_container").classList.add("delay2");
    document.querySelector("#pizza3_container").classList.add("delay3");
    document.querySelector("#pizza4_container").classList.add("delay4");
    document.querySelector("#pizza5_container").classList.add("delay5");
    document.querySelector("#pizza6_container").classList.add("delay6");

    //Timer start
    document
      .querySelector("#time_board_img")
      .classList.add("time_board_animation");
    document
      .querySelector("#time_board_img")
      .addEventListener("animationend", timeIsUp);

    //Hide points from the beginning
    document
      .querySelector("#pizza1_container img:nth-child(2)")
      .classList.add("hidden");
    document
      .querySelector("#pizza2_container img:nth-child(2)")
      .classList.add("hidden");
    document
      .querySelector("#pizza3_container img:nth-child(2)")
      .classList.add("hidden");
    document
      .querySelector("#pizza4_container img:nth-child(2)")
      .classList.add("hidden");
    document
      .querySelector("#pizza5_container img:nth-child(2)")
      .classList.add("hidden");
    document
      .querySelector("#pizza6_container img:nth-child(2)")
      .classList.add("hidden");

    document
      .querySelector("#broccoli1_container")
      .classList.add("broccoli1_danger");
    document.querySelector("#broccoli1_sprite").classList.add("shake");
    document
      .querySelector("#broccoli2_container")
      .classList.add("broccoli2_danger");
    document.querySelector("#broccoli2_sprite").classList.add("shake");

    document
      .querySelector("#broccoli3_container")
      .classList.add("broccoli3_danger");
    document.querySelector("#broccoli3_sprite").classList.add("shake");
  }
  function setPositions() {
    document.querySelector("#pizza1_container").classList.add("position1");
    document.querySelector("#pizza2_container").classList.add("position2");
    document.querySelector("#pizza3_container").classList.add("position3");
    document.querySelector("#pizza4_container").classList.add("position4");
    document.querySelector("#pizza5_container").classList.add("position5");
    document.querySelector("#pizza6_container").classList.add("position6");
  }
  function registerClick() {
    document
      .querySelector("#pizza1_container")
      .addEventListener("mousedown", clickPizza1);
    document
      .querySelector("#pizza2_container")
      .addEventListener("mousedown", clickPizza1);
    document
      .querySelector("#pizza3_container")
      .addEventListener("mousedown", clickPizza1);
    document
      .querySelector("#pizza4_container")
      .addEventListener("mousedown", clickPizza3);
    document
      .querySelector("#pizza5_container")
      .addEventListener("mousedown", clickPizza3);
    document
      .querySelector("#pizza6_container")
      .addEventListener("mousedown", clickPizza5);
    document
      .querySelector("#broccoli1_container")
      .addEventListener("mousedown", clickBroccoli);
    document
      .querySelector("#broccoli2_container")
      .addEventListener("mousedown", clickBroccoli2);
    document
      .querySelector("#broccoli3_container")
      .addEventListener("mousedown", clickBroccoli3);
  }
  function AnimationEndReset() {
    console.log("animation reset");
    document
      .querySelector("#pizza1_container")
      .addEventListener("animationend", pizza1Restart);
    document
      .querySelector("#pizza2_container")
      .addEventListener("animationend", pizza1Restart);
    document
      .querySelector("#pizza3_container")
      .addEventListener("animationend", pizza1Restart);
    document
      .querySelector("#pizza4_container")
      .addEventListener("animationend", pizza3Restart);
    document
      .querySelector("#pizza5_container")
      .addEventListener("animationend", pizza3Restart);
    document
      .querySelector("#pizza6_container")
      .addEventListener("animationend", pizza5Restart);
    document
      .querySelector("#broccoli1_container")
      .addEventListener("animationend", goneBroccoli);
    document
      .querySelector("#broccoli2_container")
      .addEventListener("animationend", goneBroccoli2);
    document
      .querySelector("#broccoli3_container")
      .addEventListener("animationend", goneBroccoli3);
  }
  function iterationReset() {
    document
      .querySelector("#pizza1_container")
      .addEventListener("animationiteration", pizza1Restart);
    document
      .querySelector("#pizza2_container")
      .addEventListener("animationiteration", pizza1Restart);
    document
      .querySelector("#pizza3_container")
      .addEventListener("animationiteration", pizza1Restart);
    document
      .querySelector("#pizza4_container")
      .addEventListener("animationiteration", pizza3Restart);
    document
      .querySelector("#pizza5_container")
      .addEventListener("animationiteration", pizza3Restart);
    document
      .querySelector("#pizza6_container")
      .addEventListener("animationiteration", pizza5Restart);
  }
}

/***************  Points update ************* */
function resetLives() {
  life = 3;
  document.querySelector("#turtle1").classList.remove("dead_turtle");
  document.querySelector("#turtle2").classList.remove("dead_turtle");
  document.querySelector("#turtle3").classList.remove("dead_turtle");
  document.querySelector("#turtle1").classList.add("standing_turtle");
  document.querySelector("#turtle2").classList.add("standing_turtle");
  document.querySelector("#turtle3").classList.add("standing_turtle");
}

function resetPoints() {
  points = 0;
  displayPoints();
}

function add1Point() {
  console.log("add point pizza");
  //Adds 1 point
  points++;
  displayPoints();
  if (points >= 20) {
    levelComplete();
  }
}
function add3Points() {
  console.log("add 3 points pizza");
  //Adds 1 point
  points += 3;
  displayPoints();
  if (points >= 20) {
    levelComplete();
  }
}
function add5Points() {
  console.log("add 5 points pizza");
  //Adds 1 point
  points += 5;
  displayPoints();
  if (points >= 20) {
    levelComplete();
  }
}
function displayPoints() {
  console.log("display point");
  //Displays the points in the browser
  document.querySelector("#middle").textContent = points;
}
function penaltyPoint() {
  console.log("subtract point broccoli");
  //deducts 10 point
  points -= 10;
  displayPenaltyPoints();
}
function displayPenaltyPoints() {
  console.log("penalty");
  document.querySelector("#middle").textContent = points;
}
function deductLife() {
  console.log("Deduct 1 life");
  displayDeductedLife();
  life--;
  if (life <= 0) {
    gameOver();
  }
}
function displayDeductedLife() {
  console.log("Display deducted life");
  document.querySelector("#turtle" + life).classList.remove("standing_turtle");
  document.querySelector("#turtle" + life).classList.add("dead_turtle");
}
/******************** END OF GAME ***************************/

function timeIsUp() {
  if (points >= 20) {
    levelComplete();
  } else {
    gameOver();
  }
}

function levelComplete() {
  console.log("Level complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#level_complete").classList.add("pages_fade_in");

  //Removing time animation
  document
    .querySelector("#time_board_img")
    .classList.remove("time_board_animation");

  // Pausing and resetting background music & adding level complete music

  document.querySelector("#sound_background_music").pause();
  document.querySelector("#sound_background_music").currentTime = 0;

  document
    .querySelector("#level_complete")
    .addEventListener("animationend", levelCompleteSound);

  document
    .querySelector("#btn_level_complete")
    .addEventListener("click", showStartScreen);
}

function levelCompleteSound() {
  document.querySelector("#sound_level_complete").play();
}
function gameOver() {
  console.log("Game over");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("pages_zoom_in");

  //Removing time animation

  document
    .querySelector("#time_board_img")
    .classList.remove("time_board_animation");

  // Pausing and resseting background music & adding game over music
  document.querySelector("#sound_background_music").pause();
  document.querySelector("#sound_background_music").currentTime = 0;
  document
    .querySelector("#game_over")
    .addEventListener("animationend", gameOverSound);
}
function gameOverSound() {
  document.querySelector("#sound_game_over").play();
}

/********************* CLICK ON ************************/

/********************* Pizza ************************/

function clickPizza1() {
  console.log("Click pizza 1");
  let pizza1 = this;

  // Remove clickability on pizza
  pizza1.removeEventListener("mousedown", clickPizza1);

  //Add paused and zoom animation
  pizza1.classList.add("paused");
  pizza1.querySelector("img").classList.add("zoom_out");

  //When animation ends, go to pizza1Gone function
  pizza1.addEventListener("animationend", pizza1Gone);
  // pizza1.querySelector("#point_1").classList.remove("hidden");
  add1Point();
  document.querySelector("#sound_pizza1").play();
  document.querySelector("#sound_pizza1").currentTime = 0;

  //Point animation activated
  pizza1.querySelector("#point_1").classList.remove("hidden");
  pizza1.querySelector("#point_1").classList.add("points_added");
}
function clickPizza3() {
  console.log("Click pizza 3");
  let pizza3 = this;

  // Remove clickability on pizza
  pizza3.removeEventListener("mousedown", clickPizza3);

  //Add paused and zoom animation
  pizza3.classList.add("paused");
  pizza3.querySelector("img").classList.add("fade");

  //When animation ends, go to pizza1Gone function
  pizza3.addEventListener("animationend", pizza3Gone);

  add3Points();

  //Adding sound effect
  document.querySelector("#sound_pizza3").play();
  document.querySelector("#sound_pizza3").currentTime = 0;

  //Point animation activated
  pizza3.querySelector("#points_3").classList.remove("hidden");
  pizza3.querySelector("#points_3").classList.add("points_added");
}
function clickPizza5() {
  console.log("Click pizza 5");

  // Remove clickability on pizza
  document
    .querySelector("#pizza6_container")
    .removeEventListener("mousedown", clickPizza5);

  //Add paused and fly out animation
  document.querySelector("#pizza6_container").classList.add("paused");
  document.querySelector("#pizza6_sprite").classList.add("fly_out");

  //When animation ends, go to pizza1Gone function
  document
    .querySelector("#pizza6_container")
    .addEventListener("animationend", pizza5Gone);

  //Adding sound effect
  document.querySelector("#sound_pizza5").play();
  document.querySelector("#sound_pizza5").currentTime = 0;
  add5Points();

  document.querySelector("#points_5").classList.remove("hidden");
  document.querySelector("#points_5").classList.add("points_added");
}

/********************* Broccoli ************************/

function clickBroccoli() {
  console.log("Click Broccoli");
  let broccoli = this;

  // Remove clickability on broccoli
  broccoli.removeEventListener("mousedown", clickBroccoli);

  //Add paused and deflate animation
  broccoli.classList.add("paused");
  broccoli.querySelector("img").classList.add("deflate_broccoli");

  //When animation ends, go to reset function
  broccoli.addEventListener("animationend", goneBroccoli);

  //Adding sound effect
  document.querySelector("#sound_broccoli").play();
  document.querySelector("#sound_broccoli").currentTime = 0;
  penaltyPoint();
  deductLife();
}
function clickBroccoli2() {
  console.log("Click b2");
  let broccoli = this;

  // Remove clickability on broccoli
  broccoli.removeEventListener("mousedown", clickBroccoli2);

  //Add paused and deflate animation
  broccoli.classList.add("paused");
  broccoli.querySelector("img").classList.add("deflate_broccoli");

  //When animation ends, go to reset function

  //Adding sound effect
  document.querySelector("#sound_broccoli").play();
  document.querySelector("#sound_broccoli").currentTime = 0;

  penaltyPoint();
  deductLife();
  broccoli.addEventListener("animationend", goneBroccoli2);
}
function clickBroccoli3() {
  console.log("Click broccoli 3");
  let broccoli = this;

  // Remove clickability on broccoli
  broccoli.removeEventListener("mousedown", clickBroccoli3);

  //Add paused and deflate animation
  broccoli.classList.add("paused");
  broccoli.querySelector("img").classList.add("deflate_broccoli");

  //Adding sound effect
  document.querySelector("#sound_broccoli").play();
  document.querySelector("#sound_broccoli").currentTime = 0;

  //When animation ends, go to reset function
  penaltyPoint();
  deductLife();
  broccoli.addEventListener("animationend", goneBroccoli3);
}

/********************* GONE + RESTART ************************/

/********************* Pizza ************************/

function pizza1Gone() {
  console.log("Pizza 1 Gone");
  let pizza1 = this;

  // Removes the animation that got us here
  pizza1.removeEventListener("animationend", pizza1Gone);

  //Removes paused and zoom animation
  pizza1.classList.remove("paused");
  pizza1.querySelector("img").classList.remove("zoom_out");

  //Resets falling animation from the top
  pizza1Restart.call(this);
  //Makes pizza1 clickable again

  pizza1.addEventListener("mousedown", clickPizza1);
}

function pizza1Restart() {
  console.log("pizza 1 restart");
  let pizza1 = this;

  //Set pizza to falling again
  pizza1.classList.remove("falling");
  pizza1.offsetWidth;
  pizza1.classList.add("falling");
  pizza1.querySelector("#point_1").classList.add("hidden");

  pizza1.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5",
    "position6",
    "position7",
    "position8",
    "position9",
    "position10",
    "delay1",
    "delay2",
    "delay3",
    "delay4",
    "delay5",
    "delay6"
  );

  let pos = Math.trunc(Math.random() * 10) + 1;
  pizza1.classList.add("position" + pos);

  let del = Math.trunc(Math.random() * 6) + 1;
  pizza1.classList.add("delay" + del);
}

function pizza3Gone() {
  console.log("pizza 3 gone");
  let pizza3 = this;

  // Removes the animation that got us here
  pizza3.removeEventListener("animationend", pizza3Gone);

  //Removes paused and zoom animation
  pizza3.classList.remove("paused");
  pizza3.querySelector("img").classList.remove("fade");

  //Resets falling animation from the top
  pizza3Restart.call(this);
  //Makes pizza1 clickable again
  pizza3.addEventListener("mousedown", clickPizza3);
}

function pizza3Restart() {
  console.log("restart");
  let pizza3 = this;
  pizza3.classList.remove("falling");
  pizza3.offsetWidth;
  pizza3.classList.add("falling");

  pizza3.querySelector("#points_3").classList.add("hidden");
  pizza3.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5",
    "position6",
    "position7",
    "position8",
    "position9",
    "position10",
    "delay1",
    "delay2",
    "delay3",
    "delay4",
    "delay5",
    "delay6"
  );

  let pos = Math.trunc(Math.random() * 10) + 1;
  pizza3.classList.add("position" + pos);

  let del = Math.trunc(Math.random() * 6) + 1;
  pizza3.classList.add("delay" + del);

  // Hides pizza points on iteration
}

function pizza5Gone() {
  console.log("Reset p5");

  // Removes the animation that got us here
  document
    .querySelector("#pizza6_container")
    .removeEventListener("animationend", pizza5Gone);

  //Removes paused and zoom animation
  document.querySelector("#pizza6_container").classList.remove("paused");
  document.querySelector("#pizza6_sprite").classList.remove("fly_out");

  //Resets falling animation from the top
  pizza5Restart.call(this);
  //Makes pizza1 clickable again
  document
    .querySelector("#pizza6_container")
    .addEventListener("mousedown", clickPizza5);
}

function pizza5Restart() {
  document.querySelector("#pizza6_container").classList.remove("falling");
  document.querySelector("#pizza6_container").offsetWidth;
  document.querySelector("#pizza6_container").classList.add("falling");

  document.querySelector("#points_5").classList.add("hidden");

  document
    .querySelector("#pizza6_container")
    .classList.remove(
      "position1",
      "position2",
      "position3",
      "position4",
      "position5",
      "position6",
      "position7",
      "position8",
      "position9",
      "position10",
      "delay1",
      "delay2",
      "delay3",
      "delay4",
      "delay5",
      "delay6",
      "delay7",
      "delay8",
      "delay9",
      "delay10"
    );

  let pos = Math.trunc(Math.random() * 10) + 1;
  document.querySelector("#pizza6_container").classList.add("position" + pos);

  let del = Math.trunc(Math.random() * 6) + 1;
  document.querySelector("#pizza6_container").classList.add("delay" + del);
}

/********************* Broccoli ************************/

function goneBroccoli() {
  console.log(" HEj Gone broccoli");
  let broccoli = this;

  // Removes the animation that got us here
  broccoli.removeEventListener("animationend", goneBroccoli);

  //Removes paused and deflate animation
  broccoli.classList.remove("paused");
  broccoli.querySelector("img").classList.remove("deflate_broccoli");

  //Resets falling animation from the top
  broccoli.classList.remove("broccoli1_danger");
  broccoli.offsetWidth;
  broccoli.classList.add("broccoli1_danger");

  //Makes broccoli clickable again

  broccoli.addEventListener("mousedown", clickBroccoli);
}

function goneBroccoli2() {
  console.log("gone broccoli2");
  let broccoli = this;

  // Removes the animation that got us here
  broccoli.removeEventListener("animationend", goneBroccoli2);

  //Removes paused and deflate animation
  broccoli.classList.remove("paused");
  broccoli.querySelector("img").classList.remove("deflate_broccoli");

  //Resets falling animation from the top
  broccoli.classList.remove("broccoli2_danger");
  broccoli.offsetWidth;
  broccoli.classList.add("broccoli2_danger");

  //Makes broccoli clickable again
  broccoli.addEventListener("mousedown", clickBroccoli2);
}

function goneBroccoli3() {
  console.log("gone broccoli 3");
  let broccoli = this;

  // Removes the animation that got us here
  broccoli.removeEventListener("animationend", goneBroccoli3);

  //Removes paused and deflate animation
  broccoli.classList.remove("paused");
  broccoli.querySelector("img").classList.remove("deflate_broccoli");

  //Resets falling animation from the top
  broccoli.classList.remove("broccoli3_danger");
  broccoli.offsetWidth;
  broccoli.classList.add("broccoli3_danger");

  //Makes broccoli clickable again
  broccoli.addEventListener("mousedown", clickBroccoli3);
}

//RELEVANT EVENTS
//click, animationend, animationiteration, dbclick, mousedown, contentmenu
// add3Points.call(pos)
