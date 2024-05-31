//block reveal animation
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


//hide the navigation-bar when scroll down
let lastScrollTop = 0;
const header = document.querySelector('.header');
const burgerInput = document.getElementById('burger');

window.addEventListener('scroll', function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = '-75px';
    burgerInput.checked = false;
  } else {
    header.style.top = '0';
  }

   // Apply the box-shadow when the header is off the top
   if (scrollTop > 0) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }


  lastScrollTop = scrollTop;
});


//user only allow to send when they completed the form
const fullName = document.getElementById('full__name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone__number');
const companyName = document.getElementById('company__name');
const inquiryContents = document.getElementById('inquiry__content');
const termsCheckbox = document.getElementById('register-page__term');
const submitBtn = document.getElementById('submit-btn');

function checkFormCompletion() {
  if (
    fullName.value.trim() !== '' &&
    email.value.trim() !== '' &&
    phoneNumber.value.trim() !== '' &&
    companyName.value.trim() !== '' &&
    inquiryContents.value.trim() !== '' &&
    termsCheckbox.checked
  ) {
    submitBtn.disabled = false;
    submitBtn.classList.remove('disabled');
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.add('disabled');
  }
}

document.querySelectorAll('input, textarea').forEach(element => {
  element.addEventListener('input', checkFormCompletion);
});

termsCheckbox.addEventListener('change', checkFormCompletion);