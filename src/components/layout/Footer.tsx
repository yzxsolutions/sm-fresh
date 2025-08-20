'use client';

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { mockFooterData, FooterData } from '@/data/testimonialSectionMockData';

const FooterContainer = styled(Box)({
  width: '100%',
  backgroundColor: '#ffffff',
  padding: '60px 20px',
  borderTop: '1px solid #e0e0e0',
});

const FooterContent = styled(Box)({
  maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '60px',
  '@media (max-width: 1024px)': {
    flexDirection: 'column',
    gap: '40px',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const BrandSection = styled(Stack)({
  alignItems: 'flex-start',
  gap: '27px',
  maxWidth: '400px',
  '@media (max-width: 1024px)': {
    alignItems: 'center',
    textAlign: 'center',
  },
});

const LogoContainer = styled(Box)({
  width: '113px',
  height: '114px',
  position: 'relative',
});

const TaglineText = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  color: '#2d2e2e',
  lineHeight: 1.5,
});

const NavigationSection = styled(Stack)({
  direction: 'row',
  gap: '100px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '40px',
    alignItems: 'center',
  },
});

const LinkColumn = styled(Stack)({
  gap: '27px',
  alignItems: 'flex-start',
  '@media (max-width: 768px)': {
    alignItems: 'center',
  },
});

const LinkText = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  color: '#2d2e2e',
  cursor: 'pointer',
  '&:hover': {
    color: '#666',
  },
});

const ContactSection = styled(Stack)({
  gap: '19px',
  alignItems: 'flex-start',
  '@media (max-width: 1024px)': {
    alignItems: 'center',
  },
});

const ContactTitle = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  color: '#2d2e2e',
});

const ContactEmail = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  color: '#2d2e2e',
});

const SocialIconsContainer = styled(Stack)({
  direction: 'row',
  gap: '16px',
  alignItems: 'center',
});

const SocialIconWrapper = styled(Box)({
  width: '40px',
  height: '40px',
  backgroundColor: '#3a4f39',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: '#2d3e2c',
  },
});

interface FooterProps {
  footerData?: FooterData;
}

const Footer: React.FC<FooterProps> = ({ footerData = mockFooterData }) => {
  const renderSocialIcon = (iconName: string) => {
    const iconProps = { width: 20, height: 20, color: '#ffffff' };
    
    switch (iconName) {
      case 'instagram':
        return <InstagramIcon {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <LogoContainer>
            <Image
              src={footerData.logo}
              alt="SM Fresh Mart Logo"
              fill
              sizes="113px"
              style={{ objectFit: 'contain' }}
            />
          </LogoContainer>
          <TaglineText>
            {footerData.tagline}
          </TaglineText>
        </BrandSection>

        <NavigationSection direction="row">
          <LinkColumn>
            {footerData.aboutLinks.map((link, index) => (
              <Link key={index} href={`/${link.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                <LinkText>
                  {link}
                </LinkText>
              </Link>
            ))}
          </LinkColumn>

          <LinkColumn>
            {footerData.legalLinks.map((link, index) => (
              <Link key={index} href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none' }}>
                <LinkText>
                  {link}
                </LinkText>
              </Link>
            ))}
          </LinkColumn>
        </NavigationSection>

        <ContactSection>
          <ContactTitle>
            {footerData.contactInfo.title}
          </ContactTitle>
          <ContactEmail>
            {footerData.contactInfo.email}
          </ContactEmail>
          <SocialIconsContainer direction="row">
            {footerData.socialIcons.map((social, index) => (
              <SocialIconWrapper key={index}>
                {renderSocialIcon(social.name)}
              </SocialIconWrapper>
            ))}
          </SocialIconsContainer>
        </ContactSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;