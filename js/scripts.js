// NAVBAR 
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

// Event listeners
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('bar-change');
})

// Third Part : _4_cr1m3}
// Sticky navbar
window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', scrollY > 0)
})
