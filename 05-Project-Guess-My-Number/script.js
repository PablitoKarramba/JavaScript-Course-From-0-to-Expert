'use strict';

// Generate secret number
let secretNumber = Math.trunc(Math.random() * 99 + 1);
console.log(`Secret: ${secretNumber}`);

// Calculate score
let score = 20;
const updateScore = (points) => {
  score = score + points;
  document.querySelector('.score').textContent = score;
};

// Highscore logic
let highscore = 0;

// Check button handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Value inserted into input field
  // Compare value against secret number
  // Invalid input value
  if (!guess) {
    // BUG: handle if user inserted 0
    document.querySelector('.message').textContent = `Type in your guess`;
  }
  // Correct answer
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = `Correct guess!`;
    updateScore(10);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Activate "generate new" button
    document.querySelector('.generate').style.pointerEvents = 'auto';

    // Deactivate "check" button
    document.querySelector('.check').style.pointerEvents = 'none';

    // Change website style
    document.querySelector('body').style.backgroundColor = '#31cf39';
    document.querySelector('.number').style.width = '30rem';
  }
  // Guess too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Value too high`;
      updateScore(-1);
    } else {
      document.querySelector('.message').textContent = `You lost!`;
      updateScore(-1);

      // Deactivate "check" button
      document.querySelector('.check').style.pointerEvents = 'none';
    }
  }
  // Guess too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Value too low`;
      updateScore(-1);
    } else {
      document.querySelector('.message').textContent = `You lost!`;
      document.querySelector('body').style.backgroundColor = '#ac1e1e';
      updateScore(-1);

      // Deactivate "check" button
      document.querySelector('.check').style.pointerEvents = 'none';
    }
  }
});

// Again button functionality (reset)
document.querySelector('.again').addEventListener('click', function () {
  // Clear user input
  document.querySelector('.guess').value = '';

  // Reset info message
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.number').textContent = '?';

  // Activate check button
  document.querySelector('.check').style.pointerEvents = 'auto';

  // Reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  // Change style back to default
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // Generate new secret number
  secretNumber = Math.trunc(Math.random() * 99 + 1);
  console.log(`New secret: ${secretNumber}`);
});

// Generate new number button handler (continue game)
document.querySelector('.generate').addEventListener('click', function () {
  // Clear user input
  document.querySelector('.guess').value = '';

  // Reset info message
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.number').textContent = '?';

  // Activate check button
  document.querySelector('.check').style.pointerEvents = 'auto';

  // Change style back to default
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // Generate new secret number
  secretNumber = Math.trunc(Math.random() * 99 + 1);
  console.log(`New secret: ${secretNumber}`);

  // Deactivate the button
  document.querySelector('.generate').style.pointerEvents = 'none';
});
