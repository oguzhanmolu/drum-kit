'use strict';
const validKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'];

// transition

// Play audio with key press
document.addEventListener('keydown', function (e) {
  if (validKeys.includes(`${e.key}`)) {
    // key and notation variables
    const whichNotation = document.querySelector(`.${e.key}-key`).textContent;
    document.querySelector(`.${whichNotation}-main`).classList.add('playing');
    // Audio Play
    const audio = new Audio(`/sounds/${whichNotation}.wav`);
    audio.play();
  }
});
