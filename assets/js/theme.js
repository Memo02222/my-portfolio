/**
 * theme.js — Dark/Light mode toggle
 * Reads saved preference from localStorage, falls back to system preference.
 * Persists choice across pages and page reloads.
 */
(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');

  // Determine initial theme
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initialTheme);

  // Toggle on click
  toggleBtn?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();
