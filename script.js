const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && primaryNav.classList.contains('open')) {
      primaryNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
}

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });
