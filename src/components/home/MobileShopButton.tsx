'use client';

import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ShopButton = styled(Button)({
  backgroundColor: '#22c55e',
  color: '#ffffff',
  fontFamily: 'SF Pro, -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
  fontSize: '17px',
  fontWeight: 860,
  letterSpacing: '1.87px',
  padding: '12px 24px',
  borderRadius: '25px',
  textTransform: 'none',
  minWidth: '113px',
  '&:hover': {
    backgroundColor: '#16a34a',
  },
});

const MobileShopButton: React.FC = () => {
  return (
    <ShopButton variant="contained">
      SHOP NOW
    </ShopButton>
  );
};

export default MobileShopButton;