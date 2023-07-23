import React, { forwardRef } from 'react';

const Input = forwardRef(({ type, className, placeholder }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );
});

export default Input;
