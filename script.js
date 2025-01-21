// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animations for sections as you scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add('hidden'); // Initially hidden
    observer.observe(section);
});

// Add a hover effect for project cards
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.05)';
        project.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });
    project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
        project.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});
