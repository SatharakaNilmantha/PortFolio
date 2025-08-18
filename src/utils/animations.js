// JavaScript Animation Utilities
export const initializeAnimations = () => {
  // Smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
};

// Typing effect utility
export const createTypingEffect = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';
  
  const typeWriter = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  
  typeWriter();
};

// Particle system for backgrounds
export const createParticleSystem = (container, particleCount = 50) => {
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      background: rgba(0, 243, 255, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 10 + 5}s infinite linear;
    `;
    container.appendChild(particle);
  }
};

// Bootstrap modal utilities
export const showModal = (modalId) => {
  const modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();
};

export const hideModal = (modalId) => {
  const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
  if (modal) modal.hide();
};

// Bootstrap tooltip initialization
export const initializeTooltips = () => {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
};

// Dynamic theme switching
export const switchTheme = (theme) => {
  document.documentElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);
};

// Initialize all utilities
export const initializeApp = () => {
  initializeAnimations();
  initializeTooltips();
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  switchTheme(savedTheme);
};