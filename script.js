
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('waitlist-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const success = document.getElementById('success-msg');
      if (!name.value.trim() || !email.value.trim()) { alert('Please enter your name and email.'); return; }
      success.style.display = 'block';
      form.reset();
    });
  }
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => { e.preventDefault(); alert('Message submitted.'); contactForm.reset(); });
  }
});
