const HTML__SELECTOR = document.querySelector('html');
const PAGE__SELECTOR = document.querySelector('.page');
const NAV__HAMBURGER = document.querySelector('.nav__hamburger');
const NAV__MENU__SELECTOR = document.querySelector('.nav__menu');
const LINK__NAV__MENU = document.querySelectorAll('.nav__link');

function SHOW__NAV__MENU() {
    HTML__SELECTOR.classList.toggle('active__navburger');
    PAGE__SELECTOR.classList.toggle('active__navburger');
    NAV__HAMBURGER.classList.toggle('active__navburger');
    NAV__MENU__SELECTOR.classList.toggle('active__navburger');
}

NAV__HAMBURGER.addEventListener("click",() => {
    SHOW__NAV__MENU();
});

LINK__NAV__MENU.forEach((link) => {
    link.addEventListener("click",() => {
        SHOW__NAV__MENU();
    })
});









