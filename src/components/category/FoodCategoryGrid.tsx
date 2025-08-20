'use client';

import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import FoodCategoryCard from './FoodCategoryCard';
import { CategoryGridProps } from '../../data/foodCategoriesMockData';
import theme from '../../theme';

const FoodCategoryGrid: React.FC<CategoryGridProps> = ({ categories = [] }) => {
  // Ensure we have enough categories to display
  if (!categories || categories.length < 9) {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100vw', minHeight: '100vh', py: 4, px: 3 }}>
          <Stack spacing={3}>
            <Typography variant="h6" textAlign="center">
              Loading categories...
            </Typography>
          </Stack>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        width: '100vw', 
        minHeight: '100vh', 
        py: 4, 
        px: 3,
        backgroundColor: '#ffffff'
      }}>
        <Stack spacing={3} sx={{ maxWidth: '1400px', mx: 'auto' }}>
          {/* First Row */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Box sx={{ flex: 1 }}>
              <FoodCategoryCard category={categories[0]} index={0} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FoodCategoryCard category={categories[3]} index={1} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FoodCategoryCard category={categories[6]} index={2} />
            </Box>
          </Stack>
          
          {/* Second Row */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Box sx={{ flex: 1 }}>
              <FoodCategoryCard category={categories[1]} index={3} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FoodCategoryCard category={categories[4]} index={4} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FoodCategoryCard category={categories[7]} index={5} />
            </Box>
          </Stack>
          
          {/* Third Row */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Box sx={{ flex: 1 }}>
              <FoodCategoryCard category={categories[2]} index={6} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FoodCategoryCard category={categories[5]} index={7} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FoodCategoryCard category={categories[8]} index={8} />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default FoodCategoryGrid;