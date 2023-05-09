'use strict';

//generate secret number
let secretNumber = Math.trunc(Math.random() * 99 + 1);
console.log(`Secret: ${secretNumber}`);

//Calculate score
let score = 20;
const updateScore = (points) => {
  score = score + points;
  document.querySelector('.score').textContent = score;
};

//Check button handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // value inserted into input field
  console.log(guess);
  // compare value against secret number
  if (!guess) {
    //BUG: handle if user inserted 0
    document.querySelector('.message').textContent = `Type in your guess`;
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = `Correct guess!`;
    updateScore(10);

    //change website style
    document.querySelector('body').style.backgroundColor = '#31cf39';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Value too high`;
      updateScore(-1);
    } else {
      document.querySelector('.message').textContent = `You lost!`;
      updateScore(-1);
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Value too low`;
      updateScore(-1);
    } else {
      document.querySelector('.message').textContent = `You lost!`;
      updateScore(-1);
    }
  }
});

//Again button functionality (reset)
document.querySelector('.again').addEventListener('click', function () {
  //clear user input
  document.querySelector('.guess').value = '';

  //reset info message
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.number').textContent = '?';

  //reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  //change style back to default
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  //generate new secret number
  secretNumber = Math.trunc(Math.random() * 99 + 1);
  console.log(`New secret: ${secretNumber}`);
});
