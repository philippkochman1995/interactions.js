/* footer: Webflow script */
(function () {
  function addInstagramLink() {
    var slot = document.querySelector('.top_bar_section .top_bar_right');
    if (!slot || slot.querySelector('.contact-instagram-link')) return;

    var link = document.createElement('a');
    link.className = 'contact-instagram-link';
    link.href = 'https://www.instagram.com/franzwestprivatstiftung/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Instagram');
    link.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.3"/><circle cx="17.8" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
    slot.appendChild(link);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addInstagramLink, { once: true });
  } else {
    addInstagramLink();
  }
})();
