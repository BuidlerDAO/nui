import React from 'react';

interface TryAgainProps {
  onTryAgain: () => void;
  imageSrc: string;
}

const TryAgain: React.FC<TryAgainProps> = ({ onTryAgain, imageSrc }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <img src={imageSrc} alt="No data" className="h-24 w-24" />
      <p className="text-[#C0C0C0]">Oops, data not found.</p>
      <div className="h-[50px] w-auto cursor-pointer rounded-full bg-[#ffffff] px-4" onClick={onTryAgain}>
        <p
          className="h-full w-full text-center text-[18px] text-[#000]"
          style={{
            lineHeight: '50px',
            fontWeight: '600',
          }}
        >
          Try again
        </p>
      </div>
    </div>
  );
};

export default TryAgain;
