"use client";

import React, { useState } from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import SplashScreen from '@/components/ui/SplashScreen';

const DemoContainer = styled(Box)({
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const ControlPanel = styled(Box)({
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  maxWidth: '500px',
  width: '100%',
});

export default function SplashScreenDemo() {
  const [showSplash, setShowSplash] = useState(false);
  const [splashDuration, setSplashDuration] = useState(3000);

  const handleShowSplash = () => {
    setShowSplash(true);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      <CssBaseline />
      
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen
          onComplete={handleSplashComplete}
          duration={splashDuration}
          showBrandText={true}
          showLoadingDots={true}
        />
      )}

      {/* Demo Page */}
      <DemoContainer>
        <ControlPanel>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              color: '#2d2e2e',
              marginBottom: '16px',
            }}
          >
            Splash Screen Demo
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Inter, sans-serif',
              color: '#666',
              marginBottom: '30px',
              lineHeight: 1.6,
            }}
          >
            Click the button below to see the animated splash screen with the SM Fresh Mart logo.
            The splash screen features smooth animations, floating background elements, and a centered logo.
          </Typography>

          <Stack spacing={3} alignItems="center">
            <Button
              variant="contained"
              size="large"
              onClick={handleShowSplash}
              sx={{
                backgroundColor: '#22c55e',
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                padding: '12px 32px',
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: '#16a34a',
                },
              }}
            >
              Show Splash Screen
            </Button>

            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                Duration:
              </Typography>
              <Button
                variant={splashDuration === 2000 ? "contained" : "outlined"}
                size="small"
                onClick={() => setSplashDuration(2000)}
                sx={{ minWidth: '60px' }}
              >
                2s
              </Button>
              <Button
                variant={splashDuration === 3000 ? "contained" : "outlined"}
                size="small"
                onClick={() => setSplashDuration(3000)}
                sx={{ minWidth: '60px' }}
              >
                3s
              </Button>
              <Button
                variant={splashDuration === 5000 ? "contained" : "outlined"}
                size="small"
                onClick={() => setSplashDuration(5000)}
                sx={{ minWidth: '60px' }}
              >
                5s
              </Button>
            </Stack>
          </Stack>

          <Box sx={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ marginBottom: '12px', fontWeight: 600 }}>
              Features:
            </Typography>
            <Stack spacing={1} alignItems="flex-start">
              <Typography variant="body2" color="text.secondary">
                • Smooth logo animation with scale, rotation, and fade effects
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Floating background circles with gentle movement
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Responsive design that works on all screen sizes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Customizable duration and content options
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Elegant fade-out transition when complete
              </Typography>
            </Stack>
          </Box>
        </ControlPanel>
      </DemoContainer>
    </>
  );
}