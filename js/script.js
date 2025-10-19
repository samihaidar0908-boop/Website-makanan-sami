const menuOPenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const navMenu = document.querySelector('.nav-menu');


menuOPenButton.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu');
})
menuCloseButton.addEventListener('click', () => menuOPenButton.click());

// instalize swipper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabcursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   respontife breakpoints
  breakpoints : {
    0 : {
       slidesPerView: 1
    },
    768 : {
       slidesPerView: 2
    },
    1024 : {
       slidesPerView: 3
    }
  }
});