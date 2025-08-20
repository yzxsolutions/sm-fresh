"use client";

import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { CssBaseline } from '@mui/material';

const BottomNavCenteredPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        backgroundColor: '#ffffff',
        padding: { xs: 2, md: 4 },
        paddingBottom: { xs: '120px', md: '100px' } // Space for bottom navigation
      }}>
        <Stack spacing={4} alignItems="center">
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#22c55e',
              marginTop: 4
            }}
          >
            Bottom Navigation Centering Test
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              color: '#6b7280',
              maxWidth: '600px'
            }}
          >
            This page tests the bottom navigation centering across different screen sizes.
            The navigation should be centered on laptop screens (1024px+) instead of appearing in the left corner.
          </Typography>

          {/* Test content sections */}
          {Array.from({ length: 8 }, (_, index) => (
            <Paper 
              key={index}
              elevation={2}
              sx={{ 
                padding: 4, 
                width: '100%', 
                maxWidth: '800px',
                borderRadius: '16px',
                backgroundColor: '#f9fafb'
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: 2, color: '#1f2937' }}>
                Test Content Section {index + 1}
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                This is test content section {index + 1}. The bottom navigation should remain 
                centered at the bottom of the screen on laptop and desktop sizes. Scroll down to see 
                the responsive centering behavior of the bottom navigation.
              </Typography>
            </Paper>
          ))}

          {/* Bottom spacing to account for navigation */}
          <Box sx={{ height: '60px' }} />
        </Stack>
      </Box>
    </>
  );
};

export default BottomNavCenteredPage;