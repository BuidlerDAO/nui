import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NTryAgain } from '../NTryAgain';

describe('TryAgain Component', () => {
  test('renders button and triggers onTryAgain on click', () => {
    const mockOnTryAgain = jest.fn();
    const customImageSrc = '/path/to/custom-image.svg';

    render(<NTryAgain onTryAgain={mockOnTryAgain} imageSrc={customImageSrc} />);

    expect(screen.getByText('Try again')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Try again'));

    expect(mockOnTryAgain).toHaveBeenCalledTimes(1);
  });
});
