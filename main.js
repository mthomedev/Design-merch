/* =============================================
   DESIGN MERCH — main.js
   ============================================= */

// ---- i18n: translations ----
const translations = {
  en: {
    'nav.home':    'Home',
    'nav.about':   'About',
    'nav.contact': 'Contact',
    'hero.badge':  '✦ UI/UX Exercise',
    'hero.title1': 'A Minimal',
    'hero.title2': 'and Clean',
    'hero.title3': 'Layout.',
    'hero.desc':   'A project developed as a UI/UX exercise, exploring visual hierarchy, intuitive navigation and aesthetic lightness. Built with pure HTML and CSS.',
    'hero.cta':    'Get Started →',
    'hero.secondary': 'Learn more',
    'scroll':      'scroll',
    'about.label':    '— About the project',
    'about.title':    'Applied learnings',
    'about.subtitle': 'Each technology used in this project played a key role in building a cohesive and functional visual experience.',
    'skills.html':   'Semantic structure, accessibility and markup best practices.',
    'skills.css':    'Variables, Flexbox, Grid, animations and mobile-first responsiveness.',
    'skills.design.name': 'Design',
    'skills.design': 'Visual composition, spacing, typography and element hierarchy.',
    'skills.uiux':   'Navigation flow, visual feedback and user-centered experience.',
    'feedback.label':    '— Share your thoughts',
    'feedback.title':    'What did you think?',
    'feedback.subtitle': 'Your feedback is essential to keep improving. Share what worked and what could be better.',
    'stats.tech':     'technologies',
    'stats.css':      'pure CSS',
    'stats.learning': 'learning',
    'form.liked':    'What did you like most?',
    'form.liked.placeholder': 'e.g. the color palette, the typography...',
    'form.improve':  'What could be improved?',
    'form.improve.placeholder': 'e.g. responsiveness, animations...',
    'form.submit':   'Send feedback →',
    'form.sent':     '✓ Sent!',
    'form.success':  '✓ Thank you for your feedback!',
    'footer.copy':   'Made with HTML & CSS · UI/UX Exercise',
    'lang.label':    'EN',
    'nav.open':      'Open menu',
    'nav.close':     'Close menu',
  },
  pt: {
    'nav.home':    'Home',
    'nav.about':   'Sobre',
    'nav.contact': 'Contato',
    'hero.badge':  '✦ Exercício de UI/UX',
    'hero.title1': 'Um Layout',
    'hero.title2': 'Minimal e',
    'hero.title3': 'Clean.',
    'hero.desc':   'Projeto desenvolvido como exercício de UI/UX, explorando hierarquia visual, navegação intuitiva e leveza estética. Construído com HTML e CSS puros.',
    'hero.cta':    'Começar →',
    'hero.secondary': 'Saiba mais',
    'scroll':      'rolar',
    'about.label':    '— Sobre o projeto',
    'about.title':    'Aprendizados aplicados',
    'about.subtitle': 'Cada tecnologia usada neste projeto teve um papel fundamental para construir uma experiência visual coesa e funcional.',
    'skills.html':   'Estrutura semântica, acessibilidade e boas práticas de marcação.',
    'skills.css':    'Variáveis, Flexbox, Grid, animações e responsividade mobile-first.',
    'skills.design.name': 'Design',
    'skills.design': 'Composição visual, espaçamento, tipografia e hierarquia de elementos.',
    'skills.uiux':   'Fluxo de navegação, feedback visual e experiência centrada no usuário.',
    'feedback.label':    '— Deixe sua opinião',
    'feedback.title':    'O que você achou?',
    'feedback.subtitle': 'Seu feedback é essencial para continuar evoluindo. Compartilhe o que funcionou e o que pode melhorar.',
    'stats.tech':     'tecnologias',
    'stats.css':      'CSS puro',
    'stats.learning': 'aprendizado',
    'form.liked':    'O que você mais gostou?',
    'form.liked.placeholder': 'Ex: a paleta de cores, a tipografia...',
    'form.improve':  'O que pode melhorar?',
    'form.improve.placeholder': 'Ex: responsividade, animações...',
    'form.submit':   'Enviar feedback →',
    'form.sent':     '✓ Enviado!',
    'form.success':  '✓ Obrigado pelo feedback!',
    'footer.copy':   'Feito com HTML & CSS · Exercício de UI/UX',
    'lang.label':    'PT',
    'nav.open':      'Abrir menu',
    'nav.close':     'Fechar menu',
  },
  es: {
    'nav.home':    'Inicio',
    'nav.about':   'Acerca',
    'nav.contact': 'Contacto',
    'hero.badge':  '✦ Ejercicio de UI/UX',
    'hero.title1': 'Un Diseño',
    'hero.title2': 'Minimal y',
    'hero.title3': 'Limpio.',
    'hero.desc':   'Proyecto desarrollado como ejercicio de UI/UX, explorando jerarquía visual, navegación intuitiva y ligereza estética. Construido con HTML y CSS puros.',
    'hero.cta':    'Comenzar →',
    'hero.secondary': 'Saber más',
    'scroll':      'bajar',
    'about.label':    '— Sobre el proyecto',
    'about.title':    'Aprendizajes aplicados',
    'about.subtitle': 'Cada tecnología usada en este proyecto tuvo un papel fundamental para construir una experiencia visual coherente y funcional.',
    'skills.html':   'Estructura semántica, accesibilidad y buenas prácticas de marcado.',
    'skills.css':    'Variables, Flexbox, Grid, animaciones y responsividad mobile-first.',
    'skills.design.name': 'Diseño',
    'skills.design': 'Composición visual, espaciado, tipografía y jerarquía de elementos.',
    'skills.uiux':   'Flujo de navegación, retroalimentación visual y experiencia centrada en el usuario.',
    'feedback.label':    '— Deja tu opinión',
    'feedback.title':    '¿Qué te pareció?',
    'feedback.subtitle': 'Tu retroalimentación es esencial para seguir mejorando. Comparte lo que funcionó y lo que puede mejorar.',
    'stats.tech':     'tecnologías',
    'stats.css':      'CSS puro',
    'stats.learning': 'aprendizaje',
    'form.liked':    '¿Qué te gustó más?',
    'form.liked.placeholder': 'Ej: la paleta de colores, la tipografía...',
    'form.improve':  '¿Qué puede mejorar?',
    'form.improve.placeholder': 'Ej: responsividad, animaciones...',
    'form.submit':   'Enviar comentarios →',
    'form.sent':     '✓ ¡Enviado!',
    'form.success':  '✓ ¡Gracias por tus comentarios!',
    'footer.copy':   'Hecho con HTML & CSS · Ejercicio de UI/UX',
    'lang.label':    'ES',
    'nav.open':      'Abrir menú',
    'nav.close':     'Cerrar menú',
  },
  fr: {
    'nav.home':    'Accueil',
    'nav.about':   'À propos',
    'nav.contact': 'Contact',
    'hero.badge':  '✦ Exercice UI/UX',
    'hero.title1': 'Une Mise en',
    'hero.title2': 'Page Épurée',
    'hero.title3': 'et Moderne.',
    'hero.desc':   'Projet développé comme exercice UI/UX, explorant la hiérarchie visuelle, la navigation intuitive et la légèreté esthétique. Construit avec du HTML et CSS purs.',
    'hero.cta':    'Commencer →',
    'hero.secondary': 'En savoir plus',
    'scroll':      'défiler',
    'about.label':    '— À propos du projet',
    'about.title':    'Apprentissages appliqués',
    'about.subtitle': 'Chaque technologie utilisée dans ce projet a joué un rôle clé dans la construction d\'une expérience visuelle cohérente et fonctionnelle.',
    'skills.html':   'Structure sémantique, accessibilité et bonnes pratiques de balisage.',
    'skills.css':    'Variables, Flexbox, Grid, animations et responsive mobile-first.',
    'skills.design.name': 'Design',
    'skills.design': 'Composition visuelle, espacement, typographie et hiérarchie des éléments.',
    'skills.uiux':   'Flux de navigation, retour visuel et expérience centrée sur l\'utilisateur.',
    'feedback.label':    '— Donnez votre avis',
    'feedback.title':    'Qu\'en avez-vous pensé ?',
    'feedback.subtitle': 'Vos commentaires sont essentiels pour continuer à progresser. Partagez ce qui a fonctionné et ce qui peut être amélioré.',
    'stats.tech':     'technologies',
    'stats.css':      'CSS pur',
    'stats.learning': 'apprentissage',
    'form.liked':    'Qu\'avez-vous le plus aimé ?',
    'form.liked.placeholder': 'Ex : la palette de couleurs, la typographie...',
    'form.improve':  'Qu\'est-ce qui peut être amélioré ?',
    'form.improve.placeholder': 'Ex : la responsivité, les animations...',
    'form.submit':   'Envoyer les commentaires →',
    'form.sent':     '✓ Envoyé !',
    'form.success':  '✓ Merci pour vos commentaires !',
    'footer.copy':   'Fait avec HTML & CSS · Exercice UI/UX',
    'lang.label':    'FR',
    'nav.open':      'Ouvrir le menu',
    'nav.close':     'Fermer le menu',
  },
};

