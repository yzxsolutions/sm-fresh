import Image from 'next/image';
import React from 'react';

interface AboutIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const AboutIcon: React.FC<AboutIconProps> = ({ 
  width = 24, 
  height = 24, 
  color = 'currentColor' 
}) => (
 <Image
    src="/images/bottom-icons/clock.svg"
    alt="About Icon"
    width={width} 
    height={height}
  />
);

export default AboutIcon;