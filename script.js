'use strict';
const validKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'];
const allKeys = document.querySelectorAll('.all-keys');
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

    // Transition end
    allKeys.forEach((key) =>
      key.addEventListener('transitionend', function () {
        document
          .querySelector(`.${whichNotation}-main`)
          .classList.remove('playing');
      })
    );
  }
});
