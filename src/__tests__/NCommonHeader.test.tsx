import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NCommonHeader } from '../NCommonHeader';

describe('NCommonHeader', () => {
  test('renders header with center content as string', () => {
    render(<NCommonHeader onBack={() => {}} center="Center Title" />);

    expect(screen.getByText('Center Title')).toBeInTheDocument();
  });

  test('renders header with center content as React node', () => {
    const CenterComponent = <div>Center React Node</div>;

    render(<NCommonHeader onBack={() => {}} center={CenterComponent} />);

    expect(screen.getByText('Center React Node')).toBeInTheDocument();
  });

  test('calls onBack when left icon is clicked', () => {
    const onBackMock = jest.fn();
    render(<NCommonHeader onBack={onBackMock} center="Center Title" />);

    fireEvent.click(screen.getByRole('button'));

    expect(onBackMock).toHaveBeenCalledTimes(1);
  });

  test('renders right content when provided', () => {
    const RightComponent = <div>Right Content</div>;

    render(<NCommonHeader onBack={() => {}} center="Center Title" right={RightComponent} />);

    expect(screen.getByText('Right Content')).toBeInTheDocument();
  });

  test('does not render right content when not provided', () => {
    render(<NCommonHeader onBack={() => {}} center="Center Title" />);

    const rightContent = screen.queryByText('Right Content');
    expect(rightContent).toBeNull();
  });
});
