import {burger} from './burger.js';
import {headerSticky} from './headerSticky.js';
import {scrollSection} from './scrollSection.js';
import {sendEmail} from './sendEmail.js';
import {smoothScrolling} from './smoothScrolling.js';
import {telMask} from './telMask.js';

const init = () => {
  scrollSection();
  burger();
  headerSticky();
  smoothScrolling();
  telMask();

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
    console.log('OK');
    form.reset();
  });
};

init();


