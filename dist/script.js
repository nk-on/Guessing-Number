import { submitRange, dialog } from "./dialog.js";
const startingNumContainer = document.querySelector('#starting');
const endingNumContainer = document.querySelector('#end');
const startingNumForm = document.querySelector('#starting');
const endingNumForm = document.querySelector('#end');
const startingNumPlaceHolder = document.querySelector('[data-starting]');
const endingNumPlaceHolder = document.querySelector('[data-ending]');
const guessedNumContainer = document.querySelector('#guessing-num');
const sumbitButton = document.querySelector('[data-submit]');
const chancesPlaceHolder = document.querySelector('[data-chances]');
const highLowPlaceholder = document.querySelector('[data-high-low]');
const gameOverDialog = document.querySelector('[data-dialog-game-over]');
const messege = document.querySelector('[data-messege]');
let targetNumber;
let startingNum;
let endingNum;
function validateRange(e) {
    e.preventDefault();
    startingNum = Number(startingNumContainer.value);
    endingNum = Number(endingNumContainer.value);
    if (startingNum >= endingNum) {
        alert('Starting Number should be less then ending number');
        startingNumContainer.value = '';
        endingNumContainer.value = '';
        return;
    }
    ;
    startingNumPlaceHolder.textContent = String(startingNum);
    endingNumPlaceHolder.textContent = String(endingNum);
    dialog.close();
    targetNumber = Math.floor(Math.random() * (endingNum - startingNum + 1) + startingNum);
    startingNumForm.value = '';
    endingNumForm.value = '';
}
;
function checkGuessedNum() {
    let chances = 10;
    return (e) => {
        e.preventDefault();
        const guessedNum = Number(guessedNumContainer.value);
        if (guessedNum > endingNum || guessedNum < startingNum) {
            alert(' Number is out of range');
        }
        if (guessedNum !== targetNumber) {
            chances--;
            chancesPlaceHolder.textContent = String(chances);
            guessedNum > targetNumber ? highLowPlaceholder.textContent = 'Too low' : highLowPlaceholder.textContent = 'Too high';
        }
        ;
        if (guessedNum === targetNumber) {
            messege.textContent = 'You Guessed !';
            gameOverDialog.show();
            return;
        }
        ;
        if (chances === 0) {
            messege.textContent = 'You run out from chances!';
            gameOverDialog.show();
            return;
        }
        ;
    };
}
const validateGuessedNum = checkGuessedNum();
submitRange.addEventListener('click', validateRange);
sumbitButton.addEventListener('click', validateGuessedNum);
