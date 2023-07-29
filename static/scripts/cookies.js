// Cookie state
let state = document.querySelector('#state');
state.style.fontFamily = "Diphylleia, serif";
state.style.fontSize = "clamp(0.75rem, 3vw, 1rem)";

state.textContent = document.cookie;

// Scroll animations
let sectionsFromRight = document.querySelectorAll('.animated-right');
let sectionsFromUp = document.querySelectorAll('.animated-up');
let sectionsFromLeft = document.querySelectorAll('.animated-left');
let sectionsFade = document.querySelectorAll('.animated-fade');

window.onscroll = () => {
  sectionsFade.forEach(sec => {
    let top = window.scrollY + 500;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('fade-in');
    }
  })
  sectionsFromLeft.forEach(sec => {
    let top = window.scrollY + 500;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('fade-left');
    }
  })
  sectionsFromUp.forEach(sec => {
    let top = window.scrollY + 500;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('fade-up');
    }
  })
  sectionsFromRight.forEach(sec => {
    let top = window.scrollY + 500;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('fade-right');
    }
  })
}

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