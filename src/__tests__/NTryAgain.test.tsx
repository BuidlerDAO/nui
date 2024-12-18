import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NTryAgain } from '../NTryAgain';

describe('NTryAgain Component', () => {
  test('renders the "Try again" button and triggers onTryAgain on click', () => {
    const mockOnTryAgain = jest.fn();
    const customImageSrc = '/path/to/custom-image.svg';
    const customText = 'Oops, something went wrong.';
    const customContainerClass = 'bg-gray-200 p-6';
    const customImageClass = 'h-32 w-32';
    const customTextClass = 'text-red-500';
    const customButtonClass = 'bg-blue-500 text-white';
    const customButtonTextClass = 'font-semibold';

    render(
      <NTryAgain
        onTryAgain={mockOnTryAgain}
        imageSrc={customImageSrc}
        text={customText}
        containerClassName={customContainerClass}
        imageClassName={customImageClass}
        textClassName={customTextClass}
        buttonClassName={customButtonClass}
        buttonTextClassName={customButtonTextClass}
      />,
    );

    expect(screen.getByText('Try again')).toBeInTheDocument();

    const image = screen.getByAltText('No data');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', customImageSrc);

    expect(screen.getByText(customText)).toBeInTheDocument();

    const container = screen.getByText('Try again').closest('div');
    expect(container).toHaveClass(customContainerClass);

    const imageElement = screen.getByAltText('No data');
    expect(imageElement).toHaveClass(customImageClass);

    const textElement = screen.getByText(customText);
    expect(textElement).toHaveClass(customTextClass);

    const buttonElement = screen.getByText('Try again').closest('div');
    expect(buttonElement).toHaveClass(customButtonClass);

    const buttonTextElement = screen.getByText('Try again');
    expect(buttonTextElement).toHaveClass(customButtonTextClass);

    fireEvent.click(screen.getByText('Try again'));

    expect(mockOnTryAgain).toHaveBeenCalledTimes(1);
  });
});
