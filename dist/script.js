"use strict";
const startingNumContainer = document.querySelector('#starting');
const endingNumContainer = document.querySelector('#end');
const startingNumPlaceHolder = document.querySelector('[data-starting]');
const endingNumPlaceHolder = document.querySelector('[data-ending]');
const guessedNumContainer = document.querySelector('#guessing-num');
const sumbitButton = document.querySelector('[data-submit]');
const chancesPlaceHolder = document.querySelector('[data-chances]');
function guessNumber(startingNum, endingNum) {
    const targetNumber = Math.floor(Math.random() * (endingNum - startingNum + 1) + startingNum);
    console.log(targetNumber);
}
function validateRange(e) {
    e.preventDefault();
    const startingNum = Number(startingNumContainer.value);
    const endingNum = Number(endingNumContainer.value);
    if (startingNum >= endingNum) {
        alert('Starting Number should be less then ending number');
        startingNumContainer.value = '';
        endingNumContainer.value = '';
    }
    guessNumber(startingNum, endingNum);
}
sumbitButton.addEventListener('click', validateRange);