// ---- i18n: engine ----
let currentLang = localStorage.getItem('dm-lang') || 'en';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || translations['en'][key]
    || key;
}

function applyTranslations() {
  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  // Lang label
  const langLabel = document.getElementById('lang-label');
  if (langLabel) langLabel.textContent = t('lang.label');
  // html lang attr
  document.documentElement.lang = currentLang;
  // Nav toggle aria-label
  const toggle = document.querySelector('.nav__toggle');
  if (toggle) {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-label', isOpen ? t('nav.close') : t('nav.open'));
  }
  // Active option
  document.querySelectorAll('.lang-option').forEach(opt => {
    const active = opt.dataset.lang === currentLang;
    opt.classList.toggle('lang-option--active', active);
    opt.setAttribute('aria-selected', String(active));
  });
}

function switchLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('dm-lang', lang);
  applyTranslations();
}

// ---- Language switcher dropdown ----
const langBtn      = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

if (langBtn && langDropdown) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langBtn.getAttribute('aria-expanded') === 'true';
    langBtn.setAttribute('aria-expanded', String(!isOpen));
    langDropdown.classList.toggle('is-open', !isOpen);
  });

  langDropdown.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      switchLang(opt.dataset.lang);
      langBtn.setAttribute('aria-expanded', 'false');
      langDropdown.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!document.getElementById('lang-switcher').contains(e.target)) {
      langBtn.setAttribute('aria-expanded', 'false');
      langDropdown.classList.remove('is-open');
    }
  });
}

