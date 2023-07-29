// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName('image__container');

    // Nascondi tutte le immagini
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Mostra l'immagine corrente
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';

    // Ripeti la funzione dopo 2 secondi (2000ms)
    setTimeout(showSlides, 3000);
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

// Manual slideshow
let photos = ["/static/images/indoor1.jpg", "/static/images/indoor2.jpg", "/static/images/indoor3.jpg", "/static/images/indoor4.jpg",
    "/static/images/outdoor2.jpg", "/static/images/bar2.jpg"];

let manualImg = document.querySelector('.slideshow__manual img')
let count = 0;

function next() {
    count++;

    if (count >= photos.length) {
      count = 0;
      manualImg.src = photos[count];
    } else {
      manualImg.src = photos[count];
    }
}

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

// Cookie banner
let banner = document.querySelector('.cookie-banner');
let accept = document.querySelector('#accept');
let refuse = document.querySelector('#refuse');
let pref = document.querySelector('#pref');

let map = document.querySelector('.location iframe');
let errorMap = document.querySelector('.location .nocookie__text');

setCookie = (cName, cValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/"
}

getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;

  cArr.forEach(val => {
    if (val.indexOf(name) === 0) {
      value = val.substring(name.length);
    }
  })

  return value;
}

accept.addEventListener('click', () => {
  banner.style.display = 'none';
  setCookie('accepted', true, 30);

  map.style.display = "block";
  map.style.border = "none";

  errorMap.style.display = "none";

  pref.style.display = "block";

  document.cookie = "rejected=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


})

refuse.addEventListener('click', () => {
  banner.style.display = 'none';
  setCookie('rejected', true, 30);

  map.style.display = "none";
  errorMap.style.display = "block";

  pref.style.display = "block";

  document.cookie = "accepted=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
})

pref.addEventListener('click', () => {
  pref.style.display = "none";
  banner.style.display = "block";
})

cookieMessage = () => {
  if (getCookie("accepted")) {
    banner.style.display = "none";
    pref.style.display = "block";

    map.style.display = "block";
    errorMap.style.display = "none";
  } else if (getCookie("rejected")) {
    banner.style.display = "none";
    pref.style.display = "block";

    map.style.display = "none";
    errorMap.style.display = "block";
  } else {
    banner.style.display = "block";
    pref.style.display = "none";
  }
}

window.addEventListener('load', cookieMessage);