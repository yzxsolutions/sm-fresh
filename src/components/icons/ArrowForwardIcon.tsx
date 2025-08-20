import React from 'react';

interface ArrowForwardIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const ArrowForwardIcon: React.FC<ArrowForwardIconProps> = ({ 
  width = 20, 
  height = 20, 
  color = 'currentColor' 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowForwardIcon;