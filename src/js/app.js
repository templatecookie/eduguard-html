'use strict';
// Input field password type show/hide
function showPassword(id, el) {
  let x = document.getElementById(id);
  if (x.type === 'password') {
    x.type = 'text';
    el.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> ';
  } else {
    x.type = 'password';
    el.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
  }
}

// Search Field Animation
// UI variables
const categoryBtn = document.querySelector('#categoryBtn');
const dropBox = document.querySelector('.categoryDrop');
let navMenu = document.querySelector('.navbar-nav.mx-auto');
const searchInput = document.querySelector('.header__Search-input');
const smallRight = document.querySelector('.rightContent');

const searchButton = document.querySelector('#search-nav');
searchButton.addEventListener('click', (e) => {
  searchButton.classList.toggle('appear');

  // change flaticons collor by changing  there src
  if (searchButton.classList.contains('appear')) {
    searchButton.innerHTML = `
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
 `;

    navMenu.className += ' menuList';
    searchInput.className += ' appear';
    smallRight.className += ' appear';
  } else {
    searchButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="9.19522" cy="9.19518" r="7.61714" stroke="#35343E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></circle>
         <path d="M15.0493 15.4866L18.3493 18.778" stroke="#35343E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
     </svg>
    `;
    navMenu.className = 'navbar-nav mx-auto mb-2 mb-lg-0';
    searchInput.className = 'header__Search-input';
    smallRight.className =
      'd-flex align-items-center justify-content-between justify-content-lg-start rightContent ';
  }
});
