'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const AnimatedQualityContainer = styled(motion.div)({
  position: 'absolute',
  left: '46px',
  bottom: '200px',
  '@media (max-width: 768px)': {
    left: '20px',
    bottom: '120px'
  }
});

const QualityTitle = styled(Typography)({
  fontFamily: 'SF Pro, -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
  fontSize: '21px',
  fontWeight: 860,
  letterSpacing: '2.31px',
  color: '#000000',
  marginBottom: '16px'
});

const QualityDescription = styled(Typography)({
  fontFamily: 'SF Pro, -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
  fontSize: '17px',
  fontWeight: 860,
  letterSpacing: '1.87px',
  color: '#000000',
  lineHeight: 1.4,
  maxWidth: '246px'
});

const QualitySection: React.FC = () => {
  return (
    <AnimatedQualityContainer
      initial={{ x: -150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        duration: 0.9, 
        ease: "easeOut",
        delay: 1.0 
      }}
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          duration: 0.7, 
          ease: "easeOut",
          delay: 1.2 
        }}
      >
        <QualityTitle>Quality & Care</QualityTitle>
      </motion.div>
      
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: 1.4 
        }}
      >
        <QualityDescription>
          Invites customers to enjoy a superior shopping experience.
        </QualityDescription>
      </motion.div>
    </AnimatedQualityContainer>
  );
};

export default QualitySection;