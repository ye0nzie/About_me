
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    threshold: 0.12 
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible'); 
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('fade-in-section');
    sectionObserver.observe(section);
});