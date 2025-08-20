"use client";

import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { CategoryItem } from "../../data/foodCategoriesMockData";

interface FoodCategoryCardProps {
  category: CategoryItem;
  index?: number;
}

const FoodCategoryCard: React.FC<FoodCategoryCardProps> = ({
  category,
  index = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  if (!category) {
    return null;
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{
        backgroundColor: category.backgroundColor,
        borderRadius: "24px",
        cursor: "pointer",
        minHeight: "320px",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Text Content - Top Left Aligned */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: "easeOut",
        }}
        style={{
          padding: "32px",
          textAlign: "left",
          alignSelf: "flex-start",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {/* Description first (smaller) */}
        <Typography
          variant="body2"
          sx={{
            color: category.descriptionColor,
            fontSize: { xs: "0.875rem", md: "1rem" },
            fontWeight: 600,
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: "1px",
            opacity: 0.8,
          }}
        >
          {category.description}
        </Typography>

        {/* Title below description (bigger) */}
        <Typography
          variant="h4"
          sx={{
            color: category.titleColor,
            fontWeight: 800,
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            lineHeight: 1.1,
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {category.title}
        </Typography>
      </motion.div>

      {/* Image - Much Bigger Size, Bottom Right Aligned */}
      {category.image && (
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            duration: 0.7,
            delay: index * 0.1 + 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          style={{
            position: "absolute",
            bottom: "-15px",
            right: "-15px",
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={category.image}
            alt={category.title}
            sx={{
              width: { xs: "340px", md: "340px" },
              height: { xs: "290px", md: "290px" },
              objectFit: "contain",
              objectPosition: "bottom right",
              filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))",
            }}
            onError={(e) => {
              // Fallback if image doesn't exist
              e.currentTarget.style.display = "none";
            }}
          />
        </motion.div>
      )}

      {/* Animated Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      {/* Hover Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle Border Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "24px",
          padding: "2px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
};

export default FoodCategoryCard;
