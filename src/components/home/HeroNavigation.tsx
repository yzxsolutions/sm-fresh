'use client';

import React from 'react';
import { AppBar, Toolbar, Stack, Typography, IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const StyledAppBar = styled(motion.div)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  zIndex: 1100
}));

const NavButton = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '16px',
  fontWeight: 800,
  color: '#000000',
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: '20px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    color: '#22c55e'
  },
  '&.active': {
    backgroundColor: '#22c55e',
    color: '#ffffff'
  }
}));

const HeroNavigation: React.FC = () => {
  return (
    <StyledAppBar
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.1 
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 }, py: 2 }}>
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.3 
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/sm-logo.svg"
              alt="SM Fresh Hyper Logo"
              width={113}
              height={114}
              style={{ width: '106px', height: '107px' }}
            />
          </Box>
        </motion.div>

        {/* Navigation Menu */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.5 
          }}
        >
          <Stack direction="row" spacing={2.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <NavButton className="active">Home</NavButton>
            </Link>
            <Link href="/products" style={{ textDecoration: 'none' }}>
              <NavButton>Categories</NavButton>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <NavButton>About Us</NavButton>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <NavButton>Contact Us</NavButton>
            </Link>
          </Stack>
        </motion.div>

        {/* WhatsApp Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut",
            delay: 0.7,
            type: "spring",
            stiffness: 200
          }}
        >
          <IconButton href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width={30} height={30} />
          </IconButton>
        </motion.div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default HeroNavigation;