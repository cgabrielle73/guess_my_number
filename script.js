'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

function differentNumber (winningMessage, losingMessage) {
    if(score > 1) {
        document.querySelector('.message').textContent = winningMessage;
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = losingMessage;
    }
}


document.querySelector('.check').addEventListener('click', (event) => {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'No values selected';
    } else if(secretNumber === guess) {
        document.querySelector('.message').textContent = 'Correct number!!!!';
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').textContent = secretNumber;

    } else if(guess > secretNumber) {
        differentNumber('Too high!!', 'You lost the game!');
    } else if(guess < secretNumber) {
        differentNumber('Too low!!', 'You lost the game!');
    } else {
        document.querySelector('.score').textContent = guess;
    }

})
