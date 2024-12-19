'use client';
import React, { ReactNode } from 'react';

interface NButtonsProps {
  small?: boolean;
  disable?: boolean;
  type?: 'main' | 'primary' | 'secondary' | 'default' | 'white' | 'black';
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

const NButtons: React.FC<NButtonsProps> = ({
  type = 'default',
  small = false,
  disable = false,
  onClick,
  children,
  className = '',
}: NButtonsProps) => {
  const baseClasses =
    'flex shrink-0 cursor-pointer items-center justify-center px-[20px] py-[10px] text-center text-base font-semibold';
  const sizeClasses = small ? 'rounded-full bg-[#C379FC1A] !text-xs' : 'h-[50px] rounded-[16px]';
  const typeClasses = getStyle(type);
  const disableClasses = disable ? 'opacity-65 cursor-not-allowed' : '';

  return (
    <div
      className={`${baseClasses} ${sizeClasses} ${typeClasses} ${disableClasses} ${className}`}
      onClick={disable ? undefined : onClick}
    >
      {children}
    </div>
  );
};

function getStyle(type: 'main' | 'primary' | 'secondary' | 'default' | 'white' | 'black') {
  if (type === 'primary') {
    return 'text-[black] bg-main';
  }
  if (type === 'secondary') {
    return 'text-[black] bg-main-dark';
  }

  if (type === 'white') {
    return 'text-[black] bg-[white]';
  }

  if (type === 'black') {
    return 'text-[white] bg-black-1';
  }

  if (type === 'main') {
    return 'text-[white] bg-main-light';
  }

  return 'text-main bg-black-2';
}

export default NButtons;
