'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function showMessageOnDifferentNumbers(winningMessage, losingMessage) {
    if(score > 1) {
       displayMessage(winningMessage);
        score--;
        document.querySelector('.score').textContent = score;
    } else {
       displayMessage(losingMessage);
    }
}


document.querySelector('.check').addEventListener('click', (event) => {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        displayMessage('No values selected')
    } else if(secretNumber === guess) {
        displayMessage('Correct number!!!!')
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if(guess > secretNumber) {
        showMessageOnDifferentNumbers('Too high!!', 'You lost the game!');
    } else if(guess < secretNumber) {
        showMessageOnDifferentNumbers('Too low!!', 'You lost the game!');
    } else {
        document.querySelector('.score').textContent = guess;
    }
})


document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');

    document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

})