document.addEventListener('DOMContentLoaded', function () {
  
  document.querySelectorAll('[data-aos="reveal-right"]').forEach(function (element) {
    element.addEventListener('transitionend', function () {
      if (element.classList.contains('aos-animate')) {
        setTimeout(function () {
          element.classList.add('hold');
          element.nextElementSibling.style.visibility = 'visible';
        }, 0); 
      }
    });
  });
});

let lastScrollTop = 0;
const header = document.querySelector('.header');
const burgerInput = document.getElementById('burger');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = '-75px';
    burgerInput.checked = false;
  } else {
    header.style.top = '0';
  }

  lastScrollTop = scrollTop;
});