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

// Cookie banner
let banner = document.querySelector('.cookie-banner');
let accept = document.querySelector('#accept');
let refuse = document.querySelector('#refuse');
let pref = document.querySelector('#pref');

let map = document.querySelector('.where-when iframe');
let errorMap = document.querySelector('.nocookie-text');

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