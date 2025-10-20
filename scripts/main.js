/* Premium Portfolio – animations and helpers (ESM) */
import gsapCore from 'gsap';
import ScrollTriggerPlugin from 'gsap/ScrollTrigger';

(function () {
  const setYear = () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  };

  const tryPlayBackgroundVideo = () => {
    const video = document.getElementById('bg-video');
    if (!video) return;
    // Attempt to play; if blocked, we'll leave the poster image visible
    if (typeof video.play === 'function') {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {/* autoplay might be blocked */});
      }
    }
  };

  const animateIntro = () => {
    const gsap = gsapCore;
    gsap.registerPlugin(ScrollTriggerPlugin);

    const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

    timeline
      .from('.site-header', { y: -24, opacity: 0, duration: 0.6 })
      .to('[data-animate]', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
      }, '-=0.2');

    // Subtle parallax on hero title based on mouse movement
    const hero = document.querySelector('.hero');
    const title = document.querySelector('.hero-title');
    if (hero && title) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(title, { x: relX * 10, y: relY * 6, duration: 0.6, ease: 'power3.out' });
      });
      hero.addEventListener('mouseleave', () => {
        gsap.to(title, { x: 0, y: 0, duration: 0.8, ease: 'power3.out' });
      });
    }

    // Fade in sections on scroll
    const animatedSections = gsap.utils.toArray('.section');
    animatedSections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  };

  const manageVideoPerformance = () => {
    const videoElement = document.getElementById('bg-video');
    if (!('IntersectionObserver' in window) || !videoElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          if (typeof video.play === 'function') video.play().catch(() => {});
        } else {
          if (typeof video.pause === 'function') video.pause();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(videoElement);
  };

  const init = () => {
    setYear();
    tryPlayBackgroundVideo();
    animateIntro();
    manageVideoPerformance();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
