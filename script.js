/////////////////////////////////////////////////////
// MOBILE MENU OPEN/CLOSE
/////////////////////////////////////////////////////
let menuOpen = false;
let navBar = document.getElementById('navBar');
let openIcon = document.getElementById('menuOpen');
let closeIcon = document.getElementById('menuClose');
function mobileMenu() {
	if (window.innerWidth >= 775) return; //Dont perform any adjustments if the regular navbar is clicked.
	navBar.classList.toggle('nav--open');
	if (menuOpen) {
		// CLOSE THE MENU
		openIcon.style.display = 'block';
		closeIcon.style.display = 'none';
		// different way instead of toggle
		// navBar.className = navBar.className.replace(' nav--open', '');
		menuOpen = false;
	} else {
		// OPEN THE MENU
		openIcon.style.display = 'none';
		closeIcon.style.display = 'block';
		// different way instead of toggle
		// navBar.className += ' nav--open';
		menuOpen = true;
	}
}

// Close menu by clicking elsewhere
document.body.addEventListener('click', function (event) {
	let isMenuOpen = document.querySelector('.nav--open');
	// Ignore mouse click if menu is not open
	if (!isMenuOpen) return;
	// Close menu if user clicks somewhere else
	if (!navBar.contains(event.target)) {
		menuOpen = false;
		navBar.classList.toggle('nav--open');
		openIcon.style.display = 'block';
		closeIcon.style.display = 'none';
	}
});

/////////////////////////////////////////////////////
// NAV BAR HIGHLIGHTING
/////////////////////////////////////////////////////

let navAbout = document.querySelector('.navAbout');

function setNavAboutToActive() {
	navAbout.classList.add('active');
}

// Get all sections that have an ID defined
const sections = document.querySelectorAll('section[id]');

// Add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
	// Get current scroll position
	let scrollY = window.pageYOffset;

	// Now we loop through sections to get height, top and ID values for each
	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		let sectionId = current.getAttribute('id');

		/*
	    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
	    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
	    */
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.navBar a[href*=' + sectionId + ']')
				.classList.add('active');
		} else {
			document
				.querySelector('.navBar a[href*=' + sectionId + ']')
				.classList.remove('active');
		}
	});
}

/////////////////////////////////////////////////////
// CAROUSEL
/////////////////////////////////////////////////////

let slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
	SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
	SlideShow((slidePosition = n));
}

function SlideShow(n) {
	let i;
	let slides = document.getElementsByClassName('slide');
	let circles = document.getElementsByClassName('carouselDot');
	if (n > slides.length) {
		slidePosition = 1;
	}
	if (n < 1) {
		slidePosition = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < circles.length; i++) {
		circles[i].className = circles[i].className.replace(' dot--fill', '');
	}
	slides[slidePosition - 1].style.display = 'flex';
	circles[slidePosition - 1].className += ' dot--fill';
	// Fade in slide
	slides[slidePosition - 1].className += ' slide--fadeIn';
}
