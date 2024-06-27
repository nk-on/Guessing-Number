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
        console.log(guessedNum, targetNumber);
        if (guessedNum !== targetNumber) {
            chances--;
            chancesPlaceHolder.textContent = String(chances);
        }
        ;
    };
}
const validateGuessedNum = checkGuessedNum();
submitRange.addEventListener('click', validateRange);
sumbitButton.addEventListener('click', validateGuessedNum);
