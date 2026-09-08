/**
 * lang.js — English / Arabic language toggle
 * Applies translations via data-i18n attributes, sets dir="rtl" for Arabic,
 * and persists language choice in localStorage.
 */
(function () {
  const html = document.documentElement;
  const langBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');

  function applyLanguage(lang) {
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update button label
    if (langLabel) langLabel.textContent = lang === 'ar' ? 'AR' : 'EN';

    // Update Typed.js strings dynamically
    const typedEl = document.querySelector('.typed');
    if (typedEl && typeof Typed !== 'undefined') {
      const items = lang === 'ar'
        ? ['محلل SOC (L1)', 'أخصائي شبكات ودعم فني', 'متدرب أمن سيبراني']
        : ['SOC Analyst (L1)', 'Network & IT Support Specialist', 'Cybersecurity Trainee'];
      typedEl.setAttribute('data-typed-items', items.join(', '));
      if (window.typedInstance) {
        window.typedInstance.destroy();
      }
      window.typedInstance = new Typed('.typed', {
        strings: items,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

    localStorage.setItem('lang', lang);
  }

  // Initialize from saved preference
  const saved = localStorage.getItem('lang') || 'en';
  applyLanguage(saved);

  // Toggle on click
  langBtn?.addEventListener('click', () => {
    const current = html.getAttribute('lang') === 'ar' ? 'ar' : 'en';
    applyLanguage(current === 'ar' ? 'en' : 'ar');
  });
})();
