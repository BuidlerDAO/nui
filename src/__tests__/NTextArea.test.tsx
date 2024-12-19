import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NTextarea } from '../NTextArea';

describe('Textarea Component', () => {
  test('renders textarea with placeholder', () => {
    render(<NTextarea placeholder="Enter description" />);
    const textareaElement = screen.getByPlaceholderText('Enter description');
    expect(textareaElement).toBeInTheDocument();
  });

  //   test('handles controlled textarea value', () => {
  //     const onChangeMock = jest.fn();
  //     render(<NTextarea value="Initial Content" onChange={onChangeMock} />);
  //     const textareaElement = screen.getByDisplayValue('Initial Content');
  //     fireEvent.change(textareaElement, { target: { value: 'Updated Content' } });

  //     jest.runAllTimers();

  //     expect(onChangeMock).toHaveBeenCalledWith('Updated Content');
  //   });
  //   test('handles controlled textarea value', () => {
  //     const onChangeMock = jest.fn();
  //     render(<NTextarea value="Initial Content" onChange={onChangeMock} />);

  //     const textareaElement = screen.getByDisplayValue('Initial Content');

  //     // Trigger the change event
  //     fireEvent.change(textareaElement, { target: { value: 'Updated Content' } });

  //     // Ensure the debounced function is called by running all timers
  //     jest.runAllTimers(); // Simulate debounce time

  //     // Check if the onChangeMock was called with the updated value
  //     expect(onChangeMock).toHaveBeenCalledWith('Updated Content');
  //   });

  test('handles uncontrolled textarea value', () => {
    render(<NTextarea placeholder="Write here" />);
    const textareaElement = screen.getByPlaceholderText('Write here');
    fireEvent.input(textareaElement, { target: { value: 'User Input' } });
    expect(textareaElement).toHaveValue('User Input');
  });

  test('dynamically resizes textarea', () => {
    render(<NTextarea placeholder="Resize me" />);
    const textareaElement = screen.getByPlaceholderText('Resize me');
    fireEvent.input(textareaElement, { target: { value: 'Line 1\nLine 2\nLine 3' } });
    expect(textareaElement.style.height).not.toBe('auto'); // Dynamic height should be applied
  });

  test('shows error state', () => {
    render(<NTextarea placeholder="Enter description" error={true} />);
    const container = screen.getByPlaceholderText('Enter description').parentElement;
    expect(container).toHaveClass('!border-[#E94344]');
  });

  test('calls onChange with debounced input', () => {
    jest.useFakeTimers();
    const onChangeMock = jest.fn();
    render(<NTextarea placeholder="Type here" onChange={onChangeMock} />);
    const textareaElement = screen.getByPlaceholderText('Type here');
    fireEvent.input(textareaElement, { target: { value: 'Debounced Input' } });

    jest.runAllTimers();
    expect(onChangeMock).toHaveBeenCalledWith('Debounced Input');
    jest.useRealTimers();
  });
});
