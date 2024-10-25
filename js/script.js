const menuElement = document.querySelector('.js-menu');
const navElement = document.querySelector('.js-nav');
const scrollElement = document.querySelector('body');

menuElement.addEventListener('click', ()=>{
  navElement.classList.toggle('active');
  scrollElement.classList.toggle('body-scroll')
})
