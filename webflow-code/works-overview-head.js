/* head: Webflow script */
if(new URL(location.href).searchParams.has('work'))document.documentElement.classList.add('work-overlay-initial')

/* head: Webflow script */
(function () {
  try {
    if (sessionStorage.getItem('fw-works-overview-fade') !== 'pending') return;
    sessionStorage.removeItem('fw-works-overview-fade');
    document.documentElement.classList.add('fw-works-fade-entry');
  } catch (error) {}
})();
