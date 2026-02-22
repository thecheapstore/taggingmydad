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
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn-submit span');
      if (btn) {
        btn.textContent = 'Message Sent';
        setTimeout(() => {
          btn.textContent = 'Send Message';
          form.reset();
        }, 2500);
      }
    });
  }
});
