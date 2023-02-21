window.addEventListener("load", start);

let points = 0;
let life = 3;

function start() {
  console.log("Start");
  // Initiates the falling animation
  document.querySelector("#pizza1a_container").classList.add("falling");
  document.querySelector("#pizza1b_container").classList.add("falling");
  document.querySelector("#pizza1c_container").classList.add("falling");
  document.querySelector("#pizza3a_container").classList.add("falling");
  document.querySelector("#pizza3b_container").classList.add("falling");
  document.querySelector("#pizza5_container").classList.add("falling");
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

  // Makes pizza/broccoli clickable

  /* Pizza */
  document
    .querySelector("#pizza1a_container")
    .addEventListener("mousedown", clickP1a);
  document
    .querySelector("#pizza1b_container")
    .addEventListener("mousedown", clickP1b);
  document
    .querySelector("#pizza1c_container")
    .addEventListener("mousedown", clickP1c);
  document
    .querySelector("#pizza3a_container")
    .addEventListener("mousedown", clickP3a);
  document
    .querySelector("#pizza3b_container")
    .addEventListener("mousedown", clickP3b);
  document
    .querySelector("#pizza5_container")
    .addEventListener("mousedown", clickP5);
}

/* Broccoli */
document
  .querySelector("#broccoli1_container")
  .addEventListener("mousedown", clickBroccoli1);
document
  .querySelector("#broccoli2_container")
  .addEventListener("mousedown", clickBroccoli2);
document
  .querySelector("#broccoli3_container")
  .addEventListener("mousedown", clickBroccoli3);

function add1Point() {
  console.log("add point pizza");
  //Adds 1 point
  points++;
  displayPoints();
}

function add3Points() {
  console.log("add 3 points pizza");
  //Adds 1 point
  points += 3;
  displayPoints();
}

function add5Points() {
  console.log("add 5 points pizza");
  //Adds 1 point
  points += 5;
  displayPoints();
}

function penaltyPoint() {
  console.log("subtract point broccoli");
  //Adds 1 point
  points -= 10;
  displayPenaltyPoints();
}
function displayPenaltyPoints() {
  console.log("penalty");
  document.querySelector("#score_board").textContent = points + "🤡";
}

function displayPoints() {
  console.log("display point");
  //Displays the points in the browser
  document.querySelector("#score_board").textContent = points + "😎";
}

/********************* CLICK ON Pizza/broccoli  ************************/

/********************* Pizza ************************/

function clickP1a() {
  console.log("Click pizza 1a");

  // Remove clickability on pizza
  document
    .querySelector("#pizza1a_container")
    .removeEventListener("mousedown", clickP1a);

  //Add paused and zoom animation
  document.querySelector("#pizza1a_container").classList.add("paused");
  document.querySelector("#pizza1a_sprite").classList.add("zoom_out");

  //When animation ends, go to resetp1a function
  document
    .querySelector("#pizza1a_container")
    .addEventListener("animationend", resetP1a);
  add1Point();
}

function clickP1b() {
  console.log("Click pizza 1b");

  // Remove clickability on pizza
  document
    .querySelector("#pizza1b_container")
    .removeEventListener("mousedown", clickP1b);

  //Add paused and zoom animation
  document.querySelector("#pizza1b_container").classList.add("paused");
  document.querySelector("#pizza1b_sprite").classList.add("zoom_out");

  //When animation ends, go to resetp1a function
  document
    .querySelector("#pizza1b_container")
    .addEventListener("animationend", resetP1b);
  add1Point();
}

function clickP1c() {
  console.log("Click pizza 1c");

  // Remove clickability on pizza
  document
    .querySelector("#pizza1c_container")
    .removeEventListener("mousedown", clickP1c);

  //Add paused and zoom animation
  document.querySelector("#pizza1c_container").classList.add("paused");
  document.querySelector("#pizza1c_sprite").classList.add("zoom_out");

  //When animation ends, go to resetp1a function
  document
    .querySelector("#pizza1c_container")
    .addEventListener("animationend", resetP1c);
  add1Point();
}

function clickP3a() {
  console.log("Click pizza 3");

  // Remove clickability on pizza
  document
    .querySelector("#pizza3a_container")
    .removeEventListener("mousedown", clickP3a);

  //Add paused and zoom animation
  document.querySelector("#pizza3a_container").classList.add("paused");
  document.querySelector("#pizza3a_sprite").classList.add("fade");

  //When animation ends, go to resetp1a function
  document
    .querySelector("#pizza3a_container")
    .addEventListener("animationend", resetP3a);
  add3Points();
}

function clickP3b() {
  console.log("Click pizza 3");

  // Remove clickability on pizza
  document
    .querySelector("#pizza3b_container")
    .removeEventListener("mousedown", clickP3b);

  //Add paused and zoom animation
  document.querySelector("#pizza3b_container").classList.add("paused");
  document.querySelector("#pizza3b_sprite").classList.add("fade");

  //When animation ends, go to resetp1a function
  document
    .querySelector("#pizza3b_container")
    .addEventListener("animationend", resetP3b);
  add3Points();
}

