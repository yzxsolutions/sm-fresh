'use client';

import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const BackgroundContainer = styled(motion.div)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffff',
  overflow: 'hidden',
  zIndex: -1,
});

const FloatingCircle = styled(motion.div)<{ size: number; color: string }>(({ size, color }) => ({
  position: 'absolute',
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: '50%',
  backgroundColor: color,
  opacity: 0.1,
}));

const AnimatedBackground: React.FC = () => {
  const circles = [
    { size: 200, color: '#22c55e', x: '10%', y: '20%' },
    { size: 150, color: '#f97316', x: '80%', y: '10%' },
    { size: 100, color: '#eab308', x: '20%', y: '80%' },
    { size: 120, color: '#22c55e', x: '90%', y: '70%' },
    { size: 80, color: '#f97316', x: '60%', y: '30%' },
  ];

  return (
    <BackgroundContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {circles.map((circle, index) => (
        <FloatingCircle
          key={index}
          size={circle.size}
          color={circle.color}
          style={{
            left: circle.x,
            top: circle.y,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 0.15, 0.1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.95) 70%, rgba(255,255,255,1) 100%)',
        }}
      />
    </BackgroundContainer>
  );
};

export default AnimatedBackground;