"use strict";

const counter = document.querySelector(".display-counter");
const statusMessage = document.querySelector(".status-message");
const statusDiv = document.querySelector(".status");
const currentMessage = document.querySelector(".crm");
const highMessage = document.querySelector(".hrm");
const okCard = document.querySelector(".ok");
const statusCard = document.querySelector(".status");

const svg_1 = document.getElementById("svg-1"); /* Normal */
const svg_2 = document.getElementById("svg-2"); /* Lower */
const svg_3 = document.getElementById("svg-3"); /* Higher */
const svg_4 = document.getElementById("svg-4"); /* Winner */
const svg_5 = document.getElementById("svg-5"); /* Loser */

let guessNumber = Math.floor(Math.random() * 10) + 1;
let disable_game = false;

const reset_status = () => {
  svg_1.classList.remove("unhide");
  svg_1.classList.add("hide");
  svg_2.classList.remove("unhide");
  svg_2.classList.add("hide");
  svg_3.classList.remove("unhide");
  svg_3.classList.add("hide");
  svg_4.classList.remove("unhide");
  svg_4.classList.add("hide");
  svg_5.classList.remove("unhide");
  svg_5.classList.add("hide");

  statusDiv.style.background = "rgba(217, 217, 217, 0.14)";
};

document.querySelector(".up").addEventListener("click", function () {
  if (disable_game === false) {
    counter.textContent = Number(counter.textContent) + 1;
    if (counter.textContent > 10) counter.textContent = 1;
  }
});

document.querySelector(".down").addEventListener("click", function () {
  if (disable_game === false) {
    counter.textContent = Number(counter.textContent) - 1;
    if (counter.textContent < 1) counter.textContent = 10;
  }
});

document.querySelector(".ok").addEventListener("click", function () {
  if (disable_game === false) {
    reset_status();

    /* shitty animation */
    okCard.style.animation = "shake 2s ease 0s 1 normal forwards";
    setTimeout(() => {
      okCard.style.animation = "none";
    }, 2000);

    statusCard.style.animation = "pulse 2s ease 0s 1 normal forwards";
    setTimeout(() => {
      statusCard.style.animation = "none";
    }, 2000);
    /* animation end */

    if (Number(counter.textContent) === guessNumber) {
      svg_4.classList.remove("hide");
      svg_4.classList.add("unhide");
      statusMessage.textContent = "#TrueDetective";
      statusMessage.style.color = "#006704";
      statusDiv.style.background = "#4ecb71";

      if (
        Number(currentMessage.textContent.slice(-1)) >
        Number(highMessage.textContent.slice(-1))
      ) {
        highMessage.textContent =
          highMessage.textContent.slice(0, -1) +
          String(Number(currentMessage.textContent.slice(-1)));
      }

      disable_game = true;
    } else if (Number(counter.textContent) < guessNumber) {
      svg_3.classList.remove("hide");
      svg_3.classList.add("unhide");
      statusMessage.textContent = "It's Higher";
      statusMessage.style.color = "#4ecb71";
      currentMessage.textContent =
        currentMessage.textContent.slice(0, -1) +
        String(Number(currentMessage.textContent.slice(-1)) - 1);
    } else {
      svg_2.classList.remove("hide");
      svg_2.classList.add("unhide");
      statusMessage.textContent = "It's Lower";
      statusMessage.style.color = "red";
      currentMessage.textContent =
        currentMessage.textContent.slice(0, -1) +
        String(Number(currentMessage.textContent.slice(-1)) - 1);
    }

    /* Game Ending Handler */
    if (Number(currentMessage.textContent.slice(-1)) === 0) {
      reset_status();
      svg_5.classList.remove("hide");
      svg_5.classList.add("unhide");
      statusMessage.textContent = "Oof!! Keep Trying";
      statusMessage.style.color = "#610000";
      statusDiv.style.background = "#F24E1E";

      disable_game = true;
    }
  }
});

document.querySelector(".h-reload").addEventListener("click", function () {
  location.reload();
});

document.querySelector(".c-reload").addEventListener("click", function () {
  reset_status();
  guessNumber = Math.floor(Math.random() * 10) + 1;

  svg_1.classList.remove("hide");
  svg_1.classList.add("unhide");
  statusMessage.textContent = "Start The Game?";
  statusMessage.style.color = "white";
  currentMessage.textContent = currentMessage.textContent.slice(0, -1) + "5";

  disable_game = false;
});


// intro animation splash screen

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});