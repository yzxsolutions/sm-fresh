'use client';

import React, { useState, FormEvent } from 'react';
import { Box, Typography, Stack, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

const FormContainer = styled(Stack)({
  gap: '48px',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
});

const InputRow = styled(Stack)({
  flexDirection: 'row', // Use the actual CSS property
  gap: '32px',
  width: '100%',
  '@media (max-width: 768px)': {
    flexDirection: 'column', // Also update it here if needed
    gap: '16px',
  },
});

const StyledTextField = styled(TextField)({
  flex: 1,
  '& .MuiInputLabel-root': {
    fontFamily: 'Inter, sans-serif',
    fontSize: '24px',
    fontWeight: 400,
    color: '#000000',
    transform: 'translate(0, -1.5px) scale(1)',
    '&.Mui-focused': {
      color: '#00a650',
    },
  },
  '& .MuiInputBase-root': {
    marginTop: '16px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#00a650',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00a650',
    },
  },
  '& .MuiInputBase-input': {
    padding: '16px',
  },
});

const MessageTextField = styled(TextField)({
  width: '100%',
  '& .MuiInputLabel-root': {
    fontFamily: 'Inter, sans-serif',
    fontSize: '24px',
    fontWeight: 400,
    color: '#000000',
    transform: 'translate(0, -1.5px) scale(1)',
    '&.Mui-focused': {
      color: '#00a650',
    },
  },
  '& .MuiInputBase-root': {
    marginTop: '16px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#00a650',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00a650',
    },
  },
  '& .MuiInputBase-input': {
    padding: '16px',
  },
});

const SubmitButton = styled(Button)({
  backgroundColor: '#00a650',
  color: '#ffffff',
  fontFamily: 'Inter, sans-serif',
  fontSize: '22px',
  fontWeight: 600,
  borderRadius: '37px',
  padding: '24px 32px',
  textTransform: 'none',
  gap: '5px',
  alignSelf: 'flex-start',
  minWidth: '358px',
  height: '91px',
  '&:hover': {
    backgroundColor: '#008a43',
  },
  '&:disabled': {
    backgroundColor: '#cccccc',
    color: '#666666',
  },
  '@media (max-width: 768px)': {
    alignSelf: 'center',
    minWidth: '280px',
  },
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactFormNew: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer component="form" onSubmit={handleSubmit}>
      <InputRow direction="row">
        <StyledTextField
          label="Your Name"
          variant="outlined"
          value={formData.name}
          onChange={handleInputChange('name')}
          required
          disabled={isSubmitting}
        />
        <StyledTextField
          label="Email Address"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleInputChange('email')}
          required
          disabled={isSubmitting}
        />
        <StyledTextField
          label="Phone Number (optional)"
          type="tel"
          variant="outlined"
          value={formData.phone}
          onChange={handleInputChange('phone')}
          disabled={isSubmitting}
        />
      </InputRow>

      <MessageTextField
        label="Message"
        multiline
        rows={6}
        variant="outlined"
        value={formData.message}
        onChange={handleInputChange('message')}
        required
        disabled={isSubmitting}
      />

      <SubmitButton
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        endIcon={<ArrowRightIcon width={24} height={24} color="#ffffff" />}
      >
        {isSubmitting ? 'Sending...' : 'Leave us a Message'}
      </SubmitButton>
    </FormContainer>
  );
};

export default ContactFormNew;