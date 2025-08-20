'use client';

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const AboutUsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#ffffff',
  position: 'relative',
  padding: '80px 20px 60px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ContentWrapper = styled(Box)({
  maxWidth: '1440px',
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const AboutUsTitle = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '82px',
  fontStyle: 'italic',
  fontWeight: 700,
  letterSpacing: '-1.64px',
  color: '#ee3322',
  textAlign: 'center',
  marginBottom: '60px',
  marginTop: '0',
  '@media (max-width: 768px)': {
    fontSize: '48px',
    letterSpacing: '-1px',
    marginBottom: '40px',
  },
});

const MainContent = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '60px',
  flex: 1,
  '@media (max-width: 1200px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  },
});

const PersonImageContainer = styled(Box)({
  width: '713px',
  height: '845px',
  flexShrink: 0,
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    order: 2, // Move image to bottom on mobile
  },
});

const TextSection = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '40px',
  '@media (max-width: 1200px)': {
    paddingTop: '0',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    order: 1, // Keep text content at top on mobile
  },
});

const LogoContainer = styled(Box)({
  width: '218px',
  height: '218px',
  marginBottom: '40px',
  flexShrink: 0,
  '@media (max-width: 1200px)': {
    margin: '0 auto 40px',
  },
});

const WelcomeText = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '23px',
  fontStyle: 'italic',
  fontWeight: 700,
  letterSpacing: '-0.23px',
  color: '#000000',
  lineHeight: 1.4,
  marginBottom: '40px',
  '@media (max-width: 768px)': {
    fontSize: '18px',
  },
});

const DescriptionText = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '23px',
  fontStyle: 'italic',
  fontWeight: 700,
  color: '#403f3f',
  lineHeight: 1.4,
  '@media (max-width: 768px)': {
    fontSize: '18px',
  },
});

const AboutUs: React.FC = () => {
  return (
    <AboutUsContainer>
      <ContentWrapper>
        <AboutUsTitle>About Us</AboutUsTitle>
        
        <MainContent>
          <PersonImageContainer>
            <Image
              src="/images/person-with-groceries.png"
              alt="Person with fresh groceries"
              width={713}
              height={845}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </PersonImageContainer>

          <TextSection>
            <LogoContainer>
              <Image
                src="/images/sm-logo.svg"
                alt="SM Fresh Mart Logo"
                width={218}
                height={218}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </LogoContainer>

            <WelcomeText>
              Welcome to SM Fresh Mart,
              <br /><br />
              your trusted neighborhood supermarket in Bengaluru. We are more than just a grocery store; we are a community hub dedicated to making your daily shopping experience exceptional
            </WelcomeText>

            <DescriptionText>
              Established with the belief that customer satisfaction is paramount, SM Fresh Mart has steadily grown to become a preferred choice for residents across Bengaluru. We&apos;ve built our reputation by consistently offering a wide selection of quality products coupled with a commitment to excellent service. Our team works diligently to ensure that every visit is pleasant and productive
            </DescriptionText>
          </TextSection>
        </MainContent>
      </ContentWrapper>
    </AboutUsContainer>
  );
};

export default AboutUs;