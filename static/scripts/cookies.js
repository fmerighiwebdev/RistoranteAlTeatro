// Cookie state
let state = document.querySelector('#state');
state.style.fontFamily = "Diphylleia, serif";
state.style.fontSize = "clamp(0.75rem, 3vw, 1rem)";

state.textContent = document.cookie;

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');
const languages = document.querySelector('.languages');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
    languages.classList.toggle('active');
})

document.querySelectorAll('.nav__link, .nav__language').forEach(n => 
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        languages.classList.remove('active');
}))