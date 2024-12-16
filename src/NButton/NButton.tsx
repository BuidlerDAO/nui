import React from 'react';

interface NButtonProps {
  label: string;
  onClick?: () => void;
}

const NButton: React.FC<NButtonProps> = ({ label, onClick }) => {
  return (
    <button className="bg-[#F00]" onClick={onClick}>
      {label}
    </button>
  );
};

export default NButton;
