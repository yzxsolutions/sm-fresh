"use client";

import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import BottomNavigation from './BottomNavigation';

const CenteringContainer = styled(Box)({
  position: 'fixed',
  zIndex: 999,
  pointerEvents: 'none', // Allow clicks to pass through the container
  
  // Mobile: Bottom center (original behavior)
  "@media (max-width: 767px)": {
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  
  // Tablet: Right side middle with horizontal alignment
  "@media (min-width: 768px) and (max-width: 1023px)": {
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Medium and Large screens: Right side middle with horizontal alignment
  "@media (min-width: 1024px)": {
    right: '30px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  '& > *': {
    pointerEvents: 'auto', // Re-enable pointer events for child elements
  }
});

const BottomNavigationWrapper: React.FC = () => {
  return (
    <CenteringContainer>
      <BottomNavigation />
    </CenteringContainer>
  );
};

export default BottomNavigationWrapper;