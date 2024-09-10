export const smoothScrolling = () => {
  const anchors = document.querySelectorAll(
      '.navbar__link,.footer__link-top, .home__btn');

  for (const anchor of anchors) {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};
