const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');


ham.addEventListener('click', function() {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});



const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;
  for (let i = 0; i < reveals.length; i++) {
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } 
  }
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


});

