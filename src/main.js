import './style.css'
import { initCursor } from './cursor.js'
import { initHeroGradient, initTiltCards, initMagneticButtons, initArchCardToggle, initScrollProgress } from './effects.js'
import { initScrollReveal, initTypingEffect, initCounters, initSmoothScroll } from './animations.js'

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initHeroGradient();
  initTypingEffect();
  initScrollReveal();
  initCounters();
  initTiltCards();
  initMagneticButtons();
  initArchCardToggle();
  initScrollProgress();
  initSmoothScroll();

const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = form.querySelector('.btn-submit span');
    if (btn) btn.textContent = 'Sending...';

    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      if (btn) btn.textContent = 'Message Sent';
      form.reset();
    })
    .catch(() => {
      if (btn) btn.textContent = 'Error. Try Again';
    });
  });
}
