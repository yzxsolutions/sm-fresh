import { useState, useEffect } from 'react';

interface UseScrollTriggerOptions {
  threshold?: number;
  disableHysteresis?: boolean;
}

export const useScrollTrigger = (options: UseScrollTriggerOptions = {}) => {
  const { threshold = 100, disableHysteresis = false } = options;
  const [trigger, setTrigger] = useState(false); // Start hidden

  useEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset;

      // Show bottom navigation when scrolled past threshold (not at top)
      // Hide when at or near the top of the page
      setTrigger(current > threshold);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return trigger;
};