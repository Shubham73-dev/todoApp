import React, { forwardRef } from 'react';

const Input = forwardRef(({ type, className, placeholder,operation }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={className}
      placeholder={placeholder}
      onClick={operation}
    />
  );
});

export default Input;
