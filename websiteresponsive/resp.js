burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.right-nav');
burger.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
  });

// burger.addEventlistener(' click', ( )=> {
// navList.classList.toggle('v-class-resp');
// rightNav.classList.toggle('v-class-resp');
// navbar.classList.toggle('h-nav-resp');
// })