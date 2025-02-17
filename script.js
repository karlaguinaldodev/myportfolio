// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form handling (just for demonstration)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo - no backend functionality)');
    form.reset();
});

// Add fade-in animation to elements when they come into view
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Select all sections and project cards
document.querySelectorAll('section, .project-card').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease-in-out';
    observer.observe(element);
}); 