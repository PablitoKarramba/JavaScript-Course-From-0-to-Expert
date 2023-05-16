'use strict';

// Generate secret number
const generateSecret = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1)) + min;
let secretNumber = generateSecret(1, 100);
console.log(`Secret: ${secretNumber}`);

// Calculate score
let score = 20;
let highscore = 0;
const updateScore = (points) => {
  score = score + points;
  changeElementTextContent(`.score`, score);
};

// Change text content of specified element
const changeElementTextContent = (element, message) => {
  document.querySelector(element).textContent = message;
};

// Change button pointer-events property: active/inactive (expected values: 'auto', 'none')
const changeElementActivity = (element, value) => {
  document.querySelector(element).style.pointerEvents = value;
};

const resetContentToDefaults = (isNewGame) => {
  // Clear user input
  document.querySelector('.guess').value = '';

  // Reset info message
  changeElementTextContent(`.message`, `Start guessing...`);
  changeElementTextContent(`.number`, `?`);

  // Change buttons activity
  changeElementActivity('.check', 'auto');
  changeElementActivity('.generate', 'none');

  // Change style back to default
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // Generate new secret number
  secretNumber = generateSecret(1, 100);
  console.log(`New secret: ${secretNumber}`);

  // Reset score if new game
  if (isNewGame) {
    score = 20;
    changeElementTextContent(`.score`, score);
  }
};

// Check button handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Value inserted into input field
  // Compare value against secret number
  // Invalid input value
  if (!guess) {
    // BUG: user can't type 0 as a guess
    changeElementTextContent(`.message`, `Type in your guess`);
  }
  // Correct answer
  else if (guess === secretNumber) {
    changeElementTextContent(`.number`, secretNumber);
    changeElementTextContent(`.message`, `Correct guess!`);
    updateScore(10);

    if (score > highscore) {
      highscore = score;
      changeElementTextContent(`.highscore`, highscore);
    }

    // Change website style
    document.querySelector('body').style.backgroundColor = '#31cf39';
    document.querySelector('.number').style.width = '30rem';

    // Change buttons activity
    changeElementActivity('.generate', 'auto');
    changeElementActivity('.check', 'none');
  }
  // Wrong guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      changeElementTextContent(
        `.message`,
        guess > secretNumber ? `Value too high` : `Value too low`
      );
      updateScore(-1);
    } else {
      changeElementTextContent(`.message`, `You lost!`);
      document.querySelector('body').style.backgroundColor = '#ac1e1e';
      updateScore(-1);

      // Deactivate "check" button
      changeElementActivity('.check', 'none');
    }
  }
});

// Again button functionality (Game reset)
document.querySelector('.again').addEventListener('click', function () {
  resetContentToDefaults(true);
});

// Generate new number button handler (continue game)
document.querySelector('.generate').addEventListener('click', function () {
  resetContentToDefaults(false);
});
