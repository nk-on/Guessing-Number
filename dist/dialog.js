const dialog = document.querySelector('[data-dialog]');
const submitRange = document.querySelector('[data-submitRange]');
submitRange.addEventListener('click', () => dialog.close());
dialog.show();
export { submitRange, dialog };
