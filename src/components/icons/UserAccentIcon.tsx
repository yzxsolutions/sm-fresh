import React from 'react';

interface UserAccentIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const UserAccentIcon: React.FC<UserAccentIconProps> = ({ 
  width = 19, 
  height = 8, 
  color = 'currentColor' 
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 6C2 3.79086 5.58172 2 10 2C14.4183 2 18 3.79086 18 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UserAccentIcon;