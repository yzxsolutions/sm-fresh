'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeNavIcon from '@/components/icons/HomeNavIcon';
import SearchNavIcon from '@/components/icons/SearchNavIcon';
import ClockNavIcon from '@/components/icons/ClockNavIcon';
import UserNavIcon from '@/components/icons/UserNavIcon';

const BottomNavContainer = styled(Box)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#f5f6f7',
  borderRadius: '24px 24px 0 0',
  padding: '20px 0',
  zIndex: 1000,
});

const NavItemsContainer = styled(Stack)({
  direction: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'relative',
});

const NavItem = styled(Stack)({
  alignItems: 'center',
  gap: '6px',
  cursor: 'pointer',
});

const NavText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(({ isActive }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  color: isActive ? '#e03c00' : '#484c52',
}));

const ActiveIndicator = styled(Box)({
  position: 'absolute',
  top: '-5px',
  left: '25px',
  width: '56px',
  height: '2px',
  backgroundColor: '#e03c00',
  borderRadius: '100px',
});

const IndicatorLine = styled(Box)({
  position: 'absolute',
  bottom: '17px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '135px',
  height: '5px',
  backgroundColor: '#b9c0c9',
  borderRadius: '100px',
});

const MobileBottomNav: React.FC = () => {
  return (
    <BottomNavContainer>
      <ActiveIndicator />
      <NavItemsContainer direction="row">
        <NavItem>
          <HomeNavIcon width={22} height={21} />
          <NavText isActive>Home</NavText>
        </NavItem>
        <NavItem>
          <SearchNavIcon width={21} height={22} />
          <NavText>Category</NavText>
        </NavItem>
        <NavItem>
          <ClockNavIcon width={22} height={22} />
          <NavText>About</NavText>
        </NavItem>
        <NavItem>
          <UserNavIcon width={19} height={22} />
          <NavText>Contact</NavText>
        </NavItem>
      </NavItemsContainer>
      <IndicatorLine />
    </BottomNavContainer>
  );
};

export default MobileBottomNav;