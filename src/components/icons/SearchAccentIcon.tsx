import React from 'react';

interface SearchAccentIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const SearchAccentIcon: React.FC<SearchAccentIconProps> = ({ 
  width = 5, 
  height = 5, 
  color = 'currentColor' 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 5 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="2.5"
      cy="2.5"
      r="2"
      fill={color}
    />
  </svg>
);

export default SearchAccentIcon;