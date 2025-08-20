import Image from 'next/image';
import React from 'react';

interface UserIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const UserIcon: React.FC<UserIconProps> = ({ 
  width = 34, 
  height = 34, 
  color = 'currentColor' 
}) => (
   <Image
      src="/images/bottom-icons/user.svg"
      alt="Contact Icon"
      width={width} 
      height={height}
    />
);

export default UserIcon;