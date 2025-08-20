'use client';

import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LogoContainer = styled(motion.div)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LogoWrapper = styled(Box)({
  position: 'relative',
  width: '150px',
  height: '150px',
  '@media (max-width: 768px)': {
    width: '120px',
    height: '120px',
  },
});

interface AnimatedLogoProps {
  size?: number;
  delay?: number;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  size = 150, 
  delay = 0 
}) => {
  return (
    <LogoContainer
      initial={{ 
        scale: 0,
        opacity: 0,
        rotate: -180
      }}
      animate={{ 
        scale: 1,
        opacity: 1,
        rotate: 0
      }}
      transition={{
        duration: 1.2,
        delay: delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <LogoWrapper sx={{ width: size, height: size }}>
        <Image
          src="/images/sm-logo.svg"
          alt="SM Fresh Mart Logo"
          fill
          sizes="(max-width: 768px) 120px, 150px"
          style={{ objectFit: 'contain' }}
          priority
        />
      </LogoWrapper>
    </LogoContainer>
  );
};

export default AnimatedLogo;