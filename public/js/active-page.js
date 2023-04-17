const activePage = window.location.href;
const navLinks = document.querySelectorAll('nav a');

// Sets link to active based on current page
navLinks.forEach((link) => {
  if (link.href == activePage) {
    link.classList.add('active');
  }
});
