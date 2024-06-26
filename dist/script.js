import submitRange from "./dialog.js";
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
function validateRange(e) {
    e.preventDefault();
    const startingNum = Number(startingNumContainer.value);
    const endingNum = Number(endingNumContainer.value);
    if (startingNum >= endingNum) {
        alert('Starting Number should be less then ending number');
        startingNumContainer.value = '';
        endingNumContainer.value = '';
    }
    targetNumber = Math.floor(Math.random() * (endingNum - startingNum + 1) + startingNum);
    startingNumForm.value = '';
    endingNumForm.value = '';
}
submitRange.addEventListener('click', validateRange);
