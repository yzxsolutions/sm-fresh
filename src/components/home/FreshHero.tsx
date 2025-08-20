'use client';

import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import theme from '../../theme';
import HeroNavigation from './HeroNavigation';
import QualitySection from './QualitySection';
import ShopNowButton from './ShopNowButton';
import SocialMediaIcons from './SocialMediaIcons';
import MobileSocialIcons from './MobileSocialIcons';
import MobileShopButton from './MobileShopButton';
import MobileBottomNav from './MobileBottomNav';
import ArrowIcon from '../icons/ArrowIcon';
import { Smooch } from 'next/font/google';
import { zhCN } from '@mui/material/locale';

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
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    minHeight: '100vh',
    paddingBottom: '130px', // Space for bottom nav
  }
}));

const MobileLogoContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '96px',
    paddingBottom: '20px',
  }
}));

const AnimatedFreshText = styled(motion.div)(({ theme }) => ({
  fontFamily: smooch.style.fontFamily,
  fontSize: 'clamp(120px, 30vw, 442px)',
  fontWeight: 400,
  letterSpacing: 'clamp(30px, 3vw, 78.62px)',
  color: '#e03c00',
  position: 'absolute',
  top: '20%',
  left: "15%",
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  userSelect: 'none',
  lineHeight: 0.8,
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    transform: 'none',
    textAlign: 'center',
    fontSize: '150px',
    letterSpacing: '16.50px',
    marginTop: '20px',
    marginBottom: '20px',
  }
}));

const AnimatedDeliveryPersonImage = styled(motion.img)(({ theme }) => ({
  position: 'absolute',
  right: '30%',
  bottom: 0,
  transform: 'translateX(50%)',
  maxHeight: '80vh',
  width: 'auto',
  zIndex: 3,
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    right: 'auto',
    bottom: 'auto',
    transform: 'none',
    maxHeight: '472px',
    width: '427px',
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto',
    display: 'block',
    objectFit: 'cover',
  }
}));

const MobilePersonImage = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    position: 'relative',
    width: '100%',
    bottom: 130,
    maxWidth: '427px',
    zIndex: 3,
    height: '472px',
    margin: '0 auto',
    overflow: 'hidden',
  }
}));

const BlurOverlay = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '18px',
    filter: 'blur(8.699999809265137px)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 4,
  }
}));

const ShopButtonContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '50px',
  bottom: '100px',
  zIndex: 4,
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    left: 'auto',
    bottom: 'auto',
    transform: 'none',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    marginBottom: '30px',
  }
}));

const ArrowContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  bottom: '50px',
  transform: 'translateX(-50%)',
  zIndex: 4,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

const DesktopOnlyContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

const MobileOnlyContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  }
}));

const FreshHero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <HeroContainer>
        {/* Desktop Navigation */}
        <DesktopOnlyContainer>
          <HeroNavigation />
        </DesktopOnlyContainer>
        
        {/* Mobile Logo */}
        <MobileLogoContainer>
          <Image
            src="/images/sm-logo.svg"
            alt="SM Fresh Mart Logo"
            width={113}
            height={114}
          />
        </MobileLogoContainer>
        
        {/* Main Fresh Text */}
        <AnimatedFreshText
          initial={{ x: isMobile ? 0 : -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.5 
          }}
        >
          Fresh
        </AnimatedFreshText>
        
        {/* Desktop Delivery Person Image */}
        <DesktopOnlyContainer>
          <AnimatedDeliveryPersonImage
            src="/images/man1.png"
            alt="Delivery person with fresh produce basket - Skönn Communication on Unsplash"
            width={600}
            height={800}
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 1.0, 
              ease: "easeOut",
              delay: 0.8 
            }}
          />
        </DesktopOnlyContainer>

        {/* Mobile Person Image */}
        <MobileOnlyContainer>
          <MobilePersonImage>
            <Image
              src="/images/person-groceries-mobile.png"
              alt="Person with fresh groceries"
              fill
              sizes="427px"
              style={{ objectFit: 'cover' }}
            />
            <BlurOverlay />
          </MobilePersonImage>
        </MobileOnlyContainer>
        
        {/* Desktop Quality Section */}
        <DesktopOnlyContainer>
          <QualitySection />
        </DesktopOnlyContainer>

        {/* Mobile Social Icons */}
        <MobileOnlyContainer>
          <MobileSocialIcons />
        </MobileOnlyContainer>
        
        {/* Shop Now Button */}
        <ShopButtonContainer>
          {isMobile ? <MobileShopButton /> : <ShopNowButton />}
        </ShopButtonContainer>
        
        {/* Arrow Icon - Desktop Only */}
        <ArrowContainer>
          <ArrowIcon width={17} height={36} color="#e03c00" />
        </ArrowContainer>
        
        {/* Desktop Social Media Icons */}
        <DesktopOnlyContainer>
          <SocialMediaIcons />
        </DesktopOnlyContainer>

        {/* Mobile Bottom Navigation */}
        {/* <MobileOnlyContainer>
          <MobileBottomNav />
        </MobileOnlyContainer> */}
      </HeroContainer>
    </ThemeProvider>
  );
};

export default FreshHero;