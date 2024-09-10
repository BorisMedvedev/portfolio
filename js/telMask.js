export const telMask = () => {
  const tel = document.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999 - 99 - 99');

  inputMask.mask(tel);
};
