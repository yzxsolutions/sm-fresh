'use client';

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import SocialMediaVerticalIcon from '@/components/icons/SocialMediaVerticalIcon';

const HeaderContainer = styled(Stack)({
  alignItems: 'center',
  gap: '80px',
  width: '100%',
  position: 'relative',
});

const LogoContainer = styled(Box)({
  width: '182px',
  height: '182px',
  position: 'relative',
});

const ContentRow = styled(Stack)({
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
  position: 'relative',
});

const MainHeading = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '90px',
  fontWeight: 700,
  lineHeight: '100px',
  color: '#000000',
  textAlign: 'left',
  maxWidth: '1098px',
  '@media (max-width: 1024px)': {
    fontSize: '60px',
    lineHeight: '70px',
  },
  '@media (max-width: 768px)': {
    fontSize: '40px',
    lineHeight: '50px',
    textAlign: 'center',
  },
});

const SocialIconsContainer = styled(Box)({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  '@media (max-width: 768px)': {
    position: 'relative',
    right: 'auto',
    top: 'auto',
    transform: 'none',
    alignSelf: 'center',
  },
});

const ContactHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image
          src="/images/sm-logo.svg"
          alt="SM Fresh Mart Logo"
          fill
          sizes="182px"
          style={{ objectFit: 'contain' }}
          priority
        />
      </LogoContainer>

      <ContentRow direction="row">
        <MainHeading>
          Get in touch with us. We're here to assist you.
        </MainHeading>
        
        <SocialIconsContainer>
          <SocialMediaVerticalIcon width={50} height={197} />
        </SocialIconsContainer>
      </ContentRow>
    </HeaderContainer>
  );
};

export default ContactHeader;