'use client';

import React from 'react';
import { Modal, Box, IconButton, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

const ModalContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  height: '90vh',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  borderRadius: '12px',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: '16px',
  right: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  zIndex: 10,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

const ImageContainer = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

interface ImageModalProps {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ open, onClose, imageSrc, imageAlt }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={open}>
        <ModalContainer>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <ImageContainer>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </ImageContainer>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};

export default ImageModal;