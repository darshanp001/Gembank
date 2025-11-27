import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NAVBAR_OFFSET_PX = 88; // approximate fixed navbar height + spacing

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Always scroll to top on path changes without a hash
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If there is a hash, try to scroll to the element once the page content is ready
    const id = location.hash.replace('#', '');

    const scrollToAnchor = () => {
      const el = document.getElementById(id);
      if (!el) return false;

      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      const targetTop = Math.max(0, elementTop - NAVBAR_OFFSET_PX);
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
      return true;
    };

    // Attempt immediately, then retry a few times in case components are still mounting
    if (scrollToAnchor()) return;

    let attempts = 0;
    const maxAttempts = 10;
    const interval = setInterval(() => {
      attempts += 1;
      if (scrollToAnchor() || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollManager;


