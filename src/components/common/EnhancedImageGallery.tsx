'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import ImageModal from './ImageModel';

const GalleryContainer = styled(Box)({
  width: '100%',
  marginTop: '60px',
});

const GalleryGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '24px',
  marginTop: '40px',
});

const GalleryImage = styled(Box)({
  borderRadius: '16px',
  overflow: 'hidden',
  position: 'relative',
  height: '280px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
});

const ImageOverlay = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
  color: 'white',
  padding: '24px 20px 20px',
  transform: 'translateY(100%)',
  transition: 'transform 0.3s ease',
  '.gallery-image:hover &': {
    transform: 'translateY(0)',
  },
});

interface GalleryImageData {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface EnhancedImageGalleryProps {
  images: GalleryImageData[];
  title?: string;
}

const EnhancedImageGallery: React.FC<EnhancedImageGalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImageData | null>(null);

  const handleImageClick = (image: GalleryImageData) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <GalleryContainer>
      {title && (
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '36px',
            fontWeight: 600,
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          {title}
        </Typography>
      )}
      
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            className="gallery-image"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
            />
            <ImageOverlay>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
              >
                {image.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.9,
                }}
              >
                {image.description}
              </Typography>
            </ImageOverlay>
          </GalleryImage>
        ))}
      </GalleryGrid>

      {selectedImage && (
        <ImageModal
          open={!!selectedImage}
          onClose={handleCloseModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </GalleryContainer>
  );
};

export default EnhancedImageGallery;