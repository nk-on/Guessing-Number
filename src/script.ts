const startingNumContainer = document.querySelector('#starting') as HTMLInputElement;
const endingNumContainer = document.querySelector('#end') as HTMLInputElement;
const startingNumPlaceHolder = document.querySelector('[data-starting]') as HTMLSpanElement;
const endingNumPlaceHolder = document.querySelector('[data-ending]') as HTMLSpanElement;
const guessedNumContainer = document.querySelector('#guessing-num') as HTMLInputElement;
const sumbitButton = document.querySelector('[data-submit]') as HTMLButtonElement;
const chancesPlaceHolder = document.querySelector('[data-chances]') as HTMLSpanElement;
const highLowPlaceholder = document.querySelector('[high-low]') as HTMLSpanElement;
function guessNumber(startingNum: number, endingNum: number):  ()=> void {
    let chances:number = 10;
    const targetNumber:number = Math.floor(Math.random() * (endingNum - startingNum + 1) + startingNum);
    console.log(startingNum,endingNum)
    return () => {
        if(targetNumber !== chances){
            chances--;
            chancesPlaceHolder.textContent = String(chances);
        }
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
    const guessNumFun = guessNumber(startingNum,endingNum);
    guessNumFun();
}
sumbitButton.addEventListener('click', validateRange)