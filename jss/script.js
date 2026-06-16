// 1. Logika Animasi Header (Kapsul Bubble ke Sticky Bar Datar)
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// 2. Logika Intersection Observer (Memicu Efek Fade-In Slide Up)
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    threshold: 0.12 // Animasi berjalan saat 12% bagian halaman terintip
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible'); // Hapus ini jika ingin animasi 1x jalan saja
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('fade-in-section');
    sectionObserver.observe(section);
});