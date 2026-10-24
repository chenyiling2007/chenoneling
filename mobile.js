/* 目录只影响手机布局，链接仍是原有页面锚点。 */
(() => {
  const nav = document.querySelector('nav');
  const toggle = document.querySelector('.mobile-menu-toggle');
  if (!nav || !toggle) return;
  function closeMenu(returnFocus = false) {
    nav.removeAttribute('data-menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => {
    const open = !nav.hasAttribute('data-menu-open');
    nav.toggleAttribute('data-menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('.links a').forEach(a => a.addEventListener('click', () => closeMenu()));
  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.hasAttribute('data-menu-open')) closeMenu(true);
  });
  window.matchMedia('(min-width: 641px)').addEventListener('change', () => closeMenu());
})();
