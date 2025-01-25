// script.js

// Add smooth scrolling behavior for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Find the target section
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      // Scroll to the section
      targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start'      // Align to the top
      });
    });
  });
  