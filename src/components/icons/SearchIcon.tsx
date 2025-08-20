import Image from 'next/image';
import React from 'react';

interface SearchIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ 
  width = 24, 
  height = 24, 
  color = 'currentColor' 
}) => (
   <Image
      src="/images/bottom-icons/search.svg"
      alt="Search Icon"
      width={width} 
      height={height}
    />
);

export default SearchIcon;