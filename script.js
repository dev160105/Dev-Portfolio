
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
        section.classList.add("hidden");
    });
});

document.addEventListener("scroll", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.style.color = "#FFF";
    });
});
