import Image from 'next/image';
import React from 'react';

interface HomeIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ 
  width = 24, 
  height = 24, 
  color = 'currentColor' 
}) => (
  <Image
    src="/images/bottom-icons/home.svg"
    alt="Home Icon"
    width={width} 
    height={height}
  />
);

export default HomeIcon;