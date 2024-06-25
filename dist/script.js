"use strict";
const startingNumContainer = document.querySelector('#starting');
const endingNumContainer = document.querySelector('#end');
const startingNumPlaceHolder = document.querySelector('[data-starting]');
const endingNumPlaceHolder = document.querySelector('[data-ending]');
const guessedNumContainer = document.querySelector('#guessing-num');
const sumbitButton = document.querySelector('[data-submit]');
const chancesPlaceHolder = document.querySelector('[data-chances]');
const highLowPlaceholder = document.querySelector('[high-low]');
function guessNumber(startingNum, endingNum) {
    let chances = 10;
    const targetNumber = Math.floor(Math.random() * (endingNum - startingNum + 1) + startingNum);
    console.log(startingNum, endingNum);
    return () => {
        if (targetNumber !== chances) {
            chances--;
            chancesPlaceHolder.textContent = String(chances);
        }
    };
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
    const guessNumFun = guessNumber(startingNum, endingNum);
    guessNumFun();
}
sumbitButton.addEventListener('click', validateRange);
