'use client';

import React from 'react';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import FacebookMobileIcon from '@/components/icons/FacebookMobileIcon';
import InstagramMobileIcon from '@/components/icons/InstagramMobileIcon';

const SocialIconsContainer = styled(Stack)({
  direction: 'row',
  gap: '21px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 0',
});

const MobileSocialIcons: React.FC = () => {
  return (
    <SocialIconsContainer direction="row">
      <WhatsAppIcon width={30} height={30} />
      <FacebookMobileIcon width={30} height={30} />
      <InstagramMobileIcon width={30} height={30} />
    </SocialIconsContainer>
  );
};

export default MobileSocialIcons;