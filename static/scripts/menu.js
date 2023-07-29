// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName('hero__image__container');

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

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');
const languages = document.querySelector('.languages');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
    languages.classList.toggle('active');
})

document.querySelectorAll('.nav__link').forEach(n => 
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        languages.classList.remove('active');
}))

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

  pref.style.display = "block";

  document.cookie = "rejected=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
})

refuse.addEventListener('click', () => {
  banner.style.display = 'none';
  setCookie('rejected', true, 30);

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
  } else if (getCookie("rejected")) {
    banner.style.display = "none";
    pref.style.display = "block";
  } else {
    banner.style.display = "block";
    pref.style.display = "none";
  }
}

window.addEventListener('load', cookieMessage);