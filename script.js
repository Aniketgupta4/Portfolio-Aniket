// ===================================
// 1. Mobile Toggle Menu (Menu Icon)
// ===================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon from menu to 'X'
    navbar.classList.toggle('active'); // Show/Hide the menu
};


// ===================================
// 2. Scroll Animation (ScrollReveal)
// ===================================
// Initialize ScrollReveal
ScrollReveal({ 
    distance: '80px', 
    duration: 2000, 
    delay: 200 
});

// Target elements for animation
ScrollReveal().reveal('.home-content, .heading1, .main-text', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .portfolio-content, .certificates-content, .contact-form-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-text', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .contact-text', { origin: 'right' });


// ===================================
// 3. Typed.js for Text Animation
// ===================================
var typed = new Typed(".text",{
    strings: [
        "Full Stack Developer", 
        "Data Scientist", 
        "MERN Specialist", 
        "Problem Solver"
    ],
    typeSpeed: 70, 
    backSpeed: 50, 
    backDelay: 1000, 
    loop: true 
});


// ===================================
// 4. Active Navigation Links on Scroll
// ===================================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header on scroll
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};