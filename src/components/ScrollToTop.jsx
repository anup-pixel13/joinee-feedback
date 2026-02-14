import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Also handle browser back/forward buttons
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null;
}

export default ScrollToTop;