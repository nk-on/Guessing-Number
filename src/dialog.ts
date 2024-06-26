const dialog = document.querySelector('[data-dialog]') as HTMLDialogElement;
const submitRange = document.querySelector('[data-submitRange]') as HTMLButtonElement;
submitRange.addEventListener('click', () => dialog.close())
dialog.show();
export default submitRange