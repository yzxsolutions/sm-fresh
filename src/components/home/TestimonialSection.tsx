'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TestimonialCard from './TestimonialCard';
import { mockTestimonialData, TestimonialData } from '@/data/testimonialSectionMockData';

const TestimonialSectionContainer = styled(Box)({
  width: '100%',
  backgroundColor: '#ffffff',
  padding: '40px 0',
});

interface TestimonialSectionProps {
  testimonials?: TestimonialData[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials = [mockTestimonialData],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <TestimonialSectionContainer>
      <TestimonialCard
        testimonialData={testimonials[currentIndex]}
        onPrevious={testimonials.length > 1 ? handlePrevious : undefined}
        onNext={testimonials.length > 1 ? handleNext : undefined}
        showNavigation={testimonials.length > 1}
      />
    </TestimonialSectionContainer>
  );
};

export default TestimonialSection;