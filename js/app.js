/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navbar = document.getElementById('navbar__list');
const contatore = document.getElementsByClassName('landing__container');

for(let i=1; i<=contatore.length; i++) {
    const navElements = document.createElement('li');
    const navLinks = document.createElement('a');
    navLinks.innerHTML = `Section ${i}`;
    navLinks.classList.add("navLinks");
    navLinks.setAttribute("href", `#section${i}`);
    navElements.appendChild(navLinks);
    navbar.appendChild(navElements);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const navlinks = document.getElementsByClassName("navLinks");
for(let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}    


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active