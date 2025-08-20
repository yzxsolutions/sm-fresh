'use client';

import React from 'react';
import type { Metadata } from "next";
import { Box, Typography, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import LocalFlorist from '@mui/icons-material/LocalFlorist';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import SentimentSatisfied from '@mui/icons-material/SentimentSatisfied';
import Verified from '@mui/icons-material/Verified';
import Storefront from '@mui/icons-material/Storefront';
import Groups from '@mui/icons-material/Groups';
import EnergySavingsLeaf from '@mui/icons-material/EnergySavingsLeaf';
import AccessTime from '@mui/icons-material/AccessTime';
import EnhancedImageGallery from '@/components/common/EnhancedImageGallery';
import AnimatedTimeline from '@/components/common/AnimatedTimeline';

const AboutPageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#ffffff',
  position: 'relative',
  paddingTop: '80px',
}));

const HeroSection = styled(Box)({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#ffffff',
  position: 'relative',
  padding: '80px 20px 60px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

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

const Section = styled(Box)({
  width: '100%',
  padding: '80px 20px',
  display: 'flex',
  justifyContent: 'center',
});

const SectionContent = styled(Box)({
  maxWidth: '1440px',
  width: '100%',
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

const MissionSection = styled(Box)({
  backgroundColor: '#f9fafb',
});

const ValuesGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  marginTop: '40px',
});

const ValueCard = styled(Box)({
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '24px',
  textAlign: 'center',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
  },
});

const TimelineSection = styled(Box)({
  backgroundColor: 'white',
});

export default function AboutPage() {
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

  const values = [
    {
      icon: <Storefront />,
      title: 'Community Focus',
      description: 'We are deeply rooted in the Bengaluru community and committed to serving our neighbors.',
    },
    {
      icon: <EnergySavingsLeaf />,
      title: 'Sustainability',
      description: 'We promote eco-friendly practices and support sustainable farming methods.',
    },
    {
      icon: <Groups />,
      title: 'Team Excellence',
      description: 'Our dedicated team works tirelessly to provide exceptional service every day.',
    },
    {
      icon: <AccessTime />,
      title: 'Reliability',
      description: 'Count on us for consistent quality, fair prices, and dependable service.',
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'SM Fresh Hyper opened its doors with a vision to revolutionize grocery shopping in Bengaluru. Starting with a small team and big dreams, we set out to create a shopping experience that puts customers first.',
      backgroundImage: 'https://images.unsplash.com/photo-1697994312959-dd0846ec3d97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxzdG9yZSUyMG9wZW5pbmclMjBidXNpbmVzcyUyMGNlbGVicmF0aW9uJTIwcmliYm9ufGVufDB8MHx8fDE3NTU2ODM3NjB8MA&ixlib=rb-4.1.0&q=85',
    },
    {
      year: '2020',
      title: 'Digital Expansion',
      description: 'Launched online ordering and home delivery services to serve customers during challenging times. We quickly adapted to changing needs and became a lifeline for many families.',
    },
    {
      year: '2021',
      title: 'Community Growth',
      description: 'Expanded our network of local farm partnerships and introduced organic produce sections. We strengthened our commitment to supporting local agriculture and sustainable practices.',
    },
    {
      year: '2022',
      title: 'Service Excellence',
      description: 'Achieved 15,000+ satisfied customers and introduced premium customer loyalty programs. Our dedication to quality and service earned us recognition as a trusted neighborhood partner.',
    },
    {
      year: '2024',
      title: 'Innovation Continues',
      description: 'Implementing smart shopping solutions and expanding our product range to serve you better. We continue to evolve with technology while maintaining our personal touch.',
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
      src: 'https://images.unsplash.com/photo-1667443350361-30765515d4c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxmcnVpdHMlMjBhcHBsZXMlMjBvcmFuZ2VzJTIwZ3JvY2VyeSUyMGZyZXNofGVufDB8MHx8fDE3NTU2ODM3NjB8MA&ixlib=rb-4.1.0&q=85',
      alt: 'Colorful fresh fruits display - Moon Bhuyan on Unsplash',
      title: 'Premium Fruits',
      description: 'Hand-picked fresh fruits ensuring the best quality for our customers.',
    },
    {
      src: 'https://images.unsplash.com/photo-1659353741155-e988422cf9ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxkZWxpdmVyeSUyMGdyb2NlcnklMjBiYWdzJTIwc2VydmljZSUyMGhvbWV8ZW58MHwwfHx8MTc1NTY4Mzc2MHww&ixlib=rb-4.1.0&q=85',
      alt: 'Grocery delivery service - Fotos on Unsplash',
      title: 'Home Delivery Service',
      description: 'Fast and reliable delivery service bringing fresh groceries to your doorstep.',
    },
    {
      src: 'https://images.unsplash.com/photo-1720743193866-485bed5010e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxmcnVpdHMlMjBhcHBsZXMlMjBvcmFuZ2VzJTIwZ3JvY2VyeSUyMGZyZXNofGVufDB8MHx8fDE3NTU2ODM3NjB8MA&ixlib=rb-4.1.0&q=85',
      alt: 'Boxes of oranges and apples display - Sichen Xiang on Unsplash',
      title: 'Seasonal Produce',
      description: 'Fresh seasonal fruits and vegetables available year-round.',
    },
  ];

  return (
    <AboutPageContainer>
      {/* Hero Section */}
      <HeroSection>
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
        </ContentWrapper>
      </HeroSection>

      {/* Features Section */}
      <Section>
        <SectionContent>
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
        </SectionContent>
      </Section>

      {/* Mission & Vision Section */}
      <MissionSection>
        <Section>
          <SectionContent>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '42px',
                fontWeight: 600,
                color: '#1f2937',
                textAlign: 'center',
                marginBottom: '60px',
              }}
            >
              Our Mission & Values
            </Typography>
            
            <Stack spacing={6}>
              <Box sx={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '32px',
                    fontWeight: 600,
                    color: '#22c55e',
                    marginBottom: '20px',
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    color: '#4b5563',
                    lineHeight: 1.7,
                  }}
                >
                  To provide the freshest, highest-quality groceries and exceptional customer service while supporting local farmers and building a stronger, healthier community in Bengaluru.
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '32px',
                    fontWeight: 600,
                    color: '#22c55e',
                    marginBottom: '20px',
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    color: '#4b5563',
                    lineHeight: 1.7,
                  }}
                >
                  To become the most trusted and beloved grocery destination in Bengaluru, known for our commitment to quality, sustainability, and community well-being.
                </Typography>
              </Box>
            </Stack>

            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard key={index}>
                  <FeatureIcon sx={{ width: '60px', height: '60px', fontSize: '30px' }}>
                    {value.icon}
                  </FeatureIcon>
                  <FeatureTitle sx={{ fontSize: '20px' }}>{value.title}</FeatureTitle>
                  <FeatureDescription>{value.description}</FeatureDescription>
                </ValueCard>
              ))}
            </ValuesGrid>
          </SectionContent>
        </Section>
      </MissionSection>

      {/* Timeline Section */}
      <TimelineSection>
        <Section>
          <SectionContent>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '42px',
                fontWeight: 600,
                color: '#1f2937',
                textAlign: 'center',
                marginBottom: '60px',
              }}
            >
              Our Journey
            </Typography>
            
            <AnimatedTimeline items={timeline} />
          </SectionContent>
        </Section>
      </TimelineSection>

      {/* Stats Section */}
      <Section>
        <SectionContent>
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
              <StatItem>
                <StatNumber>24/7</StatNumber>
                <StatLabel>Customer Support</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>99%</StatNumber>
                <StatLabel>Customer Satisfaction</StatLabel>
              </StatItem>
            </StatsGrid>
          </StatsSection>

          <EnhancedImageGallery 
            images={galleryImages} 
            title="Our Store Gallery"
          />
        </SectionContent>
      </Section>
    </AboutPageContainer>
  );
}