let menuIcon = document.querySelector('#menu-ico');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

// Scroll to top functionality
const scrollUp = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollUp.classList.add('show');
    } else {
        scrollUp.classList.remove('show');
    }
});

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});