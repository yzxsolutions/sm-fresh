'use client';

import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';

const StyledShopButton = styled(motion.button)(({ theme }) => ({
  backgroundColor: '#22c55e',
  color: '#ffffff',
  fontFamily: 'SF Pro, -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
  fontSize: '17px',
  fontWeight: 860,
  letterSpacing: '1.87px',
  padding: '12px 24px',
  borderRadius: '25px',
  textTransform: 'uppercase',
  minWidth: '113px',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  '&:hover': {
    backgroundColor: '#16a34a',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
  },
  transition: 'all 0.2s ease-in-out'
}));

const ShopNowButton: React.FC = () => {
  return (
    <Link href="/products" style={{ textDecoration: 'none' }}>
      <StyledShopButton
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.2 
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
      >
        SHOP NOW
      </StyledShopButton>
    </Link>
  );
};

export default ShopNowButton;