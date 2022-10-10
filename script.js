'use strict';
// Play audio with key press
const validKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'];

document.addEventListener('keydown', function (e) {
  if (validKeys.includes(`${e.key}`)) {
    const whichKey = e.key;
    const whichNotation = document.querySelector(
      `.${whichKey}-key`
    ).textContent;
    const audio = new Audio(`/sounds/${whichNotation}.wav`);
    audio.play();
  }
});
