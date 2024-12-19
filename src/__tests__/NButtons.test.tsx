import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NButtons } from '../NButtons';

describe('NButtons Component', () => {
  test('renders button with children content', () => {
    render(<NButtons>Click Me</NButtons>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('applies default styles', () => {
    render(<NButtons>Default Button</NButtons>);
    const button = screen.getByText('Default Button');
    expect(button).toHaveClass(
      'flex shrink-0 cursor-pointer items-center justify-center text-center text-base font-semibold',
    );
  });

  test('applies small size classes when small is true', () => {
    render(<NButtons small>Small Button</NButtons>);
    const button = screen.getByText('Small Button');
    expect(button).toHaveClass('rounded-full bg-[#C379FC1A] !text-xs');
  });

  test('applies large size classes when small is false', () => {
    render(<NButtons>Large Button</NButtons>);
    const button = screen.getByText('Large Button');
    expect(button).toHaveClass('h-[50px] rounded-[16px]');
  });

  test('applies custom className', () => {
    render(<NButtons className="custom-class">Custom Class Button</NButtons>);
    const button = screen.getByText('Custom Class Button');
    expect(button).toHaveClass('custom-class');
  });

  test('applies primary type classes when type is "primary"', () => {
    render(<NButtons type="primary">Primary Button</NButtons>);
    const button = screen.getByText('Primary Button');
    expect(button).toHaveClass('text-[black] bg-main');
  });

  test('applies secondary type classes when type is "secondary"', () => {
    render(<NButtons type="secondary">Secondary Button</NButtons>);
    const button = screen.getByText('Secondary Button');
    expect(button).toHaveClass('text-[black] bg-main-dark');
  });

  test('applies white type classes when type is "white"', () => {
    render(<NButtons type="white">White Button</NButtons>);
    const button = screen.getByText('White Button');
    expect(button).toHaveClass('text-[black] bg-[white]');
  });

  test('applies black type classes when type is "black"', () => {
    render(<NButtons type="black">Black Button</NButtons>);
    const button = screen.getByText('Black Button');
    expect(button).toHaveClass('text-[white] bg-black-1');
  });

  test('applies main type classes when type is "main"', () => {
    render(<NButtons type="main">Main Button</NButtons>);
    const button = screen.getByText('Main Button');
    expect(button).toHaveClass('text-[white] bg-main-light');
  });

  test('button click event triggers onClick function', () => {
    const onClick = jest.fn();
    render(<NButtons onClick={onClick}>Clickable Button</NButtons>);
    const button = screen.getByText('Clickable Button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('disabled button does not trigger onClick function', () => {
    const onClick = jest.fn();
    render(
      <NButtons disable onClick={onClick}>
        Disabled Button
      </NButtons>,
    );
    const button = screen.getByText('Disabled Button');
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
