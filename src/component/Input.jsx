import React, { forwardRef } from 'react';

const Input = forwardRef(({ type, className, placeholder,operation,keyOperation }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={className}
      placeholder={placeholder}
      onClick={operation}
      onKeyPress={keyOperation} 
    />
  );
});

export default Input;
