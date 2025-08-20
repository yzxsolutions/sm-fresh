// Placeholder for useScrollReveal hook
import { useEffect, useRef, useState } from 'react';

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Implementation will be added in later tasks
    setIsVisible(true);
  }, []);

  return { ref, isVisible };
};

export default useScrollReveal;