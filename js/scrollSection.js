export const scrollSection = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar__link');

  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });

        const activeLink = document.querySelector(
            '.navbar__link[href*="' + id + '"]');
        activeLink.classList.add('active');

        activeLink.scrollIntoView({behavior: 'smooth'});
      }
    });

    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
  });
};
