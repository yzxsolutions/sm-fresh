'use client';

import React from 'react';
import { Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';

const SocialIconButton = styled(motion.a)(({ theme }) => ({
  width: 30,
  height: 30,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'transform 0.2s ease-in-out'
  }
}));

const AnimatedStack = styled(motion.div)({
  position: 'fixed',
  right: 50,
  top: '80%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
});

const SocialMediaIcons: React.FC = () => {
  const containerVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatedStack
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SocialIconButton
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover={{ 
          scale: 1.2,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.9,
          transition: { duration: 0.1 }
        }}
      >
        <WhatsAppIcon width={30} height={30} />
      </SocialIconButton>
      
      <SocialIconButton
        href="https://facebook.com/smfreshhyper"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover={{ 
          scale: 1.2,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.9,
          transition: { duration: 0.1 }
        }}
      >
        <FacebookIcon width={30} height={30} />
      </SocialIconButton>
      
      <SocialIconButton
        href="https://instagram.com/smfreshhyper"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover={{ 
          scale: 1.2,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.9,
          transition: { duration: 0.1 }
        }}
      >
        <InstagramIcon width={30} height={30} />
      </SocialIconButton>
    </AnimatedStack>
  );
};

export default SocialMediaIcons;