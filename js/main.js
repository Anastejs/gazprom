// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const logo = document.querySelector('.header__logo');
const warningBlock = document.querySelector('.warning-message');
const header = document.querySelector('.header');
const headerWrapper = document.querySelector('.header__wrapper');

function classToggle() {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    logo.classList.toggle('_active');
    header.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    if (warningBlock) {
        warningBlock.classList.toggle('_active');
    }
    if (headerWrapper) {
        headerWrapper.classList.toggle('_active');
    }
}

if (iconMenu) {
    iconMenu.addEventListener("click", classToggle);
}

const subLinks = document.querySelectorAll('.menu__sub-link');
// console.log(subLinks)

subLinks.forEach(subLink => {
    subLink.addEventListener('click', (event) => {
        if (iconMenu.classList.contains('_active')) {
            classToggle();
        }
    })
})

// Плавная прокрутка при клике (работает только с ссылками на той же странице по id)
const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const id = link.getAttribute('href').substring(1)

        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    })
})