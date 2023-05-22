'use strict';

// Select DOM elements
const sectionPlayer0 = document.querySelector('.player--0');
const sectionPlayer1 = document.querySelector('.player--1');
const elemTotalScorePlayer0 = document.querySelector('#score--0');
const elemTotalScorePlayer1 = document.querySelector('#score--1');
const elemCurrentScorePlayer0 = document.querySelector('#current--0');
const elemCurrentScorePlayer1 = document.querySelector('#current--1');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const imgDice = document.querySelector('.dice');

// Set starting conditions
let isPlayer0Active; // Boolean indicating active player
let currentScore; // Current score of active player
let totalScorePlayer0;
let totalScorePlayer1;

// Initialization function
const init = function () {
  // Set active player 0
  isPlayer0Active = true;
  sectionPlayer0.classList.add('player--active');
  sectionPlayer1.classList.remove('player--active');

  // Reset scores
  currentScore = 0;
  totalScorePlayer0 = 0;
  totalScorePlayer1 = 0;
  elemTotalScorePlayer0.textContent = totalScorePlayer0;
  elemTotalScorePlayer1.textContent = totalScorePlayer1;
  elemCurrentScorePlayer0.textContent = currentScore;
  elemCurrentScorePlayer1.textContent = currentScore;

  // Hide dice image
  imgDice.classList.add('hidden');

  // Activate buttons
  btnRollDice.style.pointerEvents = 'auto';
  btnHold.style.pointerEvents = 'auto';

  // Change style
  sectionPlayer0.classList.remove('player--winner');
  sectionPlayer1.classList.remove('player--winner');
};
init();

// Rolling dice button handler
btnRollDice.addEventListener('click', function () {
  // Generate random value
  const diceRollValue = Math.floor(Math.random() * 6 + 1);

  // Show dice image
  imgDice.classList.remove('hidden');
  imgDice.src = `dice-${diceRollValue}.png`;

  // Check dice value
  if (diceRollValue !== 1) {
    // Add roll value to score
    currentScore += diceRollValue;
    if (isPlayer0Active) {
      elemCurrentScorePlayer0.textContent = currentScore;
    } else {
      elemCurrentScorePlayer1.textContent = currentScore;
    }
  } else {
    // Switch player
    if (isPlayer0Active) {
      elemCurrentScorePlayer0.textContent = 0;
    } else {
      elemCurrentScorePlayer1.textContent = 0;
    }
    isPlayer0Active = !isPlayer0Active;
    currentScore = 0;

    // Change style
    sectionPlayer0.classList.toggle('player--active');
    sectionPlayer1.classList.toggle('player--active');
  }
});

// Hold current score button handler
btnHold.addEventListener('click', function () {
  // Add current score to total score
  if (isPlayer0Active) {
    // Player 0
    totalScorePlayer0 += currentScore;
    elemTotalScorePlayer0.textContent = totalScorePlayer0;
    if (totalScorePlayer0 >= 100) {
      // Player 0 wins
      sectionPlayer0.classList.add('player--winner');
      sectionPlayer0.classList.remove('player--active');
      imgDice.classList.add('hidden');
      btnRollDice.style.pointerEvents = 'none';
      btnHold.style.pointerEvents = 'none';
    } else {
      // Switch player
      isPlayer0Active = !isPlayer0Active;
      currentScore = 0;
      elemCurrentScorePlayer0.textContent = 0;

      // Change style
      sectionPlayer0.classList.toggle('player--active');
      sectionPlayer1.classList.toggle('player--active');
    }
  } else {
    // Player 1
    totalScorePlayer1 += currentScore;
    elemTotalScorePlayer1.textContent = totalScorePlayer1;
    if (totalScorePlayer1 >= 100) {
      // Player 1 wins
      sectionPlayer1.classList.add('player--winner');
      sectionPlayer1.classList.remove('player--active');
      imgDice.classList.add('hidden');
      btnRollDice.style.pointerEvents = 'none';
      btnHold.style.pointerEvents = 'none';
    } else {
      // Switch player
      isPlayer0Active = !isPlayer0Active;
      currentScore = 0;
      elemCurrentScorePlayer1.textContent = 0;

      // Change style
      sectionPlayer0.classList.toggle('player--active');
      sectionPlayer1.classList.toggle('player--active');
    }
  }
});

// New game button handler - reset game
btnNewGame.addEventListener('click', init);
