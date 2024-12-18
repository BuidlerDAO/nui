import React from 'react';

interface NTryAgainProps {
  onTryAgain: () => void;
  imageSrc: string;
  text: string;
  containerClassName?: string;
  imageClassName?: string;
  textClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

const NTryAgain: React.FC<NTryAgainProps> = ({
  onTryAgain,
  imageSrc,
  text,
  containerClassName = '',
  imageClassName = '',
  textClassName = '',
  buttonClassName = '',
  buttonTextClassName = '',
}) => {
  return (
    <div className={`flex h-full flex-col items-center justify-center space-y-4 ${containerClassName}`}>
      <img src={imageSrc} alt="No data" className={`h-24 w-24 ${imageClassName}`} />
      <p className={`text-[#C0C0C0] ${textClassName}`}>{text}</p>
      <div
        className={`h-[50px] w-auto cursor-pointer rounded-full bg-[#ffffff] px-4 ${buttonClassName}`}
        onClick={onTryAgain}
      >
        <p
          className={`h-full w-full text-center text-[18px] text-[#000] ${buttonTextClassName}`}
          style={{ lineHeight: '50px', fontWeight: '600' }}
        >
          Try again
        </p>
      </div>
    </div>
  );
};

export default NTryAgain;