// Apply on load
applyTranslations();

// ---- Nav: scroll shadow ----
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ---- Nav: active link on scroll ----
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks  = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        link.classList.toggle('nav__link--active', href === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// ---- Mobile menu toggle ----
const toggle = document.querySelector('.nav__toggle');
const menu   = document.querySelector('.nav__links');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', !isOpen ? t('nav.close') : t('nav.open'));
    menu.classList.toggle('is-open', !isOpen);
  });

  menu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', t('nav.open'));
      menu.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', t('nav.open'));
      menu.classList.remove('is-open');
    }
  });
}

// ---- Feedback form ----
const form    = document.getElementById('feedback-form');
const success = document.getElementById('form-success');

if (form && success) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const bom = form.elements['positivo'].value.trim();
    const mal = form.elements['negativo'].value.trim();

    if (!bom && !mal) {
      form.elements['positivo'].focus();
      return;
    }

    success.hidden = false;
    form.querySelectorAll('.form-input').forEach(input => {
      input.value    = '';
      input.disabled = true;
    });
    const btn = form.querySelector('.btn');
    btn.disabled    = true;
    btn.textContent = t('form.sent');

    setTimeout(() => {
      success.hidden = true;
      form.querySelectorAll('.form-input').forEach(input => {
        input.disabled = false;
      });
      btn.disabled    = false;
      btn.textContent = t('form.submit');
    }, 4000);
  });
}

// ---- Scroll reveal (Intersection Observer) ----
const revealEls = document.querySelectorAll('.skill-card, .form-card, .feedback-section__copy');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.08}s`;
      entry.target.classList.add('is-revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)';
  revealObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.is-revealed, .skill-card, .form-card').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.style.opacity   = '1';
      el.style.transform = 'none';
    }
  });
});

// Add revealed state styles via JS (avoids FOUC)
document.head.insertAdjacentHTML('beforeend', `<style>
  .is-revealed { opacity: 1 !important; transform: none !important; }
</style>`);
