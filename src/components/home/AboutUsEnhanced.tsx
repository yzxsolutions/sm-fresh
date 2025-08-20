'use client';

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import LocalFlorist from '@mui/icons-material/LocalFlorist';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import SentimentSatisfied from '@mui/icons-material/SentimentSatisfied';
import Verified from '@mui/icons-material/Verified';
import EnhancedImageGallery from '@/components/common/EnhancedImageGallery';

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
  marginBottom: '80px',
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
    order: 2,
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
    order: 1,
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

const FeaturesSection = styled(Box)({
  width: '100%',
  marginTop: '60px',
});

const FeaturesGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '40px',
  marginTop: '40px',
});

const FeatureCard = styled(Box)({
  backgroundColor: '#f8fffe',
  borderRadius: '16px',
  padding: '32px',
  textAlign: 'center',
  border: '2px solid #e6f7f1',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(34, 197, 94, 0.1)',
    borderColor: '#22c55e',
  },
});

const FeatureIcon = styled(Box)({
  width: '80px',
  height: '80px',
  backgroundColor: '#22c55e',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  color: 'white',
  fontSize: '40px',
});

const FeatureTitle = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '24px',
  fontWeight: 600,
  color: '#1f2937',
  marginBottom: '16px',
});

const FeatureDescription = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  color: '#6b7280',
  lineHeight: 1.6,
});

const StatsSection = styled(Box)({
  backgroundColor: '#f0fdf4',
  borderRadius: '24px',
  padding: '60px 40px',
  marginTop: '60px',
  textAlign: 'center',
});

const StatsGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '40px',
  marginTop: '40px',
});

const StatItem = styled(Box)({
  textAlign: 'center',
});

const StatNumber = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '48px',
  fontWeight: 700,
  color: '#22c55e',
  marginBottom: '8px',
});

const StatLabel = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  color: '#6b7280',
  fontWeight: 500,
});

const AboutUsEnhanced: React.FC = () => {
  const features = [
    {
      icon: <LocalFlorist />,
      title: 'Fresh & Organic',
      description: 'We source the freshest produce directly from local farms, ensuring you get the highest quality fruits and vegetables every day.',
    },
    {
      icon: <DirectionsCar />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service across Bengaluru. Get your groceries delivered fresh to your doorstep within hours.',
    },
    {
      icon: <SentimentSatisfied />,
      title: 'Customer First',
      description: 'Our friendly staff is always ready to help. We believe in building lasting relationships with our community.',
    },
    {
      icon: <Verified />,
      title: 'Quality Assured',
      description: 'Every product goes through rigorous quality checks. We guarantee freshness and quality in everything we sell.',
    },
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1688964420317-0c48f1d3781d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMGdyb2NlcnklMjBzdG9yZSUyMGZyZXNoJTIwcHJvZHVjZSUyMGFpc2xlcyUyMHNoZWx2ZXN8ZW58MHwwfHx8MTc1NTY4MjA4N3ww&ixlib=rb-4.1.0&q=85',
      alt: 'Modern supermarket interior with fresh produce aisles - nrd on Unsplash',
      title: 'Fresh Produce Section',
      description: 'Our carefully organized fresh produce section with the finest fruits and vegetables.',
    },
    {
      src: 'https://images.unsplash.com/photo-1595026527707-471c2eab73ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx2ZWdldGFibGVzJTIwZnJlc2glMjBwcm9kdWNlJTIwb3JnYW5pYyUyMGhlYWx0aHklMjBmb29kfGVufDB8MHx8Z3JlZW58MTc1NTY4Mzc2MHww&ixlib=rb-4.1.0&q=85',
      alt: 'Fresh colorful vegetables display - engin akyurt on Unsplash',
      title: 'Organic Vegetables',
      description: 'Premium organic vegetables sourced directly from local farms.',
    },
    {
      src: 'https://images.unsplash.com/photo-1753354868473-94c8ac971269?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzaG9wcGluZyUyMGdyb2NlcnklMjBzdXBlcm1hcmtldCUyMGNhcnR8ZW58MHwwfHx8MTc1NTY4Mzc2MHww&ixlib=rb-4.1.0&q=85',
      alt: 'Happy family shopping for groceries together - Vitaly Gariev on Unsplash',
      title: 'Family Shopping Experience',
      description: 'Creating memorable shopping experiences for families across Bengaluru.',
    },
    {
      src: 'https://images.unsplash.com/photo-1659353741155-e988422cf9ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxkZWxpdmVyeSUyMGdyb2NlcnklMjBiYWdzJTIwc2VydmljZSUyMGhvbWV8ZW58MHwwfHx8MTc1NTY4Mzc2MHww&ixlib=rb-4.1.0&q=85',
      alt: 'Grocery delivery service - Fotos on Unsplash',
      title: 'Home Delivery Service',
      description: 'Fast and reliable delivery service bringing fresh groceries to your doorstep.',
    },
  ];

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
              Welcome to SM Fresh Hyper,
              <br /><br />
              your trusted neighborhood supermarket in Bengaluru. We are more than just a grocery store; we are a community hub dedicated to making your daily shopping experience exceptional and memorable.
            </WelcomeText>

            <DescriptionText>
              Established with the belief that customer satisfaction is paramount, SM Fresh Hyper has steadily grown to become a preferred choice for residents across Bengaluru. We&apos;ve built our reputation by consistently offering a wide selection of quality products coupled with a commitment to excellent service. Our team works diligently to ensure that every visit is pleasant and productive, making us your go-to destination for all grocery needs.
            </DescriptionText>
          </TextSection>
        </MainContent>

        <FeaturesSection>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '42px',
              fontWeight: 600,
              color: '#1f2937',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Why Choose SM Fresh Hyper?
          </Typography>
          
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureIcon>
                  {feature.icon}
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FeaturesSection>

        <StatsSection>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '36px',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '16px',
            }}
          >
            Our Impact in Numbers
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            These numbers reflect our commitment to serving the Bengaluru community with excellence
          </Typography>
          
          <StatsGrid>
            <StatItem>
              <StatNumber>15,000+</StatNumber>
              <StatLabel>Happy Customers</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>500+</StatNumber>
              <StatLabel>Products Available</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50+</StatNumber>
              <StatLabel>Local Farm Partners</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>5</StatNumber>
              <StatLabel>Years of Service</StatLabel>
            </StatItem>
          </StatsGrid>
        </StatsSection>

        <EnhancedImageGallery 
          images={galleryImages} 
          title="Our Store Highlights"
        />
      </ContentWrapper>
    </AboutUsContainer>
  );
};

export default AboutUsEnhanced;