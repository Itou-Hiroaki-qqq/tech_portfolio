document.addEventListener('DOMContentLoaded', () => {

  const headerGroup = document.querySelector('.header_group');
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector(('.hamburger'));

  hamburger.addEventListener('click', () => {
    headerGroup.classList.toggle('open');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  nav.addEventListener('click', () => {
    headerGroup.classList.toggle('open');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  const h1 = document.querySelector('h1');
  h1.addEventListener('click', () => {
    headerGroup.classList.remove('open');
    nav.classList.remove('open');
    hamburger.classList.remove('open');
  })

}); //script END