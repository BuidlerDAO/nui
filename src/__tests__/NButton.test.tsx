import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NButton } from '../NButton';

test('renders button with label', () => {
  render(<NButton label="Click Me" />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});
