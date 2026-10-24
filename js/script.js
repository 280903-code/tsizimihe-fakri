// TSIZIMIHÉ SERVICES — JavaScript simple, sans framework.
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const menuIcon = '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
const closeIcon = '<svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>';

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.innerHTML = isOpen ? closeIcon : menuIcon;
  menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) {
      menuToggle.innerHTML = menuIcon;
      menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
    }
  });
});

// Filtrage des matériels
const filterSelect = document.querySelector('.filter-select');
const productCards = document.querySelectorAll('.product-card');
filterSelect?.addEventListener('change', () => {
  const category = filterSelect.value;
  productCards.forEach(card => {
    const visible = category === 'Tous' || card.dataset.category === category;
    card.classList.toggle('hidden', !visible);
  });
});

// Préremplir la demande depuis un matériel sélectionné.
const selectedEquipment = new URLSearchParams(window.location.search).get('materiel');
const equipmentSelect = document.querySelector('#equipment');
if (selectedEquipment && equipmentSelect) {
  const matchingOption = [...equipmentSelect.options].find(option => option.value === selectedEquipment || option.textContent === selectedEquipment);
  if (matchingOption) equipmentSelect.value = matchingOption.value;
}

// Formulaire de demande : ouvre WhatsApp avec un message prérempli.
document.querySelector('#quote-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get('name');
  const phone = data.get('phone');
  const duration = data.get('duration');
  const equipment = data.get('equipment');
  const message = data.get('message') || 'Aucun détail supplémentaire.';
  const text = [
    'Bonjour TSIZIMIHÉ SERVICES, je souhaite demander un devis.',
    '',
    `Nom : ${name}`,
    `Téléphone : ${phone}`,
    `Matériel : ${equipment}`,
    `Durée estimée : ${duration}`,
    `Détails : ${message}`
  ].join('\n');
  const whatsappUrl = `https://wa.me/2694339545?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const animatedElements = document.querySelectorAll(
  'main > section:not(.hero), .product-card, .service-card, .home-link-grid > a, .testimonial-card:not([aria-hidden="true"])'
);
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const entranceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  animatedElements.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 75}ms`);
    entranceObserver.observe(element);
  });
} else {
  animatedElements.forEach(element => element.classList.add('is-visible'));
}
