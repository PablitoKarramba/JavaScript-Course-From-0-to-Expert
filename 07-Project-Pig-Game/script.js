'use strict';

// Select DOM elements
const totalScorePlayer0 = document.querySelector('#score--0');
const totalScorePlayer1 = document.querySelector('#score--1');
const currentScorePlayer0 = document.querySelector('#current--0');
const currentScorePlayer1 = document.querySelector('#current--1');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const imgDice = document.querySelector('.dice');

// Set starting conditions
let currentScore = 0;
totalScorePlayer0.textContent = 0;
totalScorePlayer1.textContent = 0;

imgDice.classList.add('hidden'); // Hide dice image at game start

// Rolling dice button handler
btnRollDice.addEventListener('click', function () {
  // Generate random value
  const diceRollValue = Math.floor(Math.random() * 6 + 1);
  console.log(diceRollValue);

  // Show dice image
  imgDice.classList.remove('hidden');
  imgDice.src = `dice-${diceRollValue}.png`;

  // Check dice value
  if (diceRollValue !== 1) {
    // Add roll value to score
  } else {
    // Switch player
  }
});
