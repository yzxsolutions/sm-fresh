"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ArrowBackIcon from "../icons/ArrowBackIcon";
import ArrowForwardIcon from "../icons/ArrowForwardIcon";
import { mockTestimonialsData } from "@/data/testimonialSectionMockData";

const TestimonialContainer = styled(Box)({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "60px 20px 40px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

const QuoteMark = styled(Typography)({
  position: "absolute",
  fontSize: "120px",
  fontWeight: 700,
  color: "rgba(34, 197, 94, 0.15)",
  fontFamily: "serif",
  lineHeight: 1,
  userSelect: "none",
  pointerEvents: "none",
  zIndex: 1,
  "@media (max-width: 768px)": {
    fontSize: "80px",
  },
});

const TopLeftQuote = styled(QuoteMark)({
  top: "20px",
  left: "20px",
  transform: "rotate(180deg)",
  color: "gray",
});

const BottomRightQuote = styled(QuoteMark)({
  bottom: "20px",
  right: "20px",
  color: "gray",
});

const ContentWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "300px",
  "@media (max-width: 768px)": {
    minHeight: "400px",
  },
});

const TestimonialContent = styled(motion.div)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
  width: "100%",
  maxWidth: "1000px",
  "@media (max-width: 768px)": {
    gap: "40px",
    flexDirection: "column",
    textAlign: "center",
  },
});

const AvatarContainer = styled(Box)({
  width: "230px",
  height: "230px",
  position: "relative",
  flexShrink: 0,
  "@media (max-width: 768px)": {
    width: "150px",
    height: "150px",
  },
});

const QuoteContainer = styled(Stack)({
  gap: "16px",
  maxWidth: "500px",
  textAlign: "left",
  "@media (max-width: 768px)": {
    textAlign: "center",
    maxWidth: "100%",
  },
});

const QuoteText = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "28px",
  color: "#000000",
  "@media (max-width: 768px)": {
    fontSize: "16px",
    lineHeight: "24px",
  },
});

const CustomerName = styled(Typography)({
  fontFamily: "Inter, sans-serif",
  fontSize: "18px",
  fontWeight: 600,
  color: "#2d2e2e",
  "@media (max-width: 768px)": {
    fontSize: "16px",
  },
});

const NavigationButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "60px",
  height: "60px",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  color: "#22c55e",
  border: "2px solid #22c55e",
  borderRadius: "50%",
  zIndex: 10,
  transition: "all 0.3s ease",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#22c55e",
    color: "white",
    transform: "translateY(-50%) scale(1.1)",
    boxShadow: "0 8px 25px rgba(34, 197, 94, 0.3)",
  },
  "&:active": {
    transform: "translateY(-50%) scale(0.95)",
  },
  "& svg": {
    fontSize: "26px",
  },
});

const PreviousButton = styled(NavigationButton)({
  left: "-40px",
  "@media (max-width: 768px)": {
    left: "10px",
    width: "50px",
    height: "50px",
    "& svg": {
      fontSize: "22px",
    },
  },
});

const NextButton = styled(NavigationButton)({
  right: "-40px",
  "@media (max-width: 768px)": {
    right: "10px",
    width: "50px",
    height: "50px",
    "& svg": {
      fontSize: "22px",
    },
  },
});

const DotsContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  marginTop: "50px",
  paddingTop: "20px",
  borderTop: "1px solid rgba(0, 0, 0, 0.05)",
  "@media (max-width: 768px)": {
    marginTop: "40px",
    gap: "12px",
  },
});

const Dot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ active }) => ({
  width: active ? "32px" : "12px",
  height: "12px",
  borderRadius: "6px",
  backgroundColor: active ? "#22c55e" : "#e0e0e0",
  cursor: "pointer",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    backgroundColor: active ? "#16a34a" : "#bbb",
    transform: "scale(1.1)",
  },
}));

interface TestimonialCardProps {
  showNavigation?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  showNavigation = true,
  autoPlay = true,
  autoPlayInterval = 8000, // Slower auto-play (8 seconds)
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonials = mockTestimonialsData;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, handleNext]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <TestimonialContainer>
      {/* Large Quote Mark - Top Left */}
      <TopLeftQuote>&quot;</TopLeftQuote>

      {/* Large Quote Mark - Bottom Right */}
      <BottomRightQuote>&quot;</BottomRightQuote>

      {/* Main Content Wrapper */}
      <ContentWrapper>
        <AnimatePresence initial={false} custom={direction}>
          <TestimonialContent
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 250, damping: 25 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrevious();
              }
            }}
          >
            <AvatarContainer>
              <Image
                src={currentTestimonial.avatar}
                alt={`${currentTestimonial.customerName} testimonial`}
                fill
                sizes="(max-width: 768px) 150px, 230px"
                style={{ objectFit: "cover", borderRadius: "50%" }}
                onError={(e) => {
                  // Fallback to a default avatar if image doesn't exist
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = "/images/testimonial-avatar.png";
                }}
              />
            </AvatarContainer>

            <QuoteContainer>
              <QuoteText>{currentTestimonial.quote}</QuoteText>
              <CustomerName>{currentTestimonial.customerName}</CustomerName>
            </QuoteContainer>
          </TestimonialContent>
        </AnimatePresence>

        {showNavigation && (
          <>
            <PreviousButton
              onClick={handlePrevious}
              aria-label="Previous testimonial"
            >
              <ArrowBackIcon />
            </PreviousButton>

            <NextButton onClick={handleNext} aria-label="Next testimonial">
              <ArrowForwardIcon />
            </NextButton>
          </>
        )}
      </ContentWrapper>

      {/* Dots Indicator - Now at the bottom */}
      <DotsContainer>
        {testimonials.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </TestimonialContainer>
  );
};

export default TestimonialCard;