function clickP5() {
  console.log("Click pizza 5");

  // Remove clickability on pizza
  document
    .querySelector("#pizza5_container")
    .removeEventListener("mousedown", clickP5);

  //Add paused and fly out animation
  document.querySelector("#pizza5_container").classList.add("paused");
  document.querySelector("#pizza5_sprite").classList.add("fly_out");

  //When animation ends, go to resetp1a function
  document
    .querySelector("#pizza5_container")
    .addEventListener("animationend", resetP5);
  add5Points();
}

/********************* Broccoli ************************/

function clickBroccoli1() {
  console.log("Click b1");

  // Remove clickability on broccoli
  document
    .querySelector("#broccoli1_container")
    .removeEventListener("mousedown", clickBroccoli1);

  //Add paused and deflate animation
  document.querySelector("#broccoli1_container").classList.add("paused");
  document.querySelector("#broccoli1_sprite").classList.add("deflate_broccoli");

  //When animation ends, go to reset function
  document
    .querySelector("#broccoli1_container")
    .addEventListener("animationend", resetBroccoli1);
  penaltyPoint();
}

function clickBroccoli2() {
  console.log("Click b2");

  // Remove clickability on broccoli
  document
    .querySelector("#broccoli2_container")
    .removeEventListener("mousedown", clickBroccoli2);

  //Add paused and deflate animation
  document.querySelector("#broccoli2_container").classList.add("paused");
  document.querySelector("#broccoli2_sprite").classList.add("deflate_broccoli");

  //When animation ends, go to reset function
  document
    .querySelector("#broccoli2_container")
    .addEventListener("animationend", resetBroccoli2);
  penaltyPoint();
}

function clickBroccoli3() {
  console.log("Click b3");

  // Remove clickability on broccoli
  document
    .querySelector("#broccoli3_container")
    .removeEventListener("mousedown", clickBroccoli3);

  //Add paused and deflate animation
  document.querySelector("#broccoli3_container").classList.add("paused");
  document.querySelector("#broccoli3_sprite").classList.add("deflate_broccoli");

  //When animation ends, go to reset function
  document
    .querySelector("#broccoli3_container")
    .addEventListener("animationend", resetBroccoli3);
  penaltyPoint();
}
/********************* RESET Pizza/broccoli ************************/

/********************* Pizza ************************/

function resetP1a() {
  console.log("Reset p1a");

  // Removes the animation that got us here
  document
    .querySelector("#pizza1a_container")
    .removeEventListener("animationend", resetP1a);

  //Removes paused and zoom animation
  document.querySelector("#pizza1a_container").classList.remove("paused");
  document.querySelector("#pizza1a_sprite").classList.remove("zoom_out");

  //Resets falling animation from the top
  document.querySelector("#pizza1a_container").classList.remove("falling");
  document.querySelector("#pizza1a_container").offsetWidth;
  document.querySelector("#pizza1a_container").classList.add("falling");

  //Makes pizza1a clickable again
  document
    .querySelector("#pizza1a_container")
    .addEventListener("mousedown", clickP1a);
}

function resetP1b() {
  console.log("Reset p1b");

  // Removes the animation that got us here
  document
    .querySelector("#pizza1b_container")
    .removeEventListener("animationend", resetP1b);

  //Removes paused and zoom animation
  document.querySelector("#pizza1b_container").classList.remove("paused");
  document.querySelector("#pizza1b_sprite").classList.remove("zoom_out");

  //Resets falling animation from the top
  document.querySelector("#pizza1b_container").classList.remove("falling");
  document.querySelector("#pizza1b_container").offsetWidth;
  document.querySelector("#pizza1b_container").classList.add("falling");

  //Makes pizza1a clickable again
  document
    .querySelector("#pizza1b_container")
    .addEventListener("mousedown", clickP1b);
}

function resetP1c() {
  console.log("Reset p1c");

  // Removes the animation that got us here
  document
    .querySelector("#pizza1c_container")
    .removeEventListener("animationend", resetP1c);

  //Removes paused and zoom animation
  document.querySelector("#pizza1c_container").classList.remove("paused");
  document.querySelector("#pizza1c_sprite").classList.remove("zoom_out");

  //Resets falling animation from the top
  document.querySelector("#pizza1c_container").classList.remove("falling");
  document.querySelector("#pizza1c_container").offsetWidth;
  document.querySelector("#pizza1c_container").classList.add("falling");

  //Makes pizza1a clickable again
  document
    .querySelector("#pizza1c_container")
    .addEventListener("mousedown", clickP1c);
}

