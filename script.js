'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 12;
document.querySelector('.guess').value = 10;
document.querySelector('.score').textContent = 50;
*/

const scretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//reset
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = 0;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'; //changing css property
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //no inout
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  //when the guess is correct
  else if (guess === scretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = scretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; //changing css property

    //setting high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is too high
  else if (guess > scretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too high';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Sorry you lost the game!';
      document.querySelector('.score').textContent = score;
    }
  }
  //when guess is too low
  else if (guess < scretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too low';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Sorry you lost the game!';
      document.querySelector('.score').textContent = score;
    }
  }
});
