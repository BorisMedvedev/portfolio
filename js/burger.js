export const burger = () => {
  const burger = document.getElementById('menu-icon');
  const menu = document.querySelector('.navbar');

  burger.addEventListener('click', () => {
    burger.classList.toggle('bx-x');
    menu.classList.toggle('active');
  });

  const links = document.querySelectorAll('.navbar__link');

  links.forEach(element => {
    element.addEventListener('click', () => {
      burger.classList.remove('bx-x');
      menu.classList.remove('active');
    });
  });
};
