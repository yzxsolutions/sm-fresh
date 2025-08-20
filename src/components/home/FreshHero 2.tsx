'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import theme from '../../theme/theme';
import HeroNavigation from './HeroNavigation';
import QualitySection from './QualitySection';
import ShopNowButton from './ShopNowButton';
import SocialMediaIcons from './SocialMediaIcons';
import ArrowIcon from '../icons/ArrowIcon';
import { Smooch } from 'next/font/google';

// Load the font
const smooch = Smooch({
  subsets: ["latin"],
  weight: ["400"], // available: 400
  display: "swap",
});

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#ffffff',
  overflow: 'hidden'
}));

const AnimatedFreshText = styled(motion.div)(({ theme }) => ({
  fontFamily: smooch.style.fontFamily,
  fontSize: 'clamp(120px, 30vw, 442px)',
  fontWeight: 400,
  letterSpacing: 'clamp(30px, 3vw, 78.62px)',
  color: '#e03c00',
  position: 'absolute',
  top: '40%',
  left: '47%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  userSelect: 'none',
  lineHeight: 0.8
}));

const AnimatedDeliveryPersonImage = styled(motion.img)(({ theme }) => ({
  position: 'absolute',
  right: '50%',
  bottom: 0,
  transform: 'translateX(50%)',
  maxHeight: '80vh',
  width: 'auto',
  zIndex: 3,
  [theme.breakpoints.down('md')]: {
    right: '5%',
    maxHeight: '60vh'
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    right: 'auto',
    top: 'auto',
    transform: 'none',
    maxHeight: '40vh',
    margin: '0 auto',
    display: 'block'
  }
}));

const AnimatedShopButtonContainer = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  left: '50px',
  bottom: '100px',
  zIndex: 4,
  [theme.breakpoints.down('sm')]: {
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '50px'
  }
}));

const AnimatedArrowContainer = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  bottom: '50px',
  transform: 'translateX(-50%)',
  zIndex: 4
}));

const AnimatedHeroNavigation = styled(motion.div)({
  position: 'relative',
  zIndex: 5
});

const AnimatedQualitySection = styled(motion.div)({
  position: 'relative',
  zIndex: 4
});

const AnimatedSocialMediaIcons = styled(motion.div)({
  position: 'relative',
  zIndex: 4
});

// Animation variants for different directions
const animationVariants = {
  // From top
  fromTop: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  // From left
  fromLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  // From right
  fromRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  // From bottom
  fromBottom: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const FreshHero: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeroContainer>
        {/* Navigation - from top */}
        <motion.div
          initial={animationVariants.fromTop.initial}
          animate={animationVariants.fromTop.animate}
          transition={{ ...animationVariants.fromTop.transition, delay: 0.1 }}
        >
          <HeroNavigation />
        </motion.div>
        
        {/* Main Fresh Text - from left */}
        <motion.div
          initial={animationVariants.fromLeft.initial}
          animate={animationVariants.fromLeft.animate}
          transition={{ ...animationVariants.fromLeft.transition, delay: 0.3 }}
        >
          <FreshText>Fresh</FreshText>
        </motion.div>
        
        {/* Delivery Person Image - from bottom */}
        <motion.div
          initial={animationVariants.fromBottom.initial}
          animate={animationVariants.fromBottom.animate}
          transition={{ ...animationVariants.fromBottom.transition, delay: 0.5 }}
        >
          <DeliveryPersonImage
            src="/images/man1.png"
            alt="Delivery person with fresh produce basket - Skönn Communication on Unsplash"
            width={600}
            height={800}
          />
        </motion.div>
        
        {/* Quality Section - from left */}
        <motion.div
          initial={animationVariants.fromLeft.initial}
          animate={animationVariants.fromLeft.animate}
          transition={{ ...animationVariants.fromLeft.transition, delay: 0.7 }}
        >
          <QualitySection />
        </motion.div>
        
        {/* Shop Now Button - from bottom */}
        <motion.div
          initial={animationVariants.fromBottom.initial}
          animate={animationVariants.fromBottom.animate}
          transition={{ ...animationVariants.fromBottom.transition, delay: 0.9 }}
        >
          <ShopButtonContainer>
            <ShopNowButton />
          </ShopButtonContainer>
        </motion.div>
        
        {/* Arrow Icon - from bottom */}
        <motion.div
          initial={animationVariants.fromBottom.initial}
          animate={animationVariants.fromBottom.animate}
          transition={{ ...animationVariants.fromBottom.transition, delay: 1.1 }}
        >
          <ArrowContainer>
            <ArrowIcon width={17} height={36} color="#e03c00" />
          </ArrowContainer>
        </motion.div>
        
        {/* Social Media Icons - from right */}
        <motion.div
          initial={animationVariants.fromRight.initial}
          animate={animationVariants.fromRight.animate}
          transition={{ ...animationVariants.fromRight.transition, delay: 1.3 }}
        >
          <SocialMediaIcons />
        </motion.div>
      </HeroContainer>
    </ThemeProvider>
  );
};

export default FreshHero;