function resetP3a() {
  console.log("Reset p3a");

  // Removes the animation that got us here
  document
    .querySelector("#pizza3a_container")
    .removeEventListener("animationend", resetP3a);

  //Removes paused and zoom animation
  document.querySelector("#pizza3a_container").classList.remove("paused");
  document.querySelector("#pizza3a_sprite").classList.remove("fade");

  //Resets falling animation from the top
  document.querySelector("#pizza3a_container").classList.remove("falling");
  document.querySelector("#pizza3a_container").offsetWidth;
  document.querySelector("#pizza3a_container").classList.add("falling");

  //Makes pizza1a clickable again
  document
    .querySelector("#pizza3a_container")
    .addEventListener("mousedown", clickP3a);
}

function resetP3b() {
  console.log("Reset p3b");

  // Removes the animation that got us here
  document
    .querySelector("#pizza3b_container")
    .removeEventListener("animationend", resetP3b);

  //Removes paused and zoom animation
  document.querySelector("#pizza3b_container").classList.remove("paused");
  document.querySelector("#pizza3b_sprite").classList.remove("fade");

  //Resets falling animation from the top
  document.querySelector("#pizza3b_container").classList.remove("falling");
  document.querySelector("#pizza3b_container").offsetWidth;
  document.querySelector("#pizza3b_container").classList.add("falling");

  //Makes pizza1a clickable again
  document
    .querySelector("#pizza3b_container")
    .addEventListener("mousedown", clickP3b);
}

function resetP5() {
  console.log("Reset p5");

  // Removes the animation that got us here
  document
    .querySelector("#pizza5_container")
    .removeEventListener("animationend", resetP5);

  //Removes paused and zoom animation
  document.querySelector("#pizza5_container").classList.remove("paused");
  document.querySelector("#pizza5_sprite").classList.remove("zoom_out");

  //Resets falling animation from the top
  document.querySelector("#pizza5_container").classList.remove("falling");
  document.querySelector("#pizza5_container").offsetWidth;
  document.querySelector("#pizza5_container").classList.add("falling");

  //Makes pizza1a clickable again
  document
    .querySelector("#pizza5_container")
    .addEventListener("mousedown", clickP5);
}

/********************* Broccoli ************************/

function resetBroccoli1() {
  console.log("Reset broccoli1");

  // Removes the animation that got us here
  document
    .querySelector("#broccoli1_container")
    .removeEventListener("animationend", resetBroccoli1);

  //Removes paused and deflate animation
  document.querySelector("#broccoli1_container").classList.remove("paused");
  document
    .querySelector("#broccoli1_sprite")
    .classList.remove("deflate_broccoli");

  //Resets falling animation from the top
  document
    .querySelector("#broccoli1_container")
    .classList.remove("broccoli1_danger");
  document.querySelector("#broccoli1_container").offsetWidth;
  document
    .querySelector("#broccoli1_container")
    .classList.add("broccoli1_danger");

  //Makes broccoli clickable again
  document
    .querySelector("#broccoli1_container")
    .addEventListener("mousedown", clickBroccoli1);
}

function resetBroccoli2() {
  console.log("Reset broccoli2");

  // Removes the animation that got us here
  document
    .querySelector("#broccoli2_container")
    .removeEventListener("animationend", resetBroccoli2);

  //Removes paused and deflate animation
  document.querySelector("#broccoli2_container").classList.remove("paused");
  document
    .querySelector("#broccoli2_sprite")
    .classList.remove("deflate_broccoli");

  //Resets falling animation from the top
  document
    .querySelector("#broccoli2_container")
    .classList.remove("broccoli2_danger");
  document.querySelector("#broccoli2_container").offsetWidth;
  document
    .querySelector("#broccoli2_container")
    .classList.add("broccoli2_danger");

  //Makes broccoli clickable again
  document
    .querySelector("#broccoli2_container")
    .addEventListener("mousedown", clickBroccoli2);
}

function resetBroccoli3() {
  console.log("Reset broccoli3");

  // Removes the animation that got us here
  document
    .querySelector("#broccoli3_container")
    .removeEventListener("animationend", resetBroccoli3);

  //Removes paused and deflate animation
  document.querySelector("#broccoli3_container").classList.remove("paused");
  document
    .querySelector("#broccoli3_sprite")
    .classList.remove("deflate_broccoli");

  //Resets falling animation from the top
  document
    .querySelector("#broccoli3_container")
    .classList.remove("broccoli3_danger");
  document.querySelector("#broccoli3_container").offsetWidth;
  document
    .querySelector("#broccoli3_container")
    .classList.add("broccoli3_danger");

  //Makes broccoli clickable again
  document
    .querySelector("#broccoli3_container")
    .addEventListener("mousedown", clickBroccoli3);
}
/*
RELEVANT EVENTS 
click, animationend, animationiteration, dbclick, mousedown, contentmenu */
