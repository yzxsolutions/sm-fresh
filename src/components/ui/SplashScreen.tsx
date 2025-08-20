'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
import AnimatedBackground from './AnimatedBackground';

const SplashContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  overflow: 'hidden',
});

const ContentContainer = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  zIndex: 2,
});

const BrandText = styled(motion.div)({
  textAlign: 'center',
});

const LoadingDots = styled(motion.div)({
  display: 'flex',
  gap: '8px',
  marginTop: '20px',
});

const Dot = styled(motion.div)({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#22c55e',
});

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
  showBrandText?: boolean;
  showLoadingDots?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  duration = 1000,
  showBrandText = true,
  showLoadingDots = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 500); // Allow fade out animation to complete
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -10 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <SplashContainer
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
        >
          <AnimatedBackground />
          
          <ContentContainer
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: "easeOut" 
            }}
          >
            <AnimatedLogo size={180} delay={0.5} />
            

            {showLoadingDots && (
              <LoadingDots
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.4 }}
              >
                {[0, 1, 2].map((index) => (
                  <Dot
                    key={index}
                    variants={dotVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                      duration: 0.6,
                      delay: 2 + index * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </LoadingDots>
            )}
          </ContentContainer>
        </SplashContainer>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;