'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import Image from 'next/image';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TimelineContainer = styled(Box)({
  position: 'relative',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 0',
});

const ProgressBar = styled(LinearProgress)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '4px',
  zIndex: 1000,
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#22c55e',
  },
});

const TimelineLine = styled(Box)({
  position: 'absolute',
  left: '50%',
  top: 0,
  bottom: 0,
  width: '4px',
  backgroundColor: '#e5e7eb',
  transform: 'translateX(-50%)',
  zIndex: 1,
  '@media (max-width: 768px)': {
    left: '30px',
  },
});

const TimelineItem = styled(Box)<{ isLeft?: boolean; isVisible?: boolean }>(({ isLeft, isVisible }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '100px',
  position: 'relative',
  opacity: isVisible ? 1 : 0,
  animation: isVisible ? `${isLeft ? slideInLeft : slideInRight} 0.6s ease-out` : 'none',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    textAlign: 'center',
    marginLeft: '60px',
    animation: isVisible ? `${fadeInUp} 0.6s ease-out` : 'none',
  },
}));

const TimelineContent = styled(Box)<{ isLeft?: boolean }>(({ isLeft }) => ({
  width: '45%',
  padding: isLeft ? '0 60px 0 0' : '0 0 0 60px',
  textAlign: isLeft ? 'right' : 'left',
  '@media (max-width: 768px)': {
    width: '100%',
    textAlign: 'center',
    padding: '0 20px',
  },
}));

const TimelineYear = styled(Box)<{ backgroundImage?: string }>(({ backgroundImage }) => ({
  width: '140px',
  height: '140px',
  backgroundColor: '#22c55e',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  fontSize: '22px',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 3,
  border: '6px solid white',
  boxShadow: '0 12px 32px rgba(34, 197, 94, 0.4)',
  backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': backgroundImage ? {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(34, 197, 94, 0.8)',
    borderRadius: '50%',
  } : {},
  '& > span': {
    position: 'relative',
    zIndex: 1,
  },
  '@media (max-width: 768px)': {
    width: '100px',
    height: '100px',
    fontSize: '18px',
    position: 'relative',
    left: 'auto',
    transform: 'none',
    margin: '0 auto 20px',
  },
}));

const EmptySpace = styled(Box)<{ isLeft?: boolean }>(({ isLeft }) => ({
  width: '45%',
  '@media (max-width: 768px)': {
    display: 'none',
  },
}));

const ContentCard = styled(Box)({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '32px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid #f3f4f6',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
  },
});

const ContentTitle = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '24px',
  fontWeight: 600,
  color: '#1f2937',
  marginBottom: '12px',
});

const ContentDescription = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  color: '#6b7280',
  lineHeight: 1.6,
});

interface TimelineItemData {
  year: string;
  title: string;
  description: string;
  backgroundImage?: string;
}

interface AnimatedTimelineProps {
  items: TimelineItemData[];
}

const AnimatedTimeline: React.FC<AnimatedTimelineProps> = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Check which timeline items are visible
      const timelineItems = document.querySelectorAll('[data-timeline-item]');
      const newVisibleItems = new Set<number>();

      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          newVisibleItems.add(index);
        }
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ProgressBar variant="determinate" value={scrollProgress} />
      <TimelineContainer>
        <TimelineLine />
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleItems.has(index);
          
          return (
            <TimelineItem
              key={index}
              isLeft={isLeft}
              isVisible={isVisible}
              data-timeline-item
            >
              {isLeft ? (
                <>
                  <TimelineContent isLeft={true}>
                    <ContentCard>
                      <ContentTitle>{item.title}</ContentTitle>
                      <ContentDescription>{item.description}</ContentDescription>
                    </ContentCard>
                  </TimelineContent>
                  <EmptySpace isLeft={false} />
                </>
              ) : (
                <>
                  <EmptySpace isLeft={true} />
                  <TimelineContent isLeft={false}>
                    <ContentCard>
                      <ContentTitle>{item.title}</ContentTitle>
                      <ContentDescription>{item.description}</ContentDescription>
                    </ContentCard>
                  </TimelineContent>
                </>
              )}
              
              <TimelineYear backgroundImage={item.backgroundImage}>
                <span>{item.year}</span>
              </TimelineYear>
            </TimelineItem>
          );
        })}
      </TimelineContainer>
    </>
  );
};

export default AnimatedTimeline;