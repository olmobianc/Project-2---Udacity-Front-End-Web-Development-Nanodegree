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
function buildNavBarMenu() {
    const navbar = document.getElementById('navbar__list'); //getting the ul element
    const contatore = document.getElementsByClassName('landing__container');

    //creating the navbar elements based on how many sections there are
    for(let i=1; i<=contatore.length; i++) {
        const navElements = document.createElement('li');
        const navLinks = document.createElement('a');
        navLinks.innerHTML = `Section ${i}`;
        navLinks.classList.add("navLinks");
        navLinks.setAttribute("href", `#section${i}`);
        navElements.appendChild(navLinks);
        navbar.appendChild(navElements);
    }
}

// Add class 'active' to section when near top of viewport
function makeActiveClasses() {
    for(const section of sections) {
        const rect = section.getBoundingClientRect(); //get Rectangle container for each section

        //adding active class to the sections

        //mobile first
        let w = window.innerWidth;
        if(w < 600) {
            if(rect.bottom <= window.innerHeight + 600) {
                section.classList.add("your-active-class");
                var whichSection = section.getAttribute("id");
            }
            else {
                section.classList.remove("your-active-class");
            }
        //tablet and desktop    
        } else {
            if(rect.bottom <= window.innerHeight) {
                section.classList.add("your-active-class");
                var whichSection = section.getAttribute("id");
            }
            else {
                section.classList.remove("your-active-class");
            }
        }
        
        //adding active class to the navbar Links
        const navlinks = document.getElementsByClassName("navLinks");
        for(let i = 0; i < navlinks.length; i++) {
            if(whichSection == `section${i+1}`) {
                navlinks[i].classList.add("active");
            }
            else {
                navlinks[i].classList.remove("active");
            }
        }
    }
}


// Scroll to anchor ID using scrollTO event
function makeSmoothScrolling() {
    const navlinks = document.getElementsByClassName("navLinks");
    for(let i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }    
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', function(e) {
    buildNavBarMenu();
});

// Scroll to section on link click
document.addEventListener('DOMContentLoaded', function(e) {
    makeSmoothScrolling();
});

// Set sections as active
document.addEventListener('scroll', function(e) {
    makeActiveClasses();
});