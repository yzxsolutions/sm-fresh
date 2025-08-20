'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface BottomNavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItemContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '8px 12px',
  borderRadius: '12px',
  transition: 'all 0.2s ease-in-out',
  color: isActive ? '#16a34a' : '#4b5563',
  backgroundColor: isActive ? 'rgba(22, 163, 74, 0.1)' : 'transparent',
  '&:hover': {
    backgroundColor: isActive ? 'rgba(22, 163, 74, 0.15)' : 'rgba(75, 85, 99, 0.1)',
  }
}));

const IconWrapper = styled(Box)({
  marginBottom: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LabelText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  fontSize: '12px',
  fontWeight: isActive ? 600 : 400,
  lineHeight: 1,
  textAlign: 'center',
}));

const BottomNavItem: React.FC<BottomNavItemProps> = ({ 
  icon, 
  label, 
  isActive, 
  onClick 
}) => {
  return (
    <NavItemContainer isActive={isActive} onClick={onClick}>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <LabelText isActive={isActive}>
        {label}
      </LabelText>
    </NavItemContainer>
  );
};

export default BottomNavItem;