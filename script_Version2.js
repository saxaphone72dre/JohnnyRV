// Small interactivity: mobile nav toggle, year insertion, basic form feedback
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.style.display = expanded ? '' : 'block';
  });

  // Insert current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple form submit handler that shows a quick UI change
  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', function(e){
      // If action is '#', prevent default and show an in-page confirmation for review.
      if (form.getAttribute('action') === '#') {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
          btn.disabled = true;
          btn.textContent = 'Request sent (demo)';
        }
        // Show a simple temporary confirmation
        const note = document.createElement('div');
        note.style.marginTop = '10px';
        note.style.padding = '10px';
        note.style.background = '#e8ffee';
        note.style.border = '1px solid #b6f0c4';
        note.textContent = 'Thanks — this is a demo submission. Replace the form action when ready to accept bookings.';
        form.appendChild(note);
      }
      // If you set a real action (Formspree/Netlify/your backend), remove the preventDefault behavior.
    });
  }
});