"use strict";

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
        
      if (startPos >= stopPos) {
        clearInterval(interval);
        resolve();
      }

      img.style.left = startPos + "px";
      startPos += STEP_SIZE_PX;
    }, STEP_INTERVAL_MS);
  });
}

function dance(img) {
  return new Promise((resolve) => {

    const walking = img.src;
    img.src = DANCING_CAT_URL;

    setTimeout(() => {
      img.src = walking;
      resolve();
    }, DANCE_TIME_MS);
  });
}

function catWalk() {
  const img = document.querySelector("img");
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  walk(img, startPos, centerPos)
    .then(() => {
      return dance(img);
    })
    .then(() => {
      return walk(img, centerPos, stopPos);
    })
    .then(() => {
      return catWalk();
    });

  // Use the `walk()` and `dance()` functions to let the cat do the following:
  // 1. Walk from `startPos` to `centerPos`.
  // 2. Then dance for 5 secs.
  // 3. Then walk from `centerPos` to `stopPos`.
  // 4. Repeat the first three steps indefinitely.
}

window.addEventListener("load", catWalk);

// What do you think the advantages are of having the constants in the global scope? Are there any disadvantages?
// To make the code loop we cannot use a standard JavaScript loop (for or while). Why is that?
// Do you feel this version is easier to read than the version you made in the Browsers module?
// Is this version more efficient or not or does it not matter?
