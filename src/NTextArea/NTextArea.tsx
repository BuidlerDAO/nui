import React, { FormEvent, useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import debounce from 'lodash.debounce';

export type NTextareaProps = {
  error?: boolean;
  placeholder?: string;
  containerClassName?: string;
  textareaClassName?: string;
  value?: string;
  onChange?(value: string): void;
  minHeight?: string;
  maxHeight?: string;
};

export const NTextarea: React.FC<NTextareaProps> = ({
  placeholder = '',
  containerClassName = '',
  textareaClassName = '',
  onChange,
  value,
  error = false,
  minHeight = '50px',
  maxHeight = '240px',
}) => {
  const [focus, setFocus] = useState(false);
  const [content, setContent] = useState('');
  const debouncedOnChange = useRef(debounce((value: string) => onChange?.(value), 200));
  const isControlled = value != null;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    handleResize();
  }, [content, value]);

  const handleFocus = () => setFocus(true);

  const handleBlur = () => setFocus(false);

  const handleInput = (event: FormEvent<HTMLTextAreaElement>) => {
    const inputValue = event.currentTarget.value;
    if (!isControlled) {
      setContent(inputValue);
      debouncedOnChange.current(inputValue);
    } else {
      debouncedOnChange.current(inputValue);
      onChange?.(inputValue);
    }
  };

  return (
    <div
      className={classNames(
        'relative w-full rounded-[20px] border-[1px] border-[transparent] bg-gray-1 px-4 py-[10px] outline-none',
        containerClassName,
        focus && '!border-gray-2',
        error && '!border-[#E94344]',
      )}
    >
      <textarea
        ref={textareaRef}
        value={isControlled ? value : content}
        className={classNames(
          'm-0 block w-full resize-none bg-[transparent] p-0 leading-none text-[white] placeholder-[white] placeholder-opacity-50 caret-main outline-none',
          textareaClassName,
        )}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        style={{ minHeight, maxHeight, overflow: 'auto' }}
      />
    </div>
  );
};

export default NTextarea;
