document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Sticky Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mock Form Submit
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message. We will get back to you soon!');
      contactForm.reset();
    });
  }
  
  // Highlight active link
  const currentPath = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(link => {
    if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
});
