'use client';

import type { Metadata } from "next";
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ContactHeader, ContactFormNew } from "@/components/contact";

const ContactContainer = styled(Box)({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#ffffff',
  padding: '64px 40px',
  '@media (max-width: 768px)': {
    padding: '40px 20px',
  },
});

const ContentStack = styled(Stack)({
  gap: '64px',
  alignItems: 'center',
  maxWidth: '1867px',
  margin: '0 auto',
  width: '100%',
});

export default function ContactPage() {
  return (
    <ContactContainer>
      <ContentStack>
        <ContactHeader />
        <ContactFormNew />
      </ContentStack>
    </ContactContainer>
  );
}