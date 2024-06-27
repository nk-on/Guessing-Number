import { submitRange, dialog } from "./dialog.js";
const startingNumContainer = document.querySelector('#starting') as HTMLInputElement;
const endingNumContainer = document.querySelector('#end') as HTMLInputElement;
const startingNumForm = document.querySelector('#starting') as HTMLInputElement;
const endingNumForm = document.querySelector('#end') as HTMLInputElement;
const startingNumPlaceHolder = document.querySelector('[data-starting]') as HTMLSpanElement;
const endingNumPlaceHolder = document.querySelector('[data-ending]') as HTMLSpanElement;
const guessedNumContainer = document.querySelector('#guessing-num') as HTMLInputElement;
const sumbitButton = document.querySelector('[data-submit]') as HTMLButtonElement;
const chancesPlaceHolder = document.querySelector('[data-chances]') as HTMLSpanElement;
const highLowPlaceholder = document.querySelector('[data-high-low]') as HTMLSpanElement;
let targetNumber: number;
let startingNum:number;
let endingNum:number;
function validateRange(e: Event): void {
    e.preventDefault();
    startingNum = Number(startingNumContainer.value);
    endingNum = Number(endingNumContainer.value);
    if (startingNum >= endingNum) {
        alert('Starting Number should be less then ending number');
        startingNumContainer.value = '';
        endingNumContainer.value = '';
    }
    targetNumber = Math.floor(Math.random() * (endingNum - startingNum + 1) + startingNum);
    startingNumForm.value = '';
    endingNumForm.value = '';
};
function checkGuessedNum(e: Event) {
    e.preventDefault();
    const guessedNum: number = Number(guessedNumContainer.value);
    console.log(guessedNum);
}
submitRange.addEventListener('click', validateRange);
sumbitButton.addEventListener('click', checkGuessedNum)