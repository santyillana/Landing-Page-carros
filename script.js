/* APARICIÓN SUAVE DE SECCIONES */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(
  '.beneficio, .auto, .paso, .cta h2, .cta p, .cta a'
).forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

/* HEADER CAMBIA LEVE AL SCROLL */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.style.background = 'rgba(0,0,0,0.85)';
  } else {
    header.style.background = 'rgba(0,0,0,0.65)';
  }
});
