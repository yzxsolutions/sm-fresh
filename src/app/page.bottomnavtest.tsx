"use client";

import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { BottomNavigation } from '@/components/navigation';

const BottomNavTestPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '200vh', backgroundColor: '#f8f9fa' }}>
      {/* Header section */}
      <Box sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h2" fontWeight="bold">
            Bottom Navigation Test
          </Typography>
          <Typography variant="h5">
            Scroll down to see the bottom navigation appear
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600 }}>
            This page tests the bottom navigation centering across different screen sizes.
            The navigation should be perfectly centered on mobile, tablet, and desktop viewports.
          </Typography>
        </Stack>
      </Box>

      {/* Content sections to enable scrolling */}
      <Stack spacing={4} sx={{ p: 4 }}>
        {Array.from({ length: 8 }, (_, index) => (
          <Paper 
            key={index}
            elevation={2}
            sx={{ 
              p: 4, 
              borderRadius: 3,
              background: index % 2 === 0 ? '#ffffff' : '#f1f3f4'
            }}
          >
            <Typography variant="h4" gutterBottom color="primary">
              Section {index + 1}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              This is test content section {index + 1}. The bottom navigation should remain 
              centered regardless of the screen size you're viewing this on.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try resizing your browser window or viewing on different devices to test 
              the responsive centering behavior of the bottom navigation.
            </Typography>
          </Paper>
        ))}
      </Stack>

      {/* Bottom spacing to account for navigation */}
      <Box sx={{ height: 120 }} />
      
      {/* Bottom Navigation will be rendered by MainLayout */}
    </Box>
  );
};

export default BottomNavTestPage;