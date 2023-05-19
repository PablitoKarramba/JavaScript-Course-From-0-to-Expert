'use strict';

// Select DOM elements
const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');
const totalScorePlayer0 = document.querySelector('#score--0');
const totalScorePlayer1 = document.querySelector('#score--1');
const currentScorePlayer0 = document.querySelector('#current--0');
const currentScorePlayer1 = document.querySelector('#current--1');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const imgDice = document.querySelector('.dice');

// Set starting conditions
let isPlayer0Active = true;
let currentScore = 0;
let player0TotalScore = 0;
let player1TotalScore = 0;
totalScorePlayer0.textContent = player0TotalScore;
totalScorePlayer1.textContent = player1TotalScore;

imgDice.classList.add('hidden'); // Hide dice image at game start

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
      currentScorePlayer0.textContent = currentScore;
    } else {
      currentScorePlayer1.textContent = currentScore;
    }
  } else {
    // Switch player
    if (isPlayer0Active) {
      currentScorePlayer0.textContent = 0;
    } else {
      currentScorePlayer1.textContent = 0;
    }
    isPlayer0Active = !isPlayer0Active;
    currentScore = 0;

    // Change style
    player0Section.classList.toggle('player--active');
    player1Section.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  // Add current score to total score
  if (isPlayer0Active) {
    // Player 0
    player0TotalScore += currentScore;
    totalScorePlayer0.textContent = player0TotalScore;
    if (totalScorePlayer0 >= 100) {
      // Player 0 wins
      player0Section.classList.add('player--winner');
      imgDice.classList.add('hidden');
    } else {
      // Switch player
      isPlayer0Active = !isPlayer0Active;
      currentScore = 0;
      currentScorePlayer0.textContent = 0;

      // Change style
      player0Section.classList.toggle('player--active');
      player1Section.classList.toggle('player--active');
    }
  } else {
    // Player 1
    player1TotalScore += currentScore;
    totalScorePlayer1.textContent = player1TotalScore;
    if (totalScorePlayer1 >= 100) {
      // Player 1 wins
      player1Section.classList.add('player--winner');
      imgDice.classList.add('hidden');
    } else {
      // Switch player
      isPlayer0Active = !isPlayer0Active;
      currentScore = 0;
      currentScorePlayer1.textContent = 0;

      // Change style
      player0Section.classList.toggle('player--active');
      player1Section.classList.toggle('player--active');
    }
  }
});
