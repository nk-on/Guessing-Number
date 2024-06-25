const startingNumContainer = document.querySelector('#starting') as HTMLInputElement;
const endingNumContainer = document.querySelector('#end') as HTMLInputElement;
const startingNumPlaceHolder = document.querySelector('[data-starting]') as HTMLSpanElement;
const endingNumPlaceHolder = document.querySelector('[data-ending]') as HTMLSpanElement;
const guessedNumContainer = document.querySelector('#guessing-num') as HTMLInputElement;
const sumbitButton = document.querySelector('[data-submit]') as HTMLButtonElement;
const chancesPlaceHolder = document.querySelector('[data-chances]') as HTMLSpanElement;
function validateRange(e: Event): void {
    e.preventDefault();
    const startingNum: number = Number(startingNumContainer.value);
    const endingNum: number = Number(endingNumContainer.value);
    if (startingNum >= endingNum) {
        alert('Starting Number should be less then ending number');
        startingNumContainer.value = '';
        endingNumContainer.value = '';
    }
}
sumbitButton.addEventListener('click', validateRange)