const startingNumContainer = document.querySelector('#starting') as HTMLInputElement;
const endingNumContainer = document.querySelector('#end') as HTMLInputElement;
const startingNumPlaceHolder = document.querySelector('[data-starting]') as HTMLSpanElement;
const endingNumPlaceHolder = document.querySelector('[data-ending]') as HTMLSpanElement;
const guessedNumContainer = document.querySelector('#guessing-num') as HTMLInputElement;
const sumbitButton = document.querySelector('[data-submit]') as HTMLButtonElement;
const chancesPlaceHolder = document.querySelector('[data-chances]') as HTMLSpanElement;
const highLowPlaceholder = document.querySelector('[data-high-low]') as HTMLSpanElement;
function guessNumber(startingNum: number, endingNum: number): () => void {
    let chances: number = 10;
    const targetNumber: number = Math.floor(Math.random() * (endingNum - startingNum + 1) + startingNum);
    return () => {
        console.log(targetNumber)
        const guessedNum: number = Number(guessedNumContainer.value);
        if (targetNumber !== guessedNum) {
            chances--;
            chancesPlaceHolder.textContent = String(chances);
        }
        if(targetNumber === guessedNum){
            alert('You won !');
        };
        guessedNum > targetNumber ? highLowPlaceholder.textContent = 'Too high' : highLowPlaceholder.textContent = 'Too low';
    }
}
function validateRange(e: Event): void {
    e.preventDefault();
    const startingNum: number = Number(startingNumContainer.value);
    const endingNum: number = Number(endingNumContainer.value);
    if (startingNum >= endingNum) {
        alert('Starting Number should be less then ending number');
        startingNumContainer.value = '';
        endingNumContainer.value = '';
    }
    const guessNumFun = guessNumber(startingNum, endingNum);
    guessNumFun();
}
sumbitButton.addEventListener('click', validateRange)